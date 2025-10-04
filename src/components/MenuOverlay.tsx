import { motion } from "framer-motion";
import Link from "next/link"; // Assuming you're using Next.js

// Define the type for the props, including a function to close the menu
type MenuOverlayProps = {
  onClose: () => void;
};

// A variant for the container to orchestrate animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animate links one after another
    },
  },
};

// A variant for each menu item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  const menuItems = ["Home", "Properties", "About Us", "Contact"];

  return (
    <motion.div
      className="fixed inset-0 bg-white z-40 flex items-center justify-center"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.ul
        className="flex flex-col items-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.li key={item} variants={itemVariants}>
            <Link
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-4xl font-semibold text-zinc-800 hover:underline transition-colors"
              onClick={onClose} // Close menu when a link is clicked
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MenuOverlay;