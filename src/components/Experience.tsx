"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "Ilegra",
    period: "2022 - Present",
    description:
      "Designing and developing systems related to banking products. Frontend architecture, back end services with node/nestjs, unit tests, end-to-end tests, CI/CD, analysis and gathering of improvements.",
    technologies:
      "React, Sass, Tailwind, Jest, NestJs, Context API, TypeScript, Cypress, Angular, Next, Java, Spring Boot, PostgreSql",
  },
  {
    title: "Full Stack Engineer",
    company: "Vortigo",
    period: "2021 - 2022",
    description:
      "Designing and developing financial/banking micro-frontend for the personal loan sales process. Developing a robust microservice in NestJS.",
    technologies:
      "JavaScript, TypeScript, React, CSS-in-JS, Sass, Jest, Storybook, Microfrontend, NestJS, MySQL, TypeORM",
  },
  {
    title: "Full Stack Engineer",
    company: "South System",
    period: "2019 - 2021",
    description:
      "Designing and developing the frontend financial back office for the Visa card issuance process. Implementation of a Design System and development of a BFF (Backend For Frontend). Developing end-to-end tests with Python to ensure system quality and reliability.",
    technologies:
      "JavaScript, TypeScript, React, Context API, Styled Components, Webpack, Jest, Enzyme, Node.js, CI/CD, Storybook, Python, Selenium, Cucumber, MongoDB",
  },
  {
    title: "Full Stack Engineer",
    company: "MachadoTI",
    period: "2018 - 2019",
    description:
      "Support, develop new features and monitor the customer's system (worked allocated), ensuring full availability and integrity, working both in the front-end and back-end processes, always close to the customer, seeking technical solutions.",
    technologies:
      "HTML5, Javascript, Docker, ES6/7/8, React, Redux, Webpack, Styled components, CSS3, Jest, Enzyme, Node.js, Express.js, MySQL, CD/CI",
  },
  {
    title: "Frontend Developer",
    company: "Dev4you",
    period: "2017 - 2018",
    description:
      "Maintenance of the company's main system, and developing new features, on the frontend. Website and e-commerce creation",
    technologies: "HTML, CSS, SASS, GIT, jquery, Vuejs, javascript",
  },
  {
    title: "Frontend Developer",
    company: "Reweb",
    period: "2016 - 2017",
    description: "Develop websites and e-commerces, on the frontend.",
    technologies: "HTML, CSS, SASS, GIT javascript, jquery",
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-blue-500 pl-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <p className="text-gray-400">
                <strong>Technologies:</strong> {exp.technologies}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
