"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

export default function Listings() {
  const [filter, setFilter] = useState("all");
  
  const properties = [
    { price: "$1,250,000", address: "123 Ocean Breeze", community: "Saltaire, NY", beds: 4, baths: 3, sqft: 2200, type: "sale", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80" },
    { price: "$8,500 /wk", address: "45 Dune Road", community: "Fair Harbor, NY", beds: 3, baths: 2, sqft: 1800, type: "rental", image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80" },
    { price: "$2,100,000", address: "88 Bayview Terrace", community: "Kismet, NY", beds: 5, baths: 4, sqft: 3500, type: "sale", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80" },
    { price: "$12,000 /wk", address: "12 Seaview Walk", community: "Ocean Beach, NY", beds: 4, baths: 3, sqft: 2400, type: "rental", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { price: "$950,000", address: "77 Pine Walk", community: "Cherry Grove, NY", beds: 2, baths: 2, sqft: 1200, type: "sale", image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=800&q=80" },
    { price: "$6,000 /wk", address: "33 Surf Road", community: "Davis Park, NY", beds: 3, baths: 1, sqft: 1500, type: "rental", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
  ];

  const filtered = properties.filter(p => filter === "all" || p.type === filter);

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-serif uppercase tracking-widest text-ocean mb-4">Current Listings</h1>
            <p className="text-ocean/60">Explore the finest properties across Fire Island.</p>
          </div>
          <div className="flex bg-white border border-ocean/10 p-1 rounded-sm">
            {["all", "sale", "rental"].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${filter === f ? "bg-sunset text-white" : "text-ocean/60 hover:text-ocean"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
