import image from '../img/Blerona-Abdushi.jpg'
import { Button } from "@/components/ui/button"

const HeroSection = () => {
return (
  <section className="w-full px-6 py-12 bg-purple-300 rounded-top-oval">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
{/* Left Content */}
      <div className="space-y-6">
      <div className="space-y-4">
    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
    Hi, I'm <span className="text-purple-600">Blerona Abdushi</span>
  </h1>
  <h2 className="text-xl lg:text-2xl text-gray-600 font-medium">Frontend Developer</h2>
  <p className="text-gray-600 leading-relaxed max-w-md">
  passionate about building clean, responsive websites using React, JavaScript, and CSS. I enjoy turning ideas into interactive digital experiences that are both beautiful and user-friendly.

Welcome to my portfolio — take a look at my projects and feel free to get in touch!
  </p>
    </div>
{/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <a href='/contact'>
      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">Hire Me</Button>
      </a>
        
  </div>
  </div>

  {/* Right Image */}
      <div className="relative">
      <div className="relative w-full max-w-md mx-auto">
  <img
  src={image}
  alt="Blerona Abdushi - Frontend Developer"
  className="w-full h-auto object-cover"
  width={500}
  height={600}
/>                        
</div>
</div>
    </div>
  </div>
  </section>
  )
}
export default HeroSection
