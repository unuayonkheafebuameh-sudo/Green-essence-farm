export type ProductCategory =
  | "Leafy Vegetables"
  | "Other Vegetables"
  | "Herbs"
  | "Plantables";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  note?: string;
  image?: string;
  alt?: string;
}

export const categories: ProductCategory[] = ["Leafy Vegetables"];

export const products: Product[] = [
  {
    id: "ugu",
    name: "Ugu (Fluted Pumpkin Leaves)",
    category: "Leafy Vegetables",
    description: "A soft, mild leaf used in many Nigerian soups and stews.",
    note: "A source of dietary fibre and vitamins; popular in Edikang Ikong and vegetable soup.",
    image: "ugu-fluted-pumpkin-leaves.jpg",
    alt: "Fresh green Ugu fluted pumpkin leaves",
  },
  {
    id: "waterleaf",
    name: "Waterleaf",
    category: "Leafy Vegetables",
    description: "Juicy, tender leaves that cook down quickly.",
    note: "Commonly used in Edikang Ikong, Afang and vegetable soups.",
    image: "waterleaf-fresh.jpg",
    alt: "Fresh waterleaf with water droplets",
  },
  {
    id: "scent-leaf",
    name: "Scent Leaf (Efirin)",
    category: "Leafy Vegetables",
    description: "An aromatic leaf with a strong, pleasant fragrance.",
    note: "Used in pepper soup, stews, rice dishes and teas.",
    image: "scent-leaf-efirin.jpg",
    alt: "Fresh scent leaf (Efirin)",
  },
  {
    id: "curry-leaf",
    name: "Curry Leaf",
    category: "Leafy Vegetables",
    description: "Fragrant leaves that add flavour to sauces and rice.",
    note: "Used fresh or dried in cooking and seasoning.",
    image: "curry-leaf.jpg",
    alt: "Fresh curry leaves",
  },
];
