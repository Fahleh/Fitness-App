import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Subscriptions from "../screens/Subscriptions";
import Profile from "../screens/Profile";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Pressable, Platform } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "#2563eb",
        tabBarStyle:
          Platform.OS === "ios"
            ? {}
            : {
                paddingBottom: 10,
                paddingTop: 10,
                height: 60,
                borderTopWidth: 0.1,
              },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
          headerRight: () => (
            <Pressable>
              <FontAwesome5
                name="pen"
                size={16}
                color="#2563eb"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
