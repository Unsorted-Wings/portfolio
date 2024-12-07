"use client"
import React, { JSX, useState } from 'react';
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('README.md');

  const content: Record<string, JSX.Element> = {
    'README.md': <About />,
    'projects.cpp': <Projects />,
    'skills.cpp': <Skills />,
    'experience.cpp': <Experience />,
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {content[activeTab] || <div>Content not found.</div>}
    </Layout>
  );
};

export default Home;
