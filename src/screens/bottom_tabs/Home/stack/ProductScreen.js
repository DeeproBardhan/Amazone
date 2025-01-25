import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FakeSearchBar from "../../../../components/FakeSearchBar";
import StarRating from "../../../../components/StarRating";

export default function ProductScreen({ route }) {
  const { product } = route.params;

  const navigation = useNavigation();
  const [addCartBgColor, setaddCartBgColor] = useState("#FED813"); // Default background color
  const [addBuyBgColor, setaddBuyBgColor] = useState("#FFA41D"); // Default background color

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
          <FakeSearchBar
            onClickingBar={() => navigation.navigate("SearchListScreen")}
          />
        </View>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.container1}>
          <Text style={{ fontSize: 18, fontWeight: 800 }}>{product.brand}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "blue" }}> {product.rating} </Text>
            <StarRating rating={product.rating} />
          </View>
        </View>

        <View style={styles.container2}>
          <Text>{product.description}</Text>
        </View>

        <View style={styles.container3}>
          <Image source={{ uri: product.images[0] }} style={styles.image} />
        </View>

        <View style={styles.container4}>
          <Text style={{ color: "#C01039", fontSize: 16, fontWeight: 600 }}>
            -{product.discountPercentage}%
          </Text>
          <Text style={{ color: "black", fontSize: 25, fontWeight: 600 }}>
            {"  "}
            &#8377;{Math.round(product.price * 85)}
          </Text>
        </View>

        <View style={styles.container5}>
          <Text style={{ fontSize: 17 }}>
            {product.stock > 0 ? "!!In Stock!!" : "Out Of Stock"}
          </Text>
        </View>

        <View style={styles.container6}>
          <Pressable
            style={[styles.addCart, { backgroundColor: addCartBgColor }]}
            onPressIn={() => setaddCartBgColor("#efb413")} // Change to desired color on long press
            onPressOut={() => setaddCartBgColor("#FED813")} // Change back to default color on release
            onPress={() => console.log(product.title + " Pressed")}
          >
            <Text
              style={[{ color: "#000000", fontSize: 15, fontWeight: "500" }]}
            >
              Add to Cart
            </Text>
          </Pressable>
          <Pressable
            style={[styles.addCart, { backgroundColor: addBuyBgColor }]}
            onPressIn={() => setaddBuyBgColor("#ed6612")} // Change to desired color on long press
            onPressOut={() => setaddBuyBgColor("#FFA41D")} // Change back to default color on release
            onPress={() => console.log(product.title + " Pressed")}
          >
            <Text
              style={[{ color: "#000000", fontSize: 15, fontWeight: "500" }]}
            >
              Buy Now
            </Text>
          </Pressable>
        </View>

        <View style={styles.container6}>
          <Text>{product.shippingInformation}</Text>
        </View>

        <View style={styles.container7}>
          <Text>{product.warrantyInformation}</Text>
        </View>
        <View style={styles.container8}>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>
            Customer Reviews
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <StarRating rating={product.rating} />
            <Text> {product.rating} out of 5</Text>
          </View>

          <View>
            {product.reviews.map((review, index) => (
              <View key={index} style={styles.reviewContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <AntDesign name="user" size={24} color="black" />
                  <Text style={{ fontSize: 15 }}>{review.reviewerName}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <StarRating rating={review.rating} />
                  <Text
                    style={{
                      color: "#C35400",
                      fontWeight: 600,
                      paddingLeft: 7,
                    }}
                  >
                    Verified Purchase
                  </Text>
                </View>
                <Text style={{ color: "#535758" }}>
                  Reviewed in {new Date(review.date).toLocaleDateString()}
                </Text>
                <Text style={styles.reviewComment}>{review.comment}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  header: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  searchBarContainer: {
    flex: 1,
  },
  container1: {
    // borderWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container2: {
    // borderWidth: 1,
    paddingVertical: 10,
    // flex: 1,
  },
  container3: {
    // borderWidth: 1,
    paddingVertical: 10,
    width: "100%",
    height: 400,
    // flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container4: {
    // borderWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  container5: {
    // borderWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
  },
  container6: {
    // borderWidth: 1,
    paddingVertical: 10,
    flexDirection: "column",
  },
  addCart: {
    borderWidth: 1,
    borderColor: "#FED813",
    width: "100%",
    height: 35,

    borderRadius: 18,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container7: {
    // borderWidth: 1,
    paddingVertical: 10,
    flexDirection: "column",
  },
  container8: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderLeftColor: "transparent",
    flexDirection: "column",
  },
  reviewContainer: {
    borderWidth: 1,
    flexDirection: "column",
    padding: 10,
  },
});
