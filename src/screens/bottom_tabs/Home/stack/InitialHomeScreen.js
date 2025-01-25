import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import FakeSearchBar from "../../../../components/FakeSearchBar";
export default function InitialHome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FakeSearchBar
          onClickingBar={() => navigation.navigate("SearchListScreen")}
        />
      </View>
      <View style={styles.body}>
        <Text
          style={{
            color: "red",
            fontSize: 25,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Work In Progress. As for now Click on search bar to search for items.{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",

    backgroundColor: "#ffffff",
  },
  header: {
    // borderWidth: 1,
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  body: {
    // borderWidth: 1,
    flex: 0.9,
  },
});
