export const ComeSoon = [
  {
    imageUrl: "./assets/products/Card/gown0.png",
    soon: true,
  },
  {
    imageUrl: "./assets/products/Card/gown1.png",
    soon: true,
  },
  {
    imageUrl: "./assets/products/Card/gowngown.png",
    soon: true,
  },
  {
    imageUrl: "./assets/products/Card/gown3.png",
    soon: true,
  },
];

export const MenWears = [
  {
    imgUrl: "./assets/products/men/navyBlue.png",
    title: "Sleek Shirt Navy Blue",
    formerPrice: 560000,
    discount: 20,
  },
  {
    imgUrl: "./assets/products/men/white.png",
    title: "Sleek Shirt White",
    formerPrice: 30000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/men/green.png",
    title: "Sleek Shirt Lemon Green",
    formerPrice: 800000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/men/violet.png",
    title: "Sleek Shirt Light Purple",
    formerPrice: 400000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/men/Card/fm1.png",
    title: "Sleek Shirt Light Purple",
    formerPrice: 400000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/men/Card/fm2.png",
    title: "Sleek Shirt Light Purple",
    formerPrice: 400000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/men/Card/fm3.png",
    title: "Sleek Shirt Light Purple",
    formerPrice: 400000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/men/Card/fm4.png",
    title: "Sleek Shirt Light Purple",
    formerPrice: 400000,
    discount: 25,
  },
];

export const WomenWears = [
  {
    imgUrl: "./assets/products/women/coffee.png",
    title: "Abaya Winter Light",
    formerPrice: 1500000,
    discount: 25,
  },
  {
    imgUrl: "../assets/products/women/brown.png",
    title: "Abaya Winter Carton",
    formerPrice: 100000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/women/cream.png",
    title: "Abaya Autumn Light",
    formerPrice: 170000,
    discount: 25,
  },
  {
    imgUrl: "./assets/products/women/black.png",
    title: "Hoodie Abaya",
    formerPrice: 180000,
    discount: 25,
  },
];

export const CombinedWears = [...MenWears, ...WomenWears].map((item) => {
  return {
    ...item,
  };
});

export const CarouselImages = [
  { title: "Denim", imgUrl: "./assets/products/carouselImage1.png" },
  { title: "Cotton", imgUrl: "./assets/products/carouselImage2.jpeg" },
  { title: "Wool", imgUrl: "./assets/products/carouselImage3.jpeg" },
  { title: "Leather", imgUrl: "./assets/products/carouselImage4.jpeg" },
];

export const Icons = [
  {
    icon: "./assets/icons/deliveryVan.svg",
    title: "Free Shipping",
    subtitle: "Fast & free delivery on U.S. orders over $99.",
  },
  {
    icon: "./assets/icons/globe.svg",
    title: "Express International Delivery",
    subtitle: "DHL 2-Day Express delivery available.",
  },
  {
    icon: "./assets/icons/mail.svg",
    title: "Contact Us",
    subtitle:
      "Chat with our concierge at any time. Email us at contact@aurora.com",
  },
  {
    icon: "./assets/icons/return.svg",
    title: "Easy Returns",
    subtitle: "Easy returns & exchanges within 90 days of your purchase.",
  },
];
