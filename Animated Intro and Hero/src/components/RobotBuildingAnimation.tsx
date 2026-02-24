import { motion } from 'motion/react';

export function RobotBuildingAnimation() {
  return (
    <div className="w-full max-w-md mx-auto h-96 flex items-center justify-center">
      <svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Base Platform */}
        <motion.rect
          x="60"
          y="220"
          width="80"
          height="8"
          fill="#ffffff"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Legs */}
        <motion.rect
          x="70"
          y="200"
          width="12"
          height="20"
          fill="#dc2626"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ originY: 1 }}
        />
        <motion.rect
          x="118"
          y="200"
          width="12"
          height="20"
          fill="#dc2626"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ originY: 1 }}
        />

        {/* Body */}
        <motion.rect
          x="65"
          y="140"
          width="70"
          height="60"
          stroke="#ffffff"
          strokeWidth="3"
          fill="#000000"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          style={{ originY: 1 }}
        />

        {/* Body Details - Red Chest Panel */}
        <motion.rect
          x="80"
          y="155"
          width="40"
          height="30"
          fill="#dc2626"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          viewport={{ once: true }}
        />

        {/* Body Lines */}
        <motion.line
          x1="100"
          y1="150"
          x2="100"
          y2="195"
          stroke="#dc2626"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          viewport={{ once: true }}
        />

        {/* Arms */}
        <motion.rect
          x="40"
          y="145"
          width="15"
          height="40"
          fill="#ffffff"
          initial={{ x: 65, opacity: 0 }}
          whileInView={{ x: 40, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          viewport={{ once: true }}
        />
        <motion.rect
          x="145"
          y="145"
          width="15"
          height="40"
          fill="#ffffff"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 145, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          viewport={{ once: true }}
        />

        {/* Hands/Claws */}
        <motion.circle
          cx="47"
          cy="190"
          r="6"
          fill="#dc2626"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="153"
          cy="190"
          r="6"
          fill="#dc2626"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.7 }}
          viewport={{ once: true }}
        />

        {/* Neck */}
        <motion.rect
          x="90"
          y="125"
          width="20"
          height="15"
          fill="#ffffff"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          viewport={{ once: true }}
          style={{ originY: 1 }}
        />

        {/* Head */}
        <motion.rect
          x="70"
          y="80"
          width="60"
          height="45"
          stroke="#ffffff"
          strokeWidth="3"
          fill="#000000"
          initial={{ y: 125, opacity: 0 }}
          whileInView={{ y: 80, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          viewport={{ once: true }}
        />

        {/* Eyes */}
        <motion.circle
          cx="85"
          cy="100"
          r="6"
          fill="#dc2626"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2.3 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="115"
          cy="100"
          r="6"
          fill="#dc2626"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2.4 }}
          viewport={{ once: true }}
        />

        {/* Eye glow effect */}
        <motion.circle
          cx="85"
          cy="100"
          r="8"
          fill="#dc2626"
          opacity="0.3"
          initial={{ scale: 0 }}
          whileInView={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, delay: 2.6, repeat: Infinity }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="115"
          cy="100"
          r="8"
          fill="#dc2626"
          opacity="0.3"
          initial={{ scale: 0 }}
          whileInView={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, delay: 2.6, repeat: Infinity }}
          viewport={{ once: true }}
        />

        {/* Antenna */}
        <motion.line
          x1="100"
          y1="80"
          x2="100"
          y2="60"
          stroke="#dc2626"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 2.5 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="100"
          cy="55"
          r="5"
          fill="#ffffff"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 2.7 }}
          viewport={{ once: true }}
        />

        {/* Assembly lines/sparks */}
        <motion.circle
          cx="100"
          cy="180"
          r="2"
          fill="#dc2626"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="100"
          cy="140"
          r="2"
          fill="#ffffff"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 0.5, delay: 1.9 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}
