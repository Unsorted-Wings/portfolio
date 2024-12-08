const Skills: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {/* Skill Badges */}
        {[
          { label: "React.js", bg: "bg-blue-500" },
          { label: "Node.js", bg: "bg-green-500" },
          { label: "TypeScript", bg: "bg-purple-600" },
          { label: "Tailwind CSS", bg: "bg-yellow-500" },
          { label: "JavaScript", bg: "bg-blue-600" },
          { label: "Git", bg: "bg-gray-700" },
          { label: "MongoDB", bg: "bg-teal-500" },
          { label: "Next.js", bg: "bg-blue-700" },
          { label: "C/C++", bg: "bg-red-500" },
          { label: "Flutter", bg: "bg-indigo-600" },
          { label: "Figma", bg: "bg-pink-500" },
        ].map((skill, index) => (
          <span
            key={index}
            className={`${skill.bg} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
