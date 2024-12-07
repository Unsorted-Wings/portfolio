const Projects: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 h-full overflow-y-auto scrollbar scrollbar-thumb-blue-600 scrollbar-track-gray-700">
      <h2 className="text-4xl font-bold text-blue-500 mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Portfolio Website</h3>
          <p className="text-gray-300 mb-4">
            A personal portfolio website to showcase my skills, projects, and experience. Built using React, TypeScript, and Tailwind CSS.
          </p>
          <a
            href="https://github.com/yourgithub/portfolio"
            className="text-blue-400 hover:underline flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Task Management App</h3>
          <p className="text-gray-300 mb-4">
            A task management app to track and manage tasks with features like categorization, deadlines, and reminders. Built using React and Firebase.
          </p>
          <a
            href="https://github.com/yourgithub/task-manager"
            className="text-blue-400 hover:underline flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Additional Project */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">E-commerce App</h3>
          <p className="text-gray-300 mb-4">
            A fully-functional e-commerce app with features like product catalogs, shopping carts, and user authentication. Built using React, Node.js, and MongoDB.
          </p>
          <a
            href="https://github.com/yourgithub/ecommerce-app"
            className="text-blue-400 hover:underline flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Additional Project */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">Blog Platform</h3>
          <p className="text-gray-300 mb-4">
            A blog platform where users can create, read, update, and delete posts. Built with React and Express.js.
          </p>
            <a
              href="https://github.com/yourgithub/blog-platform"
              className="text-blue-400 hover:underline flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub Repository</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
