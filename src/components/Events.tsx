import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const events = [
    {
      title: "AI Workshop Series",
      date: "February 20-22, 2025",
      location: "Tech Lab, Building A",
      participants: "100+ Students",
      description: "Three-day intensive workshop on machine learning and computer vision applications.",
      status: "Registration Open"
    }
  ];

  return (
    <motion.section 
      id="events" 
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
            Events & <span className="text-red-600">Workshops</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join us for exciting competitions, technical workshops, and networking events throughout the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-red-600"
                initial={{ width: 0, height: 0 }}
                whileHover={{ width: 40, height: 40 }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl text-white group-hover:text-red-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <span className={`px-3 py-1 text-sm ${
                  event.status === 'Upcoming' ? 'bg-red-600/20 text-red-600 border border-red-600/50' :
                  event.status === 'Registration Open' ? 'bg-white/20 text-white border border-white/50' :
                  'bg-white/10 text-white/50 border border-white/20'
                } transition-all duration-300`}>
                  {event.status}
                </span>
              </div>
              
              <p className="text-white/60 mb-6 leading-relaxed">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="w-4 h-4 text-red-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Users className="w-4 h-4 text-red-600" />
                  <span>{event.participants}</span>
                </div>
              </div>

              <button className="mt-6 w-full py-3 border border-white/20 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 relative overflow-hidden group/btn">
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="absolute inset-0 bg-red-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </motion.section>
  );
}