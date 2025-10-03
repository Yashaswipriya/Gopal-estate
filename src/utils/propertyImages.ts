// utils/propertyImages.ts

// Fallback images if a property is not listed
export const defaultPropertyImage = {
  main: "/images/default_property.jpg",
  extras: [
    "/images/default_property_1.jpg",
    "/images/default_property_2.jpg",
    "/images/default_property_3.jpg",
  ],
};

// Predefined project images (you can define a few to make it look varied)
export const projectImages: { [key: string]: { main: string; extras?: string[] } } = {
  "BPTP Terra": {
    main: "https://picsum.photos/1200/800?random=1",
    extras: [
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
    ],
  },
  "Assotech Blith": {
    main: "https://picsum.photos/1200/800?random=5",
    extras: [
      "https://picsum.photos/400/300?random=6",
      "https://picsum.photos/400/300?random=7",
      "https://picsum.photos/400/300?random=8",
    ],
  },
  "Pareena Coban": {
    main: "https://picsum.photos/1200/800?random=9",
    extras: [
      "https://picsum.photos/400/300?random=10",
      "https://picsum.photos/400/300?random=11",
    ],
  },
  "BPTP Amstoria": {
    main: "https://picsum.photos/1200/800?random=12",
  },
  "Adani M2K": {
    main: "https://picsum.photos/1200/800?random=13",
  },
  "Emaar Imperial Garden": {
    main: "https://picsum.photos/1200/800?random=14",
  },
  "Emaar Gurgaon Greens": {
    main: "https://picsum.photos/1200/800?random=15",
  },
  "Shapoorji Joyville": {
    main: "https://picsum.photos/1200/800?random=16",
  },
  "Heritage Max": {
    main: "https://picsum.photos/1200/800?random=17",
  },
  "Ansal Highland Park": {
    main: "https://picsum.photos/1200/800?random=18",
  },
  "Indiabulls Centrum Park": {
    main: "https://picsum.photos/1200/800?random=19",
  },
  // ... you can define a few more for variety
};

// Usage: in your component
// const images = projectImages[property.Project] || defaultPropertyImage;
// <Image src={images.main} width={400} height={300} alt="Property" />
