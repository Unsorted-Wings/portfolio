// Experience.tsx
const Experience: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6">
      <h2 className="text-3xl font-bold text-blue-500 mb-6">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Full-Stack Developer</h3>
          <p className="text-gray-300">
            ABC Corp | June 2022 - Present
          </p>
          <ul className="text-gray-300">
            <li>Developed and maintained React-based web applications.</li>
            <li>Worked closely with designers to create responsive UI.</li>
            <li>Integrated backend services using Node.js and Express.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Open Source Contributor</h3>
          <p className="text-gray-300">
            GitHub | 2020 - Present
          </p>
          <ul className="text-gray-300">
            <li>Contributed to multiple open-source projects related to web development.</li>
            <li>Implemented bug fixes and new features in React-based applications.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
