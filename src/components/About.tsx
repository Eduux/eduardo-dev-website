"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Image
            className="rounded-full"
            src="/eduardo.jpg"
            alt="Profile"
            width={100}
            height={100}
          />
          <div>
            <p className="text-lg mb-6 text-gray-300">
              Software Engineer with 8+ years of experience in web development
              and software engineering. Proven track record of delivering
              impactful solutions across industries such as banking, financial
              services, e-commerce, and marketplaces.
            </p>
            <p className="text-lg text-gray-300">
              Passionate about building high-performance, user-friendly
              applications that enhance user experience and business efficiency.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
