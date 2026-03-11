import { motion, useScroll, useTransform } from 'motion/react';

export function CircuitBackground() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-15">
      {/* Animated Circuit Path 1 - Top Left */}
      <motion.svg
        style={{ y: y1 }}
        className="absolute -top-10 left-10 w-96 h-96"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20 20 L280 20 L280 150 L150 150 L150 280"
          stroke="#dc2626"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <motion.circle cx="20" cy="20" r="6" fill="#dc2626">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle cx="280" cy="20" r="6" fill="#dc2626">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle cx="280" cy="150" r="6" fill="#dc2626">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </motion.circle>
        <rect x="145" y="145" width="10" height="10" fill="#dc2626" />
        <rect x="275" y="145" width="10" height="10" fill="#dc2626" />
        <rect x="145" y="275" width="10" height="10" fill="#dc2626" />
      </motion.svg>

      {/* Animated Circuit Path 2 - Top Right */}
      <motion.svg
        style={{ y: y2 }}
        className="absolute top-20 right-20 w-80 h-80"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M280 20 L20 20 L20 280 L280 280 L280 150"
          stroke="#ffffff"
          strokeWidth="2"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <motion.circle cx="280" cy="20" r="5" fill="#ffffff" fillOpacity="0.6">
          <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
        </motion.circle>
        <motion.circle cx="20" cy="20" r="5" fill="#ffffff" fillOpacity="0.6">
          <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
        </motion.circle>
        <motion.circle cx="20" cy="280" r="5" fill="#ffffff" fillOpacity="0.6">
          <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" begin="1s" />
        </motion.circle>
      </motion.svg>

      {/* Rotating Circuit Node - Center Left */}
      <motion.svg
        style={{ y: y3, rotate: rotate1 }}
        className="absolute top-1/3 left-1/4 w-40 h-40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="45" y="10" width="10" height="80" fill="#dc2626" />
        <rect x="10" y="45" width="80" height="10" fill="#dc2626" />
        <circle cx="50" cy="50" r="15" stroke="#dc2626" strokeWidth="3" fill="none" />
        <circle cx="50" cy="50" r="8" fill="#dc2626">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </motion.svg>

      {/* Microchip Pattern - Bottom Right */}
      <motion.svg
        style={{ y: y1, rotate: rotate2 }}
        className="absolute bottom-40 right-1/3 w-64 h-64"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chip outline */}
        <rect x="50" y="50" width="100" height="100" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.4" />
        {/* Pins */}
        <motion.line x1="40" y1="70" x2="50" y2="70" stroke="#dc2626" strokeWidth="2" />
        <motion.line x1="40" y1="90" x2="50" y2="90" stroke="#dc2626" strokeWidth="2" />
        <motion.line x1="40" y1="110" x2="50" y2="110" stroke="#dc2626" strokeWidth="2" />
        <motion.line x1="40" y1="130" x2="50" y2="130" stroke="#dc2626" strokeWidth="2" />
        
        <motion.line x1="150" y1="70" x2="160" y2="70" stroke="#dc2626" strokeWidth="2" />
        <motion.line x1="150" y1="90" x2="160" y2="90" stroke="#dc2626" strokeWidth="2" />
        <motion.line x1="150" y1="110" x2="160" y2="110" stroke="#dc2626" strokeWidth="2" />
        <motion.line x1="150" y1="130" x2="160" y2="130" stroke="#dc2626" strokeWidth="2" />

        {/* Internal circuits */}
        <motion.path
          d="M70 80 L130 80 M70 100 L130 100 M70 120 L100 120"
          stroke="#ffffff"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        />
        <rect x="95" y="95" width="10" height="10" fill="#dc2626">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
        </rect>
      </motion.svg>

      {/* Binary Code Rain Effect */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full"
        animate={{ y: [-1000, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="text-red-600 text-xs opacity-20 space-y-2">
          <div>1</div>
          <div>0</div>
          <div>1</div>
          <div>1</div>
          <div>0</div>
        </div>
      </motion.div>

      {/* Concentric Circles - Center */}
      <motion.svg
        style={{ y: y2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          stroke="#dc2626"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          stroke="#ffffff"
          strokeWidth="1"
          strokeOpacity="0.15"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="90"
          stroke="#dc2626"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>

      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
}