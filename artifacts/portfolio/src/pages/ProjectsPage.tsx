import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { usePageTitle } from "@/hooks/use-page-title";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
import traceaidImg from "@assets/image_1781170985650.png";
import openProfileImg from "@assets/image_1781171105171.png";
import invoiceserImg from "@assets/invoiceser.jpg";

const projects = [
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
  {
    slug: "open-profile",
    title: "Open Profile",
    type: "Identity Platform",
    role: "Technical Product Manager Lead",
    stack: ["53-person team", "ClickUp", "PostgreSQL", "3-week sprint"],
    status: "Live",
    live: true,
    image: openProfileImg,
    short: "An identity platform for freelancers, creators, and indie builders to consolidate their professional presence into one clean, searchable URL.",
    link: "https://open-profile.hng14.com/",
  },
  {
    slug: "traceaid",
    title: "TraceAid",
    type: "Crowdfunding & Accountability Platform",
    role: "Product Manager & Backend Developer",
    stack: ["Node.js", "Express.js", "MongoDB", "KoraPay", "Cloudinary", "Swagger"],
    status: "Live",
    live: true,
    image: traceaidImg,
    short: "A crowdfunding platform built around a single conviction: donors deserve to see exactly what their money accomplished before the next tranche releases.",
    link: "https://trace-aid.vercel.app/",
  },
];

export default function ProjectsPage() {
  usePageTitle("Projects");
  return (
    <main className="w-full pb-24">
      {/* Page Header */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Portfolio</div>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Featured <span className="text-accent">Projects</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-2xl">
              Evidence-backed products shipped from idea to delivery. From 0-to-1 launches to live platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <GlowCard
                key={p.slug}
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.12, duration: 0.7, ease }}
                className="bg-card rounded-xl border border-border-subtle hover:border-accent/25 flex flex-col group transition-colors"
              >
                {/* Screenshot thumbnail */}
                <div className="aspect-[16/9] relative overflow-hidden border-b border-border-subtle bg-card">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl text-foreground mb-1">{p.title}</h3>
                  <span className="text-xs text-text-secondary uppercase tracking-wider mb-4">{p.type}</span>
                  <span className="inline-block px-3 py-1 rounded-full border border-accent text-accent text-xs font-medium mb-4 w-fit">{p.role}</span>
                  <p className="text-text-secondary text-sm mb-6 flex-1">{p.short}</p>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all w-fit"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
