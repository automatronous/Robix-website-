import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import logoFull from 'figma:asset/8957a251e604929318bea6eeacdf4c4435d8492a.png';
import logoIcon from 'figma:asset/3d3136e772eb4abf516dfabc20c0ffe0e9ce4b68.png';
import { CircuitBackground } from './CircuitBackground';
import { ParticleNetwork } from './ParticleNetwork';

interface HeroProps {
  isVisible: boolean;
}

export function Hero({ isVisible }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <CircuitBackground />
      <ParticleNetwork />
      
      <div className="min-h-screen bg-black text-white relative">
        {/* Navbar */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img src={logoIcon} alt="ROBIX Logo" className="w-10 h-10 object-contain" />
                <span className="tracking-wider">ROBIX</span>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="hover:text-red-600 transition-colors">About</a>
                <a href="#events" className="hover:text-red-600 transition-colors">Events</a>
                <a href="#projects" className="hover:text-red-600 transition-colors">Projects</a>
                <a href="#team" className="hover:text-red-600 transition-colors">Team</a>
                <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-red-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4 space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <a href="#about" className="block hover:text-red-600 transition-colors">About</a>
                <a href="#events" className="block hover:text-red-600 transition-colors">Events</a>
                <a href="#projects" className="block hover:text-red-600 transition-colors">Projects</a>
                <a href="#team" className="block hover:text-red-600 transition-colors">Team</a>
                <a href="#contact" className="block hover:text-red-600 transition-colors">Contact</a>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Hero section */}
        <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <img src={logoFull} alt="ROBIX CRCE" className="h-24 md:h-32 object-contain" />
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl tracking-tight">
                Robotics & Automation Club
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-white/70 max-w-2xl mx-auto mb-12"
            >
              Building the future through innovation in robotics, artificial intelligence, 
              and automation. Join us to explore, learn, and create cutting-edge technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="group px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
                Join the Club
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                View Projects
              </button>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600/50 transition-all duration-300">
                <div className="text-4xl text-red-600 mb-2">100+</div>
                <div className="text-white/70">Active Members</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600/50 transition-all duration-300">
                <div className="text-4xl text-red-600 mb-2">50+</div>
                <div className="text-white/70">Projects Built</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600/50 transition-all duration-300">
                <div className="text-4xl text-red-600 mb-2">25+</div>
                <div className="text-white/70">Workshops Held</div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}