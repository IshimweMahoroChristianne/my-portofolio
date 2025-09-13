import React from 'react';
import { ExternalLink, Github, Database, Globe, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A comprehensive library management application built with React and Node.js, featuring book cataloging, member management, and automated checkout processes.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true
    },
    {
      title: "Student Information Portal",
      description: "Web-based student information system with course enrollment, grade tracking, and academic record management capabilities.",
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for e-commerce platforms with inventory management, sales analytics, and customer relationship features.",
      icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
      technologies: ["React", "TypeScript", "MongoDB", "Chart.js"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, project tracking, and team coordination features.",
      icon: <Database className="w-8 h-8 text-orange-600" />,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore some of my recent work in information management systems and web development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">All Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                {project.icon}
                <h4 className="text-lg font-semibold text-gray-900 ml-3">{project.title}</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.liveDemo}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
                <a
                  href={project.sourceCode}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm font-medium"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;