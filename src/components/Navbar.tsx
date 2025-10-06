import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for the component's props
type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="sticky top-0 w-full bg-black text-white p-4 flex items-center justify-between relative z-50">
      {/* Left Side: Hamburger Button */}
      <div className="w-8 h-10">
        <button
          className="w-full h-full relative flex items-center justify-center"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {/* Top line of hamburger/X */}
          <motion.span
            className="absolute block h-[1.5px] w-full bg-white origin-center"
            animate={
              menuOpen
                ? { rotate: 45, y: 0 }
                : { rotate: 0, y: -4 }
            }
            transition={{ duration: 0.3 }}
          />
          {/* Bottom line of hamburger/X */}
          <motion.span
            className="absolute block h-[1.5px] w-full bg-white origin-center"
            animate={
              menuOpen
                ? { rotate: -45, y: 0 }
                : { rotate: 0, y: 4 }
            }
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 invert fill">
      <Link href="/">
        <Image src="/logo.png" alt="Gopal Estate Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Right Side: Spacer to keep logo centered */}
      <div className="w-8 h-8" />
    </nav>
  );
};

export default Navbar;