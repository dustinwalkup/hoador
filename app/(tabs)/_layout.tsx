import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import DoorIcon from "@/assets/svg/door-icon";
import CustomTabBar from "@/components/CustomTabBar";

const TAB_ICON_SIZE = 20;

function TabBarIcon(props: {
  type: "fontAwesome" | "materialCommunityIcons";
  name: string;
  color: string;
}) {
  if (props.type === "fontAwesome") {
    return (
      <FontAwesome
        size={TAB_ICON_SIZE}
        name={props.name as React.ComponentProps<typeof FontAwesome>["name"]}
        color={props.color}
      />
    );
  } else {
    return (
      <MaterialCommunityIcons
        size={60}
        name={
          props.name as React.ComponentProps<
            typeof MaterialCommunityIcons
          >["name"]
        }
        color={props.color}
      />
    );
  }
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 12,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            <DoorIcon color={Colors.primary} size={TAB_ICON_SIZE} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="heart"
              type="fontAwesome"
              color={Colors.primary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="garage"
        options={{
          title: "Garage",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="garage"
              type="materialCommunityIcons"
              color={Colors.primary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mailbox"
        options={{
          title: "Mailbox",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="envelope"
              type="fontAwesome"
              color={Colors.primary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user" type="fontAwesome" color={Colors.primary} />
          ),
        }}
      />
    </Tabs>
  );
}
