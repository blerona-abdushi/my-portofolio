import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="fixed bottom-8 left-8 flex flex-col space-y-4 z-50 ">
      <a
        href="https://github.com/blerona-abdushi"
        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/blerona-abdushi"
        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
        aria-label="Twitter Profile"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
