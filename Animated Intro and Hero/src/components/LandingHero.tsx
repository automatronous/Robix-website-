import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import logoFull from 'figma:asset/8957a251e604929318bea6eeacdf4c4435d8492a.png';
import { ParticleNetwork } from './ParticleNetwork';

interface LandingHeroProps {
  onEnter: () => void;
}

export function LandingHero({ onEnter }: LandingHeroProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      <ParticleNetwork />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo with entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <img 
            src={logoFull} 
            alt="ROBIX CRCE" 
            className="h-32 md:h-48 object-contain mx-auto"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl mb-6 tracking-tight"
        >
          <span className="text-white">ROBIX</span>{' '}
          <span className="text-red-600">CRCE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl mb-6 text-white/90"
        >
          Robotics & Automation Club
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
        >
          Innovating the Future Through Robotics, Automation & Technology
        </motion.p>

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={onEnter}
          className="group relative px-12 py-5 bg-red-600 text-white text-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-3 mx-auto overflow-hidden"
        >
          <span className="relative z-10">Enter Website</span>
          <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={24} />
          
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 0.1 }}
          />
        </motion.button>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/50 text-sm"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border border-red-600/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}