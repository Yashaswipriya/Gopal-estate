import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { projectImages, defaultPropertyImage } from "@/utils/propertyImages";

interface Property {
  Project: string;
  Sector: string;
  Size: string;
  CurrentRate: string; // after transformHeader
  NewRate: string;
  AlamUpdateDate: string;
  BHK: string;
}

export default function PropertyDetails(props: any) {
  const { params } = props;
  const projectSlug = params.id.trim().toLowerCase().replace(/\s+/g, "-");

  // server-side CSV reading
  const filePath = path.join(process.cwd(), "public", "properties.csv");
  const file = fs.readFileSync(filePath, "utf-8");

  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.replace(/\s+/g, ""),
  });

  const property = (data as any[]).find(
    (p) => p.Project.trim().toLowerCase().replace(/\s+/g, "-") === projectSlug
  );

  if (!property) return <div className="p-12">Property not found.</div>;

  const images = projectImages[property.Project] || defaultPropertyImage;

  return (
    <main className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">{property.Project}</h1>
      <div className="mb-6">
        <img
          src={images.main}
          alt={property.Project}
          className="w-full h-[500px] object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <p><strong>Sector:</strong> {property.Sector}</p>
          <p><strong>Size:</strong> {property.Size}</p>
          <p><strong>BHK:</strong> {property.BHK}</p>
        </div>
        <div className="space-y-2">
          <p><strong>Current Rate:</strong> {property.CurrentRate}</p>
          <p><strong>New Rate:</strong> {property.NewRate || "N/A"}</p>
          <p><strong>Updated:</strong> {property.AlamUpdateDate}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.extras?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Extra ${idx}`}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </main>
  );
}
