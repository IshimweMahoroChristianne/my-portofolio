import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    // In a real implementation, this would download the actual resume file
    alert('Resume download feature - connect your actual CV file here');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm <span className="text-blue-600">Christianne</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-6 font-medium">
                IT Student & Software Developer
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
                Passionate about Information Management Systems and creating innovative software solutions. 
                Currently pursuing my IT degree while building real-world applications that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleResumeDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/IshimweMahoroChristianne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/ishimwe-mahoro-christianne-a0a3b3316"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:ishimwechtistianne4@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="flex-1 lg:flex-none">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <div className="text-white text-6xl font-bold">IC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;