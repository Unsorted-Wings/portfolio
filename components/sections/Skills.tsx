// Skills.tsx
const Skills: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6">
      <h2 className="text-3xl font-bold text-blue-500 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {/* Skill Badges */}
        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">React.js</span>
        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Node.js</span>
        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">TypeScript</span>
        <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Tailwind CSS</span>
        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">JavaScript</span>
        <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">Git</span>
        <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">MongoDB</span>
        <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Express.js</span>
        <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">SQL</span>
        <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">Next.js</span>
        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">GraphQL</span>
        <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Docker</span>
        <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">Firebase</span>
        <span className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold">AWS</span>
        <span className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">Jest</span>
        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Tailwind CSS</span>
      </div>
    </div>
  );
};

export default Skills;
