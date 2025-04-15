import React from "react";
import Svg, { Path } from "react-native-svg";

interface GarageIconProps {
  size?: number;
  color?: string;
}

export default function GarageIcon({
  size = 24,
  color = "#000",
}: GarageIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 12H21M3 12C3 10.8954 3.89543 10 5 10H19C20.1046 10 21 10.8954 21 12M3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V12M3 12L5 7H19L21 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
