import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { soundEffects } from "@/lib/sound-effects";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@rishulchanana.com");
      await soundEffects.playSuccess();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Copy failed silently
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative glass-morphism rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Get In Touch
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="flex items-center glass-morphism rounded-lg p-3">
                  <input
                    type="text"
                    value="hello@rishulchanana.com"
                    readOnly
                    className="flex-1 bg-transparent text-white outline-none select-all"
                  />
                  <Button
                    onClick={copyEmail}
                    onMouseEnter={() => soundEffects.playHover()}
                    variant="ghost"
                    size="sm"
                    className="ml-3 px-3 py-1 bg-purple-600/50 hover:bg-purple-600/70 text-white"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="mr-1 text-xs" />
                        Copied
                      </>
                    ) : (
                      <>
                        <FaCopy className="mr-1 text-xs" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
                >
                  <a 
                    href="mailto:hello@rishulchanana.com"
                    onClick={() => soundEffects.playButtonClick()}
                    onMouseEnter={() => soundEffects.playHover()}
                  >
                    Send Email
                  </a>
                </Button>
                <Button
                  onClick={async () => {
                    await soundEffects.playButtonClick();
                    onClose();
                  }}
                  onMouseEnter={() => soundEffects.playHover()}
                  variant="ghost"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
