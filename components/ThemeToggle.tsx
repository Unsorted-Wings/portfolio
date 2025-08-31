"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Linkedin, Contact, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="w-3 h-3 sm:w-4 sm:h-4" />;
    return <Moon className="w-3 h-3 sm:w-4 sm:h-4" />;
  };

  const getRotation = () => {
    if (theme === "light") return 0;
    return 360;
  };

  const contactButtons = [
    {
      icon: <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-shukla-a8729124b/",
      color: "hover:bg-blue-500/10 hover:text-blue-600 hover:border-blue-500/30"
    },
    {
      icon: <Download className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: "Resume",
      href: "/Resume_Rohit_Shukla.pdf",
      color: "hover:bg-orange-500/10 hover:text-orange-600 hover:border-orange-500/30",
      isDownload: true
    }
  ];

  const contactOptions = [
    { label: "Email", href: "mailto:shuklarohit2105@gmail.com" },
    { label: "Call", href: "tel:+919316331662" }
  ];

  if (!mounted) {
    return (
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2">
            {contactButtons.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full bg-card/80 backdrop-blur-sm border-border w-8 h-8 sm:w-10 sm:h-10"
                disabled
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-card/80 backdrop-blur-sm border-border w-8 h-8 sm:w-10 sm:h-10"
            disabled
          >
            <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[99999]">
      <motion.div 
        className="flex items-center gap-2 sm:gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Contact buttons - hidden on mobile, visible on sm+ */}
        <div className="hidden sm:flex items-center gap-2 relative">
          {contactButtons.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="relative"
            >
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className={`rounded-full bg-card/80 backdrop-blur-sm border-border transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10 ${contact.color}`}
                  title={contact.label}
                >
                  <motion.a
                    href={contact.href}
                    target={contact.isDownload ? "_self" : "_blank"}
                    rel={contact.isDownload ? undefined : "noopener noreferrer"}
                    download={contact.isDownload ? "Resume_Rohit_Shukla.pdf" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contact.icon}
                  </motion.a>
                </Button>
              </motion.div>
            ))}
          </div>

        {/* Theme toggle button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full bg-card/80 backdrop-blur-sm border-border hover:bg-accent transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10"
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
        </motion.div>
      </motion.div>
    </div>
  );
}
