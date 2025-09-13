import React from 'react';
import { Code, Database, Globe, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Development",
      description: "Building robust applications with modern technologies and best practices"
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      title: "Information Systems",
      description: "Specializing in data management, system analysis, and process optimization"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Web Technologies",
      description: "Creating responsive, user-friendly web applications and interfaces"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Collaboration",
      description: "Working effectively in teams using agile methodologies and version control"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm a dedicated IT student with a passion for creating innovative solutions 
            that bridge technology and real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As an IT student specializing in Information Management Systems, I'm passionate 
                about leveraging technology to solve complex business problems and improve 
                organizational efficiency.
              </p>
              <p>
                My academic journey has equipped me with a solid foundation in software 
                development, database design, system analysis, and project management. 
                I enjoy the challenge of turning abstract concepts into practical, 
                user-friendly solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or collaborating with fellow developers on innovative 
                solutions that make a positive impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;