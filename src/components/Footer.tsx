"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-24">
      {/* 1. FLOATING CTA CARD */}
      {/* We use a container that overlaps the next section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Red Accent Strip */}
          <div className="w-full md:w-3 bg-brand-red h-2 md:h-auto"></div>
          
          <div className="flex-1 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Text */}
            <div className="text-center md:text-left">
              <span className="inline-block bg-brand-red text-white text-lg font-bold px-4 py-1 rounded-sm mb-4">
                Let’s Launch Your Project!
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-dark mb-2">
                Looking for a reliable website and digital marketing agency?
              </h3>
              <p className="text-gray-600">
                Call us today and get the best solutions for your business.
              </p>
            </div>

            {/* Right Side: Button */}
            <div className="text-center">
              <p className="text-brand-dark font-bold mb-2">Just a Call Away!</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-red-700 transition-colors shadow-lg"
              >
                +91 89788 69101
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER BACKGROUND */}
      {/* Negative margin pulls this up behind the card, but padding pushes content down */}
      <div className="bg-black text-white pt-32 pb-8 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: Logo & Info */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2">
                {/* Replace with your logo image if available, using text for now to match screenshot style */}
                <div className="relative h-12 w-auto">
                    <Image 
                        src="/images/vg-logo-icon.png" // Use the same logo you set in Header
                        alt="VG Digital Logo"
                        width={150}
                        height={50}
                        className="object-contain" 
                    />
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses with data-driven digital strategies and cutting-edge web solutions.
              </p>
            </div>

            {/* Column 2: Our Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-brand-red transition">Website Development</Link></li>
                <li><Link href="#" className="hover:text-brand-red transition">Digital Marketing</Link></li>
                <li><Link href="#" className="hover:text-brand-red transition">Social Media Marketing</Link></li>
                <li><Link href="#" className="hover:text-brand-red transition">Graphic Designing</Link></li>
                <li><Link href="#" className="hover:text-brand-red transition">E-commerce Management</Link></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-brand-red transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-brand-red transition">About Us</Link></li>
                <li><Link href="/services" className="hover:text-brand-red transition">Our Services</Link></li>
                <li><Link href="/contact" className="hover:text-brand-red transition">Contact Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-brand-red transition">Our Portfolio</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-brand-red flex-shrink-0" />
                  <span>venugopaldigitalmarketing@gmail.com</span>
                </li>
                {/* <li className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-brand-red flex-shrink-0" />
                  <span>sales@vgdigital.com</span>
                </li> */}
                <li className="flex items-start gap-3">
                  <PhoneIcon className="h-5 w-5 text-brand-red flex-shrink-0" />
                  <span>+91 89788 69101</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-brand-red flex-shrink-0" />
                  <span>Hyderabad, India</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="bg-brand-red text-white py-4 text-center text-sm font-medium">
        <p>Copyright © 2025 . VG Digital Marketing</p>
      </div>
    </footer>
  );
}