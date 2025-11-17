import { resolveSurahAsset, useAudio } from "@/hooks/use-audio";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SurahScreen() {
  const router = useRouter();
  const { id, title, info, arabic } = useLocalSearchParams<{
    id?: string;
    title?: string;
    info?: string;
    arabic?: string;
  }>();
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const source = useMemo(() => resolveSurahAsset(id), [id]);
  const { isPlaying, playPause, positionMillis, durationMillis, seek, skipBy } =
    useAudio(source, { repeat });
  const trackWidthRef = useRef(1);
  const [frameColor, setFrameColor] = useState("#43B75E");
  const colorIndexRef = useRef(0);
  const progressRatio = durationMillis ? positionMillis / durationMillis : 0;
  const clampedProgress = Math.max(0, Math.min(1, progressRatio));
  const progressWidth = `${clampedProgress * 100}%` as `${number}%`;

  useEffect(() => {
    const colors = ["#B75A43", "#4743B7", "#43B75E"];
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isPlaying) {
      setFrameColor(colors[colorIndexRef.current]);
      interval = setInterval(() => {
        colorIndexRef.current = (colorIndexRef.current + 1) % colors.length;
        setFrameColor(colors[colorIndexRef.current]);
      }, 1200);
    } else {
      colorIndexRef.current = 0;
      setFrameColor("#43B75E");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.cardFrame, { borderColor: frameColor }]}>
        <LinearGradient
          colors={["#FED363", "#FFFFFF"]}
          style={styles.cardFrame}
        >
          <View style={styles.cardInner}>
            <Image source={require("@/assets/images/Ramadan.png")}
              contentFit="contain"
              style={styles.stars}

            />
            <Image
              source={require("@/assets/images/listening.png")}
              style={styles.cover}
              contentFit="contain"
            />
          </View>
        </LinearGradient>

      </View>

      <View style={styles.infoSection}>
        <Text style={styles.trackTitle}>{title ?? "Surah"}</Text>
        <Text style={styles.trackArabic}>{arabic ?? ""}</Text>
        <Text style={styles.trackSub}>{info ?? "Surah"}</Text>
      </View>

      <View style={styles.sliderContainer}>
        <View
          style={styles.sliderTrack}
          onLayout={(e) => (trackWidthRef.current = e.nativeEvent.layout.width)}
          onStartShouldSetResponder={() => true}
          onResponderRelease={(e) => {
            if (!durationMillis) return;
            const x = e.nativeEvent.locationX;
            const ratio = Math.max(0, Math.min(1, x / trackWidthRef.current));
            seek(ratio * durationMillis);
          }}
        >
          <View
            style={[
              styles.sliderProgress,
              {
                width: progressWidth,
              },
            ]}
          />
          <View
            style={[
              styles.sliderThumb,
              {
                left: clampedProgress * trackWidthRef.current - 10,
              },
            ]}
          />
        </View>
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>{formatTime(positionMillis)}</Text>
          <Text style={styles.timeText}>{formatTime(durationMillis)}</Text>
        </View>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity onPress={() => setShuffle((s) => !s)}>
          <Feather
            name="shuffle"
            size={24}
            color={shuffle ? "#FFD36E" : "#FFFFFF"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => skipBy(-15000)}>
          <Feather name="skip-back" size={32} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playBtn} onPress={playPause}>
          <Feather
            name={isPlaying ? "pause" : "play"}
            size={36}
            color="#1F2630"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => skipBy(15000)}>
          <Feather name="skip-forward" size={32} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRepeat((r) => !r)}>
          <Feather
            name="repeat"
            size={24}
            color={repeat ? "#FFD36E" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#1C1F26",
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 0,
    paddingBottom: 32,
    gap: 28,
  },
  cardFrame: {
    borderWidth: 6,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    paddingHorizontal: 8
  },
  cardInner: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    paddingVertical: 28,
    alignItems: "center",

  },
  stars: {
    width: 300,
    height: 200,
    // marginTop: 40,
  },
  quran: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  backPill: {
    borderWidth: 2,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 24,
  },
  backPillText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2630",
  },
  cover: {
    width: "80%",
    height: 240,
  },
  infoSection: {
    alignItems: "center",
    gap: 6,
  },
  trackTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
  },
  trackArabic: {
    fontSize: 22,
    color: "#43B75E",
    fontWeight: "700",
  },
  trackSub: {
    marginTop: 4,
    color: "#D1D5DB",
    fontSize: 16,
  },
  sliderContainer: {
    gap: 12,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 999,
    overflow: "hidden",
    position: "relative",
  },
  sliderProgress: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FFD36E",
  },
  sliderThumb: {
    position: "absolute",
    top: -10,
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: "#FFD36E",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  playBtn: {
    width: 80,
    height: 80,
    borderRadius: 48,
    backgroundColor: "#FFD36E",
    alignItems: "center",
    justifyContent: "center",
  },
});

function formatTime(ms?: number) {
  if (!ms || ms < 0) return "0:00";
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}