"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Code, Brain, Zap, Mail, Phone, Linkedin, Github, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactBar from "@/components/ThemeToggle";
import EasterEggButton from "@/components/EasterEggButton";
import LoadingAnimation from "@/components/LoadingAnimation";

const searchQueries = [
  "Who is Rohit?",
  "Rohit's experience at",
  "Best projects by Rohit",
  "Rohit's technical skills",
  "How to contact Rohit",
  "Rohit's achievements",
  "Rohit's working culture",
  "Rohit's future goals"
];

const searchResults = {
  "Who is Rohit?": {
    icon: <Brain className="w-6 h-6" />,
    title: "Full-Stack Developer & Computer Science Student",
    description: "Software developer skilled in building full-stack applications using Next.js, Node.js, and Firebase. Strong foundation in both frontend and backend technologies with hands-on startup experience. Passionate about team-building, event organization, and leading initiatives.",
    details: [
      "B.Sc. Computer Science student at Gujarat University (CGPA: 8.0)",
      "Core Team Member at DaftarOS startup with full-stack development experience",
      "Freelance developer since 2022 serving startups and businesses",
      "Event organizer and leader with experience managing state-level techfests"
    ]
  },
  "Rohit's experience at": {
    icon: <Code className="w-6 h-6" />,
    title: "Professional Experience",
    description: "Hands-on experience combining startup development, freelance projects, and operational responsibilities across diverse technical environments.",
    details: [
      "Core Team Member at DaftarOS (Dec 2024 – Jun 2025) - Built core features with Next.js, Node.js, Supabase",
      "Freelance Developer (2022 – Present) - Delivered scalable websites using React, HTML/CSS", 
      "Startup Operations - Managed team syncs, onboarding, and coordinated development workflows",
      "Cross-platform Development - Built responsive UIs and deployed full-stack applications"
    ]
  },
  "Best projects by Rohit": {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Featured Projects",
    description: "Academic and professional projects showcasing full-stack development skills with modern technologies and scalable architecture.",
    details: [
      "Department Campus Support (DCS) - All-in-one academic platform for schedule tracking, assignments, and announcements | Tech: Next.js, Tailwind, Shadcn, Firebase, Cloudinary | [GitHub](https://github.com/Unsorted-Wings/Digital-Campus-Support) | [Live Demo](https://digital-campus-support.vercel.app/)",
      "Attendance Management System - College attendance portal with modern UI and full-stack features | Tech: Next.js, Shadcn, MongoDB | [Live Demo](https://attendence-system-1910.vercel.app/users/login)",
      "Portfolio Website - This interactive Google-inspired portfolio with advanced animations and responsive design | Tech: Next.js, TypeScript, Framer Motion, Tailwind CSS | [GitHub](https://github.com/Unsorted-Wings/portfolio) | [Live Demo](https://rohit-shukla-portfolio.vercel.app)",
      "Freelance Client Projects - Multiple custom websites and applications delivered for startups and businesses | Tech: React, Shopify, HTML/CSS | [Contact for Details](mailto:shuklarohit2105@gmail.com)"
    ]
  },
  "Rohit's technical skills": {
    icon: <Zap className="w-6 h-6" />,
    title: "Technical Skills",
    description: "Comprehensive skill set spanning multiple programming languages, modern frameworks, and development tools for full-stack development.",
    details: [
      "Languages: [C++](https://cplusplus.com/), [JavaScript](https://javascript.info/), [Java](https://docs.oracle.com/en/java/), HTML5, CSS3",
      "Frontend: [React.js](https://reactjs.org/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) components",
      "Backend: [Node.js](https://nodejs.org/), [MongoDB](https://mongodb.com/), [MySQL](https://mysql.com/), [Firebase](https://firebase.google.com/), [Supabase](https://supabase.io/)", 
      "Tools: [Git](https://git-scm.com/), [Postman](https://postman.com/), [VS Code](https://code.visualstudio.com/), [Cloudinary](https://cloudinary.com/), [Shopify](https://shopify.com/)"
    ]
  },
  "How to contact Rohit": {
    icon: <Search className="w-6 h-6" />,
    title: "Let's Connect",
    description: "Based in Ahmedabad, Gujarat. Open to new opportunities, collaborations, and connecting with fellow developers and tech enthusiasts.",
    details: [
      "📧 Email: [shuklarohit2105@gmail.com](mailto:shuklarohit2105@gmail.com) - For professional inquiries and collaboration",
      "📱 Phone: [+91 9316331662](tel:+919316331662) - Available for direct calls and WhatsApp",
      "💼 LinkedIn: [rohit-shukla-a8729124b](https://www.linkedin.com/in/rohit-shukla-a8729124b/) - Connect for networking and opportunities",
      "🌐 Portfolio: [rohit-shukla-portfolio.vercel.app](https://rohit-shukla-portfolio.vercel.app) - This interactive portfolio website",
      "📂 GitHub: [github.com/Unsorted-Wings](https://github.com/Unsorted-Wings) - Check out my code repositories and contributions",
      "📍 Location: Ahmedabad, Gujarat, India - Open to remote work and local opportunities"
    ]
  },
  "Rohit's achievements": {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Key Achievements & Leadership",
    description: "Academic excellence combined with leadership roles in organizing major events and representing the university at state-level platforms.",
    details: [
      "📚 Maintaining 8.0 CGPA in B.Sc. Computer Science at Gujarat University",
      "🏆 Lead Organizer for Tech Kaushalya 2024 - State-level techfest with team management",
      "🎯 Student Delegate at Vibrant Gujarat 2024 representing Gujarat University",
      "🌱 Core Member of a startup incubated at [Gujarat University](https://www.gujaratuniversity.ac.in/)"
    ]
  },
  "Rohit's Work culture": {
    icon: <Brain className="w-6 h-6" />,
    title: "Leadership & Collaboration Style",
    description: "Experienced in leading large-scale events, managing diverse teams, and fostering collaborative environments in both academic and professional settings.",
    details: [
      "🎪 Event Leadership - Successfully organized Tech Kaushalya 2024 and Jubin Nautiyal Concert",
      "👥 Team Management - Coordinated planning, logistics, and team syncs to ensure smooth execution",
      "🤝 Collaboration - Talking to stakeholders and team members to foster a collaborative environment",
      "📋 Operations Focus - Balanced coding responsibilities with planning and coordination tasks"
    ]
  },
  "Rohit's future goals": {
    icon: <Zap className="w-6 h-6" />,
    title: "Future Aspirations & Goals",
    description: "Focused on continuous learning and growth in the tech industry. And in the end developing something impactful from India.",
    details: [
      "🎓 Complete B.Sc. Computer Science degree with high academic standing (graduating July 2025)",
      "🚀 Expand expertise in modern web technologies and cloud platforms",
      "🤝 Continue combining technical development with leadership and event management skills"
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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCompactSuggestions, setShowCompactSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);

  // Helper function to parse and render links in text
  const parseTextWithLinks = (text: string) => {
    // Regex to match [text](url) markdown-style links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // Check if this is a contact link that should be rendered as a button
      const linkText = match[1];
      const linkUrl = match[2];
      const isContactLink = linkUrl.startsWith('mailto:') || linkUrl.startsWith('tel:') || 
                           linkUrl.includes('linkedin.com') || linkUrl.includes('github.com') ||
                           linkText.toLowerCase().includes('portfolio') || linkText.toLowerCase().includes('contact');
      
      if (isContactLink) {
        // Determine the appropriate icon based on the link type
        let icon = null;
        if (linkUrl.startsWith('mailto:')) {
          icon = <Mail className="w-4 h-4 mr-2" />;
        } else if (linkUrl.startsWith('tel:')) {
          icon = <Phone className="w-4 h-4 mr-2" />;
        } else if (linkUrl.includes('linkedin.com')) {
          icon = <Linkedin className="w-4 h-4 mr-2" />;
        } else if (linkUrl.includes('github.com')) {
          icon = <Github className="w-4 h-4 mr-2" />;
        } else if (linkText.toLowerCase().includes('portfolio') || linkUrl.includes('vercel.app')) {
          icon = <Globe className="w-4 h-4 mr-2" />;
        } else if (linkText.toLowerCase().includes('location')) {
          icon = <MapPin className="w-4 h-4 mr-2" />;
        }

        // Render contact links as prominent buttons
        parts.push(
          <Button
            key={match.index}
            variant="outline"
            size="sm"
            className="mx-1 my-1 h-auto py-2 px-3 bg-primary/10 hover:bg-primary/20 border-primary/30 hover:border-primary/50 text-primary hover:text-primary/90 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              if (linkUrl.startsWith('mailto:') || linkUrl.startsWith('tel:')) {
                window.location.href = linkUrl;
              } else {
                window.open(linkUrl, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium flex items-center"
            >
              {icon}
              {linkText}
            </motion.span>
          </Button>
        );
      } else {
        // Render regular links as enhanced text links
        parts.push(
          <motion.a
            key={match.index}
            href={linkUrl}
            target={linkUrl.startsWith('mailto:') || linkUrl.startsWith('tel:') ? '_self' : '_blank'}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200 font-medium inline-block"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
          </motion.a>
        );
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 1 ? parts : text;
  };

  // Get filtered suggestions based on current query
  const getFilteredSuggestions = () => {
    if (!currentQuery.trim()) {
      return searchQueries.slice(0, 6);
    }
    
    const query = currentQuery.toLowerCase();
    const filtered = searchQueries.filter(suggestion => 
      suggestion.toLowerCase().includes(query) && 
      suggestion.toLowerCase() !== query
    );
    
    // Add search history that matches
    const historyMatches = searchHistory.filter(historyItem => 
      historyItem.toLowerCase().includes(query) && 
      historyItem.toLowerCase() !== query &&
      !filtered.includes(historyItem)
    );
    
    return [...filtered, ...historyMatches].slice(0, 6);
  };

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent, isCompact: boolean = false) => {
    const suggestions = getFilteredSuggestions();
    const showSuggestionsState = isCompact ? showCompactSuggestions : showSuggestions;
    const setShowSuggestionsState = isCompact ? setShowCompactSuggestions : setShowSuggestions;
    
    if (!showSuggestionsState) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsKeyboardNavigating(true);
      setSelectedSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIsKeyboardNavigating(true);
      setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
        handleSearch(suggestions[selectedSuggestionIndex]);
        setShowSuggestionsState(false);
        setSelectedSuggestionIndex(-1);
      } else if (currentQuery.trim()) {
        handleSearch(currentQuery);
        setShowSuggestionsState(false);
        setSelectedSuggestionIndex(-1);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestionsState(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  // Handle input change with suggestions
  const handleInputChange = (value: string, isCompact: boolean = false) => {
    setCurrentQuery(value);
    setSelectedSuggestionIndex(-1);
    
    if (value.trim()) {
      if (isCompact) {
        setShowCompactSuggestions(true);
        setShowSuggestions(false);
      } else {
        setShowSuggestions(true);
        setShowCompactSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
      setShowCompactSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    handleSearch(suggestion);
    setShowSuggestions(false);
    setShowCompactSuggestions(false);
    setSelectedSuggestionIndex(-1);
    setIsKeyboardNavigating(false);
  }, []);

  useEffect(() => {
    // Show loading animation for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
      setShowCompactSuggestions(false);
      setSelectedSuggestionIndex(-1);
      setIsKeyboardNavigating(false);
    };

    // Reset keyboard navigation when mouse moves
    const handleMouseMove = () => {
      if (isKeyboardNavigating) {
        setIsKeyboardNavigating(false);
        setSelectedSuggestionIndex(-1);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isKeyboardNavigating]);

  const handleSearch = (query: string) => {
    setCurrentQuery(query);
    setIsSearching(true);
    setShowResults(false);
    setHasSearched(true);
    setShowSuggestions(false);
    setShowCompactSuggestions(false);
    setSelectedSuggestionIndex(-1);
    setIsKeyboardNavigating(false);
    
    // Add to search history
    setSearchHistory(prev => [query, ...prev.filter(q => q !== query)].slice(0, 5));
    
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1200);
  };

  // Reset to initial Google-like page
  const handleLogoClick = () => {
    setCurrentQuery("");
    setShowResults(false);
    setHasSearched(false);
    setShowSuggestions(false);
    setShowCompactSuggestions(false);
    setSelectedSuggestionIndex(-1);
    setIsKeyboardNavigating(false);
    setIsSearching(false);
  };

  // Case-insensitive search - find matching result by normalizing query
  const findMatchingResult = (query: string) => {
    const normalizedQuery = query.trim().toLowerCase();
    
    // First try exact match (case-insensitive)
    const exactMatch = Object.keys(searchResults).find(
      key => key.toLowerCase() === normalizedQuery
    );
    
    if (exactMatch) {
      return searchResults[exactMatch as keyof typeof searchResults];
    }
    
    // Then try partial match for flexible searching
    const partialMatch = Object.keys(searchResults).find(
      key => key.toLowerCase().includes(normalizedQuery) || 
            normalizedQuery.includes(key.toLowerCase())
    );
    
    if (partialMatch) {
      return searchResults[partialMatch as keyof typeof searchResults];
    }
    
    return null;
  };

  const currentResult = findMatchingResult(currentQuery);

  // Get gradient colors based on query type
  const getGradientColors = (query: string) => {
    const normalizedQuery = query.toLowerCase();
    
    if (normalizedQuery.includes("who is") || normalizedQuery.includes("rohit?")) {
      return "from-blue-500 via-blue-400 to-purple-500"; // Blue to purple for identity
    } else if (normalizedQuery.includes("experience") || normalizedQuery.includes("journey")) {
      return "from-green-500 via-emerald-400 to-teal-500"; // Green tones for experience
    } else if (normalizedQuery.includes("projects") || normalizedQuery.includes("best")) {
      return "from-purple-500 via-pink-400 to-rose-500"; // Purple to pink for projects
    } else if (normalizedQuery.includes("skills") || normalizedQuery.includes("technical")) {
      return "from-orange-500 via-amber-400 to-yellow-500"; // Orange to yellow for skills
    } else if (normalizedQuery.includes("contact") || normalizedQuery.includes("connect")) {
      return "from-cyan-500 via-sky-400 to-blue-500"; // Cyan to blue for contact
    } else if (normalizedQuery.includes("achievements") || normalizedQuery.includes("accomplishments")) {
      return "from-violet-500 via-indigo-400 to-purple-500"; // Violet tones for achievements
    } else if (normalizedQuery.includes("culture") || normalizedQuery.includes("team")) {
      return "from-pink-500 via-rose-400 to-red-500"; // Pink to red for culture
    } else if (normalizedQuery.includes("goals") || normalizedQuery.includes("future") || normalizedQuery.includes("vision")) {
      return "from-indigo-500 via-blue-400 to-cyan-500"; // Indigo to cyan for future goals
    } else if (normalizedQuery.includes("leadership") || normalizedQuery.includes("style")) {
      return "from-emerald-500 via-green-400 to-lime-500"; // Emerald to lime for leadership
    } else if (normalizedQuery.includes("innovative") || normalizedQuery.includes("solutions")) {
      return "from-teal-500 via-cyan-400 to-sky-500"; // Teal to sky for innovation
    } else {
      return "from-primary via-primary/80 to-primary/60"; // Default primary gradient
    }
  };

  const gradientColors = getGradientColors(currentQuery);

  // Suggestions dropdown component
  const SuggestionsDropdown = ({ isCompact = false }: { isCompact?: boolean }) => {
    const suggestions = getFilteredSuggestions();
    const showSuggestionsState = isCompact ? showCompactSuggestions : showSuggestions;
      
      if (!showSuggestionsState || suggestions.length === 0) return null;

      return (
        <AnimatePresence mode="wait">
          <motion.div
            key="suggestions-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full left-0 right-0 z-[99999] mt-2 ${isCompact ? 'max-w-2xl' : 'max-w-2xl mx-auto'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white dark:bg-gray-900 border border-border rounded-2xl shadow-2xl drop-shadow-2xl overflow-hidden">
              <div className="py-2">
                {suggestions.map((suggestion, index) => {
                  const isKeyboardSelected = isKeyboardNavigating && selectedSuggestionIndex === index;
                  return (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-3 group
                        ${isKeyboardSelected 
                          ? 'bg-primary/10 border-l-2 border-primary' 
                          : 'hover:bg-muted/50'
                        }`}
                    >
                      <Search className={`w-4 h-4 transition-colors duration-200 ${
                        isKeyboardSelected 
                          ? 'text-primary' 
                          : 'text-muted-foreground group-hover:text-primary'
                      }`} />
                      <span className={`${isCompact ? 'text-sm' : 'text-base'} transition-colors duration-200 ${
                        isKeyboardSelected 
                          ? 'text-primary font-medium' 
                          : 'text-foreground group-hover:text-primary'
                      }`}>
                        {suggestion}
                      </span>
                      {searchHistory.includes(suggestion) && (
                        <span className="ml-auto text-xs text-muted-foreground">Recent</span>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Footer with keyboard hints */}
              <div className="px-4 py-2 border-t border-border/30 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Use ↑↓ to navigate</span>
                  <span>Press Enter to search</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      );
    };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <ContactBar />
      <EasterEggButton />
      
      {/* Main Content */}
      <div className={`transition-all duration-700 ease-in-out ${
        hasSearched 
          ? 'pt-4' 
          : 'flex flex-col min-h-screen'
      }`}>
        
        {/* Initial Google-like centered layout */}
        {!hasSearched && (
          <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
            {/* Logo and Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.button
                  onClick={handleLogoClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Search className="w-6 h-6 sm:w-9 sm:h-9 text-primary-foreground" />
                </motion.button>
                <motion.button
                  onClick={handleLogoClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight hover:text-primary transition-colors duration-200"
                >
                  Discover Rohit
                </motion.button>
              </div>
            </motion.div>

            {/* Search Bar - Google style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-2xl mb-6 sm:mb-8"
            >
              <div className="relative">
                <div className="flex items-center bg-card rounded-full shadow-lg border border-border hover:shadow-xl transition-all duration-300 focus-within:shadow-xl focus-within:border-primary/50 backdrop-blur-sm">
                  <div className="pl-4 sm:pl-6">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    value={currentQuery}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onFocus={() => {
                      if (currentQuery.trim()) {
                        setShowSuggestions(true);
                      }
                    }}
                    placeholder="Search about Rohit's journey..."
                    className="flex-1 px-3 sm:px-4 py-4 sm:py-5 text-base sm:text-lg bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                    autoComplete="off"
                  />
                  <div className="pr-3 sm:pr-4">
                    <Button
                      onClick={() => currentQuery.trim() && handleSearch(currentQuery)}
                      size="sm"
                      className="rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-2 text-sm sm:text-base"
                      disabled={!currentQuery.trim()}
                    >
                      Search
                    </Button>
                  </div>
                </div>
                
                {/* Suggestions dropdown for main search */}
                <SuggestionsDropdown />
              </div>
            </motion.div>

            {/* Google-style buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 items-center justify-center w-full"
            >
              <Button
                variant="outline"
                onClick={() => handleSearch("Who is Rohit?")}
                className="px-4 sm:px-6 py-3 text-sm border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 w-full max-w-sm sm:w-auto sm:max-w-none"
              >
                About Rohit
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSearch("Best projects by Rohit")}
                className="px-4 sm:px-6 py-3 text-sm border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 w-full max-w-sm sm:w-auto sm:max-w-none"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Quick suggestions */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center px-4"
            >
              <p className="text-sm text-muted-foreground mb-4">Or try these searches:</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-xl">
                {searchQueries.slice(0, 6).map((query, index) => (
                  <button
                    key={query}
                    onClick={() => handleSearch(query)}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-xs text-primary hover:underline transition-colors duration-200"
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
            className="bg-background border-b backdrop-blur-sm border-border px-4 sm:px-6 pb-4 sm:pb-6 relative z-40"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Compact logo and search */}
              <motion.button
                onClick={handleLogoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto hover:opacity-80 transition-opacity duration-200"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Search className="w-3 h-3 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h1 className="text-lg sm:text-xl font-medium text-foreground">Discover Rohit</h1>
              </motion.button>
              
              {/* Compact search bar */}
              <div className="flex-1 w-full sm:max-w-2xl">
                <div className="relative">
                  <div className="flex items-center bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-all duration-200 focus-within:shadow-md focus-within:border-primary/50">
                    <div className="pl-3 sm:pl-4">
                      <Search className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      value={currentQuery}
                      onChange={(e) => handleInputChange(e.target.value, true)}
                      onKeyDown={(e) => handleKeyDown(e, true)}
                      onFocus={() => {
                        if (currentQuery.trim()) {
                          setShowCompactSuggestions(true);
                        }
                      }}
                      placeholder="Search about Rohit..."
                      className="flex-1 px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                      autoComplete="off"
                    />
                    <Button
                      onClick={() => currentQuery.trim() && handleSearch(currentQuery)}
                      size="sm"
                      className="mr-1 sm:mr-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground px-2 sm:px-4 py-1 text-xs"
                      disabled={!currentQuery.trim()}
                    >
                      Search
                    </Button>
                  </div>
                  
                  {/* Suggestions dropdown for compact search */}
                  <SuggestionsDropdown isCompact={true} />
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
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto mt-6 sm:mt-8 px-4 sm:px-6 relative z-10"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group"
            >
            {currentResult ? (
              <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-3xl relative">
                {/* Dynamic gradient top line based on query */}
                <motion.div 
                  className={`h-1 sm:h-2 bg-gradient-to-r ${gradientColors} shadow-lg`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />

                <CardContent className="p-0 relative z-10">
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
                    {/* Header with enhanced animation */}
                    <motion.div 
                      className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div 
                        className="relative group/icon mx-auto sm:mx-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover/icon:blur-2xl transition-all duration-300" />
                        <div className={`relative p-3 sm:p-4 rounded-xl bg-gradient-to-br ${gradientColors.replace('from-', 'from-').replace(' via-', ' via-').replace(' to-', ' to-')} text-white shadow-lg`}>
                          {currentResult.icon}
                        </div>
                      </motion.div>
                      <div className="flex-1 text-center sm:text-left">
                        <motion.h2 
                          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          {currentResult.title}
                        </motion.h2>
                        <motion.p 
                          className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          {currentResult.description}
                        </motion.p>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced details grid */}
                    <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
                      {currentResult.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.6 + index * 0.1, 
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="group/detail relative cursor-pointer"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl opacity-0 group-hover/detail:opacity-100 transition-all duration-300" />
                          <div className="relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-muted/80 to-muted rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                            <motion.div 
                              className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-1 sm:mt-2 flex-shrink-0 shadow-lg"
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                            <motion.div 
                              className="text-sm sm:text-base text-foreground leading-relaxed group-hover/detail:text-foreground/90 transition-colors duration-300 flex flex-wrap items-center gap-1"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {parseTextWithLinks(detail)}
                            </motion.div>
                          </div>
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover/detail:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* No Results Found - Fallback for unknown queries */
              <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-md border border-border/50 relative">
                {/* Gradient top line for no results */}
                <motion.div 
                  className="h-1 sm:h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 shadow-lg"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 opacity-30 rounded-lg" />
                
                <CardContent className="p-0 relative z-10">
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-10 text-center">
                    {/* Not Found Header */}
                    <motion.div 
                      className="mb-6 sm:mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div 
                        className="relative mx-auto mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl" />
                        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg flex items-center justify-center">
                          <Search className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                      </motion.div>
                      
                      <motion.h2 
                        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 sm:mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        Hmm, I don't have that info yet
                      </motion.h2>
                      <motion.p 
                        className="text-muted-foreground text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto px-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        I couldn't find information about "<span className="font-semibold text-foreground">{currentQuery}</span>". But don't worry - there's plenty more to discover about Rohit!
                      </motion.p>
                    </motion.div>
                    
                    {/* Helpful suggestions */}
                    <motion.div 
                      className="mb-6 sm:mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Try searching for:</h3>
                      <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                        {searchQueries.slice(0, 6).map((query, index) => (
                          <motion.div
                            key={query}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.7 + index * 0.1, 
                              duration: 0.4,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <button
                              onClick={() => handleSearch(query)}
                              className="w-full p-3 sm:p-4 bg-gradient-to-br from-muted/80 to-muted rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative z-10 flex items-center gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-foreground font-medium text-left">
                                  {query}
                                </span>
                              </div>
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action buttons for no results */}
                    <motion.div 
                      className="pt-4 sm:pt-6 border-t border-border/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        <motion.button
                          onClick={() => handleSearch("Who is Rohit?")}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 sm:px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                          Start with basics
                        </motion.button>
                        <motion.button
                          onClick={() => handleSearch("Best projects by Rohit")}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 sm:px-6 py-2 bg-muted hover:bg-muted/80 text-foreground border border-border rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg"
                        >
                          View projects
                        </motion.button>
                        <motion.button
                          onClick={() => {
                            setCurrentQuery("");
                            setShowResults(false);
                            setHasSearched(false);
                          }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 sm:px-6 py-2 bg-transparent hover:bg-accent text-muted-foreground hover:text-foreground border border-border/50 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
                        >
                          Start over
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            )}
            </motion.div>

            {/* Enhanced Search Suggestions with interactions - Only show for valid results */}
            {currentResult && (
              <motion.div 
                className="mt-8 sm:mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.p 
                  className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Explore more about Rohit:
                </motion.p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-3xl mx-auto px-4">
                  {searchQueries.filter(q => q !== currentQuery).slice(0, 4).map((query, index) => (
                    <motion.div
                      key={query}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 1.2 + index * 0.1, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSearch(query)}
                        className="relative group px-3 sm:px-6 py-2 sm:py-3 text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/40 rounded-full transition-all duration-300 overflow-hidden text-xs sm:text-sm"
                      >
                        {/* Animated background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="relative z-10 font-medium">{query}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
                
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Search History with better interactions */}
      {searchHistory.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 pb-12 sm:pb-16"
        >
          <motion.h3 
            className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Recent Discoveries
          </motion.h3>
          <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {searchHistory.map((query, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <button
                  onClick={() => handleSearch(query)}
                  className="w-full text-left p-3 sm:p-4 bg-card hover:bg-card/80 border border-border hover:border-primary/30 rounded-xl transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Search className="w-3 h-3 sm:w-4 sm:h-4 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                    </motion.div>
                    <span className="text-xs sm:text-sm text-foreground group-hover:text-foreground/90 transition-colors duration-300 font-medium">
                      {query}
                    </span>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
