import image from "../img/blerona-abdushi.png";
import { Button } from "@/components/ui/button";
import {motion} from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative px-6 py-50 overflow-hidden bg-[#0A0A0A]">
    {/* neon grid bg*/}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.4),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-20">
        {/*left side*/}
        <div className="text-white space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">Blerona
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Abdushi
            </span>
          </h1>
          <p className="text-gray-300 max-w-md text-lg leading-relaxed">
    I'm Blerona Abdushi — a frontend developer with full-stack skills, building clean, 
    intuitive interfaces and reliable backend systems.
  </p>

  {/*actions */}
  <a href="/contact">
            <Button className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 
              hover:scale-105 transition-transform text-lg px-10 py-5 rounded-xl shadow-lg">
              Hire Me
            </Button>
          </a>
        </div>
           {/* RIGHT SIDE - IMAGE with neon aura */}
           <div className="relative flex justify-center">
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-br from-purple-600 to-pink-600 
          rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <motion.img
        src={image}
        alt="Blerona Abdushi"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative w-[300px] h-[380px] object-cover rounded-2xl
          border border-white/20 shadow-[0_0_50px_rgba(168,85,247,0.5)]"
      />
      </div>
      </div>

    </section>
  );
};

export default HeroSection;
