import {
  Tractor,
  Clock,
  Ruler,
  Package,
  CreditCard,
  User,
} from "lucide-react";

export const products = [
  {
    name: "Onion Harvester Pro",
    description:
      "Our advanced onion harvester maximizes efficiency while minimizing labor costs. This complete solution handles digging, cutting, sorting, and storage in one integrated system, making it perfect for all soil and plantation types.",
    image: "/api/placeholder/600/400",
    specs: [
      { icon: Tractor, label: "Tractor Required", value: "65 Hp (4WD)" },
      { icon: Clock, label: "Harvesting Time", value: "3 Hour Per Acre" },
      { icon: Ruler, label: "Harvesting Width", value: "6.5 Feet" },
      { icon: Package, label: "Storage Capacity", value: "1 Ton" },
      {
        icon: CreditCard,
        label: "Harvesting Cost",
        value: "3000 Rs Per Acre",
      },
      { icon: User, label: "Labor Required", value: "1 Tractor Driver" },
    ],
    features: [
      "Onion digging",
      "Leaves and roots cutting",
      "Onion storage on tractor",
      "Separation of onions, stones, clods, soil, and weeds",
      "Works with all soil types",
      "Compatible with all plantation methods (Raised Bed, Flat Bed, Flooded Bed)",
    ],
    tags: ["Government Funded", "Patent Pending", "Made in India"],
    fundedBy: "Pusa Krishi RKVY Program",
  },
];
