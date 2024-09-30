"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

interface NavbarProps {
  //
}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();
  const items = [
    { name: "Home", path: "/" },

    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Github", path: "https://github.com/damandeep611" },
  ];
  return (
    <nav className="flex items-center justify-center bg-white rounded-full border border-solid  shadow-md   my-6 px-6 py-2 fixed bottom-0 left-1/2 -translate-x-1/2  space-x-4">
      {items.map((item) => (
        <Link href={item.path} key={item.name} passHref>
          <motion.span
            className={`relative rounded-full cursor-pointer ${
              pathname === item.path ? "text-green-700 font-bold" : "text-black"
            }`}
          >
            {pathname === item.path && (
              <motion.div
                layoutId="active-pill"
                className="absolute  inset-0 bg-white rounded-full"
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
