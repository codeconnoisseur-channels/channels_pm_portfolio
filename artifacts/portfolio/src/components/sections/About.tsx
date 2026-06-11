import { motion } from "framer-motion";
import headshot from "@assets/Portfolio_shoot_1781129245216.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 relative shadow-2xl">
              <img 
                src={headshot} 
                alt="Channels Okunade Oladapo" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Meet Channels</h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans">
              <p className="font-medium text-gray-900 text-xl">
                A Product Manager who builds and ships products that users love and drives revenue for the business.
              </p>
              
              <p>
                My technical foundation in backend engineering, where I designed database schemas, built APIs, integrated payment systems, and worked on production applications using Node.js, Express, MongoDB, and PostgreSQL, has shaped how I think about product decisions. I do not see products as just features and outcomes. I see them as systems shaped by architecture, constraints, and trade-offs.
              </p>
              
              <p>
                As a Product Manager, I build end-to-end. I conduct user research, define product direction, write PRDs and TRDs, define acceptance criteria, plan roadmaps, prioritize features, and coordinate cross-functional teams to ship.
              </p>
              
              <p>
                What sets me apart is how I bridge the gap between product ideas and engineering. When my team and I have a problem to solve, I do not just describe it in a document. I prototype it. I vibe code it into an actual clickable product so designers, developers, and stakeholders can see exactly what we are building before anyone writes a line of production code.
              </p>
              
              <p className="font-medium text-primary">
                Right now, I am focused on building AI-powered products at the intersection of LLMs, AI Agents, and automation.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
