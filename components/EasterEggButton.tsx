"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Coffee, Music, Code2, Gamepad2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const easterEggs = [
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "Coffee Connoisseur",
    content: "200+ cups of coffee consumed this year. Favorite: Ethiopian single origin with notes of blueberry.",
    gradient: "from-amber-500 via-orange-500 to-red-600"
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Coding Soundtrack",
    content: "Currently vibing to: Lo-fi hip hop, Movie scores, and the occasional death metal (for those tricky bugs).",
    gradient: "from-purple-500 via-pink-500 to-rose-600"
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Side Projects",
    content: "Built 47 side projects. 3 became profitable, 12 are still running, and 32 taught me valuable lessons.",
    gradient: "from-green-500 via-emerald-500 to-teal-600"
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Gaming Setup",
    content: "Mechanical keyboard enthusiast. Current board: Custom 65% with Gateron Oil Kings. Click-clack level: Expert.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600"
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Life Philosophy",
    content: "\"Code is poetry, bugs are typos, and every error message is just the computer's way of asking for help.\"",
    gradient: "from-rose-500 via-pink-500 to-violet-600"
  }
];

export default function EasterEggButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEgg, setCurrentEgg] = useState(0);

  const nextEasterEgg = () => {
    setCurrentEgg((prev) => (prev + 1) % easterEggs.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80"
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className={`h-1 bg-gradient-to-r ${easterEggs[currentEgg].gradient}`} />
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${easterEggs[currentEgg].gradient} text-white`}>
                      {easterEggs[currentEgg].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {easterEggs[currentEgg].title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {easterEggs[currentEgg].content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {easterEggs.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentEgg ? 'bg-blue-500' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      onClick={nextEasterEgg}
                      variant="ghost"
                      size="sm"
                      className="text-xs"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r ${easterEggs[currentEgg].gradient} text-white shadow-lg flex items-center justify-center transition-all duration-300`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
