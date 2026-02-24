import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const projects = [
    {
      title: "Autonomous Delivery Robot",
      category: "Robotics",
      description: "Self-navigating robot with obstacle detection and path planning capabilities for campus deliveries.",
      tech: ["ROS", "Computer Vision", "Arduino"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop"
    },
    {
      title: "Gesture Recognition System",
      category: "AI/ML",
      description: "Real-time hand gesture recognition using deep learning for human-computer interaction.",
      tech: ["TensorFlow", "OpenCV", "Python"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      title: "Hexapod Walker",
      category: "Robotics",
      description: "Six-legged walking robot with adaptive terrain navigation and multiple gait patterns.",
      tech: ["Raspberry Pi", "Servo Control", "C++"],
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&h=600&fit=crop"
    },
    {
      title: "Smart Surveillance Drone",
      category: "Drone Tech",
      description: "Autonomous quadcopter with object detection and tracking capabilities for security monitoring.",
      tech: ["Flight Controller", "AI Vision", "IoT"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop"
    },
    {
      title: "Voice-Controlled Assistant Bot",
      category: "AI/Robotics",
      description: "Mobile robot with natural language processing for voice commands and task automation.",
      tech: ["NLP", "Speech Recognition", "ROS"],
      image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&h=600&fit=crop"
    },
    {
      title: "Swarm Robotics System",
      category: "Research",
      description: "Coordinated multi-robot system demonstrating swarm intelligence and collective behavior.",
      tech: ["Multi-Agent", "Communication", "Algorithm"],
      image: "https://images.unsplash.com/photo-1563474396-c3d9b86e9b81?w=800&h=600&fit=crop"
    }
  ];

  return (
    <motion.section 
      id="projects" 
      ref={ref} 
      style={{ scale, opacity }}
      className="relative py-32 px-6 bg-black"
    >
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            Our <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore the innovative projects developed by ROBIX members, showcasing creativity and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-black border border-white/10 overflow-hidden hover:border-red-600/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Hover icons */}
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 bg-black/80 backdrop-blur-sm border border-white/20 hover:border-red-600 hover:bg-red-600/20 transition-all duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-black/80 backdrop-blur-sm border border-white/20 hover:border-red-600 hover:bg-red-600/20 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 relative">
                {/* Animated border line on hover */}
                <motion.div
                  className="absolute top-0 left-0 h-0.5 bg-red-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />

                <h3 className="text-2xl mb-3 text-white group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/60 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 text-white/70 text-sm border border-white/10 group-hover:border-red-600/30 group-hover:bg-red-600/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-600/0 group-hover:border-red-600/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="group px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.1 }}
            />
          </button>
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </motion.section>
  );
}