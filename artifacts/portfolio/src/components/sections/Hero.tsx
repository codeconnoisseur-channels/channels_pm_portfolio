import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            Channels Okunade Oladapo
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-serif font-medium text-gray-600 mb-8"
          >
            Technical Product Manager
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-12"
          >
            A hands-on Technical Product Manager who combines user-centric product thinking with technical execution to build and ship products that solve real-world problems and create meaningful impact, taking them all the way from idea to delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button size="lg" onClick={() => scrollTo("projects")} className="text-base px-8 h-14">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="text-base px-8 h-14">
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-6"
          >
            <a href="https://www.linkedin.com/in/channels-oladapo-67253a187/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://github.com/codeconnoisseur-channels/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="mailto:channelsokunade@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <MailIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
