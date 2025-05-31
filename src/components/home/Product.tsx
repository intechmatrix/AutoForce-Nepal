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
import { Product } from "@/components/types/types";
import { categories, getProductsByCategory } from "@/components/data/product";

interface ProductsSectionProps {
  isPreview?: boolean;
}

export default function ProductsSection({
  isPreview = false,
}: ProductsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsVisible(true);
    // Initialize products
    updateFilteredProducts(activeCategory);
  }, []);

  useEffect(() => {
    updateFilteredProducts(activeCategory);
  }, [activeCategory]);

  const updateFilteredProducts = (categoryId: string) => {
    let products = getProductsByCategory(categoryId);
    if (isPreview) {
      products = products.slice(0, 3);
    }
    setFilteredProducts(products);
  };

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
                <Link
                  href={`/products/${product.slug}`}
                  className="block relative h-64"
                >
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
                </Link>
                <div className="p-6">
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-700 mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300"
                    >
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>

                    <Link
                      href={`/contact?product=${encodeURIComponent(
                        product.name
                      )}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                    >
                      Request Quote
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
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
