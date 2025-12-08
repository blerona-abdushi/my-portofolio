import React from "react"
import { motion } from "framer-motion"

import CarDealership from "../img/CarDealership.png"
import GreenLand from "../img/GreenLand.png"
import onlineMenu from "../img/onlineMenu.png"
import Restaurantista from "../img/Restuarantista.png"
import Peetshop from '../img/Peetshop.png'
import workForce from '../img/workforcw.png'

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Restaurantista",
    image: Restaurantista,
    description:
      "A modern restaurant web app with dynamic menu, cart system, and admin dashboard.",
    link: "https://restaurant-bice-five.vercel.app",
  },
  {
    title: "WorkForce-Pro",
    image: workForce,
    description:
      "Employee and department management platform built with React, Node.js, Express, and PostgreSQL.",
    link: "https://workforce-pro-phi.vercel.app",
  },
  {
    title: "Online Menu",
    image: onlineMenu,
    description:
      "Digital restaurant menu with QR code integration and real-time updates.",
    link: "https://online-menu-snowy.vercel.app",
  },
  {
    title: "Car Dealership",
    image: CarDealership,
    description:
      "Clean UI for car listings with filtering and detail pages.",
    link: "https://car-dealership-git-main-blerona-abdushis-projects.vercel.app",
  },
  {
    title: "GreenLand",
    image: GreenLand,
    description:
      "Eco-friendly e-commerce platform with a fully responsive UI.",
    link: "https://green-land.onrender.com",
  },
  {
    title: "Peet Shop",
    image: Peetshop,
    description:
      "Fun pet shop website built using HTML, CSS, and JavaScript.",
    link: "https://peet-shop-rcu892ghg-blerona-abdushis-projects.vercel.app",
  },
]

const Portfolio = () => {
  return (
    <div  className="relative px-6 py-24 bg-gradient-to-b from-black via-purple-800 to-purple-900">
    {/* neon grid bg*/}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.4),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>


      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center mb-14 
        bg-gradient-to-r from-purple-700 via-purple-500 to-yellow-300 
        text-transparent bg-clip-text drop-shadow-xl">
        My Projects
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card 
              className="rounded-2xl shadow-xl 
              border border-purple-300/40 
              bg-black backdrop-blur-xl 
              hover:shadow-purple-400/50 transition-all"
            >
              <CardContent className="p-6 space-y-4">

                {/* IMAGE with Zoom Animation */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-48 object-cover shadow-md"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />

                {/* TITLE */}
                <CardTitle 
                  className="text-2xl font-bold 
                  bg-gradient-to-r from-purple-700 to-pink-500 
                  text-transparent bg-clip-text"
                >
                  {project.title}
                </CardTitle>

                {/* DESCRIPTION */}
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* BUTTON */}
                <Button
                  className="mt-4 w-full 
                  bg-gradient-to-r from-purple-600 to-pink-500 
                  hover:from-purple-700 hover:to-pink-600 
                  text-white font-semibold rounded-xl"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Live View
                </Button>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
