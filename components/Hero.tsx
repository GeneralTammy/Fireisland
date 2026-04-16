"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/039-473705-645OceanBreeze-39_13737917.jpg"
          alt="Fire Island Beach"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl text-center lg:text-left"
        >
          <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 italic">
            Welcome to
          </h2>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold leading-[1.1] sm:leading-[1] uppercase tracking-tighter">
            THE <span className="text-outline">SANDIER SIDE</span> <br />
            OF <span className="text-outline">NEW YORK</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md border-b-8 border-sunset mx-4 sm:mx-0"
        >
          <h3
            className="font-serif text-xl sm:text-2xl mb-6 sm:mb-8 text-center font-bold"
            style={{ color: "#185b89" }}
          >
            How can we help you?
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {["I'm Buying", "I'm Selling", "I'm Renting"].map((option) => (
              <button
                key={option}
                className="w-full flex items-center justify-between border border-ocean/20 p-3 sm:p-4 rounded-sm transition-all group"
                style={{ backgroundColor: "white", color: "#185b89" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#185b89";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#185b89";
                }}
              >
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold">
                  {option}
                </span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            ))}
            <button className="w-full bg-sunset text-white py-4 sm:py-5 rounded-sm font-bold uppercase tracking-widest text-base sm:text-lg hover:opacity-90 transition-opacity mt-4">
              Call Us 631-570-8942
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
