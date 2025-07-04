import { motion } from "framer-motion";
import { soundEffects } from "@/lib/sound-effects";
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaInstagram, 
  FaMedium, 
  FaEnvelope 
} from "react-icons/fa6";

interface NavbarProps {
  onContactClick: () => void;
}

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/rishul-chanana/",
    label: "LinkedIn"
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/rishhul",
    label: "Twitter"
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/chanana_rishul",
    label: "Instagram"
  },
  {
    icon: FaMedium,
    href: "https://medium.com/@rishulchanana36",
    label: "Medium"
  }
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const handleContactClick = async () => {
    await soundEffects.playButtonClick();
    onContactClick();
  };

  const handleSocialClick = async () => {
    await soundEffects.playButtonClick();
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-morphism rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl font-bold gradient-text"
            >
              Rishul Chanana
            </motion.div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSocialClick}
                  onMouseEnter={() => soundEffects.playHover()}
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <social.icon className="text-sm group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
                </motion.a>
              ))}
              
              <motion.button
                onClick={handleContactClick}
                onMouseEnter={() => soundEffects.playHover()}
                className="group relative ml-4 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 cosmic-glow text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="relative z-10 flex items-center">
                  <FaEnvelope className="mr-2 text-xs" />
                  Contact
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-3">
              {socialLinks.slice(0, 2).map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSocialClick}
                  onMouseEnter={() => soundEffects.playHover()}
                  className="group relative w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <social.icon className="text-xs group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
              
              <motion.button
                onClick={handleContactClick}
                onMouseEnter={() => soundEffects.playHover()}
                className="group relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <FaEnvelope className="text-xs" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}