import React from "react";
import { Image, Text, ScrollView, View } from "react-native";

import { ThemedView } from "@/components/Themed";
import { IconButton, IconInput } from "@/components";
import { headlineItems, tickerItems } from "@/lib/mocks";
import AutoplayTicker from "@/components/auto-play-ticker";

const WELCOME_TEXT = "Hey";

export default function TabOneScreen() {
  const name = "Paige";

  return (
    <ThemedView>
      <ScrollView>
        <View className="h-100 items-center justify-between bg-skyBlue pt-20">
          <View className="w-full flex-row justify-between px-5">
            <View className="w-[80%]">
              <IconInput
                iconName="search"
                placeholderText="What are you looking for?"
              />
            </View>
            <IconButton
              iconName="plus"
              buttonColor={"white"}
              onPress={() => {}}
              accessibilityLabel="Filter"
            />
          </View>
          <View>
            <Text className="py-8 text-3xl text-forestGreen">
              {WELCOME_TEXT} {name}!
            </Text>
          </View>
          <Image
            className="!h-[150px] !w-full"
            source={require("@/assets/images/cartoon.png")}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-5 px-5 py-7">
            {headlineItems.map((item) => (
              <View className="rounded-2xl bg-white shadow-md" key={item.id}>
                <Image
                  source={item.image}
                  className="!h-48 !w-80 rounded-t-lg"
                />
                <View className="max-w-80 p-5">
                  <Text className="text-2xl text-primary">{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <AutoplayTicker tickerItems={tickerItems} />
      </ScrollView>
    </ThemedView>
  );
}
