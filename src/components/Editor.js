"use client";
import React, { useState } from "react";
import {
  FaFolder,
  FaFolderOpen,
  FaMarkdown,
  FaFileCode,
  FaChevronRight,
  FaChevronDown,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
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
      <aside className="bg-gray-900 px-2 py-4 h-screen w-1/4">
        <h2 className="text-white text-lg mb-4 font-bold">Explorer</h2>
        {/* Portfolio Folder */}
        <div className="mb-4">
          <div
            className="flex items-center mb-2 cursor-pointer"
            onClick={togglePortfolio}
          >
            {isPortfolioOpen ? (
              <FaChevronDown className="mr-1" />
            ) : (
              <FaChevronRight className="mr-1" />
            )}
            {isPortfolioOpen ? (
              <FaFolderOpen className="mr-1" />
            ) : (
              <FaFolder className="mr-1" />
            )}
            <span className="text-white">Rohit&apos;s Portfolio</span>
          </div>
          <ul
            className={`text-white space-y-2 ml-10 max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
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
          <div className="h-[70%] flex overflow-auto p-6 text-justify">
            <div className=" w-1/2 mb-2">
              <h1 className="text-3xl font-bold mb-2">About Me</h1>
              <p className="mb-2 text-gray-500 leading-loose">
                I&apos;m a passionate developer with expertise in web development and
                mobile app development. I have experience working with various
                technologies and frameworks to build innovative solutions for
                real-world problems.
              </p>
              <p className="mb-2 text-gray-500 leading-loose">
                Currently, I&apos;m focusing on enhancing my skills in front-end and
                back-end development using technologies like React, Node.js, and
                MongoDB.
              </p>
              <p className="mb-2 text-gray-500 leading-loose">
                Besides coding, I enjoy learning new languages, traveling, and
                spending time outdoors. I&apos;m always open to new opportunities and
                challenges that allow me to grow both personally and
                professionally.
              </p>
              <p className="mb-2 text-gray-500 leading-loose">
                Feel free to explore my portfolio to learn more about my
                projects and experiences. If you have any questions or would
                like to collaborate, don&apos;t hesitate to reach out!
              </p>
            </div>
            <div className="flex flex-col w-1/2 justify-center items-center m-auto">
              <a
                href="mailto:shuklarohit2105@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 h-20 w-2/3 text-white px-3 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mb-4"
              >
                <FaEnvelope className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-shukla-a8729124b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 h-20 w-2/3 text-white px-3 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mb-4"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a
                href="https://github.com/unsorted-wings"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 h-20 w-2/3 text-white px-3 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mb-4"
              >
                <FaGithub className="h-8 w-8" />
              </a>
            </div>
          </div>
        )}

        {selectedFile === "projects.cpp" && (
          <div className="h-[70%] overflow-auto p-6 hide-scrollbar">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 gap-6">
              {/* Project Card 1 */}
              <div className="bg-gray-800 w-2/3 m-auto p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Collab</h2>
                <p className="text-gray-400 mb-4">
                  Video conferencing app with next.js
                </p>
                <p className="text-gray-400 mb-2">
                  Technologies used: Next.js, Node.js, Express.js, Firebase,
                  Tailwind CSS
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
                <h2 className="text-xl font-semibold mb-2">3D Survival Game</h2>
                <p className="text-gray-400 mb-4">
                  Prototype 3D Survival with three.js
                </p>
                <p className="text-gray-400 mb-2">
                  Technologies used: HTML, CSS, JavaScript, Three.js
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
                <h2 className="text-xl font-semibold mb-2">Charity App</h2>
                <p className="text-gray-400 mb-4">
                  Next.js based app where you can donate items to the needy.
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
          <div className="h-[70%] overflow-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Freelancing Experience Card */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Freelancing</h2>
                <p className="text-gray-400 mb-4">Self</p>
                <p className="text-gray-600 mb-4">
                  Duration: Aug 2023 - Present
                </p>
                <p className="text-gray-600">
                  Working as a freelancer and developing websites and apps for
                  the clients.
                </p>
              </div>
              {/* Job Experience Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Video Creator</h2>
                <p className="text-gray-400 mb-4">Brainlox</p>
                <p className="text-gray-600 mb-4">
                  Duration: July 2022 - Aug 2023
                </p>
                <p className="text-gray-600">
                  Worked as a video creator intern and created video content for
                  the company&apos;s website related to python.
                </p>
              </div>

              {/* Job Experience Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Instructor</h2>
                <p className="text-gray-400 mb-4">Brainlox</p>
                <p className="text-gray-600 mb-4">
                  Duration: July 2022 - Aug 2023
                </p>
                <p className="text-gray-600">
                  Worked as an instructor intern and taught students about
                  python and java. Also designed course structure and proofread
                  the content for python.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedFile === "skills.git" && (
          <div className="h-[70%] overflow-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skill Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">
                  Front-end Development
                </h2>
                <div className="flex flex-wrap items-center mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    HTML
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    CSS
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    JavaScript
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    React
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    Next.js
                  </span>
                  {/* Add more front-end technologies as needed */}
                </div>
                <p className="text-gray-600">
                  Proficient in building responsive and interactive web
                  interfaces using modern front-end technologies.
                </p>
              </div>

              {/* Skill Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">
                  Back-end Development
                </h2>
                <div className="flex flex-wrap items-center mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    Node.js
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    Express.js
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    MongoDB
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    Firebase
                  </span>
                  {/* Add more back-end technologies as needed */}
                </div>
                <p className="text-gray-600">
                  Experienced in developing RESTful APIs and handling database
                  operations using Node.js and MongoDB.
                </p>
              </div>

              {/* Skill Card 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">
                  Programming Languages
                </h2>
                <div className="flex flex-wrap items-center mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    C++
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    C
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    Python
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                    Dart
                  </span>
                  {/* Add more programming languages as needed */}
                </div>
                <p className="text-gray-600">
                  Proficient in writing clean, efficient, and well-documented
                  code in various programming languages.
                </p>
              </div>

              {/* Add more skill cards as needed */}
            </div>
          </div>
        )}

        {selectedFile === null && (
          <div className="h-[70%] flex items-center justify-center text-gray-400">
            Please select a file to view its content.
          </div>
        )}

        {/* Terminal (VS Code Style) */}
        <div className="terminal bg-black w-full h-[27.5%] p-4 mt-4 overflow-y-auto hide-scrollbar">
          <h2 className="text-white text-lg mb-2 font-bold">Terminal</h2>
          <pre className="text-white">
            <span className="prompt text-green-500 font-bold">&gt; ls</span>
            <br />
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              readme.md
            </span>
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              projects.cpp
            </span>
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              experience.js
            </span>
            <span className="file bg-gray-800 text-white rounded-md p-1 mr-2 mb-2">
              skills.git
            </span>
            <br />
            <span className="prompt text-green-500 font-bold">&gt; user</span>
            <br />
            <span className="output text-gray-400">Hi, I&apos;m Rohit...</span>
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
