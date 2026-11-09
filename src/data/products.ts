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
  note?: string; // culinary/nutritional info, no medical claims
  image?: string; // file inside /public/images/products/
  alt?: string;
}

// To add a product: add one object here. Nothing else needs to change.
export const categories: ProductCategory[] = [
  "Leafy Vegetables",
  "Other Vegetables",
  "Herbs",
  "Plantables",
];

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
  { id: "spinach", name: "Spinach", category: "Other Vegetables", description: "Tender green leaves for soups, sauces, smoothies and salads." },
  { id: "lettuce", name: "Lettuce", category: "Other Vegetables", description: "Crisp leaves for salads, sandwiches and burgers." },
  { id: "green-amaranth", name: "Green Amaranth", category: "Other Vegetables", description: "A familiar everyday leafy green for sauces and stews." },
  { id: "cabbage", name: "Cabbage", category: "Other Vegetables", description: "Firm heads for salads, coleslaw and stir-fries." },
  { id: "celery", name: "Celery", category: "Other Vegetables", description: "Crunchy stalks for soups, salads and stocks." },
  { id: "spring-onions", name: "Spring Onions", category: "Other Vegetables", description: "Mild onion flavour for garnish, sauces and stir-fries." },
  { id: "garden-eggs", name: "Garden Eggs", category: "Other Vegetables", description: "Slightly bitter fruit, eaten raw or cooked in sauces." },
  { id: "basil", name: "Basil", category: "Herbs", description: "Sweet, fragrant herb for sauces, pasta and salads." },
  { id: "mint", name: "Mint", category: "Herbs", description: "Fresh herb for drinks, salads and seasoning." },
  { id: "parsley", name: "Parsley", category: "Herbs", description: "Bright garnish and flavouring for many dishes." },
  { id: "rosemary", name: "Rosemary", category: "Herbs", description: "A woody herb suited to roasts and grilled dishes." },
  { id: "thyme", name: "Thyme", category: "Herbs", description: "Small leaves that flavour stews, soups and marinades." },
  { id: "lemongrass", name: "Lemongrass", category: "Herbs", description: "Citrusy stalks for teas and soups." },
  { id: "veg-seedlings", name: "Vegetable Seedlings", category: "Plantables", description: "Young plants ready for transplanting at home or on the farm." },
  { id: "herb-seedlings", name: "Herb Seedlings", category: "Plantables", description: "Young herb plants for kitchen gardens and pots." },
  { id: "veg-seeds", name: "Vegetable Seeds", category: "Plantables", description: "Seeds for growing your own vegetables." },
  { id: "planting-materials", name: "Planting Materials", category: "Plantables", description: "Other planting materials. Ask what is currently available." },
];
