export const siteConfig = {
  name: "Green Essence Farms Limited",
  shortName: "Green Essence Farms",
  tagline: "For Your Nutritional Needs",
  url: "https://www.example.com", // TODO: replace with your real domain
  description:
    "Green Essence Farms Limited grows and supplies fresh leafy vegetables in Minna, Niger State. Enquire on WhatsApp about Ugu, waterleaf, scent leaf and bulk supply.",
  phone: "+2348060331985",
  phoneDisplay: "+234 806 033 1985",
  whatsappNumber: "2348060331985", // digits only, no "+"
    address: {
    street: "Dun-dun, behind Niger State Water Board, Chanchaga",
    city: "Minna",
    region: "Niger State",
    country: "NG",
    line: "Dun-dun, behind Niger State Water Board, Chanchaga, Minna, Niger State",
  },
  // Map embed is built from this text. Set to "" to hide the map.
    mapQuery: "Niger State Water Board, Chanchaga, Minna, Niger State, Nigeria",
  logo: "/images/logo/green-essence-farms-logo.png",
  ogImage: "/og-image.jpg",
  // Add social links when ready, e.g. { label: "Facebook", href: "https://..." }
  social: [] as { label: string; href: string }[],
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "How It Works", href: "#how" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ],
} as const;
