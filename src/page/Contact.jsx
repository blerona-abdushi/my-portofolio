import {
Card,
CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
Mail,
Phone,
Linkedin,
Github,
} from "lucide-react"

const Contact = () => {
return (
    <div className="bg-purple-200 flex flex-col">
{/* Contact Form Section */}
    <div className="flex items-center justify-center p-10">
    <Card className="w-full max-w-xl shadow-2xl">
    <CardContent className="p-6 space-y-6">
<h2 className="text-3xl font-bold text-center text-black">Contact Me</h2>
    <p className="text-center text-gray-600 text-sm">Let's build something amazing together. Reach out below.</p>
    <div className="space-y-4">
    <div className="space-y-1">
    <Label htmlFor="name">Name</Label>
<Input id="name" placeholder="Your full name" />
</div>
    <div className="space-y-1">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
</div>

    <div className="space-y-1">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" placeholder="Type your message here..." rows={4} />
</div>

<Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
</div>
    </CardContent>
    </Card>
</div>

{/* Footer Section */}
    <footer className="bg-white py-10">
    <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-6">
    <div className="flex space-x-10">
<a
    href="mailto:bleronaabdushi@gmail.com"
    className="text-purple-600 hover:text-purple-800 transition"
    aria-label="Email"
>
    <Mail size={32} />
</a>
<a
    href="tel:+38970796220"
    className="text-purple-600 hover:text-purple-800 transition"
    aria-label="Phone"
>
    <Phone size={32} />
</a>
<a
    href="https://www.linkedin.com/in/blerona-abdushi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 hover:text-purple-800 transition"
    aria-label="LinkedIn"
>
    <Linkedin size={32} />
</a>
<a
    href="https://github.com/blerona-abdushi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 hover:text-purple-800 transition"
    aria-label="GitHub"
>
    <Github size={32} />
</a>
    </div>
    <p className="text-lg text-gray-600 font-medium">
    &copy; {new Date().getFullYear()} Made with ❤️ by <span className="font-semibold">Blerona Abdushi</span>
</p>
    </div>
    </footer>
</div>
)
}

export default Contact
