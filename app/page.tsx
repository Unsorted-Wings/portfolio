"use client"
import React, { JSX, useState } from 'react';
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import ModalAlert from "@/components/Alert";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('README.md');
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const content: Record<string, JSX.Element> = {
    'README.md': <About />,
    'Projects.cpp': <Projects />,
    'Skills.cpp': <Skills />,
    'Experience.cpp': <Experience />,
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {showAlert && (
        <ModalAlert
          isOpen={showAlert}
          onClose={handleCloseAlert}
        />
      )}
      {content[activeTab] || <div>Content not found.</div>}
    </Layout>
  );
};

export default Home;
