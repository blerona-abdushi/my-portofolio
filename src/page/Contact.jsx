import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
  import { Button } from "@/components/ui/button"
  import { Label } from "@/components/ui/label"
  import { Mail, Phone, Linkedin, Github } from "lucide-react"
  import { motion } from "framer-motion"
  import emailjs from '@emailjs/browser'
  import { useState } from 'react'
  import { toast } from 'sonner' // opsionale, për notifikime të bukura
  
  const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
  
      const form = e.target
      const formData = new FormData(form)
  
      try {
        await emailjs.sendForm(
          'YOUR_SERVICE_ID',      // zëvendëso me Service ID tënd
          'YOUR_TEMPLATE_ID',     // zëvendëso me Template ID tënd
          form,
          'YOUR_PUBLIC_KEY'       // zëvendëso me Public Key (User ID) tënd
        )
  
        toast.success("Mesazhi u dërgua me sukses! 🚀")
        form.reset()
      } catch (error) {
        console.error(error)
        toast.error("Gabim gjatë dërgimit. Provo përsëri.")
      } finally {
        setIsLoading(false)
      }
    }
  
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-black via-purple-800 to-purple-900 flex flex-col items-center justify-center pt-20">
  
        {/* FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center p-10 w-full"
        >
          <Card className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
            <CardContent className="p-8 space-y-6">
  
              <h2 className="text-4xl font-bold text-center text-white">
                Contact Me
              </h2>
  
              <p className="text-center text-gray-300 text-sm">
                Let’s build something amazing together. Reach out below.
              </p>
  
              <form onSubmit={handleSubmit} className="space-y-4">
  
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1"
                >
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                  />
                </motion.div>
  
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1"
                >
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                  />
                </motion.div>
  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1"
                >
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    rows={4}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
                  />
                </motion.div>
  
                {/* BUTTON */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.8)] hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all disabled:opacity-70"
                  >
                    {isLoading ? "Sending..." : "Send Message ✨"}
                  </Button>
                </motion.div>
  
              </form>
            </CardContent>
          </Card>
        </motion.div>
  
        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full py-10"
        >
          <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-6">
  
            <div className="flex space-x-10">
              {[
                { icon: <Mail size={32} />, link: "mailto:bleronaabdushi@gmail.com" },
                { icon: <Phone size={32} />, link: "tel:+38970796220" },
                { icon: <Linkedin size={32} />, link: "https://www.linkedin.com/in/blerona-abdushi" },
                { icon: <Github size={32} />, link: "https://github.com/blerona-abdushi" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-purple-300 hover:text-white transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
  
            <p className="text-lg text-gray-300 font-medium">
              &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
              <span className="font-semibold text-white">Blerona Abdushi</span>
            </p>
          </div>
        </motion.footer>
      </div>
    )
  }
  
  export default Contact