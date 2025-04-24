import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  Dimensions,
  LayoutChangeEvent,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { colors } from "@/constants";

const TICKER_TEXT = "Rental Ticker";

export type TickerItem = {
  id: number;
  time: string;
  item: string;
  rentee: string;
  renter: string;
};

export default function AutoplayTicker({
  tickerItems,
}: {
  tickerItems: TickerItem[];
}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("window");
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  // Measure the total content width
  const measureContent = (event: LayoutChangeEvent) => {
    const newWidth = event.nativeEvent.layout.width;
    if (newWidth > 0) {
      setContentWidth(newWidth);
    }
  };

  const createAnimation = () => {
    // Create the animation but don't start it yet
    return Animated.loop(
      Animated.timing(scrollX, {
        toValue: -contentWidth * 5,
        duration: 25000, // Fixed duration
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
  };

  const startAnimation = () => {
    // Start from right side of screen
    scrollX.setValue(width);

    // Create and store animation reference
    animationRef.current = createAnimation();

    // Start the animation
    animationRef.current.start();
  };

  const pauseAnimation = () => {
    if (animationRef.current && !isPaused) {
      // Pause the animation
      animationRef.current.stop();
      setIsPaused(true);
    }
  };

  const resumeAnimation = () => {
    if (isPaused) {
      // Resume or restart animation
      if (animationRef.current) {
        animationRef.current.start();
      } else {
        startAnimation();
      }
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (contentWidth > 0) {
      // Start the animation once we have the content width
      startAnimation();
    }

    return () => {
      // Clean up animation
      if (animationRef.current) {
        animationRef.current.stop();
      }
      scrollX.stopAnimation();
    };
  }, [contentWidth]);

  if (contentWidth === 0) {
    // Only measure first, don't show content yet
    return (
      <View className="bg-lightGrey py-7">
        <Text className="px-5 text-2xl text-primary">{TICKER_TEXT}</Text>
        <View style={{ opacity: 0 }}>
          <Animated.View onLayout={measureContent}>
            {tickerItems.map((item) => (
              <View
                key={`measure-${item.id}`}
                className="flex-row items-center px-8"
              >
                <Text className="mr-3 text-xl">{item.time}</Text>
                <Text className="mr-3 text-xl text-primary">{item.item}</Text>
                <Text className="mr-3 text-xl">{item.rentee}</Text>
                <FontAwesome
                  name="caret-right"
                  size={24}
                  color={colors.primary}
                />
                <Text className="ml-3 text-xl">{item.renter}</Text>
              </View>
            ))}
          </Animated.View>
        </View>
      </View>
    );
  }

  return (
    <View className="bg-lightGrey py-7">
      <View className="flex-row items-center justify-between px-5">
        <Text className="text-2xl text-primary">{TICKER_TEXT}</Text>
      </View>

      <Pressable
        onPressIn={pauseAnimation}
        onPressOut={resumeAnimation}
        className="h-8 overflow-hidden"
      >
        <Animated.View
          style={{
            position: "absolute",
            flexDirection: "row",
            transform: [{ translateX: scrollX }],
          }}
        >
          {tickerItems.map((item) => (
            <View
              key={`ticker-${item.id}`}
              className="flex-row items-center px-8"
            >
              <Text className="mr-3 text-xl">{item.time}</Text>
              <Text className="mr-3 text-xl text-primary">{item.item}</Text>
              <Text className="mr-3 text-xl">{item.rentee}</Text>
              <FontAwesome
                name="caret-right"
                size={24}
                color={colors.primary}
              />
              <Text className="ml-3 text-xl">{item.renter}</Text>
            </View>
          ))}
        </Animated.View>
      </Pressable>
    </View>
  );
}
