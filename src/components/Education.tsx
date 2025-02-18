"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>
        <motion.div
          className="bg-gray-900 rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            Bachelor&apos;s Degree in Analysis and Systems Development
          </h3>
          <p className="text-gray-400 mb-2">2018 - 2020</p>
        </motion.div>
      </div>
    </section>
  );
}
