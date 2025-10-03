"use client";
import Link from "next/link";
import { projectImages, defaultPropertyImage } from "@/utils/propertyImages";

interface PropertyCardProps {
  property: {
    Project: string;
    Sector: string;
    Size: string;
    CurrentRate: string;
    BHK: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const images = projectImages[property.Project] || defaultPropertyImage;

const slugify = (str: string) =>
  str.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/properties/${slugify(property.Project)}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition">
        <img src={images.main} alt={property.Project} className="h-56 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{property.Project}</h2>
          <p className="text-sm text-gray-500">Sector {property.Sector}</p>
          <p className="text-sm">{property.BHK} | {property.Size}</p>
          <p className="text-pink-600 font-bold">{property.CurrentRate}</p>
        </div>
      </div>
    </Link>
  );
}
