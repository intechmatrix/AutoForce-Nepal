"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  Star,
  Play,
  ShoppingCart,
  Eye,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  highlights: string;
  category_title: string;
  photo_1: string;
  photo_2: string | null;
  photo_3: string | null;
  photo_4: string | null;
  photo_5: string | null;
  videolink: string | null;
  price: string;
  active: boolean;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  product: Product[];
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryTitle = decodeURIComponent(params.title as string);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (categoryTitle) {
      fetchProductsByCategory();
    }
  }, [categoryTitle]);

  const fetchProductsByCategory = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/viewbyCategory/${categoryTitle}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: ApiResponse = await response.json();
      setProducts(data.product.filter((product) => product.active));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load products");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatHighlights = (highlights: string) => {
    return highlights.split("\n").filter((highlight) => highlight.trim());
  };

  const getProductImages = (product: Product) => {
    return [
      product.photo_1,
      product.photo_2,
      product.photo_3,
      product.photo_4,
      product.photo_5,
    ].filter(Boolean) as string[];
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto  px-4 py-16 md:py-24">
          <div className="flex items-center mb-6">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-white hover:text-yellow-300 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <nav className="text-white/80 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <span className="mx-2">/</span>
              <span className="text-white">{categoryTitle}</span>
            </nav>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryTitle}
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our premium {categoryTitle.toLowerCase()} collection,
              designed for superior performance and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
              <p className="mt-2 text-gray-600">Loading products...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 font-medium">
                  Error loading products
                </p>
                <p className="text-red-500 text-sm mt-1">{error}</p>
                <button
                  onClick={fetchProductsByCategory}
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {!loading && !error && (
            <>
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      No Products Found
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any products in the "{categoryTitle}"
                      category.
                    </p>
                    <Link
                      href="/categories"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      Browse Other Categories
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {products.length} Product
                      {products.length !== 1 ? "s" : ""} Found
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                      const highlights = formatHighlights(product.highlights);
                      const images = getProductImages(product);

                      return (
                        <Link
                          key={product.id}
                          href={`/products/slug/${product.slug}`}
                          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300 group"
                        >
                          <div
                            key={product.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            <div className="relative h-64 group">
                              <Image
                                src={product.photo_1}
                                alt={product.name}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onError={(e) => {
                                  e.currentTarget.src =
                                    "/images/placeholder-product.jpg";
                                }}
                              />

                              {/* Video indicator */}
                              {product.videolink && (
                                <div className="absolute top-2 left-2 bg-red-600 text-white p-2 rounded-full">
                                  <Play className="h-4 w-4" />
                                </div>
                              )}

                              {/* Image count indicator */}
                              {images.length > 1 && (
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                                  {images.length} Photos
                                </div>
                              )}
                            </div>

                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {product.name}
                              </h3>

                              <p className="text-gray-700 mb-4 text-sm line-clamp-2">
                                {product.description}
                              </p>

                              {/* Highlights */}
                              {highlights.length > 0 && (
                                <div className="space-y-1 mb-6">
                                  {highlights
                                    .slice(0, 3)
                                    .map((highlight, index) => (
                                      <div
                                        key={index}
                                        className="flex items-start space-x-2"
                                      >
                                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-xs text-gray-600">
                                          {highlight}
                                        </span>
                                      </div>
                                    ))}
                                  {highlights.length > 3 && (
                                    <p className="text-xs text-gray-500 ml-6">
                                      +{highlights.length - 3} more features
                                    </p>
                                  )}
                                </div>
                              )}

                              <div className="flex justify-between items-center">
                                <Link
                                  href={`/products/slug/${product.slug}`}
                                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300 group"
                                >
                                  <Eye className="mr-1 h-4 w-4" />
                                  View Details
                                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                  href={`/contact?product=${encodeURIComponent(
                                    product.name
                                  )}`}
                                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                                >
                                  <ShoppingCart className="mr-1 h-4 w-4" />
                                  Quote
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {!loading && !error && products.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our experts can help you select the perfect{" "}
              {categoryTitle.toLowerCase()}
              for your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-red-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Expert Advice
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
