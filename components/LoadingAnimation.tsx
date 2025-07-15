"use client";

import { motion } from "framer-motion";
import { Search, Code, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-slate-950 flex items-center justify-center z-50">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background text-foreground flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo with Search Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Main Logo Container */}
          <motion.div
            className="w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto shadow-lg relative overflow-hidden border border-border"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Search className="w-10 h-10 z-10" />
            
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-primary/20"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Original Floating Icons */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center border border-border shadow-sm"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 180, 360] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="w-3 h-3" />
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center border border-border shadow-sm"
            animate={{ 
              y: [0, 10, 0],
              rotate: [360, 180, 0] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>

          {/* Additional scattered floating elements */}
          <motion.div
            className="absolute -top-4 left-1/2 w-4 h-4 bg-muted text-muted-foreground rounded-full flex items-center justify-center border border-border shadow-sm transform -translate-x-1/2"
            animate={{ 
              x: [0, 15, 0],
              rotate: [0, 270, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-current rounded-full" />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 right-1/4 w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center border border-border shadow-sm"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -180, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <div className="w-2.5 h-2.5 bg-current rounded-full" />
          </motion.div>

          <motion.div
            className="absolute top-1/4 -left-6 w-4 h-4 bg-accent/30 text-accent rounded-full flex items-center justify-center border border-border shadow-sm"
            animate={{ 
              x: [0, -10, 0],
              y: [0, 8, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <div className="w-1.5 h-1.5 bg-current rounded-full" />
          </motion.div>

          <motion.div
            className="absolute top-3/4 -right-6 w-3 h-3 bg-secondary/40 text-secondary rounded-full flex items-center justify-center border border-border shadow-sm"
            animate={{ 
              x: [0, 12, 0],
              y: [0, -12, 0],
              rotate: [0, -270, 0],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <div className="w-1 h-1 bg-current rounded-full" />
          </motion.div>

          <motion.div
            className="absolute -top-6 left-1/4 w-3 h-3 bg-primary/30 rounded-full border border-border shadow-sm"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 5, 0],
              rotate: [0, 180, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

          <motion.div
            className="absolute bottom-1/3 -left-8 w-5 h-5 bg-muted/50 text-muted-foreground rounded-full flex items-center justify-center border border-border shadow-sm"
            animate={{ 
              x: [0, -8, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-2 h-2 bg-current rounded-full" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 -right-8 w-4 h-4 bg-accent/40 rounded-full border border-border shadow-sm"
            animate={{ 
              x: [0, 10, 0],
              y: [0, 6, 0],
              rotate: [0, -360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          />

          {/* Small floating particles */}
          <motion.div
            className="absolute -top-8 -left-4 w-2 h-2 bg-primary/50 rounded-full"
            animate={{
              y: [0, -15, 0],
              x: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />

          <motion.div
            className="absolute -bottom-8 -right-4 w-2 h-2 bg-secondary/50 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, 8, 0],
              opacity: [0.5, 1, 0.5],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        {/* Loading Text with Typewriter Effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-light text-foreground mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Discover Rohit
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Preparing your search experience...
          </motion.p>
        </motion.div>

        {/* Modern Loading Bar */}
        <motion.div
          className="w-64 h-1 bg-muted rounded-full mx-auto mt-8 overflow-hidden border border-border/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-primary rounded-full shadow-sm"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
        </motion.div>

        {/* Breathing Dots */}
        <motion.div
          className="flex justify-center space-x-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full shadow-sm"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Subtle hint text */}
        <motion.p 
          className="text-xs text-muted-foreground mt-6 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Built with Next.js • TypeScript • Tailwind CSS
        </motion.p>
      </div>
    </div>
  );
}
