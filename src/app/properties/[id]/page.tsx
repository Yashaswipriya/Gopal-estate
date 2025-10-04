import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { projectImages, defaultPropertyImage } from "@/utils/propertyImages";
import PropertyDetailsClient from "@/components/PropertyDetailsClient";

// Define a specific and correct type for this page's props
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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

// Apply the new 'Props' type to the component's arguments
export default async function PropertyDetailsPage({ params }: Props) {
  const projectSlug = params.id.trim().toLowerCase().replace(/\s+/g, "-");
  
  const data = await getPropertyData(projectSlug);

  if (!data) {
    return <div className="p-12">Property not found.</div>;
  }

  return <PropertyDetailsClient property={data.property} images={data.images} />;
}