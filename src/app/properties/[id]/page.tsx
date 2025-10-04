import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { projectImages, defaultPropertyImage } from "@/utils/propertyImages";
import PropertyDetailsClient from "@/components/PropertyDetailsClient";

// Rename to avoid clashing with Next.js' own PageProps
interface PropertyPageProps {
  params: { id: string };
}

// Helper function to get property data on the server
async function getPropertyData(slug: string) {
  const filePath = path.join(process.cwd(), "public", "properties.csv");
  const file = fs.readFileSync(filePath, "utf-8");

  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header: string) => header.replace(/\s+/g, ""),
  });

  const property = (data as any[]).find(
    (p) => p.Project.trim().toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!property) return null;

  const images = projectImages[property.Project] || defaultPropertyImage;
  return { property, images };
}

// Use the renamed type
export default async function PropertyDetailsPage({ params }: PropertyPageProps) {
  const projectSlug = params.id.trim().toLowerCase().replace(/\s+/g, "-");

  const data = await getPropertyData(projectSlug);

  if (!data) {
    return <div className="p-12">Property not found.</div>;
  }

  return <PropertyDetailsClient property={data.property} images={data.images} />;
}
