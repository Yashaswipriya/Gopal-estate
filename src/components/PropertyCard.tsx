"use client";
import Link from "next/link";
import { projectImages, defaultPropertyImage } from "@/utils/propertyImages";
import Image from "next/image";

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
const imageSrc = projectImages[property.Project] || defaultPropertyImage;

  const slugify = (str: string) =>
    str.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/properties/${slugify(property.Project)}`}>
      <div className="bg-white overflow-hidden hover:scale-105 transition">
        <Image
          height={400}
          width={600}
          src={imageSrc}
          alt={property.Project}
          className="h-56 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold uppercase">{property.Project}</h2>
          <p className="text-md">Sector: {property.Sector}</p>
          <p className="text-md">
            {property.BHK} | {property.Size}
          </p>
          <p className="text-md">Current Rate: {property.CurrentRate}</p>
        </div>
      </div>
    </Link>
  );
}
