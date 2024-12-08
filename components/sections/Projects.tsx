const Projects: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 h-full overflow-y-auto scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-700">
      <h2 className="text-4xl font-bold text-blue-500 mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Project 1 - Attendance System */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Attendance System</h3>
          <p className="text-gray-300 mb-4">
            An ongoing project for the Department of Computer Science, designed to automate and streamline the attendance process.
            Built using <span className="font-semibold text-blue-400">Next.js</span>, <span className="font-semibold text-blue-400">TypeScript</span>, 
            <span className="font-semibold text-blue-400">Tailwind CSS</span>, and <span className="font-semibold text-blue-400">MongoDB</span>.
          </p>
          <a
            href="https://attendence-system-1910.vercel.app"
            className="text-blue-400 hover:underline flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live Link</span>
          </a>
        </div>

        {/* Project 2 - Video Chatting Web App */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Video Chatting Web App</h3>
          <p className="text-gray-300 mb-4">
            A video chatting web application allowing users to connect in real-time. Built using <span className="font-semibold text-blue-400">Next.js</span>, 
            <span className="font-semibold text-blue-400">Tailwind CSS</span>, <span className="font-semibold text-blue-400">Shadcn</span>, and <span className="font-semibold text-blue-400">Firebase</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
