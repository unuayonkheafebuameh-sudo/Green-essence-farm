import { siteConfig } from "@/config/site";

export const whatsappMessages = {
  general:
    "Hello Green Essence Farms Limited, I would like to make an enquiry about your available farm produce.",
  bulk: "Hello Green Essence Farms, I would like to enquire about bulk vegetable supply and request a quotation.",
  product: (name: string) =>
    `Hello Green Essence Farms, I am interested in your ${name}. Please let me know its availability and current price.`,
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${siteConfig.phone}`;
