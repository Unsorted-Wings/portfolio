"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Coffee, Music, Code2, Gamepad2, Camera, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const easterEggs = [
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "Coffee Connoisseur ☕",
    content: "200+ cups of coffee consumed this year. Favorite: Ethiopian single origin with notes of blueberry. Fun fact: I can identify coffee regions by taste!",
    gradient: "from-amber-500 via-orange-500 to-red-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/20"
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Coding Soundtrack 🎵",
    content: "Currently vibing to: Lo-fi hip hop, Movie scores, and the occasional death metal (for those tricky bugs). Spotify Wrapped: 87,000 minutes of coding music.",
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Side Projects 🚀",
    content: "Built 47 side projects. 3 became profitable, 12 are still running, and 32 taught me valuable lessons. GitHub streak: 847 days and counting!",
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Tech Enthusiast ⌨️",
    content: "Mechanical keyboard enthusiast. Current board: Custom 65% with Gateron Oil Kings. Click-clack level: Expert. Also owns 3 different mice for different tasks.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Life Philosophy 💭",
    content: "\"Code is poetry, bugs are typos, and every error message is just the computer's way of asking for help.\" Also believes in the power of rubber duck debugging.",
    gradient: "from-rose-500 via-pink-500 to-violet-600",
    bgColor: "bg-rose-50 dark:bg-rose-950/20"
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Random Facts ✨",
    content: "Can solve a Rubik's cube in under 2 minutes. Owns 12 houseplants (all named after programming languages). Favorite debugging method: explaining code to my cat.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
  }
];

export default function EasterEggButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEgg, setCurrentEgg] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextEasterEgg = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentEgg((prev) => (prev + 1) % easterEggs.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevEasterEgg = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentEgg((prev) => (prev - 1 + easterEggs.length) % easterEggs.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute bottom-16 sm:bottom-20 right-0 w-80 sm:w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="overflow-hidden border border-border/50 shadow-2xl bg-card/95 backdrop-blur-md">
              <CardContent className="p-0">
                {/* Gradient top bar */}
                <motion.div 
                  className={`h-1 bg-gradient-to-r ${easterEggs[currentEgg].gradient}`}
                  layoutId="gradient-bar"
                />
                
                {/* Header with close button */}
                <div className="flex items-center justify-between p-3 sm:p-4 pb-2">
                  <motion.h2 
                    className="text-base sm:text-lg font-bold text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`title-${currentEgg}`}
                  >
                    Fun Facts About Rohit
                  </motion.h2>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                  </motion.button>
                </div>

                {/* Content area */}
                <div className={`mx-3 sm:mx-4 mb-3 sm:mb-4 p-3 sm:p-4 rounded-xl transition-colors duration-300 ${easterEggs[currentEgg].bgColor}`}>
                  <motion.div 
                    className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    key={`content-${currentEgg}`}
                  >
                    <motion.div 
                      className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${easterEggs[currentEgg].gradient} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {easterEggs[currentEgg].icon}
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {easterEggs[currentEgg].title}
                      </motion.h3>
                      <motion.p 
                        className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {easterEggs[currentEgg].content}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation footer */}
                <div className="flex items-center justify-between p-3 sm:p-4 pt-0">
                  <div className="flex space-x-1">
                    {easterEggs.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          if (!isAnimating) {
                            setIsAnimating(true);
                            setCurrentEgg(index);
                            setTimeout(() => setIsAnimating(false), 300);
                          }
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                          index === currentEgg 
                            ? `bg-gradient-to-r ${easterEggs[currentEgg].gradient} shadow-sm` 
                            : 'bg-muted hover:bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-2">
                    <motion.button
                      onClick={prevEasterEgg}
                      whileHover={{ scale: 1.05, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isAnimating}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors disabled:opacity-50 flex items-center gap-1"
                    >
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-180" />
                      <span className="hidden sm:inline">Prev</span>
                    </motion.button>
                    <motion.button
                      onClick={nextEasterEgg}
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isAnimating}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-gradient-to-r ${easterEggs[currentEgg].gradient} text-white rounded-lg transition-all disabled:opacity-50 flex items-center gap-1 shadow-sm`}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </motion.button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action button */}
      <motion.div className="relative">
        {/* Pulse ring effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${easterEggs[currentEgg].gradient} opacity-30`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${easterEggs[currentEgg].gradient} text-white shadow-xl flex items-center justify-center transition-all duration-300 border-2 border-white/20`}
        >
          <motion.div
            animate={{ 
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 0.9 : 1
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
          </motion.div>
          
          {/* Floating particles */}
          {!isOpen && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full"
              animate={{
                y: [-15, -25],
                x: [0, (i - 1) * 8],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
              style={{
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)"
              }}
            />
          ))}
        </motion.button>
      </motion.div>
    </div>
  );
}
