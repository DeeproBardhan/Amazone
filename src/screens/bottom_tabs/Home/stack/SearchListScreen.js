import React, { useState } from "react";
import { View, FlatList, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../../../../components/ProductCard";
import ActualSearchBar from "../../../../components/ActualSearchBar";
import amazone_api from "../../../../api/amazone_api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { all } from "axios";
const SearchListScreen = () => {
  const [allData, setAllData] = useState([]);
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState("");
  const navigation = useNavigation();

  const searchApi = async () => {
    const response = await amazone_api.get("/products/search", {
      params: {
        q: term,
      },
    });
    setAllData(response.data);
    setProducts(response.data.products);
    // console.log(allData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </Pressable>
        <View style={styles.searchBarContainer}>
          <ActualSearchBar
            style={styles.searchBar}
            term={term}
            onTermChange={(newTerm) => {
              setTerm(newTerm);
            }}
            onTermSubmit={() => {
              console.log(term + " was been searched.");
              searchApi();
            }}
          />
        </View>
      </View>
      <View style={styles.searchBody}>
        {allData.total > 0 ? (
          <>
            <Text
              style={{
                fontSize: 15,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              {allData.total} search results found.
            </Text>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <ProductCard product={item} />}
            />
          </>
        ) : term === "" ? (
          <></>
        ) : (
          <Text
            style={{
              fontSize: 15,
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
            }}
          >
            No Search Results!
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  header: {
    // borderWidth: 1,
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  backButton: {
    // borderWidth: 1,
    flex: 0.1,
    marginRight: 10,
  },
  searchBarContainer: {
    flex: 0.9,
  },
  searchBody: {
    // borderWidth: 1,
    flex: 0.9,
  },
});

export default SearchListScreen;
