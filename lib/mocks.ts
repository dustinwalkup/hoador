import { TickerItem } from "@/components/auto-play-ticker";
import { StatCardProps } from "@/components/stat-card";

export const headlineItems = [
  {
    id: 1,
    title: "Recently added in Verona Hills",
    image: require("@/assets/images/garage-stock.png"),
  },
  {
    id: 2,
    title: "Explore popular items",
    image: require("@/assets/images/garage-stock.png"),
  },
  {
    id: 3,
    title: "Explore high demand items",
    image: require("@/assets/images/garage-stock.png"),
  },
];

export const tickerItems: TickerItem[] = [
  {
    id: 1,
    time: "5 min. ago",
    item: "Skillsaw",
    rentee: "John D.",
    renter: "Paige F.",
  },
  {
    id: 2,
    time: "22 min. ago",
    item: "Broom",
    rentee: "John D.",
    renter: "Paige F.",
  },
  {
    id: 3,
    time: "69 min. ago",
    item: "Vacuum",
    rentee: "Jane D.",
    renter: "Sarah F.",
  },
  {
    id: 4,
    time: "420 min. ago",
    item: "Shovel",
    rentee: "Jessie D.",
    renter: "Larry F.",
  },
];

interface StatCardItem extends StatCardProps {
  id: number;
}

export const statCardItems: StatCardItem[] = [
  {
    id: 1,
    icon: "piggy",
    iconSize: 36,
    title: "Verona Hills has saved",
    subtitle: "$1M this year",
    buttonText: "Save by renting",
    reverseTitleOrder: false,
  },
  {
    id: 2,
    icon: "high-five",
    iconSize: 48,
    title: "have been shared",
    subtitle: "245 items",
    buttonText: "Recently added",
    reverseTitleOrder: true,
  },
  {
    id: 3,
    icon: "three-houses",
    iconSize: 60,
    title: "have been improved",
    subtitle: "40 households",
    buttonText: "See what your neighbors have done",
    reverseTitleOrder: true,
  },
];
