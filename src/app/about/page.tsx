"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, TrendingUp, Award, ShieldCheck } from "lucide-react";

export default function AboutSection({ isPreview = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={isPreview ? "py-12" : "pt-16 md:pt-24"}>
      {/* Header Section - Show on full about page only */}
      {!isPreview && (
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About AutoForce Nepal Pvt. Ltd.
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl max-w-3xl mx-auto">
                We are a trusted importer and distributor of premium automotive
                lubricants in Nepal, dedicated to enhancing vehicle performance
                and longevity.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Company Overview - Show on both pages */}
      <section className={`py-${isPreview ? "8" : "16"} bg-white`}>
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {isPreview ? (
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About AutoForce Nepal Pvt. Ltd.
                </h2>
              ) : (
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Company
                </h2>
              )}
              <p className="text-gray-700 mb-6 leading-relaxed">
                AutoForce Nepal PVT LTD is a leading provider of premium
                lubricants for the Nepalese market. Our flagship line, Progulf
                Lubricants, is manufactured and packaged in Dubai under
                stringent international standards and testing procedures.
              </p>

              {!isPreview && (
                <>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We supply a wide range of high-performance oils and greases
                    designed to enhance engine life, efficiency, and durability
                    ideal for Nepal's varied road conditions and vehicle
                    demands.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our commitment to quality and customer satisfaction has made
                    us a trusted name in the automotive lubricant industry in
                    Nepal.
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        Dubai-manufactured products
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        International OEM specifications
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        Stringent quality testing
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Wide product range</span>
                    </div>
                  </div>
                </>
              )}

              {isPreview && (
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors duration-300 inline-block"
                  >
                    View More About Us
                  </Link>
                </div>
              )}
            </div>

            <div className="order-1 lg:order-2 relative">
              <div
                className={`relative rounded-2xl overflow-hidden shadow-xl ${
                  isPreview ? "h-64 md:h-80" : "h-80 md:h-96"
                }`}
              >
                <Image
                  src="/about.jpeg"
                  alt="AutoForce Nepal Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Established 2018
                  </span>
                  <h3 className="text-white text-lg font-semibold mt-2">
                    AutoForce Nepal Headquarters
                  </h3>
                  <p className="text-white/80">
                    Budhanilkantha-12, Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Show only on full page */}
      {!isPreview && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Vision & Mission
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We strive to be the leading provider of premium lubricants in
                Nepal, ensuring optimal performance for all vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize vehicle maintenance in Nepal by providing
                  world-class lubricants that enhance performance, extend engine
                  life, and contribute to a cleaner environment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver premium quality lubricants and exceptional customer
                  service to the Nepalese market, educating consumers about
                  proper vehicle maintenance while fostering sustainable
                  business practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Values - Show only on full page */}
      {!isPreview && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality
                </h3>
                <p className="text-gray-700">
                  We never compromise on the quality of our products, ensuring
                  that every lubricant meets the highest international
                  standards.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-700">
                  We strive for excellence in every aspect of our business, from
                  product selection to customer service and support.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg">
                <div className="bg-green-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We continuously seek innovative solutions to meet the evolving
                  needs of our customers and the automotive industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
