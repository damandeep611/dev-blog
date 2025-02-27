'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from "lucide-react";
import { BsGear, BsGearWideConnected } from "react-icons/bs";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };
  return (
    <div className="flex items-center space-x-2">
      <button onClick={handleClick} className="px-3 py-1 rounded-md">
        {theme === "light" && <Sun />}
        {theme === "dark" && <Moon />}
        {theme === "system" && <BsGear />}
      </button>
    </div>
  );
}