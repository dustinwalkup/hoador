import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "@/components/useColorScheme";

import Colors from "@/constants/Colors";
import DoorIcon from "@/assets/svg/door-icon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
        size={20}
        name={
          props.name as React.ComponentProps<
            typeof MaterialCommunityIcons
          >["name"]
        }
        color={props.color}
        style={{ paddingTop: -20 }}
      />
    );
  }
}

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? "light";

  return (
    <View
      style={[
        styles.tabBar,
        {
          paddingBottom: insets.bottom,
          backgroundColor: Colors[theme].background,
          borderTopColor: Colors[theme].tabIconDefault,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIcon = () => {
          if (route.name === "index") {
            return <DoorIcon color={Colors.primary} size={TAB_ICON_SIZE} />;
          } else if (route.name === "favorites") {
            return (
              <TabBarIcon
                name="heart"
                type="fontAwesome"
                color={Colors.primary}
              />
            );
          } else if (route.name === "garage") {
            return (
              <TabBarIcon
                name="garage"
                type="materialCommunityIcons"
                color={Colors.primary}
              />
            );
          } else if (route.name === "mailbox") {
            return (
              <TabBarIcon
                name="envelope"
                type="fontAwesome"
                color={Colors.primary}
              />
            );
          } else if (route.name === "profile") {
            return (
              <TabBarIcon
                name="user"
                type="fontAwesome"
                color={Colors.primary}
              />
            );
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tabItem}
          >
            {getIcon()}
            <Text
              style={[
                styles.labelText,
                { color: isFocused ? Colors.primary : Colors[theme].text },
              ]}
            >
              {options.title}
            </Text>
            {isFocused && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 80,
    borderTopWidth: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  activeIndicator: {
    position: "absolute",
    bottom: -8,
    width: "70%",
    height: 5,
    backgroundColor: Colors.primary,
  },
  labelText: {
    fontSize: 12,
    marginTop: 4,
  },
});
