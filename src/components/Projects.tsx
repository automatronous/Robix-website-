import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Screensaver slideshow - using direct image URLs
  const images = [
    "https://images.unsplash.com/photo-1612256548941-a10f7fb16d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwdHJhY2slMjBhcmVuYXxlbnwxfHx8fDE3NzMyNDg5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1767966787868-2db51cb84de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwcm9ib3QlMjB3aGVlbHN8ZW58MXx8fHwxNzczMjQ4OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwYXJtJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzczMjE5NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1581092334247-44dd684e3c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlYW0lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzMyMDE0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1773067752197-826607e11a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMG1lY2hhbmljYWwlMjBkZXNpZ258ZW58MXx8fHwxNzczMjQ4OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "ROBIX Bot Arena",
      description:
        "Students designed and launched robots on a custom arena track showcasing navigation, mechanical design, and real-time control.",
      link: "https://www.linkedin.com/posts/teamrobix_the-crowd-roared-the-bots-were-launched-activity-7431431391667654656-NEU-"
    },
    {
      title: "Automation Expo Robotics Showcase",
      description:
        "ROBIX members demonstrated robotics projects and innovations during Automation Expo highlighting engineering creativity.",
      link: "https://www.linkedin.com/posts/teamrobix_robix-automationexpo-roboticsclub-activity-7363466505763667968-uzh8"
    }
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Screensaver Background */}
      <div className="absolute inset-0 opacity-30">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold">
            ROBIX <span className="text-red-600">Projects</span>
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Real robotics systems designed and built by ROBIX members.
            Explore competitions, experiments and showcases.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="bg-black/80 backdrop-blur-lg border border-white/10 p-8 hover:border-red-600 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-red-500">
                {project.title}
              </h3>

              <p className="text-white/70 mb-6">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 text-white hover:text-red-500"
              >
                View Post <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}