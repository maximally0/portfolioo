import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { soundEffects } from "@/lib/sound-effects";
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaInstagram, 
  FaMedium, 
  FaEnvelope 
} from "react-icons/fa6";

interface SocialSidebarProps {
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

export default function SocialSidebar({ onContactClick }: SocialSidebarProps) {
  const isMobile = useIsMobile();

  const handleContactClick = async () => {
    await soundEffects.playButtonClick();
    onContactClick();
  };

  const handleSocialClick = async () => {
    await soundEffects.playButtonClick();
  };

  if (isMobile) {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="glass-morphism rounded-full px-6 py-3">
          <div className="flex space-x-6">
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
              >
                <social.icon className="text-sm group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              </motion.a>
            ))}
            <motion.button
              onClick={handleContactClick}
              onMouseEnter={() => soundEffects.playHover()}
              className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-sm group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30"
    >
      <div className="glass-morphism rounded-full p-3">
        <div className="flex flex-col space-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialClick}
              onMouseEnter={() => soundEffects.playHover()}
              className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <social.icon className="text-lg group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
            </motion.a>
          ))}
          <motion.button
            onClick={handleContactClick}
            onMouseEnter={() => soundEffects.playHover()}
            className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + socialLinks.length * 0.1 }}
          >
            <FaEnvelope className="text-lg group-hover:text-cyan-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
