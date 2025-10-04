"use client";
import { useEffect, useState } from "react";
import { loadProperties, Property } from "@/utils/loadProperties";
import PropertyCard from "@/components/PropertyCard";

// 1. Import Navbar components
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MenuOverlay from "@/components/MenuOverlay";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  
  // 2. Add state for the menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    loadProperties().then((data) => setProperties(data));
  }, []);

  return (
    <>
      {/* 3. Add the Navbar and MenuOverlay */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>

      {/* Added top padding (pt-28) to push content below the navbar */}
      <main className="px-6 py-12 pt-28 bg-gray-50">
        <h1 className="text-4xl font-bold mb-10 uppercase">All Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop, idx) => (
            <PropertyCard key={idx} property={prop} />
          ))}
        </div>
      </main>
    </>
  );
}