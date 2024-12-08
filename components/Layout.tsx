import React from 'react';
import { FaFileAlt, FaCode, FaCogs, FaBriefcase } from 'react-icons/fa';
import Terminal from "@/components/sections/Terminal";

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'README.md', icon: <FaFileAlt /> },
    { name: 'Projects.cpp', icon: <FaCode /> },
    { name: 'Skills.cpp', icon: <FaCogs /> },
    { name: 'Experience.cpp', icon: <FaBriefcase /> },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 shadow-lg p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white tracking-wide border-b border-gray-700 pb-2">Explorer</h2>
        </div>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition-all ${
                activeTab === tab.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tabs */}
        <div className="flex bg-gray-800 px-4 py-2 h-[7%] shadow">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`mr-4 px-4 py-2 rounded-t-lg cursor-pointer text-sm font-medium transition-all ${
                activeTab === tab.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600  text-white shadow-md'
                  : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 bg-gray-900 h-[50%] p-6 shadow-lg">
          {children}
        </div>

        {/* Terminal Section */}
        <div className="bg-gray-800 h-[40%]">
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Layout;
