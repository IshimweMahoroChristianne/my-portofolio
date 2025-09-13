import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Christianne</h3>
            <p className="text-gray-400 leading-relaxed">
              IT Student & Software Developer passionate about creating innovative 
              solutions in Information Management Systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/IshimweMahoroChristianne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ishimwe-mahoro-christianne-a0a3b3316"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ishimwechtistianne4@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              ishimwechtistianne4@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ishimwe Mahoro Christianne. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;