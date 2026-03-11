import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import logoFull from 'figma:asset/8957a251e604929318bea6eeacdf4c4435d8492a.png';

export function ZoomTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Dramatic zoom: 1 -> 8 (zooming INTO the logo)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div ref={ref} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col items-center justify-center"
        >
          <img 
            src={logoFull} 
            alt="ROBIX CRCE" 
            className="h-32 md:h-48 object-contain mb-8" 
          />
          <h1 className="text-6xl md:text-8xl text-white tracking-tight text-center">
            Robotics & Automation Club
          </h1>
        </motion.div>

        {/* Circuit overlay that appears as you zoom in */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.3, 0.7], [0, 0.4]) }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <motion.circle
              cx="500"
              cy="500"
              r="200"
              stroke="#dc2626"
              strokeWidth="2"
              fill="none"
              style={{ scale: useTransform(scrollYProgress, [0.3, 1], [1, 5]) }}
            />
            <motion.circle
              cx="500"
              cy="500"
              r="150"
              stroke="#ffffff"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
              style={{ scale: useTransform(scrollYProgress, [0.3, 1], [1, 6]) }}
            />
            <motion.line
              x1="500"
              y1="300"
              x2="500"
              y2="700"
              stroke="#dc2626"
              strokeWidth="2"
              style={{ scale: useTransform(scrollYProgress, [0.4, 1], [1, 4]) }}
            />
            <motion.line
              x1="300"
              y1="500"
              x2="700"
              y2="500"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.5"
              style={{ scale: useTransform(scrollYProgress, [0.4, 1], [1, 4]) }}
            />
          </svg>
        </motion.div>

        {/* Smooth transition overlay to next section */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-black z-10"
        />
      </div>
    </div>
  );
}