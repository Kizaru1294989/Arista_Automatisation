import BGP from "../../../../assets/img/bgp.png";
import MLAG from "../../../../assets/img/mlag.png";

export interface Ingredient {
  icon: string;
  label: string;
  Title: string;
  image: string; // Ajout de la propriété image
}

export const allIngredients = [
  {
    Title: "Multi-Chassis Link Aggregation (MLAG)",
    icon: "I",
    label: "Mlag",
    image: MLAG,
  },
  {
    Title: "Border Gateway Protocol (BGP)",
    icon: "II",
    label: "Bgp",
    image: BGP,
  },
  {
    Title: "VXLAN (Virtual Extensible LAN) et EVPN (Ethernet VPN)",
    icon: "III",
    label: "Vxlan - EVPN L2",
    image: BGP,
  },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
  ingredients: Ingredient[],
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
