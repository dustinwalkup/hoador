import { View, Text } from "react-native";

import { Button } from "@/components/ui/button";
import { Text as ButtonText } from "@/components/ui/text";
import Icon, { IconName } from "./icon";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  icon: IconName;
  iconSize: number;
  title: string;
  subtitle: string;
  buttonText: string;
  reverseTitleOrder?: boolean;
  onPress?: () => void;
}

export default function StatCard({
  icon,
  iconSize,
  title,
  subtitle,
  buttonText,
  reverseTitleOrder = false,
  onPress,
}: StatCardProps) {
  return (
    <View className="w-full items-center rounded-3xl bg-white px-5 py-6 shadow-md">
      <Icon className="mb-2" name={icon} width={iconSize} height={iconSize} />

      {reverseTitleOrder ? (
        <View className="items-center">
          <Subtitle className="" subtitle={subtitle} />
          <Title className="mb-4" title={title} />
        </View>
      ) : (
        <View className="items-center">
          <Title className="mb-1" title={title} />
          <Subtitle className="mb-4" subtitle={subtitle} />
        </View>
      )}

      <Button>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </View>
  );
}

StatCard.displayName = "StatCard";

function Title({ title, className }: { title: string; className?: string }) {
  return (
    <Text className={cn("text-lg !text-primary", className)}>{title}</Text>
  );
}

function Subtitle({
  subtitle,
  className,
}: {
  subtitle: string;
  className?: string;
}) {
  return (
    <Text className={cn("text-4xl/9 font-bold", className)}>{subtitle}</Text>
  );
}
