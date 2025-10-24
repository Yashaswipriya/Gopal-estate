"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-center py-12 px-6">
      {/* Branding */}
      <div className="flex justify-center items-center mb-6">
        <Image src="/logo.png" alt="Gopal Estate Logo" height={80} width={80} />
        <h2 className="font-heading text-2xl tracking-widest uppercase">
          Gopal Estate
        </h2>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col sm:flex-row justify-center  gap-20 text-gray-600 text-md 2xl:gap-40 2xl:text-2xl">
        <p className="flex items-center gap-2">
          <MapPin size={20}/> Emaar Imperial Gardens,<br/> Sector 102, Gurgaon
        </p>
        <p className="flex items-center gap-2">
          <Phone size={20}/> +91 - 8610090520
        </p>
        <p className="flex items-center gap-2">
          <Mail size={20}/> gopal.rg1958@gmail.com
        </p>
      </div>

      <div className="w-24 h-[1px] bg-gray-300 mx-auto my-8"></div>
      <p className="text-xs text-gray-500 tracking-widest uppercase">
        © {new Date().getFullYear()} Gopal Estate — All Rights Reserved
      </p>
    </footer>
  );
}
