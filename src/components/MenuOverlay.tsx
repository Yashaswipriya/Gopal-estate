import { motion } from "framer-motion";
import Link from "next/link";

type MenuOverlayProps = {
  onClose: () => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },        
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/#footer" },
];

  return (
    <motion.div
      className="fixed inset-0 bg-white z-40 flex items-center justify-center"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.ul
        className="flex flex-col items-center gap-15"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex flex-col items-center gap-15">
      {menuItems.map((item) => (
        <motion.li key={item.label} variants={itemVariants}>
          <Link
            href={item.href}
            className="text-4xl font-semibold text-zinc-800 hover:underline transition-colors"
            onClick={onClose}
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </ul>
      </motion.ul>
    </motion.div>
  );
};

export default MenuOverlay;