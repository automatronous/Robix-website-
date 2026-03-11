import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Cpu, Zap, Users, Trophy } from 'lucide-react';
import { RobotBuildingAnimation } from './RobotBuildingAnimation';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const features = [
    {
      icon: Cpu,
      title: "Advanced Robotics",
      description: "Hands-on experience with cutting-edge robotics technology and hardware."
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Learn and implement artificial intelligence in real-world applications."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work with passionate peers on innovative projects and competitions."
    },
    {
      icon: Trophy,
      title: "Competitions & Events",
      description: "Participate in national and international robotics competitions."
    }
  ];

  return (
    <motion.section 
      id="about" 
      ref={ref} 
      style={{ scale, opacity }}
      className="relative py-32 px-6 bg-black"
    >
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Robot Building Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <RobotBuildingAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            About <span className="text-red-600">ROBIX</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            ROBIX is CRCE's premier robotics and automation club, dedicated to fostering 
            innovation and technical excellence among students passionate about robotics, automation, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="mb-4 inline-block p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-gradient-to-r from-red-600/10 to-transparent border border-red-600/20 p-10 rounded-lg"
        >
          <h3 className="text-3xl mb-4 text-white">Our Mission</h3>
          <p className="text-white/70 text-lg leading-relaxed">
            To create a vibrant community of innovators who push the boundaries of robotics and automation technology. 
            We provide students with practical experience, mentorship, and resources to transform their ideas 
            into reality while preparing them for future careers in technology and engineering.
          </p>
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </motion.section>
  );
}