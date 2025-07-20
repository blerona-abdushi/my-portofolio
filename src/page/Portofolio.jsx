import React from "react"
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
    image: Restaurantista, // përdor foton reale nëse e ke
    description:
      "A modern restaurant web app with dynamic menu, cart system, and admin dashboard. Built using HTML, CSS, JavaScript.",
    link: "https://restaurant-bice-five.vercel.app",
  },
  {
    title: "WorkForce-Pro",
    image:workForce ,
    description:
"Employee and department management platform built with React, Node.js, Express, and PostgreSQL. Features authentication, dashboard, and full CRUD operations.",
    link: "https://workforce-pro-phi.vercel.app",
  },
 
  {
    title: "Online Menu",
    image: onlineMenu,
    description:
      "Digital restaurant menu with QR code integration and real-time updates. Created with React, Express, and PostgreSQL.",
    link: " https://online-menu-snowy.vercel.app",
  },
  {
    title: "Car Dealership",
    image: CarDealership,
    description:
      "A clean and elegant interface for car listings with filtering and contact features. Built with HTML, CSS, and JavaScript.",
    link: "https://car-dealership-git-main-blerona-abdushis-projects.vercel.app",

  },
  {
    title: "GreenLand",
    image: GreenLand,
    description:
      "Eco-friendly e-commerce platform focused on natural products. Built with full responsive design and optimized UI/UX.",
    link: "https://green-land.onrender.com",
  },
  {
    title: "Peet Shop",
    image: Peetshop,
    description:
    "A simple website making the description read aloud and I used HTML CSS  and JavaScript.",
    link: "https://peet-shop-rcu892ghg-blerona-abdushis-projects.vercel.app",
    
  },
]

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-purple-200 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">My Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6 space-y-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <CardTitle className="text-2xl font-semibold text-purple-700">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {project.description}
              </CardDescription>
              <Button
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open(project.link, "_blank")}
              >
                Live View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
