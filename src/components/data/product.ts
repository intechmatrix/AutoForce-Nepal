// data/products.ts

import { Category, Product } from "../types/types";

export const categories: Category[] = [
  { id: "all", name: "All Products" },
  { id: "engine", name: "Engine Oils" },
  { id: "gear", name: "Gear Oils" },
  { id: "hydraulic", name: "Hydraulic Oils" },
  { id: "grease", name: "Grease" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "ProGulf Synthetic Engine Oil",
    slug: "progulf-synthetic-engine-oil",
    category: "engine",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description:
      "High-performance fully synthetic engine oil for passenger vehicles",
    features: [
      "API SN/CF, ACEA A3/B4",
      "SAE 5W-30, 5W-40, 10W-40",
      "Enhanced engine protection",
      "Improved fuel economy",
    ],
    applications: [
      "Modern gasoline and diesel engines in passenger cars",
      "Light commercial vehicles",
      "SUVs and high-performance vehicles",
    ],
    benefits: [
      "Extends engine life with superior wear protection",
      "Reduces fuel consumption by up to 3%",
      "Maintains cleanliness by preventing sludge formation",
      "Provides quick cold-start protection",
    ],
    specifications: [
      "API SN/CF",
      "ACEA A3/B4",
      "MB 229.5",
      "VW 502.00/505.00",
      "BMW LL-01",
    ],
    fullDescription:
      "ProGulf Synthetic Engine Oil is a high-performance fully synthetic engine oil specifically designed for modern passenger vehicles. It provides exceptional protection against wear, corrosion, and deposits while improving fuel economy and extending engine life. Formulated with advanced additive technology, this premium oil ensures optimal performance across a wide range of operating conditions.",
  },
  {
    id: 2,
    name: "ProGulf Supreme Motorcycle Oil",
    slug: "progulf-supreme-motorcycle-oil",
    category: "engine",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description:
      "Premium quality engine oil specially formulated for motorcycles",
    features: [
      "API SL, JASO MA2",
      "SAE 10W-30, 10W-40, 20W-50",
      "Superior clutch performance",
      "Excellent engine cleanliness",
    ],
    applications: [
      "4-stroke motorcycles with wet clutch systems",
      "Sports bikes",
      "Touring motorcycles",
      "Off-road motorcycles",
    ],
    benefits: [
      "Prevents clutch slippage in wet clutch systems",
      "Reduces engine noise and vibration",
      "Protects against high-temperature deposits",
      "Ensures smooth gear shifting",
    ],
    specifications: ["API SL", "JASO MA2", "ISO L-EMA2"],
    fullDescription:
      "ProGulf Supreme Motorcycle Oil is a premium quality engine oil specially formulated for motorcycles. It provides superior clutch performance and excellent engine cleanliness. The oil is designed to meet the unique requirements of motorcycles with wet clutches, ensuring smooth shifting and optimal power transfer.",
  },
  {
    id: 3,
    name: "ProGulf Heavy-Duty Diesel Oil",
    slug: "progulf-heavy-duty-diesel-oil",
    category: "engine",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description: "High-performance diesel engine oil for commercial vehicles",
    features: [
      "API CI-4/SL, ACEA E7",
      "SAE 15W-40, 20W-50",
      "Extended drain intervals",
      "Soot handling capability",
    ],
    applications: [
      "Heavy-duty diesel engines in trucks and buses",
      "Construction and mining equipment",
      "Agricultural machinery",
      "Stationary diesel engines",
    ],
    benefits: [
      "Extends drain intervals reducing maintenance costs",
      "Controls soot-related viscosity increase",
      "Protects against bore polishing",
      "Maintains engine cleanliness even under severe conditions",
    ],
    specifications: [
      "API CI-4/SL",
      "ACEA E7",
      "MB 228.3",
      "MAN M3275",
      "Volvo VDS-3",
      "Cummins CES 20078",
    ],
    fullDescription:
      "ProGulf Heavy-Duty Diesel Oil is a high-performance diesel engine oil for commercial vehicles. It is specially formulated to provide extended drain intervals and exceptional soot handling capability. This oil is designed to protect heavy-duty diesel engines under extreme operating conditions, ensuring reliable performance and reduced maintenance costs.",
  },
  {
    id: 4,
    name: "ProGulf Gear Oil GL-5",
    slug: "progulf-gear-oil-gl5",
    category: "gear",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description: "High-quality gear oil for automotive transmissions and axles",
    features: [
      "API GL-5",
      "SAE 80W-90, 85W-140",
      "Extreme pressure protection",
      "Excellent thermal stability",
    ],
    applications: [
      "Hypoid gears in differentials",
      "Manual transmissions requiring GL-5 oil",
      "Transfer cases in 4x4 vehicles",
      "Final drives in heavy equipment",
    ],
    benefits: [
      "Protects gears under high load and shock conditions",
      "Prevents scoring and micropitting",
      "Maintains lubrication at high operating temperatures",
      "Resists foaming and oxidation",
    ],
    specifications: ["API GL-5", "MIL-L-2105D", "ZF TE-ML 07A/08", "Mack GO-J"],
    fullDescription:
      "ProGulf Gear Oil GL-5 is a high-quality gear oil for automotive transmissions and axles. It provides extreme pressure protection and excellent thermal stability. The oil is formulated to protect gears under high-load conditions and ensure smooth operation across a wide temperature range.",
  },
  {
    id: 5,
    name: "ProGulf Premium Hydraulic Oil",
    slug: "progulf-premium-hydraulic-oil",
    category: "hydraulic",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description:
      "High-performance hydraulic fluid for industrial and mobile equipment",
    features: [
      "ISO VG 32, 46, 68",
      "Excellent anti-wear properties",
      "Oxidation stability",
      "Wide temperature range",
    ],
    applications: [
      "Industrial hydraulic systems",
      "Mobile hydraulic equipment",
      "Hydraulic pumps and motors",
      "Hydraulic systems with vane, piston, or gear pumps",
    ],
    benefits: [
      "Extends service life of hydraulic components",
      "Reduces downtime and maintenance costs",
      "Prevents system failures due to oil degradation",
      "Maintains efficiency across varying temperatures",
    ],
    specifications: [
      "DIN 51524 Part 2 (HLP)",
      "ISO 11158 HM",
      "Denison HF-0, HF-1, HF-2",
      "Eaton Vickers I-286-S, M-2950-S",
    ],
    fullDescription:
      "ProGulf Premium Hydraulic Oil is a high-performance hydraulic fluid for industrial and mobile equipment. It offers excellent anti-wear properties and oxidation stability across a wide temperature range. This premium hydraulic oil is designed to maximize the efficiency and lifespan of hydraulic systems in demanding applications.",
  },
  {
    id: 6,
    name: "ProGulf Multi-Purpose Grease",
    slug: "progulf-multi-purpose-grease",
    category: "grease",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description:
      "Premium lithium-based grease for automotive and industrial applications",
    features: [
      "NLGI Grade 2, 3",
      "Temperature range: -20°C to 140°C",
      "Water resistant",
      "Excellent mechanical stability",
    ],
    applications: [
      "Wheel bearings",
      "Chassis lubrication points",
      "General industrial machinery",
      "Agricultural equipment",
    ],
    benefits: [
      "Provides long-lasting lubrication",
      "Protects against water washout",
      "Maintains consistency under mechanical stress",
      "Prevents rust and corrosion",
    ],
    specifications: ["NLGI 2/3", "DIN 51825 KP2K-20", "ISO L-XBCEB 2"],
    fullDescription:
      "ProGulf Multi-Purpose Grease is a premium lithium-based grease for automotive and industrial applications. It offers water resistance and excellent mechanical stability across a temperature range of -20°C to 140°C. This versatile grease is suitable for a wide range of applications, from wheel bearings to industrial machinery.",
  },
  {
    id: 7,
    name: "ProGulf ATF Dexron III",
    slug: "progulf-atf-dexron-iii",
    category: "gear",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description:
      "Automatic transmission fluid for passenger cars and light trucks",
    features: [
      "Dexron III, Mercon",
      "Excellent oxidation stability",
      "Superior shifting performance",
      "Prevents wear and corrosion",
    ],
    applications: [
      "Automatic transmissions",
      "Power steering systems",
      "Hydraulic systems",
      "Some manual transmissions requiring ATF",
    ],
    benefits: [
      "Ensures smooth shifting across temperature range",
      "Protects transmission components from wear",
      "Extends transmission service life",
      "Prevents fluid breakdown under high temperatures",
    ],
    specifications: [
      "GM Dexron III",
      "Ford Mercon",
      "Allison C-4",
      "ZF TE-ML 14A",
    ],
    fullDescription:
      "ProGulf ATF Dexron III is an automatic transmission fluid for passenger cars and light trucks. It provides excellent oxidation stability and superior shifting performance while preventing wear and corrosion. This premium transmission fluid is formulated to ensure smooth operation and extended service life of automatic transmissions.",
  },
  {
    id: 8,
    name: "ProGulf Extreme Pressure Grease",
    slug: "progulf-extreme-pressure-grease",
    category: "grease",
    image: "/api/placeholder/400/400",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    description: "Heavy-duty grease for high-load applications",
    features: [
      "NLGI Grade 2",
      "Lithium complex thickener",
      "Extreme pressure additives",
      "High drop point (>260°C)",
    ],
    applications: [
      "Heavy-duty bearings under shock loads",
      "Steel mill equipment",
      "Mining and construction equipment",
      "Marine deck equipment",
    ],
    benefits: [
      "Withstands extreme pressure and shock loading",
      "Maintains lubrication at high temperatures",
      "Provides excellent mechanical stability",
      "Extends relubrication intervals",
    ],
    specifications: ["NLGI 2", "DIN 51825 KP2N-20", "ISO L-XBDIB 2"],
    fullDescription:
      "ProGulf Extreme Pressure Grease is a heavy-duty grease for high-load applications. It features a lithium complex thickener and extreme pressure additives with a high drop point exceeding 260°C. This premium grease is specially formulated to provide exceptional performance in demanding industrial and automotive applications subject to extreme pressures and heavy loads.",
  },
];

// Helper function to get a product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") {
    return products;
  }
  return products.filter((product) => product.category === categoryId);
}

// Helper function to get related products (same category, excluding the current product)
export function getRelatedProducts(
  currentSlug: string,
  limit: number = 3
): Product[] {
  const currentProduct = getProductBySlug(currentSlug);
  if (!currentProduct) return [];

  return products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.slug !== currentSlug
    )
    .slice(0, limit);
}
