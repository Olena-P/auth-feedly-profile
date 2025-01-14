import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feed from "./feeds";
import Profile from "./profile";
import { useTheme } from "../../contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function CustomTabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  label: string;
}) {
  const { name, color, label } = props;
  return (
    <View style={styles.tabBarItem}>
      <FontAwesome name={name} size={18} color={color} style={styles.icon} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.tabIconSelected,
          tabBarInactiveTintColor: theme.colors.tabIconDefault,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      >
        <Tab.Screen
          name="feeds"
          component={Feed}
          options={{
            tabBarLabel: ({ color }) => (
              <CustomTabBarIcon name="list" color={color} label="Feeds" />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: ({ color }) => (
              <CustomTabBarIcon name="user" color={color} label="Profile" />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBarItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
