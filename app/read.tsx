// import { Feather } from "@expo/vector-icons";
// import { Image } from "expo-image";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   ActivityIndicator,
//   Dimensions,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const { width, height } = Dimensions.get("window");

// type SurahData = {
//   index: string;
//   name: string;
//   verse: Record<string, string>;
//   count: number;
// };

// function loadSurah(surahNumber: number): SurahData | null {
//   try {
//     const surahMap: Record<number, () => any> = {
//       1: () => require("@/assets/quran/surah_1.json"),
//       2: () => require("@/assets/quran/surah_2.json"),
//       3: () => require("@/assets/quran/surah_3.json"),
//       4: () => require("@/assets/quran/surah_4.json"),
//       5: () => require("@/assets/quran/surah_5.json"),
//       6: () => require("@/assets/quran/surah_6.json"),
//       7: () => require("@/assets/quran/surah_7.json"),
//       8: () => require("@/assets/quran/surah_8.json"),
//       9: () => require("@/assets/quran/surah_9.json"),
//       10: () => require("@/assets/quran/surah_10.json"),
//       11: () => require("@/assets/quran/surah_11.json"),
//       12: () => require("@/assets/quran/surah_12.json"),
//       13: () => require("@/assets/quran/surah_13.json"),
//       14: () => require("@/assets/quran/surah_14.json"),
//       15: () => require("@/assets/quran/surah_15.json"),
//       16: () => require("@/assets/quran/surah_16.json"),
//       17: () => require("@/assets/quran/surah_17.json"),
//       18: () => require("@/assets/quran/surah_18.json"),
//       19: () => require("@/assets/quran/surah_19.json"),
//       20: () => require("@/assets/quran/surah_20.json"),
//       21: () => require("@/assets/quran/surah_21.json"),
//       22: () => require("@/assets/quran/surah_22.json"),
//       23: () => require("@/assets/quran/surah_23.json"),
//       24: () => require("@/assets/quran/surah_24.json"),
//       25: () => require("@/assets/quran/surah_25.json"),
//       26: () => require("@/assets/quran/surah_26.json"),
//       27: () => require("@/assets/quran/surah_27.json"),
//       28: () => require("@/assets/quran/surah_28.json"),
//       29: () => require("@/assets/quran/surah_29.json"),
//       30: () => require("@/assets/quran/surah_30.json"),
//       31: () => require("@/assets/quran/surah_31.json"),
//       32: () => require("@/assets/quran/surah_32.json"),
//       33: () => require("@/assets/quran/surah_33.json"),
//       34: () => require("@/assets/quran/surah_34.json"),
//       35: () => require("@/assets/quran/surah_35.json"),
//       36: () => require("@/assets/quran/surah_36.json"),
//       37: () => require("@/assets/quran/surah_37.json"),
//       38: () => require("@/assets/quran/surah_38.json"),
//       39: () => require("@/assets/quran/surah_39.json"),
//       40: () => require("@/assets/quran/surah_40.json"),
//       41: () => require("@/assets/quran/surah_41.json"),
//       42: () => require("@/assets/quran/surah_42.json"),
//       43: () => require("@/assets/quran/surah_43.json"),
//       44: () => require("@/assets/quran/surah_44.json"),
//       45: () => require("@/assets/quran/surah_45.json"),
//       46: () => require("@/assets/quran/surah_46.json"),
//       47: () => require("@/assets/quran/surah_47.json"),
//       48: () => require("@/assets/quran/surah_48.json"),
//       49: () => require("@/assets/quran/surah_49.json"),
//       50: () => require("@/assets/quran/surah_50.json"),
//       51: () => require("@/assets/quran/surah_51.json"),
//       52: () => require("@/assets/quran/surah_52.json"),
//       53: () => require("@/assets/quran/surah_53.json"),
//       54: () => require("@/assets/quran/surah_54.json"),
//       55: () => require("@/assets/quran/surah_55.json"),
//       56: () => require("@/assets/quran/surah_56.json"),
//       57: () => require("@/assets/quran/surah_57.json"),
//       58: () => require("@/assets/quran/surah_58.json"),
//       59: () => require("@/assets/quran/surah_59.json"),
//       60: () => require("@/assets/quran/surah_60.json"),
//       61: () => require("@/assets/quran/surah_61.json"),
//       62: () => require("@/assets/quran/surah_62.json"),
//       63: () => require("@/assets/quran/surah_63.json"),
//       64: () => require("@/assets/quran/surah_64.json"),
//       65: () => require("@/assets/quran/surah_65.json"),
//       66: () => require("@/assets/quran/surah_66.json"),
//       67: () => require("@/assets/quran/surah_67.json"),
//       68: () => require("@/assets/quran/surah_68.json"),
//       69: () => require("@/assets/quran/surah_69.json"),
//       70: () => require("@/assets/quran/surah_70.json"),
//       71: () => require("@/assets/quran/surah_71.json"),
//       72: () => require("@/assets/quran/surah_72.json"),
//       73: () => require("@/assets/quran/surah_73.json"),
//       74: () => require("@/assets/quran/surah_74.json"),
//       75: () => require("@/assets/quran/surah_75.json"),
//       76: () => require("@/assets/quran/surah_76.json"),
//       77: () => require("@/assets/quran/surah_77.json"),
//       78: () => require("@/assets/quran/surah_78.json"),
//       79: () => require("@/assets/quran/surah_79.json"),
//       80: () => require("@/assets/quran/surah_80.json"),
//       81: () => require("@/assets/quran/surah_81.json"),
//       82: () => require("@/assets/quran/surah_82.json"),
//       83: () => require("@/assets/quran/surah_83.json"),
//       84: () => require("@/assets/quran/surah_84.json"),
//       85: () => require("@/assets/quran/surah_85.json"),
//       86: () => require("@/assets/quran/surah_86.json"),
//       87: () => require("@/assets/quran/surah_87.json"),
//       88: () => require("@/assets/quran/surah_88.json"),
//       89: () => require("@/assets/quran/surah_89.json"),
//       90: () => require("@/assets/quran/surah_90.json"),
//       91: () => require("@/assets/quran/surah_91.json"),
//       92: () => require("@/assets/quran/surah_92.json"),
//       93: () => require("@/assets/quran/surah_93.json"),
//       94: () => require("@/assets/quran/surah_94.json"),
//       95: () => require("@/assets/quran/surah_95.json"),
//       96: () => require("@/assets/quran/surah_96.json"),
//       97: () => require("@/assets/quran/surah_97.json"),
//       98: () => require("@/assets/quran/surah_98.json"),
//       99: () => require("@/assets/quran/surah_99.json"),
//       100: () => require("@/assets/quran/surah_100.json"),
//       101: () => require("@/assets/quran/surah_101.json"),
//       102: () => require("@/assets/quran/surah_102.json"),
//       103: () => require("@/assets/quran/surah_103.json"),
//       104: () => require("@/assets/quran/surah_104.json"),
//       105: () => require("@/assets/quran/surah_105.json"),
//       106: () => require("@/assets/quran/surah_106.json"),
//       107: () => require("@/assets/quran/surah_107.json"),
//       108: () => require("@/assets/quran/surah_108.json"),
//       109: () => require("@/assets/quran/surah_109.json"),
//       110: () => require("@/assets/quran/surah_110.json"),
//       111: () => require("@/assets/quran/surah_111.json"),
//       112: () => require("@/assets/quran/surah_112.json"),
//       113: () => require("@/assets/quran/surah_113.json"),
//       114: () => require("@/assets/quran/surah_114.json"),
//     };

//     const loader = surahMap[surahNumber];
//     if (!loader) return null;
//     return loader();
//   } catch (error) {
//     console.error(`Error loading surah ${surahNumber}:`, error);
//     return null;
//   }
// }

// // Split verses into pages (adjust VERSES_PER_PAGE based on your preference)
// const VERSES_PER_PAGE = 10;

// function createPages(verseKeys: string[], surahData: SurahData) {
//   const pages = [];
//   for (let i = 0; i < verseKeys.length; i += VERSES_PER_PAGE) {
//     pages.push(verseKeys.slice(i, i + VERSES_PER_PAGE));
//   }
//   return pages;
// }

// export default function ReadScreen() {
//   const router = useRouter();
//   const params = useLocalSearchParams<{ surah?: string }>();
//   const [surahNumber, setSurahNumber] = useState(
//     params.surah ? parseInt(params.surah) : 1
//   );
//   const [surahData, setSurahData] = useState<SurahData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   useEffect(() => {
//     setLoading(true);
//     const data = loadSurah(surahNumber);
//     setSurahData(data);
//     setLoading(false);
//     setCurrentPage(0);
//   }, [surahNumber]);

//   const goToSurah = (num: number) => {
//     if (num >= 1 && num <= 114) setSurahNumber(num);
//   };

//   if (loading)
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#FED363" />
//       </View>
//     );

//   if (!surahData)
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>Surah not found</Text>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.back()}
//         >
//           <Text style={styles.backButtonText}>Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );

//   const verseKeys = Object.keys(surahData.verse).sort((a, b) => {
//     const numA = parseInt(a.replace("verse_", ""));
//     const numB = parseInt(b.replace("verse_", ""));
//     return numA - numB;
//   });

//   const pages = createPages(verseKeys, surahData);

//   const renderPage = ({ item: pageVerses, index }: { item: string[], index: number }) => {
//     const isLastPage = index === pages.length - 1;

//     return (
//       <View style={styles.pageContainer}>
//         <View style={styles.versesWrapper}>
//           {pageVerses.map((key, idx) => {
//             const verseNum = key.replace("verse_", "");
//             const isBismillah = verseNum === "0";
//             const isEven = idx % 2 === 0;

//             return (
//               <View key={key}>
//                 <Text
//                   style={[
//                     styles.verseText,
//                     isBismillah && styles.bismillahText,
//                     isEven && styles.evenVerse
//                   ]}
//                 >
//                   {surahData.verse[key]}
//                   {!isBismillah && (
//                     <Text style={styles.inlineVerseNumber}> ﴿{parseInt(verseNum)}﴾ </Text>
//                   )}
//                 </Text>
//               </View>
//             );
//           })}
//           {isLastPage && (
//             <View style={styles.endMarker}>
//               <Image source={require("@/assets/images/Dhikr.png")} />
//             </View>
//           )}
//         </View>
//       </View>
//     );
//   };

//   // const goToNextPage = () => {
//   //   if (currentPage < pages.length - 1) {
//   //     flatListRef.current?.scrollToIndex({
//   //       index: currentPage + 1,
//   //       animated: true,
//   //     });
//   //   }
//   // };

//   // const goToPrevPage = () => {
//   //   if (currentPage > 0) {
//   //     flatListRef.current?.scrollToIndex({
//   //       index: currentPage - 1,
//   //       animated: true,
//   //     });
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <Feather name="chevron-left" size={28} color="#FED363" />
//         </TouchableOpacity>
//         <View style={styles.headerCenter}>
//           <Text style={styles.headerTitle}>{surahData.name}</Text>
//           <Text style={styles.headerSubtitle}>
//             {surahData.count} Verses • Surah {surahData.index}
//           </Text>
//         </View>
//         <View style={{ width: 28 }} />
//       </View>

//       {/* Surah Navigation */}
//       {/* <View style={styles.navigation}>
//         <TouchableOpacity
//           style={[
//             styles.navButton,
//             surahNumber === 1 && styles.navButtonDisabled,
//           ]}
//           onPress={() => goToSurah(surahNumber - 1)}
//           disabled={surahNumber === 1}
//         >
//           <Feather
//             name="chevron-left"
//             size={20}
//             color={surahNumber === 1 ? "#666" : "#FED363"}
//           />
//         </TouchableOpacity>
//         <Text style={styles.navText}>{surahNumber} / 114</Text>
//         <TouchableOpacity
//           style={[
//             styles.navButton,
//             surahNumber === 114 && styles.navButtonDisabled,
//           ]}
//           onPress={() => goToSurah(surahNumber + 1)}
//           disabled={surahNumber === 114}
//         >
//           <Feather
//             name="chevron-right"
//             size={20}
//             color={surahNumber === 114 ? "#666" : "#FED363"}
//           />
//         </TouchableOpacity>
//       </View> */}

//       {/* Paged Content */}
//       <FlatList
//         ref={flatListRef}
//         data={pages}
//         renderItem={renderPage}
//         keyExtractor={(_, index) => `page-${index}`}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={(event) => {
//           const pageIndex = Math.round(
//             event.nativeEvent.contentOffset.x / width
//           );
//           setCurrentPage(pageIndex);
//         }}
//         getItemLayout={(_, index) => ({
//           length: width,
//           offset: width * index,
//           index,
//         })}
//       />

//       {/* Page Navigation */}
//       {/* <View style={styles.pageNavigation}>
//         <TouchableOpacity
//           style={[
//             styles.pageNavButton,
//             currentPage === 0 && styles.navButtonDisabled,
//           ]}
//           onPress={goToPrevPage}
//           disabled={currentPage === 0}
//         >
//           <Feather
//             name="arrow-left"
//             size={24}
//             color={currentPage === 0 ? "#666" : "#FED363"}
//           />
//           <Text style={[styles.pageNavText, currentPage === 0 && styles.disabledText]}>
//             Previous
//           </Text>
//         </TouchableOpacity>

//         <Text style={styles.pageIndicator}>
//           Page {currentPage + 1} / {pages.length}
//         </Text>

//         <TouchableOpacity
//           style={[
//             styles.pageNavButton,
//             currentPage === pages.length - 1 && styles.navButtonDisabled,
//           ]}
//           onPress={goToNextPage}
//           disabled={currentPage === pages.length - 1}
//         >
//           <Text style={[styles.pageNavText, currentPage === pages.length - 1 && styles.disabledText]}>
//             Next
//           </Text>
//           <Feather
//             name="arrow-right"
//             size={24}
//             color={currentPage === pages.length - 1 ? "#666" : "#FED363"}
//           />
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1F1B16",
//     paddingTop: 10,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#1F1B16",
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#1F1B16",
//     padding: 20,
//   },
//   errorText: { color: "white", fontSize: 18, marginBottom: 20 },
//   backButton: {
//     backgroundColor: "#FED363",
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   backButtonText: { color: "#1F1B16", fontSize: 16, fontWeight: "600" },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: "#1F1B16",
//   },
//   headerCenter: { flex: 1, alignItems: "center" },
//   headerTitle: { fontSize: 26, fontWeight: "800", color: "#FED363" },
//   headerSubtitle: { fontSize: 14, color: "#D0C9B6", marginTop: 4 },
//   navigation: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 5,
//     backgroundColor: "#2C2A28",
//     marginHorizontal: 20,
//     borderRadius: 12,
//     marginBottom: 16,
//     gap: 20,
//   },
//   navButton: { padding: 8 },
//   navButtonDisabled: { opacity: 0.3 },
//   navText: {
//     color: "#FED363",
//     fontSize: 16,
//     fontWeight: "600",
//     minWidth: 60,
//     textAlign: "center",
//   },
//   pageContainer: {
//     width: width,
//     paddingHorizontal: 5,
//     flex: 1,
//   },
//   versesWrapper: {
//     flex: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 8,
//   },
//   verseContainer: {
//     marginBottom: 28,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     objectFit: "contain",
//   },
//   verseNumber: {
//     minWidth: 10,
//     height: 10,
//     borderRadius: 18,
//     backgroundColor: "#FED363",
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 8,
//     marginTop: 2,
//   },
//   verseNumberText: { color: "#1F1B16", fontSize: 5, fontWeight: "300" },
//   verseText: {
//     fontSize: 16,
//     color: "#FFF8E7",
//     lineHeight: 25,
//     textAlign: "right",
//     fontWeight: "400",
//     marginBottom: 0,
//   },
//   evenVerse: {
//     marginBottom: 0,
//   },
//   inlineVerseNumber: {
//     fontSize: 15,
//     color: "#FED363",
//     fontWeight: "500",
//   },
//   bismillahText: {
//     textAlign: "center",
//     fontSize: 20,
//     color: "#FED363",
//     marginBottom: 10,
//     fontWeight: "700",
//   },
//   endMarker: { alignItems: "center", marginTop: 32, marginBottom: 16 },
//   pageNavigation: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: "#2C2A28",
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderRadius: 12,
//   },
//   pageNavButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//     padding: 8,
//   },
//   pageNavText: {
//     color: "#FED363",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   disabledText: {
//     color: "#666",
//   },
//   pageIndicator: {
//     color: "#FED363",
//     fontSize: 10,
//     fontWeight: "600",
//   },
// });


import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

type SurahData = {
  index: string;
  name: string;
  verse: Record<string, string>;
  count: number;
};

function loadSurah(surahNumber: number): SurahData | null {
  try {
    const surahMap: Record<number, () => any> = {
      1: () => require("@/assets/quran/surah_1.json"),
      2: () => require("@/assets/quran/surah_2.json"),
      3: () => require("@/assets/quran/surah_3.json"),
      4: () => require("@/assets/quran/surah_4.json"),
      5: () => require("@/assets/quran/surah_5.json"),
      6: () => require("@/assets/quran/surah_6.json"),
      7: () => require("@/assets/quran/surah_7.json"),
      8: () => require("@/assets/quran/surah_8.json"),
      9: () => require("@/assets/quran/surah_9.json"),
      10: () => require("@/assets/quran/surah_10.json"),
      11: () => require("@/assets/quran/surah_11.json"),
      12: () => require("@/assets/quran/surah_12.json"),
      13: () => require("@/assets/quran/surah_13.json"),
      14: () => require("@/assets/quran/surah_14.json"),
      15: () => require("@/assets/quran/surah_15.json"),
      16: () => require("@/assets/quran/surah_16.json"),
      17: () => require("@/assets/quran/surah_17.json"),
      18: () => require("@/assets/quran/surah_18.json"),
      19: () => require("@/assets/quran/surah_19.json"),
      20: () => require("@/assets/quran/surah_20.json"),
      21: () => require("@/assets/quran/surah_21.json"),
      22: () => require("@/assets/quran/surah_22.json"),
      23: () => require("@/assets/quran/surah_23.json"),
      24: () => require("@/assets/quran/surah_24.json"),
      25: () => require("@/assets/quran/surah_25.json"),
      26: () => require("@/assets/quran/surah_26.json"),
      27: () => require("@/assets/quran/surah_27.json"),
      28: () => require("@/assets/quran/surah_28.json"),
      29: () => require("@/assets/quran/surah_29.json"),
      30: () => require("@/assets/quran/surah_30.json"),
      31: () => require("@/assets/quran/surah_31.json"),
      32: () => require("@/assets/quran/surah_32.json"),
      33: () => require("@/assets/quran/surah_33.json"),
      34: () => require("@/assets/quran/surah_34.json"),
      35: () => require("@/assets/quran/surah_35.json"),
      36: () => require("@/assets/quran/surah_36.json"),
      37: () => require("@/assets/quran/surah_37.json"),
      38: () => require("@/assets/quran/surah_38.json"),
      39: () => require("@/assets/quran/surah_39.json"),
      40: () => require("@/assets/quran/surah_40.json"),
      41: () => require("@/assets/quran/surah_41.json"),
      42: () => require("@/assets/quran/surah_42.json"),
      43: () => require("@/assets/quran/surah_43.json"),
      44: () => require("@/assets/quran/surah_44.json"),
      45: () => require("@/assets/quran/surah_45.json"),
      46: () => require("@/assets/quran/surah_46.json"),
      47: () => require("@/assets/quran/surah_47.json"),
      48: () => require("@/assets/quran/surah_48.json"),
      49: () => require("@/assets/quran/surah_49.json"),
      50: () => require("@/assets/quran/surah_50.json"),
      51: () => require("@/assets/quran/surah_51.json"),
      52: () => require("@/assets/quran/surah_52.json"),
      53: () => require("@/assets/quran/surah_53.json"),
      54: () => require("@/assets/quran/surah_54.json"),
      55: () => require("@/assets/quran/surah_55.json"),
      56: () => require("@/assets/quran/surah_56.json"),
      57: () => require("@/assets/quran/surah_57.json"),
      58: () => require("@/assets/quran/surah_58.json"),
      59: () => require("@/assets/quran/surah_59.json"),
      60: () => require("@/assets/quran/surah_60.json"),
      61: () => require("@/assets/quran/surah_61.json"),
      62: () => require("@/assets/quran/surah_62.json"),
      63: () => require("@/assets/quran/surah_63.json"),
      64: () => require("@/assets/quran/surah_64.json"),
      65: () => require("@/assets/quran/surah_65.json"),
      66: () => require("@/assets/quran/surah_66.json"),
      67: () => require("@/assets/quran/surah_67.json"),
      68: () => require("@/assets/quran/surah_68.json"),
      69: () => require("@/assets/quran/surah_69.json"),
      70: () => require("@/assets/quran/surah_70.json"),
      71: () => require("@/assets/quran/surah_71.json"),
      72: () => require("@/assets/quran/surah_72.json"),
      73: () => require("@/assets/quran/surah_73.json"),
      74: () => require("@/assets/quran/surah_74.json"),
      75: () => require("@/assets/quran/surah_75.json"),
      76: () => require("@/assets/quran/surah_76.json"),
      77: () => require("@/assets/quran/surah_77.json"),
      78: () => require("@/assets/quran/surah_78.json"),
      79: () => require("@/assets/quran/surah_79.json"),
      80: () => require("@/assets/quran/surah_80.json"),
      81: () => require("@/assets/quran/surah_81.json"),
      82: () => require("@/assets/quran/surah_82.json"),
      83: () => require("@/assets/quran/surah_83.json"),
      84: () => require("@/assets/quran/surah_84.json"),
      85: () => require("@/assets/quran/surah_85.json"),
      86: () => require("@/assets/quran/surah_86.json"),
      87: () => require("@/assets/quran/surah_87.json"),
      88: () => require("@/assets/quran/surah_88.json"),
      89: () => require("@/assets/quran/surah_89.json"),
      90: () => require("@/assets/quran/surah_90.json"),
      91: () => require("@/assets/quran/surah_91.json"),
      92: () => require("@/assets/quran/surah_92.json"),
      93: () => require("@/assets/quran/surah_93.json"),
      94: () => require("@/assets/quran/surah_94.json"),
      95: () => require("@/assets/quran/surah_95.json"),
      96: () => require("@/assets/quran/surah_96.json"),
      97: () => require("@/assets/quran/surah_97.json"),
      98: () => require("@/assets/quran/surah_98.json"),
      99: () => require("@/assets/quran/surah_99.json"),
      100: () => require("@/assets/quran/surah_100.json"),
      101: () => require("@/assets/quran/surah_101.json"),
      102: () => require("@/assets/quran/surah_102.json"),
      103: () => require("@/assets/quran/surah_103.json"),
      104: () => require("@/assets/quran/surah_104.json"),
      105: () => require("@/assets/quran/surah_105.json"),
      106: () => require("@/assets/quran/surah_106.json"),
      107: () => require("@/assets/quran/surah_107.json"),
      108: () => require("@/assets/quran/surah_108.json"),
      109: () => require("@/assets/quran/surah_109.json"),
      110: () => require("@/assets/quran/surah_110.json"),
      111: () => require("@/assets/quran/surah_111.json"),
      112: () => require("@/assets/quran/surah_112.json"),
      113: () => require("@/assets/quran/surah_113.json"),
      114: () => require("@/assets/quran/surah_114.json"),
    };

    const loader = surahMap[surahNumber];
    if (!loader) return null;
    return loader();
  } catch (error) {
    console.error(`Error loading surah ${surahNumber}:`, error);
    return null;
  }
}

// Estimate verse length in characters
function estimateVerseLength(verseText: string): number {
  return verseText.length;
}

// Create pages dynamically based on content length
function createPages(verseKeys: string[], surahData: SurahData) {
  const pages: string[][] = [];
  let currentPage: string[] = [];
  let currentPageLength = 0;

  // Approximate available height for content (accounting for header and margins)
  const availableHeight = height - 150; // Subtract header, padding, etc.
  const lineHeight = 25;
  const fontSize = 16;
  const charsPerLine = Math.floor((width - 40) / (fontSize * 0.5)); // Approximate chars per line
  const maxLinesPerPage = Math.floor(availableHeight / lineHeight);
  const maxCharsPerPage = maxLinesPerPage * charsPerLine;

  verseKeys.forEach((key, index) => {
    const verseText = surahData.verse[key];
    const verseLength = estimateVerseLength(verseText);
    const verseLinesNeeded = Math.ceil(verseLength / charsPerLine);

    // Check if adding this verse would exceed page capacity
    if (currentPageLength + verseLinesNeeded > maxLinesPerPage && currentPage.length > 0) {
      pages.push([...currentPage]);
      currentPage = [key];
      currentPageLength = verseLinesNeeded;
    } else {
      currentPage.push(key);
      currentPageLength += verseLinesNeeded;
    }
  });

  // Add the last page if it has content
  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  return pages;
}

export default function ReadScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ surah?: string }>();
  const [surahNumber, setSurahNumber] = useState(
    params.surah ? parseInt(params.surah) : 1
  );
  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);
    const data = loadSurah(surahNumber);
    setSurahData(data);
    setLoading(false);
    setCurrentPage(0);
  }, [surahNumber]);

  const goToSurah = (num: number) => {
    if (num >= 1 && num <= 114) setSurahNumber(num);
  };

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FED363" />
      </View>
    );

  if (!surahData)
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Surah not found</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );

  const verseKeys = Object.keys(surahData.verse).sort((a, b) => {
    const numA = parseInt(a.replace("verse_", ""));
    const numB = parseInt(b.replace("verse_", ""));
    return numA - numB;
  });

  const pages = createPages(verseKeys, surahData);

  const renderPage = ({ item: pageVerses, index }: { item: string[], index: number }) => {
    const isLastPage = index === pages.length - 1;

    return (
      <ScrollView
        style={styles.pageContainer}
        contentContainerStyle={styles.pageContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.versesWrapper}>
          {pageVerses.map((key, idx) => {
            const verseNum = key.replace("verse_", "");
            const isBismillah = verseNum === "0";

            return (
              <View key={key}>
                <Text
                  style={[
                    styles.verseText,
                    isBismillah && styles.bismillahText,
                  ]}
                >
                  {surahData.verse[key]}
                  {!isBismillah && (
                    <Text style={styles.inlineVerseNumber}> ﴿{parseInt(verseNum)}﴾ </Text>
                  )}
                </Text>
              </View>
            );
          })}
          {isLastPage && (
            <View style={styles.endMarker}>
              <Image source={require("@/assets/images/Dhikr.png")} style={styles.endImage} />
            </View>
          )}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={28} color="#FED363" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{surahData.name}</Text>
          <Text style={styles.headerSubtitle}>
            {surahData.count} Verses • Surah {surahData.index}
          </Text>
        </View>
        <View style={{ width: 28 }} />
      </View>

      {/* Paged Content */}
      <FlatList
        ref={flatListRef}
        data={pages}
        renderItem={renderPage}
        keyExtractor={(_, index) => `page-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const pageIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentPage(pageIndex);
        }}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Page Indicator */}
      <View style={styles.pageIndicatorContainer}>
        <Text style={styles.pageIndicator}>
          {currentPage + 1} / {pages.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1B16",
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1B16",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1B16",
    padding: 20,
  },
  errorText: { color: "white", fontSize: 18, marginBottom: 20 },
  backButton: {
    backgroundColor: "#FED363",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: { color: "#1F1B16", fontSize: 16, fontWeight: "600" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#1F1B16",
  },
  headerCenter: { flex: 1, alignItems: "center" },
  headerTitle: { fontSize: 26, fontWeight: "800", color: "#FED363" },
  headerSubtitle: { fontSize: 14, color: "#D0C9B6", marginTop: 4 },
  pageContainer: {
    width: width,
    flex: 1,
  },
  pageContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: height - 180,
  },
  versesWrapper: {
    flex: 1,
  },
  verseText: {
    fontSize: 16,
    color: "#FFF8E7",
    lineHeight: 25,
    textAlign: "right",
    fontWeight: "400",
    marginBottom: 6,
  },
  inlineVerseNumber: {
    fontSize: 15,
    color: "#FED363",
    fontWeight: "500",
  },
  bismillahText: {
    textAlign: "center",
    fontSize: 20,
    color: "#FED363",
    marginBottom: 12,
    fontWeight: "700",
  },
  endMarker: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16
  },
  endImage: {
    width: 60,
    height: 60,
  },
  pageIndicatorContainer: {
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#1F1B16",
  },
  pageIndicator: {
    color: "#FED363",
    fontSize: 14,
    fontWeight: "600",
  },
});