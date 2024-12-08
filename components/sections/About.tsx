import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Photo */}
        <div className="w-[10rem] h-[12rem] my-10 md:mb-0 md:mr-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <Image
            src="/assets/photo.jpg"
            alt="Rohit Shukla"
            className="object-cover w-full h-full"
          />
        </div>

        {/* About Details */}
        <div className="max-w-2xl"> {/* Limit the width */}
          <h2 className="text-4xl font-bold text-blue-500 mb-4">About Me</h2>
          <p className="text-gray-300 mb-2">
            Hi, I'm <span className="font-semibold text-white">Rohit Shukla</span>, a passionate developer from Ahmedabad, Gujarat. I'm currently pursuing a bachelor's degree in <span className="font-semibold text-white">BSc Computer Science</span> from the Department of Computer Science, Gujarat University.
          </p>
          <p className="text-gray-300 mb-2">
            I specialize in <span className="font-semibold text-white">MERN stack</span> development and <span className="font-semibold text-white">Next.js</span>, and I love building modern looking web applications. I am open to exploring and working with different tech stacks to expand my expertise.
          </p>
          <p className="text-gray-300">
            I believe in writing clean, scalable code and continuously learning to stay up-to-date with industry trends. In addition, I enjoy collaborating with like-minded developers to create innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
