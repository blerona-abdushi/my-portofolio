import image from "../img/Blerona-Abdushi.jpg"
import { Button } from "../components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full px-6 py-12">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et officiis suscipit ut assumenda
                libero tenetur expedita sequi, quaerat quasi.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">Hire Me</Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg bg-transparent"
              >
                See Projects
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="Blerona-Abdushi.jpg"
                alt="Blerona Abdushi - Frontend Developer"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
