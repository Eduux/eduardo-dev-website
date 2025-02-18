"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "NestJS",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
            >
              <span className="text-lg font-semibold">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
