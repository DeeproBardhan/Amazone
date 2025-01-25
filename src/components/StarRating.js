import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;
  const emptyStars = 5 - fullStars - (fractionalPart > 0 ? 1 : 0);

  return (
    <View style={styles.container}>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesome key={`full-${index}`} name="star" style={styles.star} />
      ))}
      {fractionalPart > 0 && (
        <View style={styles.starContainer}>
          <FontAwesome name="star-o" style={styles.starBackground} />
          <View
            style={{
              ...styles.starForeground,
              width: `${fractionalPart * 100}%`,
            }}
          >
            <FontAwesome name="star" style={styles.star} />
          </View>
        </View>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesome key={`empty-${index}`} name="star-o" style={styles.star} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flexDirection: "row",
  },
  star: {
    color: "#DE7920",
    fontSize: 20,
    marginHorizontal: 1,
  },
  starContainer: {
    position: "relative",
    width: 20, // same as fontSize of star
    marginHorizontal: 1,
  },
  starBackground: {
    color: "#DE7920",
    position: "absolute",
    fontSize: 20,
  },
  starForeground: {
    overflow: "hidden",
    position: "absolute",
    height: "100%",
  },
});

export default StarRating;
