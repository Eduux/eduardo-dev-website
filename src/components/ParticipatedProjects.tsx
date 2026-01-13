"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const participatedProjects = [
  {
    title: "CAIS",
    description:
      "Frontend Engineer at CAIS, working on a large-scale financial platform for structured investment products. Focused on building scalable, high-performance interfaces, integrating complex data flows, and delivering a reliable user experience using React, TypeScript, GraphQL, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind", "GraphQL", "Jotai", "React Hook Form"],
    role: "Frontend Engineer",
    siteUrl: "https://www.caisgroup.com/asset-manager",
  },
  {
    title: "cStructure",
    description:
      "As a Full Stack Engineer, I contributed to the development of cStructure, a powerful causal reasoning platform designed to transform complex data into actionable insights. My main focus was on implementing interactive causal diagrams using React Flow, enabling users to intuitively explore and visualize relationships between variables. By leveraging Next, React, TypeScript, and Tailwind CSS, I optimized the UI/UX to ensure a seamless experience for researchers, business leaders, and policymakers. Additionally, I collaborated closely with the team to enhance performance and scalability, ensuring the platform could handle intricate datasets efficiently.",
    technologies: ["Next", "Talwind", "Typescript", "Prisma", "React Flow"],
    role: "Full Stack Engineer",
    siteUrl: "https://cstructure.dev/",
  },
  {
    title: "Unicred Visa card issuance platform",
    description:
      "As a Full Stack Engineer, I contributed to the digital transformation of Unicred’s Visa card issuance process, designing and developing the financial back-office platform. My responsibilities included implementing a Design System to ensure UI consistency and developing a Backend for Frontend (BFF) to streamline communication between the frontend and backend. I leveraged technologies like React, TypeScript, Context API, and Styled Components to create a scalable and efficient interface.",
    technologies: ["React", "TypeScript", "Styled Components", "Storybook"],
    role: "Full Stack Engineer",
    siteUrl: "https://www.unicred.com.br/solucoes/cartoes",
  },
  {
    title: "Agibank",
    description:
      "As a Full Stack Engineer, I played a key role in designing and developing a sales flow for Agibank’s personal loan sales process. Using React, TypeScript, and CSS-in-JS, I ensured a consistent and intuitive user experience, while implementing reusable components with Storybook to improve maintainability. In addition to frontend development, I also contributed to the backend by building a robust microservice in NestJS, leveraging MySQL and TypeORM for efficient data management. To ensure code quality and system reliability, I implemented unit tests using Jest. My work helped streamline the loan application process, delivering a scalable and high-performance solution.",
    technologies: ["Next", "Sass", "Storybook", "Typescript", "React"],
    role: "Full Stack Engineer",
    siteUrl: "https://agibank.com.br/emprestimo-fgts",
  },
];

export default function ParticipatedProjects() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center px-10 md:px-0">
          Top Projects I&apos;ve Participated In
        </h2>
        <div className="space-y-12">
          {participatedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.role}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} className="mr-2" />
                  Visit Site
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
