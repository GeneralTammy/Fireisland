"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Event {
  date: string;
  title: string;
  location: string;
  time: string;
  price: string;
  image: string;
}

const events: Event[] = [
  {
    date: "MARCH 17",
    title: "St Patricks Bar Crawl",
    location: "Kismet",
    time: "3pm",
    price: "$30",
    image: "/123_1.JPG",
  },
  {
    date: "APRIL 4",
    title: "Easter Egg Hunt",
    location: "Davis Park",
    time: "8am-11am",
    price: "FREE",
    image: "/IMG_2234.JPG",
  },
  {
    date: "APRIL 22",
    title: "Community Bagel Breakfast",
    location: "Ocean Beach Office",
    time: "8am-11am",
    price: "FREE",
    image: "/IMG_4638.JPG",
  },
  {
    date: "MAY 15",
    title: "Summer Kickoff Beach Party",
    location: "Robert Moses Beach",
    time: "12pm-6pm",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "JUNE 10",
    title: "Sunset Yoga on the Beach",
    location: "Sailors Haven",
    time: "6pm-7:30pm",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "JULY 19",
    title: "Beach Cleanup & Music Night",
    location: "Cherry Grove",
    time: "4pm-9pm",
    price: "FREE",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
  },
];

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3;
  const totalEvents = events.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalEvents);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalEvents) % totalEvents);
  };

  // For desktop: we show 3 cards and slide the whole group
  const desktopEvents = Array.from({ length: visibleCount }).map((_, i) => {
    const index = (currentIndex + i) % totalEvents;
    return events[index];
  });

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-sunset text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header - unchanged */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-3 italic">
              Upcoming
            </h2>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] font-bold">
              COMMUNITY EVENTS
            </h3>
          </div>

          {/* ====================== DESKTOP SMOOTH SLIDING CAROUSEL (3 cards) ====================== */}
          <div className="hidden lg:block">
            <div className="relative flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="p-3 hover:text-beach transition-colors bg-white/10 rounded-full hover:bg-white/20 flex-shrink-0 z-10"
                aria-label="Previous events"
              >
                <ChevronLeft size={40} strokeWidth={1.5} />
              </button>

              <div className="overflow-hidden flex-1">
                <motion.div
                  className="flex gap-8"
                  animate={{
                    x: `-${currentIndex * (100 / visibleCount)}%`, // This creates the smooth slide
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                >
                  {/* Render enough cards to allow seamless looping */}
                  {[...events, ...events, ...events].map((event, idx) => (
                    <motion.div
                      key={`desktop-${idx}`}
                      className="flex-shrink-0 w-1/3" // 3 cards visible
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-xl h-full">
                        <div className="relative h-64">
                          <img
                            src={event.image}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            alt={event.title}
                            loading="lazy"
                          />
                          <div className="absolute bottom-4 left-4 bg-white p-3 text-center shadow-lg rounded-md">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/60 leading-none mb-1">
                              {event.date.split(" ")[0]}
                            </p>
                            <p className="text-xl font-serif font-bold text-ocean leading-none">
                              {event.date.split(" ")[1]}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 text-ocean">
                          <h4 className="font-serif text-xl font-bold mb-2 line-clamp-2">
                            {event.title}
                          </h4>
                          <p className="text-sm text-ocean/60 mb-6">
                            {event.location}
                          </p>
                          <div className="flex justify-between items-center pt-4 border-t border-ocean/10">
                            <span className="text-sm font-medium">
                              {event.time}
                            </span>
                            <span className="text-sm font-bold text-sunset">
                              {event.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 hover:text-beach transition-colors bg-white/10 rounded-full hover:bg-white/20 flex-shrink-0 z-10"
                aria-label="Next events"
              >
                <ChevronRight size={40} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* ====================== MOBILE + TABLET SMOOTH CAROUSEL ====================== */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 25,
                    duration: 0.45,
                  }}
                  className="px-4 sm:px-8"
                  drag="x" // Enable swipe
                  dragConstraints={{ left: -50, right: 50 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) prevSlide();
                    else if (info.offset.x < -80) nextSlide();
                  }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                    <div className="relative h-56 sm:h-64 md:h-72">
                      <img
                        src={events[currentIndex].image}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        alt={events[currentIndex].title}
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-white p-3 text-center shadow-lg rounded-md">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-ocean/60 leading-none mb-1">
                          {events[currentIndex].date.split(" ")[0]}
                        </p>
                        <p className="text-xl font-serif font-bold text-ocean leading-none">
                          {events[currentIndex].date.split(" ")[1]}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 text-ocean">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold mb-3">
                        {events[currentIndex].title}
                      </h4>
                      <p className="text-base text-ocean/60 mb-6">
                        {events[currentIndex].location}
                      </p>
                      <div className="flex justify-between items-center pt-4 border-t border-ocean/10">
                        <span className="text-base font-medium">
                          {events[currentIndex].time}
                        </span>
                        <span className="text-base font-bold text-sunset">
                          {events[currentIndex].price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all z-10"
                aria-label="Previous event"
              >
                <ChevronLeft size={28} className="text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all z-10"
                aria-label="Next event"
              >
                <ChevronRight size={28} className="text-white" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {events.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to event ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* See All Events Button */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20">
            <button className="bg-beach text-ocean px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 hover:scale-105 transition-all duration-300 rounded-md shadow-md">
              SEE ALL EVENTS
            </button>
          </div>
        </div>
      </section>

      {/* Your Fire Island section remains unchanged */}
    </>
  );
};

export default EventsSection;
