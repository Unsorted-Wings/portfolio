"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-card/80 backdrop-blur-sm border-border"
          disabled
        >
          <Sun className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="w-4 h-4" />;
    return <Moon className="w-4 h-4" />;
  };

  const getRotation = () => {
    if (theme === "light") return 0;
    return 360;
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="rounded-full bg-card/80 backdrop-blur-sm border-border hover:bg-accent transition-all duration-200"
        title={`Current theme: ${theme}. Click to toggle between light and dark.`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: getRotation() }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {getIcon()}
        </motion.div>
      </Button>
    </div>
  );
}
