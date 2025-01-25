import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import StarRating from "./StarRating";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  const [addCartBgColor, setaddCartBgColor] = useState("#FED813"); // Default background color

  return (
    <Pressable
      onPress={() => navigation.navigate("ProductScreen", { product })}
    >
      <View style={styles.card}>
        <View style={styles.cardThumbnailContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
        </View>

        <View style={styles.cardProductDescriptionContainer}>
          <View style={styles.productDesc}>
            <Text style={styles.name}>{product.title}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.rating}>{product.rating}</Text>
              <StarRating rating={product.rating} />
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.price}>
                &#8377; {Math.round(product.price * 85)}
              </Text>
              <Text style={styles.discount}>
                M.R.P:
                <Text style={[{ textDecorationLine: "line-through" }]}>
                  &#8377;
                  {Math.round(
                    (100 / (100 - product.discountPercentage)) *
                      product.price *
                      85
                  )}
                </Text>
                ({product.discountPercentage}% off)
              </Text>
            </View>
          </View>
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
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    //     borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    height: 250,
    margin: 7,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardThumbnailContainer: {
    //     borderWidth: 1,
    flex: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  cardProductDescriptionContainer: {
    //     borderWidth: 1,
    padding: 10,
    flex: 70,
    flexDirection: "column",
  },
  productDesc: {
    flex: 70,
  },
  image: {
    //     borderWidth: 1,
    backgroundColor: "#F3F3F3",
    //     paddingVertical: 100,
    width: 115,
    height: "100%",
    resizeMode: "contain",
  },
  name: {
    //     borderWidth: 1,
    fontSize: 19,
    fontWeight: 400,
    marginVertical: 5,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
  },
  rating: {
    color: "#245E95",
    fontWeight: "bold",
    //     borderWidth: 1,
    fontSize: 16,
    marginVertical: 5,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    gap: 6,
  },
  price: {
    //     borderWidth: 1,
    fontSize: 25,
    fontWeight: 600,
    color: "black",
    marginVertical: 5,
  },
  discount: {
    //     borderWidth: 1,
    color: "#434747",
    fontSize: 16,
    marginVertical: 5,
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
});
