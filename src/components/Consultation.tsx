"use client";

import { motion } from "framer-motion";

export default function Consultation() {
  return (
    <section className="py-20 bg-[#F3F4F6]"> {/* Light Gray Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-transparent"
          >
            <div className="text-center mb-8 lg:text-left">
              <h3 className="text-2xl font-bold text-brand-red mb-2">
                Get Your Consultation
              </h3>
              <p className="text-brand-dark font-medium">
                Start your digital journey with expert guidance.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-full border-none bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-brand-red focus:outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              {/* Phone & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-4 rounded-full border-none bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-brand-red focus:outline-none transition-all placeholder:text-gray-300"
                />
                <select className="w-full px-6 py-4 rounded-full border-none bg-white shadow-sm text-gray-400 focus:text-gray-700 focus:ring-2 focus:ring-brand-red focus:outline-none transition-all appearance-none cursor-pointer">
                  <option value="placeholder" disabled selected>Select a Service</option>
                  <option value="web">Website Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="seo">SEO & Ads</option>
                </select>
              </div>

              {/* Business & City Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-6 py-4 rounded-full border-none bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-brand-red focus:outline-none transition-all placeholder:text-gray-300"
                />
                <input
                  type="text"
                  placeholder="City / Country"
                  className="w-full px-6 py-4 rounded-full border-none bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-brand-red focus:outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-6 py-4 rounded-3xl border-none bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-brand-red focus:outline-none transition-all placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-3 bg-brand-red text-white font-bold rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight mb-4">
              We Deliver Smarter <br />
              <span className="text-brand-red">Digital Marketing Solutions</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto lg:ml-auto">
              Building an online presence isn't enough; maintaining and growing it is what brings success.
              We help you reach your audience, educate them about your brand, and build long-term loyal customers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {/* Stat 1 */}
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-4xl font-black text-brand-red">30+</span>
                <span className="text-brand-dark font-semibold mt-1">Projects Delivered</span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-4xl font-black text-brand-red">15+</span>
                <span className="text-brand-dark font-semibold mt-1">Active Clients</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-4xl font-black text-brand-dark">
                  Serving <br />
                  <span className="text-brand-red">3+</span>
                </span>
                <span className="text-brand-dark font-semibold mt-1">Countries</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-brand-dark font-bold text-lg">Over</span>
                <span className="text-4xl font-black text-brand-red">5 + Years</span>
                <span className="text-brand-dark font-semibold mt-1">of Expertise</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}