import { motion } from 'motion/react';
import logoIcon from 'figma:asset/3d3136e772eb4abf516dfabc20c0ffe0e9ce4b68.png';

export function IntroAnimation() {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-red-600"
        initial={{ opacity: 0, rotate: 0, scale: 0 }}
        animate={{ opacity: 1, rotate: 180, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-white"
        initial={{ opacity: 0, rotate: 0, scale: 0 }}
        animate={{ opacity: 1, rotate: -90, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-12 h-12 bg-red-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      />

      {/* Central content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <img src={logoIcon} alt="ROBIX Logo" className="w-32 h-32 object-contain" />
        </motion.div>

        {/* ROBIX text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="mb-3"
        >
          <h1 className="text-6xl tracking-wider text-white">
            ROBIX
          </h1>
        </motion.div>

        {/* CRCE text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="text-xl tracking-widest text-white">
            CRCE
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
        >
          <p className="text-red-600 tracking-wide">
            Robotics & Automation Club
          </p>
        </motion.div>

        {/* Loading line */}
        <motion.div
          className="mt-8 mx-auto w-48 h-0.5 bg-white/20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.6 }}
        >
          <motion.div
            className="h-full bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 2.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Fade out entire intro */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 4.2, ease: "easeIn" }}
      />
    </div>
  );
}