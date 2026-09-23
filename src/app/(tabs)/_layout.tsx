import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
            name="home"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Explore",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="compass" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                title: "Settings",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" color={color} size={size} />
                ),
            }}
        />
    </Tabs>
);

export default TabLayout;
