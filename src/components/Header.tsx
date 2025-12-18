"use client";

import Link from "next/link";
import Image from "next/image"; // IMPT: Import Image component
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 1. LOGO SECTION (Left) */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Image Logo Container */}
            {/* Adjust h-10 (height) if your logo needs to be bigger or smaller */}
            <div className="relative h-10 w-auto flex-shrink-0">
               <Image
                 src="/images/vg-logo-icon.png" // <-- MAKE SURE FILENAME MATCHES YOURS
                 alt="VG Digital Marketing Logo"
                 // Width/Height represent aspect ratio here because of 'h-full w-auto' below.
                 // Adjust these numbers roughly to your image's actual dimensions.
                 width={135}
                 height={40}
                 className="h-full w-auto object-contain"
                 priority // Loads image immediately for LCP boost
               />
            </div>
          </Link>

          {/* 2. NAVIGATION (Center) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-brand-red"
                      : "text-brand-dark hover:text-brand-red"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. BUTTON (Right) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-brand-red text-white text-[15px] font-bold px-6 py-2.5 rounded-md hover:bg-red-700 transition-colors shadow-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-dark"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium block ${
                   pathname === link.href ? "text-brand-red" : "text-brand-dark hover:text-brand-red"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-red text-white text-center font-bold py-3 rounded-md block hover:bg-red-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}