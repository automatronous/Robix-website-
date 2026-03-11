import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import logoIcon from 'figma:asset/3d3136e772eb4abf516dfabc20c0ffe0e9ce4b68.png';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      style={{ scale, opacity }}
      className="relative py-32 px-6 bg-black"
    >

      {/* Decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            Get In <span className="text-red-600">Touch</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have questions or want to join ROBIX? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/30 transition-all duration-500"
          >

            <h3 className="text-2xl mb-6 text-white">Send us a Message</h3>

            <form className="space-y-6">

              <div>
                <label className="block text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>

                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.1 }}
                />
              </button>

            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/30 transition-all duration-500">

              <h3 className="text-2xl mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>

                  <div>
                    <p className="text-white/50 text-sm mb-1">Email</p>
                    <p className="text-white">robix@crce.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>

                  <div>
                    <p className="text-white/50 text-sm mb-1">Phone</p>
                    <p className="text-white">+91 98339 86212</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>

                  <div>
                    <p className="text-white/50 text-sm mb-1">Location</p>
                    <p className="text-white">
                      Fr. Conceicao Rodrigues College of Engineering <br />
                      Bandra West, Mumbai
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/30 transition-all duration-500">

              <h3 className="text-2xl mb-6 text-white">Follow Us</h3>

              <div className="flex gap-4">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/robix.crce?igsh=cXM2cmszMXoybzcx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/teamrobix/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>

              </div>
            </div>

            {/* Club Info */}
            <div className="bg-gradient-to-r from-red-600/10 to-transparent border border-red-600/20 p-8 hover:border-red-600/40 transition-all duration-500">

              <div className="flex items-center gap-4 mb-4">
                <img src={logoIcon} alt="ROBIX" className="w-12 h-12" />

                <div>
                  <h4 className="text-xl text-white">ROBIX CRCE</h4>
                  <p className="text-white/50">Robotics & Automation Club</p>
                </div>
              </div>

              <p className="text-white/70">
                Building tomorrow's technology today. Join us in shaping the
                future of robotics and automation.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 pt-8 border-t border-white/10 text-center text-white/50"
      >
        <p>&copy; 2025 ROBIX CRCE. All rights reserved.</p>
      </motion.div>

    </motion.section>
  );
}