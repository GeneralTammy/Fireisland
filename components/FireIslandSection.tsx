"use client";

const FireIslandSection = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] flex flex-col overflow-hidden">
      {/* Clear Background Image */}
      <img
        src="/Untitled design (2).png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Fire Island Map"
      />

      {/* Content - Top Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-12 md:pt-16 lg:pt-20">
        <div className="max-w-2xl">
          {/* "GET TO KNOW" label */}
          <div className="mb-4 md:mb-6">
            <p
              className="font-sans text-xs md:text-sm tracking-widest mb-1 md:mb-2 font-black"
              style={{ color: "#185b89" }}
            >
              GET TO KNOW
            </p>

            {/* "FIRE ISLAND" styled like "Upcoming" */}
            <h2
              className="font-hand text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic mb-2 font-bold"
              style={{ color: "#185b89" }}
            >
              Fire Island
            </h2>
          </div>
        </div>
      </div>

      {/* Description Text - Adjusted to bottom with 2rem spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full mt-auto pb-8 md:pb-8 lg:pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed font-bold"
            style={{ color: "#185b89" }}
          >
            Fire Island is all about community—and so are we. Whether you're
            looking for a rental, searching for your dream home, need the
            perfect renter for your property, are ready to sell OR just want a
            great contractor recommendation, we're here for it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FireIslandSection;
