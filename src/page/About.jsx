import React from "react";
import image from "../img/profile-blerona-abdushi.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-800 to-purple-900 text-white px-6 py-24">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mb-16 
        text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700"
      >
        About Me
      </motion.h1>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-purple-600/20 blur-2xl"></div>
            <img
              src={image}
              alt="Blerona Abdushi"
              className="relative w-[320px] h-[420px] object-cover rounded-2xl
              border border-purple-700/30 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-300 text-lg"
        >
        <p>
  I'm <span className="text-white font-semibold">Blerona Abdushi</span>, a
  dedicated <span className="text-white font-semibold">Full-Stack Developer</span>  
  who enjoys building clean, modern and user-friendly applications.
</p>

<p>
  I mainly work with{" "}
  <span className="text-white font-semibold">
    React, JavaScript, Node.js, Express.js and PostgreSQL
  </span>{" "}
  — creating both intuitive front-end interfaces and solid, scalable back-end
  systems.
</p>

<p>
  Throughout my projects, I've developed real experience working on
  full-stack applications such as online menus, restaurant systems, task
  management tools, car-dealership platforms, and pet-shop applications.
  I love turning ideas into functional products.
</p>

<p>
  I'm currently studying{" "}
  <span className="text-white font-semibold">Computer Science</span> and also
  learning <span className="text-white font-semibold">C++</span>, constantly
  improving my problem-solving and software engineering skills.
</p>

<p>
  For me, programming is a balance of creativity and logic — and I'm always
  excited to grow, build, and take on new challenges.
</p>


          <p className="text-xl text-purple-400 font-semibold italic pt-4">
            Let’s create something great together.
          </p>
        </motion.div>
      </div>

      {/* --------------------------------------------------- */}
      {/* ⭐⭐ MY SKILLS SECTION */}
      {/* --------------------------------------------------- */}

      <div className="mt-32 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js", "Express", "PostgreSQL", "C++"].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-purple-800/40 bg-white/5 backdrop-blur-sm 
              text-center text-gray-200 hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
              transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------- */}
      {/* ⭐⭐ EXPERIENCE / EDUCATION TIMELINE */}
      {/* --------------------------------------------------- */}

      <div className="mt-32 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience & Education</h2>

        <div className="relative border-l border-purple-700/40 pl-6 space-y-12">

          {/* ITEM */}
          <div className="relative">
            <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-purple-600 border border-purple-300/70"></div>
            <h3 className="text-xl font-bold">Full Stack Developer (Intern)</h3>
            <p className="text-gray-400 mt-1">
              Maker Mindes GMH — 4 Months  
            </p>
            <p className="mt-2 text-gray-300">
              Worked on UI components, responsive layouts, and real-world web applications.
            </p>
          </div>

          {/* ITEM */}
          <div className="relative">
            <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-purple-600 border border-purple-300/70"></div>
            <h3 className="text-xl font-bold">Web Development Course</h3>
            <p className="text-gray-400 mt-1">
              6-Month Intensive Program  
            </p>
            <p className="mt-2 text-gray-300">
              Learned HTML, CSS, JavaScript, React, Node, Express, PostgreSQL.
            </p>
          </div>

          {/* ITEM */}
          <div className="relative">
            <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-purple-600 border border-purple-300/70"></div>
            <h3 className="text-xl font-bold">Computer Science (Bachelor)</h3>
            <p className="text-gray-400 mt-1">
              University of Tetova — Ongoing  
            </p>
            <p className="mt-2 text-gray-300">
              Continuing education while building personal projects and improving my developer skills.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
