"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Award,
  RefreshCw,
} from "lucide-react";

export default function ProductsSection({ isPreview = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Product categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "engine", name: "Engine Oils" },
    { id: "gear", name: "Gear Oils" },
    { id: "hydraulic", name: "Hydraulic Oils" },
    { id: "grease", name: "Grease" },
  ];

  // Sample product data
  const products = [
    {
      id: 1,
      name: "ProGulf Synthetic Engine Oil",
      category: "engine",
      image: "/api/placeholder/400/400",
      description:
        "High-performance fully synthetic engine oil for passenger vehicles",
      features: [
        "API SN/CF, ACEA A3/B4",
        "SAE 5W-30, 5W-40, 10W-40",
        "Enhanced engine protection",
        "Improved fuel economy",
      ],
    },
    {
      id: 2,
      name: "ProGulf Supreme Motorcycle Oil",
      category: "engine",
      image: "/api/placeholder/400/400",
      description:
        "Premium quality engine oil specially formulated for motorcycles",
      features: [
        "API SL, JASO MA2",
        "SAE 10W-30, 10W-40, 20W-50",
        "Superior clutch performance",
        "Excellent engine cleanliness",
      ],
    },
    {
      id: 3,
      name: "ProGulf Heavy-Duty Diesel Oil",
      category: "engine",
      image: "/api/placeholder/400/400",
      description: "High-performance diesel engine oil for commercial vehicles",
      features: [
        "API CI-4/SL, ACEA E7",
        "SAE 15W-40, 20W-50",
        "Extended drain intervals",
        "Soot handling capability",
      ],
    },
    {
      id: 4,
      name: "ProGulf Gear Oil GL-5",
      category: "gear",
      image: "/api/placeholder/400/400",
      description:
        "High-quality gear oil for automotive transmissions and axles",
      features: [
        "API GL-5",
        "SAE 80W-90, 85W-140",
        "Extreme pressure protection",
        "Excellent thermal stability",
      ],
    },
    {
      id: 5,
      name: "ProGulf Premium Hydraulic Oil",
      category: "hydraulic",
      image: "/api/placeholder/400/400",
      description:
        "High-performance hydraulic fluid for industrial and mobile equipment",
      features: [
        "ISO VG 32, 46, 68",
        "Excellent anti-wear properties",
        "Oxidation stability",
        "Wide temperature range",
      ],
    },
    {
      id: 6,
      name: "ProGulf Multi-Purpose Grease",
      category: "grease",
      image: "/api/placeholder/400/400",
      description:
        "Premium lithium-based grease for automotive and industrial applications",
      features: [
        "NLGI Grade 2, 3",
        "Temperature range: -20°C to 140°C",
        "Water resistant",
        "Excellent mechanical stability",
      ],
    },
    {
      id: 7,
      name: "ProGulf ATF Dexron III",
      category: "gear",
      image: "/api/placeholder/400/400",
      description:
        "Automatic transmission fluid for passenger cars and light trucks",
      features: [
        "Dexron III, Mercon",
        "Excellent oxidation stability",
        "Superior shifting performance",
        "Prevents wear and corrosion",
      ],
    },
    {
      id: 8,
      name: "ProGulf Extreme Pressure Grease",
      category: "grease",
      image: "/api/placeholder/400/400",
      description: "Heavy-duty grease for high-load applications",
      features: [
        "NLGI Grade 2",
        "Lithium complex thickener",
        "Extreme pressure additives",
        "High drop point (>260°C)",
      ],
    },
  ];

  // For preview mode, only show first 3 products
  const displayProducts = isPreview ? products.slice(0, 3) : products;

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? displayProducts
      : displayProducts.filter(
          (product) => product.category === activeCategory
        );

  return (
    <div className={isPreview ? "py-12" : "pt-16 md:pt-24"}>
      {/* Header Section - Only show in full view */}
      {!isPreview && (
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Products
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Discover our premium range of ProGulf lubricants, manufactured
                in Dubai under stringent international standards.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Product Benefits - Only show in full view */}
      {!isPreview && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Superior Protection
                </h3>
                <p className="text-gray-700">
                  Our lubricants provide exceptional protection against wear,
                  corrosion, and deposits, extending engine life.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Premium Quality
                </h3>
                <p className="text-gray-700">
                  All ProGulf products meet or exceed international
                  specifications and OEM requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-green-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <RefreshCw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Improved Performance
                </h3>
                <p className="text-gray-700">
                  Experience better fuel economy, smoother operation, and
                  enhanced overall vehicle performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Categories and Listing */}
      <section className={`py-${isPreview ? "8" : "16"} bg-gray-50`}>
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title for Preview Mode */}
          {isPreview && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Premium Products
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Discover our range of high-quality lubricants designed for
                Nepal's unique driving conditions.
              </p>
            </div>
          )}

          {/* Category Tabs - Only show in full view */}
          {!isPreview && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    ProGulf
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      product.name
                    )}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300"
                  >
                    Request Quote
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button for Preview Mode */}
          {isPreview && (
            <div className="text-center mt-10">
              <Link
                href="/products"
                className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors duration-300 inline-block"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action - Only show in full view */}
      {!isPreview && (
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Advice on the Right Product?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you choose the best lubricant
              for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-red-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Our Experts
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
