import { Brand, LocationItem, Stat } from "./types";

export const LOGO_DARK = "https://www.sushia.com.au/wp-content/uploads/2026/01/Elleo-Group-Logo-W.svg";
export const LOGO_LIGHT = "https://www.sushia.com.au/wp-content/uploads/2026/01/Elleo-Group-Logo-B.svg";
export const SYMBOL = "https://www.sushia.com.au/wp-content/uploads/2026/01/Elleo-Group-Symbel.svg";

export const STATS: Stat[] = [
  { label: "Total Branches", value: "51", subtext: "Across Australia" },
  { label: "Monthly Visitors", value: "500K", subtext: "Satisfied Customers" },
  { label: "Employees", value: "430", subtext: "Dedicated Staff" },
  { label: "Established", value: "2010", subtext: "Growing Steadily" },
];

export const BRANDS: Brand[] = [
  {
    id: "sushia-izakaya",
    name: "Sushia Izakaya",
    description: "Sushia Izakaya offers contemporary Japanese dining with premium service and ambience, inspired by izakaya culture.",
    image: "https://www.sushia.com.au/wp-content/uploads/2026/01/sushia-izakaya.jpg",
    link: "izakaya.sushia.com.au",
    features: ["Japanese dining", "Premium Izakaya"],
    color: "#b99c48",
    logo: "https://www.sushia.com.au/wp-content/uploads/2026/01/Sushia-Izakaya_Logo.svg"
  },
  {
    id: "sushia-fresh",
    name: "Sushia Fresh Bar",
    description: "Sushia offers fast, healthy Japanese cuisine blending traditional and modern flavours for customers on the go in high-traffic locations.",
    image: "https://www.sushia.com.au/wp-content/uploads/2026/01/sushia-fresh-bar.jpg",
    link: "freshbar.sushia.com.au",
    features: ["Freshness", "Unique Taste"],
    color: "#ffc905",
    logo: "https://www.sushia.com.au/wp-content/uploads/2026/01/Sushia_Logo.svg"
  },
  {
    id: "people-cafe",
    name: "People Cafe",
    description: "People cafe offers a welcoming, relaxed café experience with quality coffee, fresh food, and friendly service for everyone.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    link: "www.peoplecafe.com.au",
    features: ["Welcoming", "Quality coffee"],
    color: "#85684a",
    logo: "https://www.sushia.com.au/wp-content/uploads/2026/01/People_Logo.svg"
  }
];

export const LOCATIONS: LocationItem[] = [
  {
    name: "Brookfield Place",
    state: "WA",
    description: "Premium-grade office tower dining.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Karrinyup Shopping Centre",
    state: "WA",
    description: "Upscale shopping experience destination.",
    image: "https://images.unsplash.com/photo-1567449303078-5c9359a9206b?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sydney Int'l Airport",
    state: "NSW",
    description: "Serving travelers at T1 International.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "1 William St",
    state: "QLD",
    description: "Brisbane CBD's tallest development.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600"
  }
];

export const MISSION_STEPS = [
  {
    title: "OUR HISTORY",
    subtitle: "A journey of consistent growth since 2010",
    text: "Since 2010, Elleo Group has grown steadily, setting new standards in Australia's Japanese food industry. We continue to expand sustainably, guided by quality, systems, and our people."
  },
  {
    title: "LEADERSHIP",
    subtitle: "Where culinary expertise meets business excellence",
    text: "Led by industry experts, we fuse hospitality with sustainable management. We deliver fine-dining quality Japanese cuisine in an accessible takeaway format, redefining the daily sushi experience."
  }
];