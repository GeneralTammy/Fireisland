"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  price: string;
  address: string;
  community: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

const PropertyCard = ({
  price,
  address,
  community,
  beds,
  baths,
  sqft,
  image,
}: PropertyCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-sm overflow-hidden shadow-md border border-ocean/5 min-w-[350px]"
  >
    <div className="relative h-64">
      <img
        src={image}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        alt={address}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <div className="text-white text-2xl font-serif font-bold">{price}</div>
      </div>
    </div>
    <div className="p-6">
      <h4 className="font-serif text-xl text-ocean font-bold mb-1">
        {address}
      </h4>
      <p className="text-ocean/60 text-sm mb-6 uppercase tracking-widest font-bold">
        {community}
      </p>
      <div className="flex justify-between text-ocean/40 text-[10px] uppercase tracking-[0.2em] font-bold border-t border-ocean/10 pt-4">
        <div className="flex flex-col items-center gap-1">
          <span>{beds}</span> <span>Beds</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span>{baths}</span> <span>Baths</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span>{sqft}</span> <span>SqFt</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default PropertyCard;
