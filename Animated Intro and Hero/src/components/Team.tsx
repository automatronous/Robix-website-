import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const teamMembers = [
    {
      name: "Ishan Ughade",
      role: "Work Force",
      department: "Computer Engineering"
    },
    {
      name: "Priya Patel",
      role: "Work Force",
      department: "Electronics Engineering"
    },
    {
      name: "Rahul Desai",
      role: "Work Force",
      department: "Mechanical Engineering"
    },
    {
      name: "Sneha Kulkarni",
      role: "Work Force",
      department: "Computer Engineering"
    },
    {
      name: "Aditya Mehta",
      role: "Work Force",
      department: "Electronics Engineering"
    },
    {
      name: "Ananya Singh",
      role: "Work Force",
      department: "Computer Engineering"
    },
    {
      name: "John doe",
      role: "something",
      department: "something else"
      },
  ];

  return (
    <motion.section 
      id="team" 
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
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The passionate individuals driving innovation and excellence at ROBIX CRCE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/50 transition-all duration-500 group text-center relative overflow-hidden"
            >
              {/* Slide-in accent bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-red-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-600/20 to-white/10 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-red-600/50 transition-all duration-500 group-hover:scale-110">
                <span className="text-4xl text-white">{member.name.charAt(0)}</span>
              </div>

              <h3 className="text-2xl mb-2 text-white group-hover:text-red-600 transition-colors duration-300">{member.name}</h3>
              <p className="text-red-600 mb-1">{member.role}</p>
              <p className="text-white/50 text-sm mb-6">{member.department}</p>

              <div className="flex justify-center gap-4">
                <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5 text-white/70 hover:text-red-600 transition-colors" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5 text-white/70 hover:text-red-600 transition-colors" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                  <Mail className="w-5 h-5 text-white/70 hover:text-red-600 transition-colors" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-red-600/10 to-transparent border border-red-600/20 p-10 rounded-lg relative overflow-hidden group/cta"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <h3 className="text-3xl mb-4 text-white">Want to Join Our Team?</h3>
            <p className="text-white/70 text-lg mb-6">
              We're always looking for passionate students interested in robotics and automation. 
              Join us and be part of something extraordinary!
            </p>
            <button className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Apply Now</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0.2 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </motion.section>
  );
}