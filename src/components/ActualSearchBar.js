import React, { useState } from "react";
import { TextInput, View, Pressable, StyleSheet, Alert } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchIcon}>
        <MaterialCommunityIcons name="search-web" size={28} color="black" />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search or ask a question.."
        placeholderTextColor="#4F5456"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Pressable
        style={styles.lensIcon}
        onPress={() => Alert.alert("Google lens")}
      >
        <MaterialCommunityIcons name="google-lens" size={28} color="#6C7072" />
      </Pressable>
      <Pressable
        style={styles.microphoneIcon}
        onPress={() => Alert.alert("Microphone")}
      >
        <MaterialCommunityIcons
          name="microphone-outline"
          size={28}
          color="#6C7072"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 2,
    borderRadius: 20,
    // paddingHorizontal: 3,
    borderColor: "#0D4876",
    backgroundColor: "#E1F3FF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginVertical: 10,
  },
  searchIcon: {
    borderRadius: 20,
    paddingLeft: 10,
  },
  searchInput: {
    width: "60%",
  },
  lensIcon: {
    width: 30,
    marginLeft: 5,
  },
  microphoneIcon: {
    width: 30,
    marginLeft: 5,
  },
  scanIcon: {
    paddingLeft: 5,
  },
});

export default SearchBar;
