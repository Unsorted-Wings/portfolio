import React from "react";

const Terminal = () => {
  return (
    <div className="bg-black p-4 flex-grow">
      <div className="h-full overflow-y-auto">
        <p className="text-green-400">&gt; ls</p>
        <p className="text-white">about.txt  projects/  experience.txt  skills.txt  contact.txt</p>
        <p className="text-green-400">&gt; cat about.txt</p>
        <p className="text-white">Hi, I'm a developer...</p>
        {/* Add more terminal commands and content */}
      </div>
    </div>
  );
};

export default Terminal;
