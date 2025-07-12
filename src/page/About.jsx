import React from 'react'
import Header from '../components/header'
function About() {
return (
    <div className="min-h-screen bg-purple-400 flex items-center justify-center px-6">
    <div className="max-w-4xl text-white text-center space-y-6">
    <h1 className="text-4xl md:text-5xl  font-stretch-50% font-bold bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-700 text-transparent bg-clip-text">🌿 About Me</h1>
    <p className="text-lg md:text-xl leading-relaxed">Hello! I’m <span className="font-semibold">Blerona Abdushi</span>, a passionate and motivated Front-End Developer with a deep love for turning ideas into beautiful, functional, and user-friendly web experiences.
</p>
    <p className="text-lg md:text-xl leading-relaxed">
    From the very first lines of HTML and CSS, I knew I had found more than just a skill — I had found a purpose. After completing an intensive 6-month Web Development course, where I specialized in technologies like <span className="font-semibold">React, Node.js, Express</span>, and <span className="font-semibold">PostgreSQL</span>, I’ve continued to challenge myself through real-world projects, both independently and in collaboration with a talented team.
</p>
    <p className="text-lg md:text-xl leading-relaxed">
I believe that great software is more than just clean code — it's about solving real problems, connecting people, and creating seamless digital experiences. I’m especially passionate about intuitive design, responsive layouts, and building websites that feel alive and interactive.
    </p>
    <p className="text-lg md:text-xl leading-relaxed">
    eyond code, I’m someone who values <span className="italic">growth, integrity, and creativity</span>. I’m currently continuing my education in Computer Science, always looking for new opportunities to learn and evolve — whether it's through building exciting new apps, collaborating with inspiring developers, or exploring new technologies.
</p>
    <p className="text-lg md:text-xl leading-relaxed">
        Whether you're looking for someone to bring your vision to life or a passionate teammate who thrives on challenges — I'm here, excited to build the future one line of code at a time.
    </p>
    <p className="text-xl font-semibold italic mt-4">🧩 Let’s build something meaningful together.</p>
</div>
</div>
    );
}
export default About