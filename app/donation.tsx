import * as Clipboard from "expo-clipboard";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ACCOUNT_NO = "29387374633";
const ACCOUNT_NAME = "Hasina Isah";
const BANK_NAME = "Jaiz Bank Plc";

export default function DonationScreen() {
  const handleCopy = async () => {
    const payload = `Account Name: ${ACCOUNT_NAME}\nAccount Number: ${ACCOUNT_NO}\nBank Name: ${BANK_NAME}`;
    await Clipboard.setStringAsync(payload);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#1F2630" }}
    >
      <View style={styles.card}>
        <Text style={styles.greeting}>Assalamu Alaikum</Text>
        <Text style={styles.subHeading}>Brother/Sister</Text>
        <Text style={styles.message}>
          Thank you for using Hasina. The app is currently under development,
          and we are working to upload the complete audio recitation by Hasina
          Isah. You can support the app’s development by donating any amount to
          the bank account below
        </Text>

        <View style={styles.detailSection}>
          <DetailRow label="Account Name" value={ACCOUNT_NAME} />
          <DetailRow label="Account Number" value={ACCOUNT_NO} />
          <DetailRow label="Bank Name" value={BANK_NAME} isLast />
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleCopy}
          style={styles.copyButton}
        >
          <Text style={styles.copyText}>Copy Info</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function DetailRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <View style={[styles.row, !isLast && styles.rowDivider]}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 36,
    paddingVertical: 32,
    paddingHorizontal: 24,
    gap: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#32BA7C",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#111827",
  },
  detailSection: {
    marginTop: 4,
    borderRadius: 24,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  rowDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  rowValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#32BA7C",
  },
  copyButton: {
    marginTop: 12,
    backgroundColor: "#FFCB4C",
    borderRadius: 22,
    paddingVertical: 16,
    alignItems: "center",
  },
  copyText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
});
