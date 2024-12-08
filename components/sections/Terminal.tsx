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
          '- experience: Check my experience.',
          '- contact: Get my contact information.',
          '- download cv: Download my CV.',
          '- clear: Clear the terminal.',
        ];
      case 'about':
        return ['I am a passionate developer building modern web applications.'];
      case 'projects':
        return ['Visit the Projects tab to see my work!'];
      case 'experience':
        return ['I have worked on numerous projects.'];
      case 'contact':
        return [
          'You can contact me at:',
          'Email: shuklarohit2105@gmail.com',
          'GitHub: https://github.com/unsorted-wings',
          'LinkedIn: https://linkedin.com/in/rohit-shukla-a8729124b',
        ];
      case 'download cv':
        // Trigger CV download programmatically
        const link = document.createElement('a');
        link.href = '/assets/cv.pdf';  // Path to the CV file in the public folder
        link.download = 'Rohit_Shukla_CV.pdf';  // You can set the name of the downloaded file
        link.click();
        return ['Downloading your CV...'];
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

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="bg-gray-900 text-gray-100 p-4 shadow-lg h-full flex flex-col border border-gray-700">
      {/* Terminal Header */}
      <div className="text-lg font-semibold text-blue-400 border-b border-gray-700 pb-2 mb-4">
        Terminal
      </div>

      {/* Output Section */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto mb-4 pr-2"
        style={{ maxHeight: 'calc(100% - 60px)', paddingRight: '10px' }}
      >
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap text-sm mb-2">
            {line.startsWith('$') ? (
              <span className="text-green-400 font-bold">{line}</span>
            ) : (
              <span className="text-gray-300">{line}</span>
            )}
          </div>
        ))}
      </div>

      {/* Command Input Section */}
      <form onSubmit={handleSubmit} className="flex items-center mt-4 bg-gray-800 p-2 rounded shadow-lg border border-gray-700">
        <span className="text-green-400 mr-2 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none focus:outline-none text-gray-100 text-sm placeholder-gray-500"
          autoFocus
          placeholder="Type your command..."
        />
      </form>
    </div>
  );
};

export default Terminal;
