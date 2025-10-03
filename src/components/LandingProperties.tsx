"use client";

import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { loadProperties, Property } from "@/utils/loadProperties";
import Link from "next/link";

export default function LandingProperties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    loadProperties().then((data) => {
      setProperties(data.slice(0, 6)); // take only first 6
    });
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((prop, idx) => (
          <PropertyCard key={idx} property={prop} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/properties">
          <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
            View All Properties
          </button>
        </Link>
      </div>
    </section>
  );
}
