// pages/index.js
import React from "react";
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen overflow-hidden text-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6 px-24">
        {/* Header Section */}
        <section className="bg-slate-800 rounded-lg p-8 mb-2 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
            Rohit Shukla
          </h1>
          <p className="text-slate-400 text-lg">Full Stack Developer</p>
        </section>
        {/*Projects Section */}
        <section className="col-span-full md:col-span-2 bg-slate-800 rounded-lg p-8 mb-2">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Collab</h3>
              <p className="text-slate-400">Video conferencing app with next.js</p>
            </div>
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">3D Survival Game</h3>
              <p className="text-slate-400">Prototype 3D Survival with three.js</p>
            </div>
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Charity App</h3>
              <p className="text-slate-400">Next.js based app where you can donate items to the needy.</p>
            </div>
          </div>
        </section>
        <section className="col-span-2 row-span-2 bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Section */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Instructor Intern</h3>
              <p className="text-slate-200">Brainlox</p>
              <p className="text-slate-200">July 2022 - Aug 2023</p>
              <p className="text-slate-400 text-justify">
                Worked as an instructor intern and taught students about python and java. Also designed course structure and proof read the content for python.
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Video Creator Intern</h3>
              <p className="text-slate-200">Brainlox</p>
              <p className="text-slate-200">July 2022 - Aug 2023</p>
              <p className="text-slate-400 text-justify">
                Worked as a video creator intern and created video content for the company's website related to python.
              </p>
            </div>
          </div>
        </section>
        {/* Skills Section*/}
        <section className="bg-slate-800 rounded-lg p-8 mb-2">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap">
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              HTML
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              CSS
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              JavaScript
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              React.js
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Next.js
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Node.js
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              C
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              C++
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Flutter
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Firebase
            </span>
            <span className="bg-slate-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              MySQL
            </span>
          </div>
        </section>
        {/* Contact Section*/}
        <section className="col-span-1 bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-20">
              <a
                href="mailto:shuklarohit2105@gmail.com"
                className="text-slate-500 hover:underline"
              >
                <FiMail className="inline-block text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/rohit-shukla-a8729124b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:underline"
              >
                <FiLinkedin className="inline-block text-2xl" />
              </a>
              <a
                href="https://github.com/unsorted-wings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:underline"
              >
                <FiGithub className="inline-block text-2xl" />
              </a>
              <a
                href="https://twitter.com/RohitShukla_10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:underline">
                <FiTwitter className="inline-block text-2xl" />
                </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
