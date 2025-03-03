"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Eduardo Quadros
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Software Engineer
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <SocialButton
          href="mailto:eduardosantanaquadros@gmail.com"
          icon={<Mail size={20} />}
          label="Email"
        />
        <SocialButton
          href="https://www.linkedin.com/in/eduardo-quadros-b861a4124"
          icon={<Linkedin size={20} />}
          label="LinkedIn"
        />
        <SocialButton
          href="https://github.com/eduux"
          icon={<Github size={20} />}
          label="GitHub"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          href="#about"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Learn more <ArrowDown className="ml-2" />
        </Link>
      </motion.div>
    </section>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </motion.a>
  );
}
