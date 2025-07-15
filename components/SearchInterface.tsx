"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Code, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";
import EasterEggButton from "@/components/EasterEggButton";
import LoadingAnimation from "@/components/LoadingAnimation";

const searchQueries = [
  "Who is Rohit?",
  "Rohit's experience at",
  "Best projects by Rohit",
  "Rohit's technical skills",
  "How to contact Rohit",
  "Rohit's leadership style",
  "Innovative solutions by Rohit",
  "Rohit's achievements",
  "Work culture at Rohit's teams",
  "Rohit's future goals"
];

const searchResults = {
  "Who is Rohit?": {
    icon: <Brain className="w-6 h-6" />,
    title: "Senior Software Engineer & Tech Innovator",
    description: "A passionate technologist with 8+ years of experience building scalable systems and leading high-performing teams. Known for turning complex problems into elegant solutions.",
    details: [
      "Full-stack engineer with expertise in modern web technologies",
      "Experience scaling applications to millions of users",
      "Passionate about clean code, system design, and user experience",
      "Mentor and technical leader who loves growing talent"
    ]
  },
  "Rohit's experience at": {
    icon: <Code className="w-6 h-6" />,
    title: "Professional Journey",
    description: "Built my career at top-tier companies, solving complex technical challenges and leading transformative projects.",
    details: [
      "Senior SWE at TechCorp - Led microservices architecture migration",
      "Team Lead at InnovateLabs - Scaled platform from 10K to 1M+ users", 
      "Full-Stack Developer at StartupXYZ - Built core product from ground up",
      "Founded TechSolutions - Delivered consulting for 50+ clients"
    ]
  },
  "Best projects by Rohit": {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Featured Projects",
    description: "A collection of projects that showcase innovation, technical excellence, and real-world impact.",
    details: [
      "CloudSync Pro - Real-time collaboration platform (React, Node.js, WebRTC)",
      "AI-Powered Analytics Dashboard - ML-driven insights (Python, TensorFlow, React)",
      "Distributed Payment System - High-throughput financial platform (Go, Kafka, PostgreSQL)",
      "Mobile-First E-commerce - Full-stack solution (React Native, GraphQL, MongoDB)"
    ]
  },
  "Rohit's technical skills": {
    icon: <Zap className="w-6 h-6" />,
    title: "Technical Expertise",
    description: "Deep expertise across the full technology stack with a focus on modern, scalable solutions.",
    details: [
      "Languages: TypeScript, Python, Go, Java, Rust",
      "Frontend: React, Next.js, Vue.js, React Native, Tailwind CSS",
      "Backend: Node.js, Express, FastAPI, GraphQL, REST APIs", 
      "Infrastructure: AWS, Docker, Kubernetes, Terraform, CI/CD"
    ]
  },
  "How to contact Rohit": {
    icon: <Search className="w-6 h-6" />,
    title: "Let's Connect",
    description: "Always excited to discuss new opportunities, collaborate on interesting projects, or just chat about technology.",
    details: [
      "📧 rohit@example.com",
      "💼 linkedin.com/in/rohit-dev",
      "🐙 github.com/rohit-dev",
      "🌐 rohit-portfolio.dev"
    ]
  },
  "Rohit's achievements": {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Key Achievements",
    description: "Recognition and milestones that define my professional journey and impact on teams and products.",
    details: [
      "🏆 Employee of the Year 2023 - Led critical infrastructure migration",
      "📈 Increased team productivity by 40% through process optimization", 
      "🎯 Delivered 15+ projects on time with 99.9% uptime",
      "👥 Mentored 20+ junior developers, 8 got promoted"
    ]
  },
  "Work culture at Rohit's teams": {
    icon: <Brain className="w-6 h-6" />,
    title: "Team Culture & Philosophy",
    description: "Creating environments where innovation thrives and every team member feels empowered to do their best work.",
    details: [
      "🤝 Collaborative decision-making with psychological safety",
      "📚 Learning culture with weekly tech talks and knowledge sharing",
      "⚡ Agile mindset with focus on continuous improvement",
      "🎉 Work-life balance with flexible schedules and remote options"
    ]
  },
  "Rohit's future goals": {
    icon: <Zap className="w-6 h-6" />,
    title: "Vision & Future Goals",
    description: "Constantly evolving and pushing boundaries to create meaningful impact in technology and beyond.",
    details: [
      "🚀 Lead engineering teams at unicorn startups or FAANG companies",
      "🌍 Build products that positively impact millions of users globally",
      "📖 Contribute to open source and write technical blog posts",
      "🎓 Eventually transition into tech leadership and strategic roles"
    ]
  }
};

export default function SearchInterface() {
  const [currentQuery, setCurrentQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // Show loading animation for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setCurrentQuery(query);
    setIsSearching(true);
    setShowResults(false);
    setHasSearched(true);
    
    // Add to search history
    setSearchHistory(prev => [query, ...prev.filter(q => q !== query)].slice(0, 5));
    
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1200);
  };

  const currentResult = searchResults[currentQuery as keyof typeof searchResults];

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <ThemeToggle />
      <EasterEggButton />
      
      {/* Main Content */}
      <div className={`transition-all duration-700 ease-in-out ${
        hasSearched 
          ? 'pt-4' 
          : 'flex flex-col min-h-screen'
      }`}>
        
        {/* Initial Google-like centered layout */}
        {!hasSearched && (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            {/* Logo and Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Search className="w-9 h-9 text-primary-foreground" />
                </div>
                <h1 className="text-6xl font-light text-foreground tracking-tight">
                  Discover Rohit
                </h1>
              </div>
            </motion.div>

            {/* Search Bar - Google style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-2xl mb-8"
            >
              <div className="relative">
                <div className="flex items-center bg-card rounded-full shadow-lg border border-border hover:shadow-xl transition-all duration-300 focus-within:shadow-xl focus-within:border-primary/50 backdrop-blur-sm">
                  <div className="pl-6">
                    <Search className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    value={currentQuery}
                    onChange={(e) => setCurrentQuery(e.target.value)}
                    placeholder="Search about Rohit's journey..."
                    className="flex-1 px-4 py-5 text-lg bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && currentQuery.trim()) {
                        handleSearch(currentQuery);
                      }
                    }}
                  />
                  <div className="pr-4">
                    <Button
                      onClick={() => currentQuery.trim() && handleSearch(currentQuery)}
                      size="sm"
                      className="rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                      disabled={!currentQuery.trim()}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google-style buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 mb-8"
            >
              <Button
                variant="outline"
                onClick={() => handleSearch("Who is Rohit?")}
                className="px-6 py-3 text-sm border-border hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                About Rohit
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSearch("Best projects by Rohit")}
                className="px-6 py-3 text-sm border-border hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Quick suggestions */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">Or try these searches:</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-xl">
                {searchQueries.slice(0, 6).map((query, index) => (
                  <button
                    key={query}
                    onClick={() => handleSearch(query)}
                    className="px-3 py-1 text-xs text-primary hover:underline transition-colors duration-200"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Compact header for search results */}
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background border-b backdrop-blur-sm border-border px-6 pb-6"
          >
            <div className="max-w-7xl mx-auto flex items-center gap-6">
              {/* Compact logo and search */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-medium text-foreground">Discover Rohit</h1>
              </div>
              
              {/* Compact search bar */}
              <div className="flex-1 max-w-2xl">
                <div className="flex items-center bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-all duration-200 focus-within:shadow-md focus-within:border-primary/50">
                  <div className="pl-4">
                    <Search className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    value={currentQuery}
                    onChange={(e) => setCurrentQuery(e.target.value)}
                    placeholder="Search about Rohit..."
                    className="flex-1 px-3 py-3 text-sm bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && currentQuery.trim()) {
                        handleSearch(currentQuery);
                      }
                    }}
                  />
                  <Button
                    onClick={() => currentQuery.trim() && handleSearch(currentQuery)}
                    size="sm"
                    className="mr-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-1 text-xs"
                    disabled={!currentQuery.trim()}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Loading State */}
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="flex space-x-1 mb-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <p className="text-muted-foreground">Searching...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results */}
      <AnimatePresence>
        {showResults && currentResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto mt-8 px-6"
          >
            <Card className="overflow-hidden shadow-xl bg-card backdrop-blur-sm border">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                      {currentResult.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {currentResult.title}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {currentResult.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    {currentResult.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-muted rounded-lg border"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* More Search Suggestions */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-muted-foreground mb-4">Try another search:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {searchQueries.filter(q => q !== currentQuery).slice(0, 3).map((query) => (
                  <Button
                    key={query}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSearch(query)}
                    className="text-primary hover:bg-accent"
                  >
                    {query}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search History */}
      {searchHistory.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto px-6 mt-12 pb-12"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Recent searches</h3>
          <div className="space-y-2">
            {searchHistory.map((query, index) => (
              <button
                key={index}
                onClick={() => handleSearch(query)}
                className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-accent rounded-lg transition-colors"
              >
                <Search className="w-4 h-4 inline mr-2 text-muted-foreground" />
                {query}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
