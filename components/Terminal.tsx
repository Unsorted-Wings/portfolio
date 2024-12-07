import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to my portfolio!',
    'Type "help" for available commands.',
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    switch (command.trim().toLowerCase()) {
      case 'help':
        return [
          'Available commands:',
          '- about: Learn more about me.',
          '- projects: View my projects.',
          '- skills: See my skills.',
          '- experience: Check my experience.',
          '- contact: Get my contact information.',
          '- clear: Clear the terminal.',
        ];
      case 'about':
        return ['I am a passionate developer building modern web applications.'];
      case 'projects':
        return ['Visit the Projects tab to see my work!'];
      case 'skills':
        return ['I specialize in React, TypeScript, and Tailwind CSS.'];
      case 'experience':
        return ['I have worked on numerous projects and open-source contributions.'];
      case 'contact':
        return [
          'You can contact me at:',
          'Email: example@example.com',
          'GitHub: https://github.com/yourusername',
          'LinkedIn: https://linkedin.com/in/yourprofile',
        ];
      case 'clear':
        setOutput([]);
        return [];
      default:
        return [`Command not found: ${command}`];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newOutput = handleCommand(input);
      setOutput((prevOutput) => [
        ...prevOutput,
        `$ ${input}`,
        ...newOutput,
      ]);
      setInput('');
    }
  };

  // Scroll to the bottom every time the output updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 shadow-lg h-64 flex flex-col">
      {/* Terminal Heading */}
      <div className="text-lg font-bold text-white mb-2">Terminal</div>

      {/* Scrollable Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto mb-4 pr-2"
        style={{ maxHeight: 'calc(100% - 40px)', paddingRight: '10px' }} // Ensures content scrolls
      >
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap text-sm mb-2">
            {line.startsWith('$') ? (
              <span className="text-green-400">{line}</span>
            ) : (
              <span className="text-gray-300">{line}</span>
            )}
          </div>
        ))}
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center mt-4">
        <span className="text-green-400 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-100"
          autoFocus
          placeholder="Type your command..."
        />
      </form>
    </div>
  );
};

export default Terminal;
