import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { GlowCard } from "@/components/GlowCard";
import { usePageTitle } from "@/hooks/use-page-title";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
import headshot from "@assets/Portfolio_shoot_1781129245216.png";
import { Mail, Phone, MapPin, ArrowRight, Linkedin } from "lucide-react";

const tabs = ["My Story", "Philosophy", "Services"] as const;
type Tab = typeof tabs[number];

const principles = [
  {
    title: "Products are systems, not feature lists.",
    body: "Every feature sits on top of a data model, an API contract, and an infrastructure choice that someone made before the sprint planning meeting. I think about products from that level down because the decisions that make features fast or expensive happen in the architecture, not the backlog. That perspective changes how I scope work, how I prioritize, and how I write requirements. When you understand the system underneath the product, your decisions get sharper and your specs stop generating rework.",
  },
  {
    title: "A clickable prototype is worth a thousand words in a PRD.",
    body: "By the time a developer picks up a ticket, the design logic should already be resolved. I prototype early, not to skip the specification process but to make it faster and more honest. A prototype forces clarity that documents do not. Stakeholders give better feedback on something they can click. Engineers catch edge cases before they become rework. I vibe code those prototypes so the entire team can see exactly what is being built before anyone writes a line of production code.",
  },
  {
    title: "Data shows you the what. Users show you the why.",
    body: "Metrics can tell you that something is broken. They rarely tell you why. I treat analytics and user research as two instruments that answer two different questions, and I run both. A 40% churn rate in an analytics dashboard pointed me to the drop-off stage. User interviews told me the real reason: the product was asking for trust before it had given any reason to extend it. If I had only looked at the data, I would have redesigned the wrong thing.",
  },
  {
    title: "The best product decisions happen closest to the constraints.",
    body: "Timelines, system architecture, infrastructure costs, engineering trade-offs: these are not obstacles to good product work. They are the conditions that define what good product work actually looks like. A PM who understands constraints does not just advocate for users. They advocate for what is genuinely possible for users, within the reality of what can be shipped, by whom, and by when. That is the version of product management that builds lasting trust with engineering teams and actually ships.",
  },
];

const services = [
  {
    title: "Building a product from scratch?",
    body: "I will take it from a blank page to a working product. Before a single line of code is written, I will validate that the problem is real, prototype the experience so every stakeholder can see exactly what is being built, and define the roadmap that gets it shipped. I have done this at solo founder level and at team scale.",
  },
  {
    title: "Users not converting or retaining?",
    body: "I will figure out why, and I will use both the data and the user to do it. Analytics tools tell me where the drop-off is. User interviews tell me why it is happening. These are two different instruments that need to be run together. I will find the root cause and build the case for fixing it.",
  },
  {
    title: "Team ships slowly?",
    body: "I will bring the clarity that makes teams move. Clear PRDs. Defined acceptance criteria. A prioritized backlog where everyone knows what is being built and why. I have coordinated teams of 50+ people across engineering, design, QA, and marketing. Strong cross-functional alignment is the fastest path to a reliable ship cadence.",
  },
  {
    title: "Need a PM who speaks to engineers?",
    body: "I have been an engineer. I have designed database schemas, built APIs, and integrated payment systems into production applications. When I write a spec, I write it with the implementation in mind. When I push back on a timeline, I understand what is actually on the other side of it. I earn engineering trust faster because I have been on their side of the table.",
  },
];

export default function AboutPage() {
  usePageTitle("About");
  const [activeTab, setActiveTab] = useState<Tab>("My Story");

  return (
    <main className="w-full">

      {/* Page header */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">About Me</div>
            <h1 className="font-display text-5xl md:text-6xl">
              Meet <span className="text-accent italic">Channels</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "border-accent text-accent"
                    : "border-transparent text-text-secondary hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB 1: My Story ── */}
      {activeTab === "My Story" && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <motion.div
                className="md:w-[58%] space-y-6 text-text-secondary leading-relaxed text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-foreground font-semibold text-2xl leading-snug font-display">
                  A Product Manager who builds and ships products that users love and drives revenue for the business.
                </p>
                <p className="text-text-secondary">
                  My technical foundation in backend engineering, where I designed database schemas, built APIs, integrated payment systems, and worked on production applications using Node.js, Express, MongoDB, and PostgreSQL, has shaped how I think about product decisions. I do not see products as just features and outcomes. I see them as systems shaped by architecture, constraints, and trade-offs.
                </p>
                <p>
                  As a Product Manager, I build end-to-end. I conduct user research, define product direction, write PRDs and TRDs, define acceptance criteria, plan roadmaps, prioritize features, and coordinate cross-functional teams to ship.
                </p>
                <p>
                  What sets me apart is how I bridge the gap between product ideas and engineering. When my team and I have a problem to solve, I do not just describe it in a document. I prototype it. I vibe code it into an actual clickable product so designers, developers, and stakeholders can see exactly what we are building before anyone writes a line of production code.
                </p>
                <p>
                  Right now, I am focused on building AI-powered products at the intersection of LLMs, AI Agents, and automation.
                </p>
              </motion.div>

              <motion.div
                className="md:w-[42%] w-full flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  className="w-full max-w-[300px] rounded-2xl overflow-hidden bg-card aspect-[3/4] md:sticky md:top-36"
                  whileHover={{
                    scale: 1.015,
                    y: -3,
                    boxShadow: "0 0 0 1.5px rgba(201,169,110,0.35), 0 16px 40px rgba(0,0,0,0.5)",
                    transition: { type: "spring", stiffness: 220, damping: 24 },
                  }}
                >
                  <img src={headshot} alt="Channels Oladapo" className="w-full h-full object-cover" style={{ objectPosition: "center 5%" }} />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent" />
                </motion.div>
              </motion.div>
            </div>

          </div>
        </section>
      )}

      {/* ── TAB 2: Philosophy ── */}
      {activeTab === "Philosophy" && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-14">
              <h2 className="font-display text-4xl md:text-5xl mb-4">How I think about <span className="text-accent italic">products.</span></h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Four principles that shape every product decision I make.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <GlowCard
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease }}
                  className="bg-card border border-border-subtle hover:border-accent/25 rounded-2xl p-8 transition-colors"
                >
                  <div className="text-accent font-display text-4xl font-bold mb-4 opacity-30">0{i + 1}</div>
                  <h3 className="font-display text-xl text-foreground mb-4 leading-snug">{p.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{p.body}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TAB 3: Services ── */}
      {activeTab === "Services" && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-14">
              <h2 className="font-display text-4xl md:text-5xl mb-4">What I can <span className="text-accent italic">help with.</span></h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Problems I have solved before and will solve again.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <GlowCard
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease }}
                  className="bg-card border border-border-subtle hover:border-accent/25 rounded-2xl p-8 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <span className="text-accent font-bold text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-4 leading-snug">{s.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{s.body}</p>
                </GlowCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-14 text-center"
            >
              <Link href="/contact" className="px-8 py-4 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition-all inline-flex items-center gap-2">
                Let's Work Together <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Let's Talk — always visible regardless of active tab */}
      <section className="py-10 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-text-secondary text-sm">Open to opportunities</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Let's <span className="text-accent italic">Talk</span></h2>
              <p className="text-text-secondary mt-2 max-w-lg">
                Open to Associate PM or Mid-PM roles, in early-stage to growth-stage startups building products that matter.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-8 py-3.5 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition-all inline-flex items-center gap-2 w-fit"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
