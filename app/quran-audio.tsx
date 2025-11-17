import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type SurahMeta = { index: number; name: string; count: number };

function loadAllSurahs(): SurahMeta[] {
  // const req = (n: number) => require(`@/assets/quran/surah_${n}.json`);
  const list: SurahMeta[] = [];
  for (let i = 1; i <= 114; i++) {
    try {
      const data = req(i);
      list.push({
        index: i,
        name: String(data.name ?? `Surah ${i}`),
        count: Number(data.count ?? 0),
      });
    } catch {
      list.push({ index: i, name: `Surah ${i}`, count: 0 });
    }
  }
  return list;
}

export default function QuranAudioScreen() {
  const router = useRouter();
  const surahs = React.useMemo(() => loadAllSurahs(), []);

  return (
    <View style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={28} color="#FED363" />
        </TouchableOpacity>
        <Text style={styles.title}>Qur&apos;an Audio</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 45 }}
      >

        <View style={{ marginTop: 16, paddingHorizontal: 20 }}>
          {surahs.map((surah) => (
            <TouchableOpacity
              key={surah.index}
              style={styles.row}
              activeOpacity={0.75}
              onPress={() =>
                router.push({
                  pathname: "/surah/[id]",
                  params: {
                    id: String(surah.index),
                    title: `Surah ${formatName(surah.name)}`,
                    info: `Verses ${surah.count}`,
                    arabic: "",
                  },
                })
              }
            >
              <View style={styles.indexBadge}>
                <Text style={styles.indexText}>{surah.index}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{formatName(surah.name)}</Text>
                <Text style={styles.rowSub}>
                  {surah.count ? `Verses ${surah.count}` : "Tap to listen"}
                </Text>
              </View>
              <View style={styles.playIconContainer}>
                <Feather name="play" size={16} color="#111827" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function formatName(name: string) {
  return name
    .split(/[-_ ]+/)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1F26",
    // paddingHorizontal: 10,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2D3748",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  indexBadge: {
    backgroundColor: "#FED363",
    borderRadius: 10,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  indexText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  rowTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  rowSub: {
    color: "#A0AEC0",
    fontSize: 12,
  },
  playIconContainer: {
    backgroundColor: "#FED363",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
