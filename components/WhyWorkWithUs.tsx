"use client";

import { motion } from "framer-motion";
import { Seal } from "./Branding";

const WhyWorkWithUs = () => {
  return (
    <section className="py-24 px-6 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top section with images and content */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side with images - hidden on mobile */}
          <div className="relative h-[800px] hidden md:block">
            {/* Top image - left side */}
            <motion.div
              initial={{ rotate: -5, opacity: 0, x: -20 }}
              whileInView={{ rotate: -8, opacity: 1, x: 0 }}
              className="absolute top-0 left-0 w-4/5 z-10"
            >
              <img
                src="/Copy of LFIH Website Wireframe  (2).png"
                className="w-full h-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
                alt="Team 1"
              />
            </motion.div>

            {/* Bottom image - moved up and left */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute bottom-[40px] right-[-680px] w-3/4 z-20"
            >
              <img
                src="/Copy_of_LFIH_Website_Wireframe___5_-removebg-preview.png"
                className="w-full h-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
                alt="Team 3"
              />
            </motion.div>
          </div>

          {/* Right side with content */}
          <div className="space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:-ml-84 mt-16"
            >
              <h2
                className="font-serif text-4xl uppercase tracking-widest font-bold whitespace-nowrap"
                style={{ color: "#185b89" }}
              >
                WHY WORK <br />
                WITH{" "}
                <span
                  className="font-hand lowercase italic text-6xl"
                  style={{ color: "#185b89" }}
                >
                  Us?
                </span>
              </h2>
            </motion.div>

            {/* All three paragraphs */}
            <div className="space-y-6 md:-mt-48">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black leading-relaxed"
              >
                <p className="font-medium">
                  We take the stress, guesswork, and frustration out of buying,
                  selling, or renting in Fire Island so you can focus on what
                  actually matters: soaking up beach days, making memories, and
                  living your best barefoot life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-black leading-relaxed"
              >
                <p className="font-medium">
                  Fire Island is all about community, and so are we. Our team
                  lives across the island in places like{" "}
                  <span
                    className="italic font-bold"
                    style={{ color: "#185b89" }}
                  >
                    Ocean Beach, Ocean Bay Park
                  </span>
                  , and{" "}
                  <span
                    className="italic font-bold"
                    style={{ color: "#185b89" }}
                  >
                    Seaview
                  </span>
                  , and we know every nook of Fire Island from{" "}
                  <span
                    className="italic font-bold"
                    style={{ color: "#185b89" }}
                  >
                    Kismet
                  </span>{" "}
                  to{" "}
                  <span
                    className="italic font-bold"
                    style={{ color: "#185b89" }}
                  >
                    Davis Park
                  </span>
                  .
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-black leading-relaxed"
              >
                <p className="font-medium">
                  Some of us have been coming here for generations, others
                  visited once and never left. Together, we bring decades of
                  experience, deep roots, and unique insight that makes every
                  move feel personal.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section with paragraphs - moved right by 15rem */}
        <div className="space-y-8 md:-mt-98 md:ml-120">
          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-black font-medium leading-relaxed"
            >
              <p>
                At Luxury Fire Island Homes, we're more than real
                <br /> estate. We're part of the island's creative heartbeat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-black font-medium leading-relaxed"
            >
              <p>
                Our Ocean Bay Park office is home to{" "}
                <span className="italic font-bold" style={{ color: "#185b89" }}>
                  Art in the Park
                </span>
                ,<br /> a seasonal gallery that showcases Fire Island artists
                <br /> and brings the community together through creativity,
                <br /> connection, and culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-black font-medium leading-relaxed"
            >
              <p>
                With{" "}
                <span
                  className="italic font-bold underline"
                  style={{ color: "#185b89" }}
                >
                  100+ five-star reviews
                </span>
                , regular features in the
                <br /> Fire Island News, and relationships that run deep
                <br /> across the island, you're not just working with a real
                <br /> estate team - you're stepping into the Fire Island
                <br />
                community, guided by people who truly know it.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Buttons - moved to the right by 3rem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center pt-4 md:ml-12"
        >
          <button className="bg-sunset text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-md">
            About Us
          </button>
          <button className="bg-sunset text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-md">
            See Events
          </button>
          <button className="bg-sunset text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-md">
            Our Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
