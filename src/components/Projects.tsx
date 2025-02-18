"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Banking System",
    description:
      "Developed a comprehensive banking system with features for personal loans and card issuance.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
    github: "https://github.com/yourusername/banking-system",
    live: "https://banking-system-demo.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "Built a scalable e-commerce platform with real-time inventory management and payment processing.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Nuxt.js", "Express.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "Created a collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/task-management-app",
    live: "https://task-management-demo.com",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {hoveredProject === index && (
                  <motion.div
                    className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-200"
                        >
                          <Github size={24} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-200"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
