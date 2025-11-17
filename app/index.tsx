import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const navigateToSurah = (
    id: string,
    title: string,
    info: string,
    arabic: string
  ) => {
    router.push({
      pathname: "/surah/[id]",
      params: { id, title, info, arabic },
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/Hasina.png")}
            style={{ width: 170, height: 50, marginTop: 10 }}
            contentFit="contain"
          />
        </View>
        <TouchableOpacity onPress={() => console.log("Share pressed")}>
          <Feather name="share-2" size={30} color="#FED363" />
        </TouchableOpacity>
      </View>

      {/* Listening To Card */}
      <View style={styles.listeningCard}>
        <View style={styles.listeningTextContainer}>
          <Image source={require("@/assets/images/mic.png")}
            style={{ width: 26, height: 39 }}
            contentFit="contain"
          />
          <Text style={styles.listeningText}>listening to:</Text>
        </View>
        <Text style={styles.surahTitleListening}>Surah</Text>
        <Text style={styles.surahNameListening}>
          An'Najm <Text style={styles.surahNameArabicListening}>النجم</Text>
        </Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() =>
            navigateToSurah("53", "Surah An'Najm", "Makki - 62 Verses", "النجم")
          }
        >
          <Image source={require("@/assets/images/mic.png")}
            style={{ width: 25, height: 25 }}
            contentFit="contain" />
          <Text style={styles.startButtonText}>Start listening</Text>
          <Feather name="arrow-right" size={18} color="white" />
        </TouchableOpacity>
        <View style={styles.quranImageContainer}>
          <Image
            source={require("@/assets/images/quran.png")}
            style={{ width: 150, height: 150 }}
            contentFit="contain"
          />
        </View>
      </View>

      {/* Icon Cards */}
      <View style={styles.iconCardsContainer}>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() => router.push("/quran-audio")}
        >
          <Image source={require("@/assets/images/quran-audio.png")}
            style={{ width: 86, height: 61 }}
            contentFit="contain" />
          <Text style={styles.iconCardLabel}>Qur&apos;an audio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() => router.push("/SurahListScreen")}
        >
          <Image source={require("@/assets/images/quran2.png")}
            style={{ width: 87, height: 71 }}
            contentFit="contain"
          />
          <Text style={styles.iconCardLabel}>Read Qur'an</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() => console.log("quran pressed")
          }
        >
          <Image source={require("@/assets/images/Dhikr.png")}
            style={{ width: 44, height: 57 }}
            contentFit="contain"
          />
          <Text style={styles.iconCardLabel}>Dhikr</Text>
        </TouchableOpacity>
      </View>

      {/* Surah List */}
      <View style={styles.surahListContainer}>
        <SurahRow
          index={1}
          title="Al-Fatiha"
          info="Makki - 7 Verses"
          arabic="الفاتحة"
          onPress={() =>
            navigateToSurah("1", "Al-Fatiha", "Makki - 7 Verses", "الفاتحة")
          }
        />
        <SurahRow
          index={2}
          title="Al-Baqarah"
          info="Madani - 286 Verses"
          arabic="البقرة"
          onPress={() =>
            navigateToSurah("2", "Al-Baqarah", "Madani - 286 Verses", "البقرة")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        {/* <SurahRow
          index={4}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={5}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={5}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={6}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        />
        <SurahRow
          index={3}
          title="Al 'Imrān"
          info="Madani - 200 Verses"
          arabic="آل عمران"
          onPress={() =>
            navigateToSurah("3", "Al 'Imrān", "Madani - 200 Verses", "آل عمران")
          }
        /> */}
      </View>

      {/* Please Donate Button */}
      <TouchableOpacity
        style={styles.donateButton}
        onPress={() => router.push("/donation")}
      >
        <Text style={styles.donateButtonText}>Please donate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

type SurahRowProps = {
  index: number;
  title: string;
  info: string;
  arabic: string;
  onPress?: () => void;
};

function SurahRow({ index, title, info, arabic, onPress }: SurahRowProps) {
  return (
    <TouchableOpacity
      style={styles.surahRow}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.indexBadge}>
        <Text style={styles.indexText}>{index}</Text>
      </View>
      <View style={styles.surahInfoContainer}>
        <Text style={styles.surahTitle}>{title}</Text>
        <Text style={styles.surahInfo}>{info}</Text>
      </View>
      <Text style={styles.arabicText}>{arabic}</Text>
      <TouchableOpacity
        style={styles.playIconContainer}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Feather name="play" size={16} color="#111827" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1F26",
    paddingTop: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "800",
    color: "white",
    marginLeft: 8,
  },
  listeningCard: {
    backgroundColor: "#FED363",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    position: "relative",
    overflow: "hidden",
    minHeight: 220,
  },
  listeningTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  listeningText: {
    fontSize: 14,
    color: "black",
    marginLeft: 8,
    fontWeight: "500",
  },
  surahTitleListening: {
    fontSize: 16,
    color: "black",
    marginBottom: 4,
    fontWeight: "500",
  },
  surahNameListening: {
    fontSize: 28,
    fontWeight: "800",
    color: "black",
    marginBottom: 16,
  },
  surahNameArabicListening: {
    fontSize: 24,
    color: "#43B75E",
    fontWeight: "700",
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    gap: 8,
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  quranImageContainer: {
    position: "absolute",
    right: -20,
    bottom: -20,
    width: 180,
    height: 180,
    opacity: 0.9,
  },
  quranImage: {
    width: "100%",
    height: "100%",
  },
  iconCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 12,
  },
  iconCard: {
    backgroundColor: "#2D3748",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    aspectRatio: 1,
  },
  iconCardLabel: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
    width: 95,
    height: 21,


  },
  surahListContainer: {
    marginBottom: 20,
  },
  surahRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1F26",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFFFFF36",
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
    color: "#111827",
    fontSize: 16,
    fontWeight: "800",
  },
  surahInfoContainer: {
    flex: 1,
  },
  surahTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  surahInfo: {
    color: "#A0AEC0",
    fontSize: 12,
    fontWeight: "400",
  },
  arabicText: {
    color: "#FED363",
    fontSize: 20,
    fontWeight: "700",
    marginRight: 12,
  },
  playIconContainer: {
    backgroundColor: "#FED363",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  donateButton: {
    backgroundColor: "#FED363",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 30,
  },
  donateButtonText: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "800",
  },
});
