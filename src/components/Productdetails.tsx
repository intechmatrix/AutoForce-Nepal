"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, FileText, Check, Star } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import { Product } from "./types/types";
import { getProductBySlug, getRelatedProducts } from "./data/product";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<
    "features" | "applications" | "specifications" | "description"
  >("features");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get product data
    const fetchedProduct = getProductBySlug(params.slug);

    if (!fetchedProduct) {
      notFound();
    }

    setProduct(fetchedProduct);
    setRelatedProducts(getRelatedProducts(params.slug, 3));
    setIsLoading(false);
  }, [params.slug]);

  // Show loading state
  if (isLoading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
            <Link href="/products" className="text-gray-500 hover:text-red-600">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
            <span className="text-red-600 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Overview Section */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Back button for mobile */}
              <div className="md:hidden p-4">
                <Link
                  href="/products"
                  className="flex items-center text-gray-600 hover:text-red-600"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span>Back to Products</span>
                </Link>
              </div>

              {/* Product Images */}
              <div className="md:w-1/2 p-6">
                <ImageGallery
                  images={product.images}
                  productName={product.name}
                />
              </div>

              {/* Product Information */}
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="mb-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                    ProGulf
                  </span>
                  <span className="ml-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium uppercase">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <p className="text-gray-700 mb-6 text-lg">
                  {product.description}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      product.name
                    )}`}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex-1 text-center"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-lg transition-colors flex-1 text-center"
                  >
                    Technical Support
                  </Link>
                </div>

                {/* Specs Preview */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Specifications:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.specifications.slice(0, 3).map((spec, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                    {product.specifications.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                        +{product.specifications.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "features"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "applications"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "specifications"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "description"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Full Description
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 p-6 rounded-xl">
            {activeTab === "features" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Product Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-gray-700">
                  <p>
                    These features make {product.name} an excellent choice for
                    various applications, ensuring optimal performance and
                    extended service life.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Applications
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.applications.map((application, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                    >
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-gray-700">
                  <p>
                    {product.name} is specially formulated for these
                    applications to provide reliable performance and protection
                    under various operating conditions.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{spec}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-gray-700">
                  <p>
                    {product.name} meets or exceeds these industry
                    specifications, ensuring compatibility with equipment
                    manufacturer requirements.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "description" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Product Description
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    {product.fullDescription}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Related Products
            </h2>
            <p className="text-gray-600 mb-8">
              Discover more ProGulf products in the {product.category} category
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                >
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="block relative h-48"
                  >
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link
                        href={`/products/${relatedProduct.slug}`}
                        className="hover:text-red-600"
                      >
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedProduct.description}
                    </p>
                    <Link
                      href={`/products/${relatedProduct.slug}`}
                      className="text-red-600 font-medium hover:text-red-700 flex items-center text-sm"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Technical Support?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you with product selection,
            application advice, and technical support.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-red-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Our Technical Team
          </Link>
        </div>
      </section>
    </div>
  );
}
