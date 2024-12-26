const Experience: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 h-full overflow-y-auto scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-700">
      <h2 className="text-4xl font-bold text-blue-500 mb-8">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Full Stack Developer Experience */}
        {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Full Stack Developer</h3>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-blue-400">Baxa Creative Agency</span>
          </p>
          <p className="text-gray-300 mb-4 text-sm">July 2023 - Present</p>
          <p className="text-gray-300 mb-4">
            Working on developing and maintaining full-stack web applications, ensuring seamless user experiences, and implementing scalable solutions using the MERN stack. Collaborated with cross-functional teams to deliver high-quality projects on time.
          </p>
        </div> */}

        {/* Freelancer Experience */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Freelancer</h3>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-blue-400">Self-Employed</span>
          </p>
          <p className="text-gray-300 mb-4 text-sm">July 2022 - Present</p>
          <p className="text-gray-300 mb-4">
            Delivered web development projects for various clients, specializing in creating modern, responsive web applications using MERN stack, Next.js, and Tailwind CSS. Successfully completed multiple projects with a focus on client satisfaction and quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
