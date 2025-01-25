import { Text, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: "red",
          fontSize: 25,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Work In Progress. As for now go to Home tab.{" "}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
