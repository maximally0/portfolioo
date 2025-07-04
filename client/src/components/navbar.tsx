import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { soundEffects } from "@/lib/sound-effects";
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaInstagram, 
  FaMedium, 
  FaEnvelope,
  FaBars,
  FaX
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = async () => {
    await soundEffects.playButtonClick();
    onContactClick();
    setIsMenuOpen(false);
  };

  const handleSocialClick = async () => {
    await soundEffects.playButtonClick();
  };

  const toggleMenu = async () => {
    await soundEffects.playButtonClick();
    setIsMenuOpen(!isMenuOpen);
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                onMouseEnter={() => soundEffects.playHover()}
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {isMenuOpen ? (
                  <FaX className="text-sm text-cyan-400" />
                ) : (
                  <FaBars className="text-sm hover:text-cyan-400 transition-colors" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="glass-morphism rounded-2xl p-6">
                <div className="flex flex-col space-y-4">
                  {/* Mobile Social Links */}
                  <div className="grid grid-cols-4 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleSocialClick}
                        className="group relative aspect-square flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <social.icon className="text-lg group-hover:text-cyan-400 transition-colors" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Contact Button */}
                  <motion.button
                    onClick={handleContactClick}
                    className="w-full py-3 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-sm font-semibold rounded-xl transition-all duration-300 cosmic-glow text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="flex items-center justify-center">
                      <FaEnvelope className="mr-2 text-xs" />
                      Contact Me
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}