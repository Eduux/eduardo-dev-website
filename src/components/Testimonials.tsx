"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Erick R Scott",
    role: "Founder @ cStructure.io",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQEPFXjTrAmgEQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1652807122708?e=1745452800&v=beta&t=yZn-g08I2xljD2i3bMiuk0bj0Zy_1DedaWmkxoL1LyM",
    content:
      "A professional with a deep understanding of the tech stacks he works with. He delivers high-quality results with precision and consistently meets deadlines. A top-tier professional that every team should have, as he goes above and beyond to solve challenges effectively.",
  },
  {
    name: "Nicolas Renard",
    role: "Senior Fullstack Engineer @ HP",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEi8TyJfnm5yw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1707309765416?e=1745452800&v=beta&t=6Xd7m-_SddG4_bMVH8-bdoxKb4pdo6iuWNJVQjhjwkE",
    content:
      "Eduardo is an excellent professional, always attentive and solving problems in a clear and analytical manner. He is constantly developing his skills and bringing innovative solutions to the project.",
  },
  {
    name: "André Treib",
    role: "Senior Fullstack Engineer @ House Numbers",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGo8C_6ygiMPA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724194975847?e=1745452800&v=beta&t=JrzgR-c-fbQE-ZIgkeagQUQBtHgt4ZtTYG1evDDZtCQ",
    content:
      "I had the pleasure of working with Eduardo Santana for several years, and his expertise in web development has been a tremendous asset to every project we've collaborated on. Eduardo has a deep understanding of UI/UX principles and consistently delivers structured and efficient code, ensuring that applications are both performant and user-friendly. He is highly resourceful, by having a vast knowledge of libraries/tools and best practices that have brought significant improvements to our projects. I highly recommend Eduardo to any team looking for a strong, technically skilled engineer who gets the job done.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full bg-gray-600 mr-4 w-12"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
