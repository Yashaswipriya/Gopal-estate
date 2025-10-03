"use client";
import { useEffect, useState } from "react";
import { loadProperties, Property } from "@/utils/loadProperties";
import PropertyCard from "@/components/PropertyCard";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    loadProperties().then((data) => setProperties(data));
  }, []);

  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((prop, idx) => (
          <PropertyCard key={idx} property={prop} />
        ))}
      </div>
    </main>
  );
}
