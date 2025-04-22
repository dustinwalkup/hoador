import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/constants";

type IconFamily = "FontAwesome" | "MaterialCommunityIcons";
type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;
type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface IconButtonProps {
  onPress: () => void;
  iconName: FontAwesomeIconName | MaterialCommunityIconName;
  iconFamily?: IconFamily;
  iconColor?: string;
  iconSize?: number;
  buttonSize?: number;
  buttonColor?: string;
  disabled?: boolean;
  loading?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  style?: ViewStyle;
  testID?: string;
}

export default function IconButton({
  onPress,
  iconName,
  iconFamily = "FontAwesome",
  iconColor = colors.primary,
  iconSize = 24,
  buttonSize = 40,
  buttonColor = "transparent",
  disabled = false,
  loading = false,
  accessibilityLabel,
  accessibilityHint,
  style,
  testID,
}: IconButtonProps) {
  const IconComponent =
    iconFamily === "FontAwesome" ? FontAwesome : MaterialCommunityIcons;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        { backgroundColor: buttonColor },
        disabled && styles.disabled,
        style,
        { width: buttonSize, height: buttonSize },
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: disabled || loading }}
      testID={testID}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={iconColor}
          size={iconSize}
          testID={`${testID}-loading`}
        />
      ) : iconFamily === "FontAwesome" ? (
        <FontAwesome
          name={iconName as FontAwesomeIconName}
          size={iconSize}
          color={disabled ? colors.light.tabIconDefault : iconColor}
          testID={`${testID}-icon`}
        />
      ) : (
        <MaterialCommunityIcons
          name={iconName as MaterialCommunityIconName}
          size={iconSize}
          color={disabled ? colors.light.tabIconDefault : iconColor}
          testID={`${testID}-icon`}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: "50%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  disabled: {
    opacity: 0.5,
  },
});
