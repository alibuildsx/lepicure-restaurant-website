export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  size: "portrait" | "landscape" | "square";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/restaurant_interior.png",
    alt: "L'Épicure dining room interior with candlelight and bronze fixtures",
    caption: "The Dining Room",
    size: "landscape",
  },
  {
    src: "/images/dish_wagyu.png",
    alt: "A5 Wagyu beef tenderloin with truffle and bone marrow jus",
    caption: "A5 Wagyu Tenderloin",
    size: "portrait",
  },
  {
    src: "/images/dish_scallops.png",
    alt: "Hokkaido scallop crudo with yuzu foam and caviar",
    caption: "Hokkaido Scallop",
    size: "square",
  },
  {
    src: "/images/cocktail_pour.png",
    alt: "Signature cocktail The Amber Crown in crystal coupe glass",
    caption: "The Amber Crown",
    size: "portrait",
  },
  {
    src: "/images/dish_chocolate_dome.png",
    alt: "Valrhona dark chocolate sphere with gold leaf",
    caption: "Valrhona Sphere",
    size: "square",
  },
  {
    src: "/images/dish_lobster.png",
    alt: "Butter-poached Brittany lobster tail with saffron bisque",
    caption: "Brittany Lobster",
    size: "landscape",
  },
  {
    src: "/images/chef_portrait.png",
    alt: "Executive chef in professional whites",
    caption: "Chef Élise Moreau",
    size: "portrait",
  },
  {
    src: "/images/gallery_bread.png",
    alt: "Artisan sourdough bread service with cultured butter",
    caption: "Our Bread Service",
    size: "square",
  },
];
