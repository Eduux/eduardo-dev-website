"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const personalProjects = [
  {
    title: "Task Manager App",
    description:
      "A full-stack application for managing tasks and projects using React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/eduux/task-manager",
    live: "https://task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current weather and forecasts using Vue.js and a weather API.",
    technologies: ["Vue.js", "OpenWeatherMap API", "Tailwind CSS"],
    github: "https://github.com/eduux/weather-dashboard",
    live: "https://weather-dashboard-demo.com",
  },
  {
    title: "Blog Platform",
    description:
      "A blog platform built with Next.js and GraphQL, featuring user authentication and markdown support.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/eduux/blog-platform",
    live: "https://blog-platform-demo.com",
  },
];

export default function PersonalProjects() {
  return (
    <section className="py-20 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
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
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    <Github className="mr-2" size={20} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    <ExternalLink className="mr-2" size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
