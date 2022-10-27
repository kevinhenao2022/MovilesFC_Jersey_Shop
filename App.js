import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./views/HomeScreen";
import DomiciliosScreen from "./views/DomiciliosScreen";
import PedidoScreen from "./views/PedidosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "FC Jersey Shop" }}
        />
        <Stack.Screen
          name="Domicilios"
          component={DomiciliosScreen}
          options={{ title: "COMPRA TU NUEVO JERSEY" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
