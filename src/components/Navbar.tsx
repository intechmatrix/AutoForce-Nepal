"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set the scroll state on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span>+977 1 4372104</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-yellow-500" />
              <span>info@autoforcenepal.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-green-500" />
              <span>Sun-Fri, 10:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 md:top-9 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white md:bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-red-600 font-bold text-xl flex items-center"
                onClick={closeMenu}
              >
                <span className="bg-red-600 text-white p-1 rounded mr-2 text-sm">
                  AF
                </span>
                <span>AutoForce Nepal</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <NavLink
                  href="/"
                  isActive={pathname === "/"}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  href="/about"
                  isActive={pathname === "/about"}
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
                <NavLink
                  href="/products"
                  isActive={pathname === "/products"}
                  onClick={closeMenu}
                >
                  Products
                </NavLink>
                <NavLink
                  href="/contact"
                  isActive={pathname === "/contact"}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none"
                aria-expanded="false"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink
              href="/"
              isActive={pathname === "/"}
              onClick={closeMenu}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              href="/about"
              isActive={pathname === "/about"}
              onClick={closeMenu}
            >
              About Us
            </MobileNavLink>
            <MobileNavLink
              href="/products"
              isActive={pathname === "/products"}
              onClick={closeMenu}
            >
              Products
            </MobileNavLink>
            <MobileNavLink
              href="/contact"
              isActive={pathname === "/contact"}
              onClick={closeMenu}
            >
              Contact
            </MobileNavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({
  href,
  children,
  isActive = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-300 ${
        isActive
          ? "text-red-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-red-600"
          : "text-gray-800 hover:text-red-600"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  isActive = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? "text-red-600 bg-gray-50"
          : "text-gray-800 hover:bg-gray-50 hover:text-red-600"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
