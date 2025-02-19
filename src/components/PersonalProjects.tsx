"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const personalProjects = [
  {
    title: "EcoRecycle",
    description:
      "EcoRecycle is a web application built with Next.js 15 and Tailwind CSS that educates users on how to recycle different types of materials properly. Our mission is to promote sustainability and raise awareness about the importance of recycling for a cleaner and healthier planet.",
    technologies: ["Nuxt", "Tailwind CSS"],
    github: "https://github.com/Eduux/eco-recycle",
    live: "https://eco-recycle-nu.vercel.app/",
  },
  {
    title: "Search your movies",
    description:
      "Search for movies quickly and easily. You can search by movie title, or if you prefer, use artificial intelligence to find films based on descriptions, suggestions, or keywords. It's a smart and convenient way to discover new movies that match your preferences!.",
    technologies: ["Nuxt", "Tailwind CSS", "TMDB API", "Open ai"],
    github: "https://github.com/Eduux/search-your-movie",
    live: "https://search-your-movie-two.vercel.app/",
  },
  {
    title: "Chat app",
    description:
      "Chat app is a simple chat application built with Next.js, Tailwind CSS, and Open ai. It allows you to chat with the user and get responses based on the user's input.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Open ai",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/Eduux/chat-sections",
    live: "https://simple-chat-test.vercel.app/",
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
                <p className="text-gray-300 mb-4 md:min-h-[192px]">
                  {project.description}
                </p>
                <div className="md:min-h-[100px] mb-4 md:mb-0">
                  <div className="flex flex-wrap gap-2">
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
