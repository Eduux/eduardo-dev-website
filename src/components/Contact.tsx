"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:eduardosantanaquadros@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-quadros-b861a4124/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/eduux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Github size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
