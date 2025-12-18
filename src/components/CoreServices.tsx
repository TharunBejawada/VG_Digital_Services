"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  ShareIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

// Data extracted exactly from your screenshot
const services = [
  {
    title: "Website Development",
    icon: CodeBracketIcon,
    features: [
      "Corporate Websites",
      "E-commerce Stores",
      "Creative Portfolio Websites",
      "Online Learning Platforms",
      "High-Converting Landing Pages",
      "Job Portals & Custom Platforms",
    ],
  },
  {
    title: "Digital Marketing",
    icon: MegaphoneIcon,
    features: [
      "Website Optimization",
      "Online Brand Promotion",
      "Reputation Management",
      "Digital Presence Building",
      "Google Ads (PPC)",
      "SEO-Optimized Content",
    ],
  },
  {
    title: "Graphic Design",
    icon: PaintBrushIcon,
    features: [
      "Logo & Brand Identity",
      "Packaging Designs",
      "Social Media Graphics",
      "Posters & Banners",
      "Brochures & Catalogues",
      "UI/UX for Web & Mobile",
    ],
  },
  {
    title: "E-Commerce Management",
    icon: ShoppingCartIcon,
    features: [
      "E-Commerce Website Setup",
      "Amazon Product Listings",
      "Flipkart Listings",
      "Myntra Listings",
      "Facebook Marketplace",
      "Google Shopping Integration",
    ],
  },
  {
    title: "SEO Services",
    icon: MagnifyingGlassIcon,
    features: [
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "Technical SEO",
      "100% White-Hat Practices",
    ],
  },
  {
    title: "Content Writing",
    icon: PencilSquareIcon,
    features: [
      "Blog Writing",
      "SEO-Friendly Articles",
      "Website Content",
      "Product Descriptions",
      "Copywriting",
      "Book & Long-Form Writing",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: ShareIcon,
    features: [
      "Facebook Ads & Management",
      "Instagram Promotions",
      "Twitter (X) Marketing",
      "LinkedIn Branding",
      "YouTube Growth",
      "Complete Profile Management",
    ],
  },
  {
    title: "Google Ads",
    icon: PresentationChartLineIcon,
    features: [
      "Brand Reach & Visibility",
      "Ads Campaign Management",
      "Google Business Profile",
      "Lead Generation",
      "Website Traffic Boost",
      "Sales Conversion Campaigns",
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoreServices() {
  return (
    <section className="py-20 bg-[#F0F9FF]"> {/* Light Blue Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full border border-gray-200 bg-white text-brand-dark font-bold shadow-sm mb-6">
            Our Core Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark max-w-4xl mx-auto leading-tight">
            We provide smart, scalable, and growth-driven solutions for your business.
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Animates when scrolled into view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 shadow-sm border border-transparent hover:border-brand-red hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                <service.icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center text-brand-dark mb-6 group-hover:text-brand-red transition-colors">
                {service.title}
              </h3>

              {/* Feature List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="mr-2 text-brand-red mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}