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
  Package,
  Info,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mr-4 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <nav className="text-gray-600 text-sm">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href={`/categories/${encodeURIComponent(
                  product.category_title
                )}`}
                className="hover:text-red-600 transition-colors"
              >
                {product.category_title}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-xl group border border-gray-100">
                <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105 p-6"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder-product.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === image
                          ? "border-red-500 ring-4 ring-red-100 shadow-lg scale-105"
                          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Video Section */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-2xl shadow-lg border border-red-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                  <Play className="h-6 w-6 text-red-600 mr-3" />
                  Product Demonstration
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Watch our detailed product demonstration to see all features
                  in action.
                </p>
                <a
                  href={staticVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {/* Product Header */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 text-red-800 text-sm font-semibold rounded-full border border-red-300">
                    <Package className="h-4 w-4 mr-2" />
                    {product.category_title}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Added on {formatDate(product.createdAt)}</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Info className="h-6 w-6 text-blue-600 mr-3" />
                  Product Overview
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              {highlights.length > 0 && (
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="h-6 w-6 text-yellow-500 mr-3" />
                    Key Features & Benefits
                  </h2>
                  <div className="grid gap-4">
                    {highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Interested in this product?
                </h3>
                <p className="text-red-100 mb-6">
                  Get in touch with us for detailed specifications, pricing, and
                  availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      product.name
                    )}`}
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ShoppingCart className="mr-3 h-5 w-5" />
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-20 bg-gradient-to-r from-red-700 via-red-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Explore More {product.category_title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-200">
            Discover our complete range of high-quality products in the{" "}
            {product.category_title.toLowerCase()} category, designed to meet
            your specific needs.
          </p>
          <Link
            href={`/categories/${encodeURIComponent(product.category_title)}`}
            className="inline-flex items-center px-10 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            View All {product.category_title}
            <ChevronRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all"
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
            <div className="relative w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
