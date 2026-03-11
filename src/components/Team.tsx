import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  batch: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const teamMembers: TeamMember[] = [
    {
      name: "Ishan Ughade",
      role: "Recruit",
      batch: "FE",
      linkedin: "https://www.linkedin.com/in/ishan-ughade-004485334/",
      github: "https://github.com/automatronous",
      email: "mailto:ishanughade533@gmail.com",
    },
    {
      name: "Jolene D'souza",
      role: "Recruit",
      batch: "FE",
      linkedin:
        "https://www.linkedin.com/in/jolene-d-souza-0727b4385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Jolene0001",
      email: "mailto:jolenedsouza2007@gmail.com",
    },
    {
      name: "Nayaab Nathani",
      role: "Recruit",
      batch: "FE",
      linkedin: "https://www.linkedin.com/in/nayaab-nathani-1317612a2/",
      github: "https://github.com/nayaabnathani",
      email: "mailto:nayaab.nt@gmail.com",
    },
    {
      name: "Padmesh Vilas Bidaye",
      role: "Recruit",
      batch: "FE",
      linkedin: "https://www.linkedin.com/in/padmesh-bidaye-385106374/",
      github: "https://github.com/padmeshbidaye-cyber",
      email: "mailto:padmeshbidaye@gmail.com",
    },
    {
      name: "Priyansh Savla",
      role: "Recruit",
      batch: "FE",
      linkedin:
        "https://www.linkedin.com/in/priyansh-savla-b5b856381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "mailto:priyanshsavla13@gmail.com",
    },
    {
      name: "Reya Noronha",
      role: "Recruit",
      batch: "FE",
      linkedin: "https://www.linkedin.com/in/reyanor12",
      github: "https://github.com/reyanortech12-prog",
      email: "mailto:reyanor.tech12@gmail.com",
    },
    {
      name: "Royce Dcunha",
      role: "Recruit",
      batch: "FE",
      email: "mailto:roystar125wr@gmail.com",
    },
    {
      name: "Saumya Tarak Hathi",
      role: "Recruit",
      batch: "FE",
      linkedin:
        "https://www.linkedin.com/in/saumya-hathi-418657228?originalSubdomain=in",
      github: "https://github.com/sammywammy69",
      email: "mailto:hathisaumya@gmail.com",
    },
  ];

  return (
    <motion.section
      id="team"
      ref={ref}
      style={{ scale, opacity }}
      className="relative py-32 px-6 bg-black"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The passionate FE recruits driving innovation at ROBIX CRCE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-red-600/50 transition-all duration-500 group text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-red-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-600/20 to-white/10 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-red-600/50 transition-all duration-500 group-hover:scale-110">
                <span className="text-4xl text-white">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl mb-2 text-white group-hover:text-red-600 transition-colors duration-300">
                {member.name}
              </h3>

              <p className="text-red-600 mb-1">{member.role}</p>
              <p className="text-white/50 text-sm mb-6">
                Batch: {member.batch}
              </p>

              <div className="flex justify-center gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-white/70 hover:text-red-600 transition-colors" />
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-white/70 hover:text-red-600 transition-colors" />
                  </a>
                )}

                {member.email && (
                  <a
                    href={member.email}
                    className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-white/70 hover:text-red-600 transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </motion.section>
  );
}