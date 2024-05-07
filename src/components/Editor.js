"use client";
import React, { useState } from "react";
import {
  FaFolder,
  FaMarkdown,
  FaFileCode,
  FaChevronRight,
  FaChevronDown,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

import { 
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaReact,
  } from "react-icons/fa";

const Editor = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (File Structure) */}
      <aside className="bg-gray-900 p-4 h-screen w-1/4">
        {/* Portfolio Folder */}
        <div className="mb-4">
          <div
            className="flex items-center mb-2 cursor-pointer"
            onClick={togglePortfolio}
          >
            {isPortfolioOpen ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            <FaFolder className="mr-2" />
            <span className="text-white">Portfolio</span>
          </div>
          <ul
            className={`text-white space-y-2 ml-4 max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
              isPortfolioOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <li
              className="flex items-center cursor-pointer"
              onClick={() => setSelectedFile("readme.md")}
            >
              <FaMarkdown className="mr-2" />
              readme.md
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() => setSelectedFile("projects.cpp")}
            >
              <FaFileCode className="mr-2" />
              projects.cpp
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() => setSelectedFile("experience.js")}
            >
              <FaFileCode className="mr-2" />
              experience.js
            </li>
            <li
              className="flex items-center cursor-pointer"
              onClick={() => setSelectedFile("skills.git")}
            >
              <FaFileCode className="mr-2" />
              skills.git
            </li>
          </ul>
        </div>
      </aside>

      {/* Vertical line */}
      <div className="border-l border-gray-700 h-screen"></div>

      {/* Editor (Display Content) */}
      <div className="w-3/4 flex-grow">
        {/* Content based on selectedFile */}
        {selectedFile === "readme.md" && (
          <div className="h-[75%] overflow-auto p-6 text-justify">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
              I'm a passionate developer with expertise in web development,
              mobile app development, and cloud computing. My journey in the
              tech industry started several years ago, and I've had the
              opportunity to work on a wide range of projects across different
              domains.
            </p>
            <p className="mb-4">
              Currently, I'm focusing on enhancing my skills in front-end and
              back-end development using technologies like React, Node.js, and
              MongoDB. I'm also interested in exploring machine learning and AI
              to develop intelligent applications.
            </p>
            <p className="mb-4">
              Besides coding, I enjoy learning new languages, traveling, and
              spending time outdoors. I'm an advocate for continuous learning
              and always eager to take on new challenges that push my boundaries
              and expand my knowledge.
            </p>
            <p className="mb-4">
              Feel free to explore my portfolio to learn more about my projects
              and experiences. If you have any questions or would like to
              collaborate, don't hesitate to reach out!
            </p>
            <div className="flex space-x-4 mt-10">
              <a
                href="mailto:example@example.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                <FaEnvelope className="h-6 w-6 mr-2" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                <FaLinkedin className="h-6 w-6 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                <FaGithub className="h-6 w-6 mr-2" />
                GitHub
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                <FaTwitter className="h-6 w-6 mr-2" />
                Twitter
              </a>
            </div>
          </div>
        )}

        {selectedFile === "projects.cpp" && (
          <div className="h-[75%] overflow-auto p-6 hide-scrollbar">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 gap-6">
              {/* Project Card 1 */}
              <div className="bg-gray-800 w-2/3 m-auto p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Project 1</h2>
                <p className="text-gray-400 mb-4">
                  Description of Project 1. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-400 mb-2">
                  Technologies used: React, Node.js, MongoDB
                </p>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 inline-block"
                >
                  View Details
                </a>
              </div>

              {/* Project Card 2 */}
              <div className="bg-gray-800 p-4 w-2/3 m-auto rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Project 2</h2>
                <p className="text-gray-400 mb-4">
                  Description of Project 2. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <p className="text-gray-400 mb-2">
                  Technologies used: Angular, Express, PostgreSQL
                </p>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 inline-block"
                >
                  View Details
                </a>
              </div>

              {/* Project Card 3 */}
              <div className="bg-gray-800 p-4 w-2/3 m-auto rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Project 3</h2>
                <p className="text-gray-400 mb-4">
                  Description of Project 3. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <p className="text-gray-400 mb-2">
                  Technologies used: Angular, Express, PostgreSQL
                </p>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 inline-block"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        )}

        {selectedFile === "experience.js" && (
          <div className="h-[75%] overflow-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Job Experience Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Job Title 1</h2>
                <p className="text-gray-400 mb-4">Company Name</p>
                <p className="text-gray-600 mb-4">
                  Duration: MM/YYYY - MM/YYYY
                </p>
                <p className="text-gray-600">
                  Description of responsibilities and achievements in this role.
                </p>
              </div>

              {/* Job Experience Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Job Title 2</h2>
                <p className="text-gray-400 mb-4">Company Name</p>
                <p className="text-gray-600 mb-4">
                  Duration: MM/YYYY - MM/YYYY
                </p>
                <p className="text-gray-600">
                  Description of responsibilities and achievements in this role.
                </p>
              </div>

              {/* Freelancing Experience Card */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Freelancing</h2>
                <p className="text-gray-400 mb-4">Client Name</p>
                <p className="text-gray-600 mb-4">
                  Duration: MM/YYYY - Present
                </p>
                <p className="text-gray-600">
                  Description of projects worked on, skills utilized, and
                  outcomes achieved during freelancing.
                </p>
              </div>

              {/* Add more experience cards as needed */}
            </div>
          </div>
        )}

        {selectedFile === "skills.git" && (
          <div className="h-[75%] overflow-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Skill Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Front-End</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <FaHtml5 className="text-3xl" />
                  <FaCss3Alt className="text-3xl" />
                  <FaJsSquare className="text-3xl" />
                  <FaReact className="text-3xl" />
                </div>
                <p className="text-gray-600">
                  Proficient in building responsive and interactive web
                  interfaces using HTML, CSS, JavaScript, and React.
                </p>
              </div>
              
                {/* Skill Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Back-End</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <FaNodeJs className="text-3xl" />
                  <FaDatabase className="text-3xl" />
                  {/* <FaFirebase className="text-3xl text-yellow-500" /> */}
                </div>
                <p className="text-gray-600">
                  Skilled in developing server-side applications, APIs, and
                  databases using Node.js, MongoDB, and Firebase.
                </p>
              </div>
                
                {/* Skill Card 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Programming</h2>
                <div className="flex items-center space-x-2 mb-4">
                  {/* <FaCPlusPlus className="text-3xl text-blue-500" /> */}
                  {/* <FaC className="text-3xl text-blue-500" /> */}
                  <FaPython className="text-3xl" />
                  {/* <FaDart className="text-3xl text-blue-500" /> */}
                </div>
                <p className="text-gray-600">
                  Proficient in writing clean, efficient, and well-documented
                  code in C++, C, Python, and Dart programming languages.
                </p>
              </div>
            </div>
          </div>
              )}

        {selectedFile === null && (
          <div className="h-[75%] flex items-center justify-center text-gray-400">
            Please select a file to view its content.
          </div>
        )}

        {/* Terminal (VS Code Style) */}
        <div className="terminal bg-black w-full h-[22.5%] p-4 mt-4 overflow-y-auto hide-scrollbar">
          <pre className="text-white">
            <span className="prompt text-green-500 font-bold">&gt; ls</span>
            <br />
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              experience.txt
            </span>
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              skills.txt
            </span>
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              contact.txt
            </span>
            <br />
            <span className="prompt text-green-500 font-bold">
              &gt; cat about.txt
            </span>
            <br />

            <span className="output text-gray-400">Hi, I'm a developer...</span>
            <br />
            <span className="output text-gray-400">
              I enjoy coding, exploring new technologies, and building
              innovative solutions.
            </span>
            <br />
            <span className="prompt text-green-500 font-bold">
              &gt; <span className="cursor">|</span>
            </span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Editor;