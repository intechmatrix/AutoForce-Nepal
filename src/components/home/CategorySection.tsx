"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Category {
  id: number;
  title: string;
  description: string;
  featured_image: string;
  active: boolean;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}

interface CategoriesSectionProps {
  isPreview?: boolean;
}

export default function CategoriesSection({
  isPreview = false,
}: CategoriesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/category/viewall`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();

      // Handle both single category and array responses
      if (data.category) {
        // Single category response
        setCategories([data.category]);
      } else if (Array.isArray(data)) {
        // Array of categories
        setCategories(data);
      } else if (data.categories && Array.isArray(data.categories)) {
        // Categories wrapped in a categories property
        setCategories(data.categories);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load categories"
      );
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter active categories and limit for preview
  const displayCategories = categories
    .filter((category) => category.active)
    .slice(0, isPreview ? 3 : undefined);

  return (
    <div className={isPreview ? "py-12" : "pt-16 md:pt-24"}>
      {/* Header Section - Only show in full view */}
      {!isPreview && (
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Categories
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                Explore our diverse range of product categories, each carefully
                curated to meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Categories Section */}
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
                Our Categories
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Discover our range of high-quality products organized by
                categories for your convenience.
              </p>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
              <p className="mt-2 text-gray-600">Loading categories...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-red-600 font-medium">
                  Error loading categories
                </p>
                <p className="text-red-500 text-sm mt-1">{error}</p>
                <button
                  onClick={fetchCategories}
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Categories Grid */}
          {!loading && !error && (
            <>
              {displayCategories.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    No categories available at the moment.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayCategories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <Link
                        href={`/categories/${encodeURIComponent(
                          category.title
                        )}`}
                        className="block relative h-64"
                      >
                        <Image
                          src={category.featured_image}
                          alt={category.title}
                          fill
                          className="object-contain transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // Fallback image if the featured image fails to load
                            e.currentTarget.src =
                              "/images/placeholder-category.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium text-lg">
                            Explore Category
                          </span>
                        </div>
                      </Link>

                      <div className="p-6">
                        <Link
                          href={`/categories/${encodeURIComponent(
                            category.title
                          )}`}
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                            {category.title}
                          </h3>
                        </Link>

                        <p className="text-gray-700 mb-6 line-clamp-3">
                          {category.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <Link
                            href={`/categories/${encodeURIComponent(
                              category.title
                            )}`}
                            className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300 group"
                          >
                            View Products
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>

                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            Category
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action - Only show in full view */}
      {!isPreview && !loading && !error && (
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Finding the Right Category?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you find the perfect products
              within our categories.
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
