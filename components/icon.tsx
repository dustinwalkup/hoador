import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import Piggy from "../assets/svg/piggy.svg";
import HighFive from "../assets/svg/high-five.svg";
import ThreeHouses from "../assets/svg/three-houses.svg";

export type IconName = "piggy" | "high-five" | "three-houses";

type SvgComponentType = React.FC<SvgProps>;

interface IconProps {
  name: IconName;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
  color?: string;
  className?: string;
}

const icons: Record<IconName, SvgComponentType> = {
  piggy: Piggy,
  "high-five": HighFive,
  "three-houses": ThreeHouses,
};

const Icon: React.FC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  style,
  color,
  className,
}) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) return null;

  return (
    <View style={style} className={className}>
      <SvgIcon width={width} height={height} fill={color} />
    </View>
  );
};

export default Icon;
