import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchListScreen from "./stack/SearchListScreen";
import InitialHomeScreen from "./stack/InitialHomeScreen";
import ProductScreen from "./stack/ProductScreen"; // Import ProductScreen

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialHomeScreen"
        component={InitialHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchListScreen"
        component={SearchListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
