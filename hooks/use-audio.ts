import { Audio, AVPlaybackStatusSuccess, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { useEffect, useRef, useState } from 'react';

type LoadSource = number; // require() id

type AudioOptions = {
  repeat?: boolean;
};

export function useAudio(source: LoadSource | null, options: AudioOptions = {}) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [positionMillis, setPositionMillis] = useState(0);
  const [durationMillis, setDurationMillis] = useState(0);

  useEffect(() => {
    const configureAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
      } catch (error) {
        console.error('Error setting audio mode:', error);
      }
    };
    configureAudio();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!source) return;
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      const { sound } = await Audio.Sound.createAsync(source, {
        shouldPlay: false,
        isLooping: false,
        isMuted: false,
        volume: 1.0,
        rate: 1.0,
        shouldCorrectPitch: true,
      });
      if (cancelled) return;
      soundRef.current = sound;
      setIsLoaded(true);
      sound.setOnPlaybackStatusUpdate(async (s) => {
        if (!('isLoaded' in s) || !s.isLoaded) return;
        const st = s as AVPlaybackStatusSuccess;
        setIsPlaying(st.isPlaying);
        setPositionMillis(st.positionMillis ?? 0);
        setDurationMillis(st.durationMillis ?? 0);
        if (st.didJustFinish) {
          if (options.repeat) {
            try {
              await sound.setPositionAsync(0);
              await sound.playAsync();
            } catch {}
          } else {
            setIsPlaying(false);
          }
        }
      });
    };
    load();
    return () => {
      cancelled = true;
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, [source]);

  const playPause = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    if ('isLoaded' in status && status.isLoaded) {
      if (status.isPlaying) await soundRef.current.pauseAsync();
      else await soundRef.current.playAsync();
    }
  };

  const seek = async (millis: number) => {
    if (!soundRef.current) return;
    await soundRef.current.setPositionAsync(Math.max(0, Math.min(millis, durationMillis)));
  };

  const skipBy = async (deltaMs: number) => {
    await seek(positionMillis + deltaMs);
  };

  return { isLoaded, isPlaying, playPause, positionMillis, durationMillis, seek, skipBy };
}

// Small helper for mapping ids -> asset requires
export function resolveSurahAsset(id?: string): number | null {
  switch (id) {
    case '53': // An-Najm
      return require('@/assets/audio/SURAH-NAJMI.mp3');
    default:
      return null;
  }
}


