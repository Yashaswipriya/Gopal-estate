"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MenuOverlay from "@/components/MenuOverlay";
import Footer from "@/components/Footer";
import Image from "next/image";

interface Property {
  Project: string;
  Sector: string;
  Size: string;
  CurrentRate: string;
  NewRate: string;
  AlamUpdateDate: string;
  BHK: string;
}

interface PropertyDetailsClientProps {
  property: Property;
  image: string; 
}

const PropertyDetailsClient: React.FC<PropertyDetailsClientProps> = ({ property, image }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <main className="bg-white text-zinc-800">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>

      {/* Hero Image */}
      <div className="mb-12">
        <Image
          src={image}
          alt={property.Project}
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <h1 className="text-4xl font-semibold mb-10 text-zinc-900">{property.Project}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {[
            { label: "Sector", value: property.Sector },
            { label: "Current Rate", value: property.CurrentRate },
            { label: "Size", value: property.Size },
            { label: "New Rate", value: property.NewRate || "N/A" },
            { label: "Configuration (BHK)", value: property.BHK },
            { label: "Updated", value: property.AlamUpdateDate },
          ].map((detail, index) => (
            <div key={index} className="border-b border-zinc-200 pb-4">
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 mb-2">
                {detail.label}
              </p>
              <p className="text-xl text-zinc-900">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PropertyDetailsClient;