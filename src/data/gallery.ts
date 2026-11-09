export interface GalleryItem {
  title: string;
  image?: string; // file inside /public/images/gallery/
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { title: "Vegetable cultivation", image: "vegetable-cultivation-minna.jpg", alt: "Vegetables growing on a farm in Minna" },
  { title: "Irrigation in progress", image: "irrigation-vegetable-farm.jpg", alt: "Irrigation watering vegetable beds" },
  { title: "Freshly harvested leafy vegetables", image: "harvested-leafy-vegetables.jpg", alt: "Freshly harvested leafy vegetables" },
  { title: "Green farmland", image: "green-farmland-niger-state.jpg", alt: "Green farmland in Niger State" },
  { title: "Vegetable beds", image: "vegetable-beds.jpg", alt: "Rows of vegetable beds" },
  { title: "Farm team at work", image: "farm-workers.jpg", alt: "Farm workers tending vegetables" },
  { title: "Preparation and packaging", image: "vegetable-packaging.jpg", alt: "Vegetables being prepared and packed" },
];
