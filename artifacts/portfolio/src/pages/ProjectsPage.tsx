import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import traceaidImg from "@assets/image_1781170985650.png";
import openProfileImg from "@assets/image_1781171105171.png";
import invoiceserImg from "@assets/image_1781171180415.png";

const projects = [
  {
    slug: "traceaid",
    title: "TraceAid",
    type: "Crowdfunding & Accountability Platform",
    role: "PM & Backend Developer",
    stack: ["Node.js", "Express.js", "MongoDB", "KoraPay", "Cloudinary", "Swagger"],
    status: "In Development",
    live: false,
    image: traceaidImg,
    short: "A crowdfunding platform built around a single conviction: donors deserve to see exactly what their money accomplished before the next tranche releases.",
    link: "https://trace-aid.vercel.app/",
  },
  {
    slug: "open-profile",
    title: "Open Profile",
    type: "Identity Platform",
    role: "Technical PM Lead",
    stack: ["53-person team", "ClickUp", "PostgreSQL", "3-week sprint"],
    status: "Live",
    live: true,
    image: openProfileImg,
    short: "An identity platform for freelancers, creators, and indie builders to consolidate their professional presence into one clean, searchable URL.",
    link: "https://open-profile.hng14.com/",
  },
  {
    slug: "invoiceser",
    title: "Invoiceser",
    type: "AI-Powered Invoicing SaaS",
    role: "AI Product Manager",
    stack: ["LLMs", "AI Agents", "Multi-currency", "Real-time"],
    status: "Live",
    live: true,
    image: invoiceserImg,
    short: "An AI-powered invoicing platform with real-time previews, automatic payment reminders, multi-currency support, and an AI assistant for natural language financial queries.",
    link: "https://invoiceser.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="w-full pb-24">
      {/* Page Header */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Portfolio</div>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Selected <span className="text-accent">Projects</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-2xl">
              Evidence-backed products shipped from idea to delivery. From 0-to-1 launches to live platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="bg-card rounded-xl border border-border-subtle overflow-hidden flex flex-col group"
              >
                {/* Screenshot thumbnail */}
                <div className="h-52 relative overflow-hidden border-b border-border-subtle">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {p.live ? (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-green-500/40 text-green-400 text-xs font-medium backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Live
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-yellow-500/30 text-yellow-400/80 text-xs font-medium backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></span>
                      In Development
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full border border-accent text-accent text-xs font-medium">{p.role}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-4 flex-1">{p.short}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-background border border-border-subtle rounded text-[10px] text-text-secondary">{s}</span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all w-fit"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
