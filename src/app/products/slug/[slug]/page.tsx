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
  Check,
  Calendar,
  Tag,
  User,
  Heart,
  Share2,
  ZoomIn,
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

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Static video URL for all products
  const staticVideoUrl = "https://www.youtube.com/watch?v=MX4zx3lBRto";

  useEffect(() => {
    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}`
      );

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data: Product = await response.json();
      setProduct(data);
      setSelectedImage(data.photo_1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load product");
      console.error("Error fetching product:", err);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                Product Not Found
              </h2>
              <p className="text-red-600 mb-4">
                {error || "The requested product could not be found."}
              </p>
              <button
                onClick={() => router.back()}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const highlights = formatHighlights(product.highlights);
  const images = getProductImages(product);

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <nav className="text-gray-600 text-sm">
              <Link href="/" className="hover:text-red-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/categories/${encodeURIComponent(
                  product.category_title
                )}`}
                className="hover:text-red-600"
              >
                {product.category_title}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image - Made more responsive */}
              <div
                className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg group"
                style={{ aspectRatio: "1/1" }}
              >
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder-product.jpg";
                  }}
                />
              </div>

              {/* Thumbnail Images - Made more responsive */}
              {images.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === image
                          ? "border-red-600 ring-2 ring-red-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-contain p-1"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Video Link - Always show with static URL */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Play className="h-5 w-5 text-red-600 mr-2" />
                  Product Video
                </h3>
                <a
                  href={staticVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch Video
                </a>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Product Title and Category */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                    {product.category_title}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                      NPR {parseInt(product.price).toLocaleString()}
                    </p>
                  </div>
                  <Tag className="h-8 w-8 text-yellow-600" />
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    Key Features
                  </h2>
                  <div className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Explore More {product.category_title}
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Discover other high-quality products in our{" "}
            {product.category_title.toLowerCase()} collection.
          </p>
          <Link
            href={`/categories/${encodeURIComponent(product.category_title)}`}
            className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            View All {product.category_title}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Image Modal - Enhanced responsiveness */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-full flex items-center justify-center">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
