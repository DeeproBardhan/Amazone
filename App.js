import React, { useRef, useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/bottom_tabs/Home/HomeScreen";
import YouScreen from "./src/screens/bottom_tabs/You/YouScreen";
import MoreScreen from "./src/screens/bottom_tabs/More/MoreScreen";
import CartScreen from "./src/screens/bottom_tabs/Cart/CartScreen";
import MenuScreen from "./src/screens/bottom_tabs/Menu/MenuScreen";
const BottomTabs = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            size = 25;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "You") {
              iconName = "account-cowboy-hat";
            } else if (route.name === "More") {
              iconName = "rocket-launch";
            } else if (route.name === "Cart") {
              iconName = "golf-cart";
            } else if (route.name === "Menu") {
              iconName = "apps";
            }

            return (
              <View style={{ alignItems: "center" }}>
                {focused && (
                  <View
                    style={{
                      top: -4,
                      width: 60,
                      height: 4,
                      backgroundColor: "#F66308",
                      borderRadius: 15,
                    }}
                  />
                )}
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              </View>
            );
          },
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "verdana",
            fontWeight: 100,
          },
          tabBarActiveTintColor: "#F66308",
          tabBarActiveBackgroundColor: "#FFFFFF",
        })}
      >
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <BottomTabs.Screen name="You" component={YouScreen} />
        <BottomTabs.Screen name="More" component={MoreScreen} />
        <BottomTabs.Screen name="Cart" component={CartScreen} />
        <BottomTabs.Screen name="Menu" component={MenuScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
