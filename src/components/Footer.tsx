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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1 lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <span className="bg-red-600 text-white p-2 rounded mr-3 text-sm font-bold">
                AF
              </span>
              <span className="text-xl sm:text-2xl font-bold">
                AutoForce Nepal
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Authorized distributor of ProGulf Lubricants in Nepal, providing
              premium engine oils and automotive products since 2010.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/share/1J38k9JDHC/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-3">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative pl-4 border-l-4 border-red-600">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },

                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-red-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative pl-4 border-l-4 border-yellow-600">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm sm:text-base">
                  Budhanilkantha-12, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
                <a
                  href="tel:+97714372104"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +977-9801009929
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />
                <a
                  href="mailto:info@autoforcenepal.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all"
                >
                  info@autoforcenepal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} AutoForce Nepal. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
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
      {/* Attribution Footer */}
      <div className="bg-gray-950 border-t border-gray-800 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            Powered by{" "}
            <Link
              target="_blank"
              href="https://techmatrixinnovations.com/"
              className="text-red-500 hover:underline font-medium"
            >
              Tech Matrix Innovations Pvt. Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
