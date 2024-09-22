"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  //
}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();
  const items = [
    { name: "Home", path: "/" },

    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="flex items-center justify-center bg-white rounded-full border border-solid  shadow-md container mx-auto max-w-3xl my-6 py-3">
      {items.map((item) => (
        <Link href={item.path} key={item.name} passHref>
          <motion.span
            className={`relative px-4 py-2 rounded-full cursor-pointer ${
              pathname === item.path ? "text-white" : "text-black"
            }`}
          >
            {pathname === item.path && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-black rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </motion.span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
