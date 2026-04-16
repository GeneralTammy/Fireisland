"use client";

import { motion } from "framer-motion";
import { Seal } from "./Branding";

const IntroSection = () => {
  return (
    <section className="py-24 px-6 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-[600px]">
            {/* Scrapbook Collage */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-10"
            >
              <img
                src="/Copy_of_LFIH_Website_Wireframe___3_-removebg-preview.png"
                className="w-full h-auto"
                alt="House 4"
              />
            </motion.div>
          </div>

          <div className="space-y-12">
            <div>
              <h3
                className="font-serif text-2xl mb-2 uppercase tracking-widest font-bold"
                style={{ color: "#185b89" }}
              >
                You Love{" "}
                <span
                  className="font-hand lowercase italic text-4xl"
                  style={{ color: "#185b89" }}
                >
                  Fire Island
                </span>
              </h3>
              <p className="text-black leading-relaxed text-base font-medium">
                for its charm, its community, its one-of-a-kind lifestyle—and
                yeah, maybe even for the Rocket Fuels.
              </p>
              <p className="text-black leading-relaxed mt-4 text-base font-medium">
                I mean... who wouldn't want to ditch the chaos (and sweat) of
                NYC or Long Island for a car-free island with insane beaches, no
                traffic, and the cutest dogs?
              </p>
            </div>
            <div>
              <h3
                className="font-serif text-2xl mb-2 uppercase tracking-widest font-bold"
                style={{ color: "#185b89" }}
              >
                Let Us{" "}
                <span
                  className="font-hand lowercase italic text-4xl"
                  style={{ color: "#185b89" }}
                >
                  Help You
                </span>{" "}
                Make It Home
              </h3>
              <p className="text-black leading-relaxed text-base font-medium">
                Whether you're buying, selling, or renting, you need a team that
                knows the island (and everyone on it) inside and out—one that
                makes the process easy, stress-free, and actually fun. That's
                exactly what we do.
              </p>
              <p className="text-black leading-relaxed mt-4 italic text-base font-medium">
                Let's make some moves (literally). We'll handle the real estate
                — you just worry about what time to catch the ferry.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2
            className="font-serif text-2xl uppercase tracking-[0.2em] font-bold"
            style={{ color: "#185b89" }}
          >
            How can we help you make your Fire Island dreams a reality?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { title: "I'm looking for a", subtitle: "VACATION HOME to Rent" },
              { title: "I'm looking to", subtitle: "BUY a home" },
              { title: "I'm looking to", subtitle: "SELL my home" },
              {
                title: "I'm looking for help",
                subtitle: "RENTING my house out",
              },
            ].map((btn, i) => (
              <button
                key={i}
                className="bg-sunset text-white p-6 rounded-sm hover:opacity-90 transition-opacity flex flex-col items-center justify-center min-h-[120px]"
              >
                <span className="text-xs uppercase tracking-widest mb-1 font-extrabold">
                  {btn.title}
                </span>
                <span className="font-serif text-base font-black uppercase leading-tight">
                  {btn.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
