import Img1 from "../../assets/PropertyImages/1.png";
// import Img2 from "../../assets/PropertyImages/2.png";
import Img3 from "../../assets/PropertyImages/3.png";
// import Img4 from "../../assets/PropertyImages/4.png";
// import Img5 from "../../assets/PropertyImages/5.png";
import Img6 from "../../assets/PropertyImages/6.png";

export const propertyList = {
  1: {
    PropUrl: Img1,
    id: 1,
    statusText: "Multi-family home For Sale",
    views: "2.3K",
    price: "$3,349,000",
    isSaved: false,
    meta: [
      { value: 4, label: "Beds" },
      { value: 3, label: "Baths" },
      { value: 998, label: "sqft." },
    ],
    addressLine: "2856 Meadow Park Ave",
    addressSubLine: "Henderson, NV 89052",
    listingSource:
      "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
  },

  2: {
    PropUrl: Img3,
    id: 2,
    statusText: "Single-family home For Rent",
    views: "980",
    price: "$2,450 / month",
    isSaved: true,
    meta: [
      { value: 3, label: "Beds" },
      { value: 2, label: "Baths" },
      { value: 1240, label: "sqft." },
    ],
    addressLine: "742 Lake View Dr",
    addressSubLine: "Austin, TX 78704",
    listingSource: "Austin Board of Realtors (ABoR)",
  },

  3: {
    PropUrl: Img6,

    id: 3,
    statusText: "Apartment For Sale",
    views: "5.1K",
    price: "$1,150,000",
    isSaved: false,
    meta: [
      { value: 2, label: "Beds" },
      { value: 2, label: "Baths" },
      { value: 860, label: "sqft." },
    ],
    addressLine: "110 W 32nd Street",
    addressSubLine: "New York, NY 10001",
    listingSource: "REBNY Listing Service",
  },

  4: {
    PropUrl: Img1,
    id: 4,
    statusText: "Villa For Sale",
    views: "7.8K",
    price: "$4,950,000",
    isSaved: true,
    meta: [
      { value: 5, label: "Beds" },
      { value: 6, label: "Baths" },
      { value: 4200, label: "sqft." },
    ],
    addressLine: "18 Palm Ridge Road",
    addressSubLine: "Malibu, CA 90265",
    listingSource: "California Regional MLS",
  },

  5: {
    PropUrl: Img3,

    id: 5,
    statusText: "Studio Apartment For Rent",
    views: "640",
    price: "$1,350 / month",
    isSaved: false,
    meta: [
      { value: 1, label: "Bed" },
      { value: 1, label: "Bath" },
      { value: 520, label: "sqft." },
    ],
    addressLine: "59 Market Street",
    addressSubLine: "San Francisco, CA 94103",
    listingSource: "SF Association of Realtors",
  },

  6: {
    PropUrl: Img6,

    id: 6,
    statusText: "Townhouse For Sale",
    views: "3.2K",
    price: "$2,250,000",
    isSaved: true,
    meta: [
      { value: 3, label: "Beds" },
      { value: 3, label: "Baths" },
      { value: 1850, label: "sqft." },
    ],
    addressLine: "901 Cedar Lane",
    addressSubLine: "Seattle, WA 98109",
    listingSource: "Northwest MLS",
  },

  7: {
    PropUrl: Img1,

    id: 7,
    statusText: "Luxury Condo For Sale",
    views: "6.4K",
    price: "$3,750,000",
    isSaved: false,
    meta: [
      { value: 4, label: "Beds" },
      { value: 4, label: "Baths" },
      { value: 2100, label: "sqft." },
    ],
    addressLine: "210 Ocean Drive",
    addressSubLine: "Miami Beach, FL 33139",
    listingSource: "Miami MLS",
  },
 
};
