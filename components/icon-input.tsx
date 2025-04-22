import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/constants";

type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;

interface IconInputProps extends TextInputProps {
  iconName?: FontAwesomeIconName;
  iconColor?: string;
  iconSize?: number;
  containerStyle?: ViewStyle;
  placeholderText?: string;
}

export default function IconInput({
  iconName = "search",
  iconColor = colors.primary,
  iconSize = 20,
  containerStyle,
  style,
  placeholderText = "What are you looking for?",
  ...props
}: IconInputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <FontAwesome
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholderText}
        placeholderTextColor={colors.light.tabIconDefault}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.light.background,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.light.tabIconDefault,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.light.text,
  },
});
