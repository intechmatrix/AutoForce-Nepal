"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="bg-red-600 text-white p-2 rounded mr-2 text-sm font-bold">
                AF
              </span>
              <span className="text-xl font-bold">AutoForce Nepal</span>
            </div>
            <p className="text-gray-400 pr-4">
              Authorized distributor of ProGulf Lubricants in Nepal, providing
              premium engine oils and automotive products since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pl-4 border-l-4 border-red-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Services", href: "/services" },
                { name: "FAQs", href: "/faqs" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-red-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pl-4 border-l-4 border-green-600">
              Our Products
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Engine Oils", href: "/products/engine-oils" },
                {
                  name: "Transmission Fluids",
                  href: "/products/transmission-fluids",
                },
                { name: "Gear Oils", href: "/products/gear-oils" },
                { name: "Brake Fluids", href: "/products/brake-fluids" },
                { name: "Greases & Lubricants", href: "/products/greases" },
                { name: "Industrial Oils", href: "/products/industrial-oils" },
              ].map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-green-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative pl-4 border-l-4 border-yellow-600">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Tinkune, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">+977 1 4372104</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">info@autoforcenepal.com</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-sm font-semibold mb-3">
                Join Our Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 flex-grow"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 rounded-r-lg transition-colors">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AutoForce Nepal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all hover:transform hover:scale-110"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
