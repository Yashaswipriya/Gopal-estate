import Papa from "papaparse";

export interface Property {
  Sector: string;
  Project: string;
  Size: string;
  CurrentRate: string;
  NewRate: string;
  AlamUpdateDate: string;
  BHK: string;
}

// Async function to load properties from public folder (browser-safe)
export async function loadProperties(): Promise<Property[]> {
  const res = await fetch("/properties.csv"); // CSV in public folder
  const csvText = await res.text();

  const { data } = Papa.parse<Property>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return data as Property[];
}
