"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "rent-one",
    title: "RENT ONE OF OURS",
    description:
      "We match you with the perfect Fire Island stay, connecting you with homeowners who actually care (think spotless homes and 5-star hospitality, not a broken beach chair and half a roll of toilet paper). Whether you're here for a weekend, a month, or the whole summer, we'll find a place that fits you (and even Fido's) vibe—so you can focus on the beach, not the booking stress.",
    ps: "P.S. Don't wait on these... they usually book up fast.",
    cta: "BROWSE OUR LISTINGS",
  },
  {
    id: "buy",
    title: "BUY A HOME",
    description:
      "Finding your dream home on Fire Island requires more than just a search—it requires local insight. We help you navigate the unique market of each community to find the perfect match for your lifestyle.",
    ps: "Let's find your slice of paradise.",
    cta: "VIEW FOR SALE",
  },
  {
    id: "sell",
    title: "SELL A HOME",
    description:
      "When it's time to move on, we ensure your home is presented to the right audience with professional marketing and deep community connections.",
    ps: "Get the value your home deserves.",
    cta: "GET A VALUATION",
  },
  {
    id: "rent-yours",
    title: "RENT OUT YOURS",
    description:
      "Maximize your property's potential with our comprehensive rental management. We handle everything from marketing to guest relations.",
    ps: "Stress-free income for your island home.",
    cta: "MANAGE MY RENTAL",
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#dbeafe] text-ocean">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left Column - Services List */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service)}
              className={`flex items-center gap-3 md:gap-4 border-b border-ocean/10 pb-4 md:pb-6 w-full text-left transition-all group ${
                activeTab.id === service.id ? "lg:translate-x-4" : ""
              }`}
            >
              <span
                className={`text-2xl md:text-3xl font-serif font-black transition-colors flex-shrink-0 ${
                  activeTab.id === service.id
                    ? "text-sunset"
                    : "text-[#185B89]/30"
                }`}
              >
                +
              </span>
              <h3
                className={`font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider md:tracking-widest transition-all leading-tight ${
                  activeTab.id === service.id
                    ? "text-sunset font-black"
                    : "text-[#185B89] font-bold"
                }`}
              >
                {service.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Right Column - Active Service Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-sand p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-xl min-h-[400px] md:min-h-[450px] flex flex-col justify-between order-1 lg:order-2 lg:-mt-12"
          >
            <div>
              <h3
                className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 lg:mb-8 uppercase tracking-wider md:tracking-widest font-black leading-tight"
                style={{ color: "#185B89" }}
              >
                {activeTab.title}
              </h3>
              <p className="text-black/80 leading-relaxed text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                {activeTab.description}
              </p>
              <p className="text-black/60 italic text-sm sm:text-base mb-6 md:mb-8">
                {activeTab.ps}
              </p>
            </div>
            <button className="bg-ocean text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-bold uppercase tracking-wider md:tracking-widest text-xs sm:text-sm hover:bg-sunset transition-colors rounded-md w-full sm:w-auto text-center">
              {activeTab.cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
