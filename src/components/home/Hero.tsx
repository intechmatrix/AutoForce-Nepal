"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Award, TrendingUp } from "lucide-react";

export default function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                AutoForce Nepal
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mb-6 mx-auto lg:mx-0"></div>
              <p className="text-2xl font-semibold mb-4">Ride With Power</p>
              <p className="text-xl mb-8 leading-relaxed">
                Premium automotive lubricants for Nepal's diverse roads and
                vehicles, delivering enhanced engine life, efficiency, and
                durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero.webp"
                alt="AutoForce Nepal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  ProGulf Lubricants
                </span>
                <h3 className="text-white text-xl font-semibold mt-2">
                  Dubai-manufactured Excellence
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Introducing ProGulf Lubricants
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Watch how ProGulf lubricants deliver superior performance and
              protection for all types of vehicles.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {/* Video with proper thumbnail */}
            {!videoLoaded ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setVideoLoaded(true)}
              >
                {/* Custom thumbnail image */}
                <Image
                  src="/thumbnail.png"
                  alt="ProGulf Lubricants Video Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority
                />

                {/* Video play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/MX4zx3lBRto?autoplay=1"
                title="Introducing ProGulf Lubricants"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
