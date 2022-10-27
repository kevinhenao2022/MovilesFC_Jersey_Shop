import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PedidoScreen from "./PedidosScreen";
import MovimientoScreen from "./MovimientoScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function DomiciliosScreen({ navigation, route }) {
  const values = route.params;
  console.log(values);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Pedido"
        component={PedidoScreen}
        options={{
          title: "NUEVA COMPRA",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" color={"red"} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Movimientos"
        component={MovimientoScreen}
        options={{
          title: "CAMISETAS DISPONIBLES",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shirt-outline" color={"red"} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}
