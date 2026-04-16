"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from "./PropertyCard";

const FeaturedListings = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 bg-beach/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-hand text-5xl mb-2 italic font-bold"
            style={{ color: "#185b89" }}
          >
            Don't Worry
          </h2>
          <h3
            className="font-serif text-4xl uppercase tracking-[0.3em] font-black"
            style={{ color: "#185b89" }}
          >
            We've Got You Covered
          </h3>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-2 text-ocean hover:text-sunset transition-colors hidden lg:block"
          >
            <ChevronLeft size={60} strokeWidth={1} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
          >
            <PropertyCard
              price="$1,250,000"
              address="123 Ocean Breeze"
              community="Saltaire, NY"
              beds={4}
              baths={3}
              sqft={2200}
              image="/37DuneWay-22.jpg"
            />
            <PropertyCard
              price="$895,000"
              address="45 Dune Road"
              community="Fair Harbor, NY"
              beds={3}
              baths={2}
              sqft={1800}
              image="/001-459111-657OceanBreezeWalk-11_13122935.jpg"
            />
            <PropertyCard
              price="$12,000 /wk"
              address="12 Seaview Walk"
              community="Ocean Beach, NY"
              beds={4}
              baths={3}
              sqft={2400}
              image="/037-426693-29IvyAve-56_11834582.jpg"
            />
            <PropertyCard
              price="$950,000"
              address="15 Cayuga Street"
              community="Ocean Beach, NY"
              beds={3}
              baths={2}
              sqft={1900}
              image="/15CayugaStreet-1.jpg"
            />
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-2 text-ocean hover:text-sunset transition-colors hidden lg:block"
          >
            <ChevronRight size={60} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
