import { motion } from "framer-motion";
import { Link } from "wouter";
import headshot from "@assets/Portfolio_shoot_1781129245216.png";
import traceaidImg from "@assets/image_1781170985650.png";
import openProfileImg from "@assets/image_1781171105171.png";
import invoiceserImg from "@assets/image_1781171180415.png";
import { Lightbulb, Code, ArrowRight, BarChart2, Database, TrendingUp, MousePointer2, PenTool, Map, FileText, Users, CalendarDays, ListChecks, Layers, Network, Search, GitBranch, FlaskConical, RefreshCw, Globe, Shield, Bug, CreditCard } from "lucide-react";
import { SiFigma, SiJira, SiLinear, SiClickup, SiNotion, SiAsana, SiMiro, SiPostman, SiSwagger, SiGithub, SiAnthropic, SiOpenai, SiGoogle, SiN8N, SiGoogleanalytics, SiPosthog, SiConfluence, SiJavascript, SiNodedotjs, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { GlowCard } from "@/components/GlowCard";
import { usePageTitle } from "@/hooks/use-page-title";

type Category = "product" | "tech" | "tool";
const catColor: Record<Category, string> = {
  product: "#C9A96E",
  tech:    "#60A5FA",
  tool:    "#A78BFA",
};

const tickerItems: { text: string; cat: Category }[] = [
  { text: "Product Roadmapping",     cat: "product" },
  { text: "User Research",           cat: "product" },
  { text: "PRD & TRD Writing",       cat: "product" },
  { text: "Sprint Facilitation",     cat: "product" },
  { text: "Node.js",                 cat: "tech"    },
  { text: "Express.js",              cat: "tech"    },
  { text: "MongoDB",                 cat: "tech"    },
  { text: "PostgreSQL",              cat: "tech"    },
  { text: "REST APIs",               cat: "tech"    },
  { text: "Backlog Management",      cat: "product" },
  { text: "Feature Prioritization",  cat: "product" },
  { text: "Stakeholder Management",  cat: "product" },
  { text: "Figma",                   cat: "tool"    },
  { text: "Jira",                    cat: "tool"    },
  { text: "ClickUp",                 cat: "tool"    },
  { text: "Notion",                  cat: "tool"    },
  { text: "PostHog",                 cat: "tool"    },
  { text: "Postman",                 cat: "tool"    },
  { text: "n8n",                     cat: "tool"    },
  { text: "Claude",                  cat: "tool"    },
  { text: "Competitive Analysis",    cat: "product" },
  { text: "A/B Testing",             cat: "product" },
  { text: "Agile & Scrum",           cat: "product" },
  { text: "Design Thinking",         cat: "product" },
  { text: "JWT Auth",                cat: "tech"    },
  { text: "API Documentation",       cat: "tech"    },
  { text: "QA Testing",              cat: "tech"    },
];
const doubled = [...tickerItems, ...tickerItems];

const projects = [
  {
    slug:  "traceaid",
    title: "TraceAid",
    type:  "Crowdfunding & Accountability Platform",
    role:  "PM & Backend Developer",
    live:  true,
    image: traceaidImg,
    short: "A crowdfunding platform built around a single conviction: donors deserve to see exactly what their money accomplished before the next tranche releases.",
  },
  {
    slug:  "open-profile",
    title: "Open Profile",
    type:  "Identity Platform",
    role:  "Technical PM Lead",
    live:  true,
    image: openProfileImg,
    short: "An identity platform for freelancers, creators, and indie builders to consolidate their professional presence into one clean, searchable URL.",
  },
  {
    slug:  "invoiceser",
    title: "Invoiceser",
    type:  "AI-Powered Invoicing",
    role:  "AI Product Manager",
    live:  true,
    image: invoiceserImg,
    short: "An AI-powered invoicing platform with real-time previews, automatic payment reminders, multi-currency support, and a natural language AI assistant.",
  },
];

/* ── Shared animation presets ── */
const reveal = {
  hidden: { opacity: 0, y: 44, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)" },
};
const revealFast = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)" },
};
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Hero stagger ── */
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function Home() {
  usePageTitle();
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center pt-14 pb-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 w-full">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

            {/* Left — staggered children */}
            <motion.div
              className="md:w-[50%] space-y-6"
              variants={heroContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={heroItem} className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                Technical Product Manager
              </motion.div>
              <h1 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.06]">
                <motion.span variants={heroItem} className="text-foreground block">Channels</motion.span>
                <motion.span variants={heroItem} className="text-foreground block">Okunade</motion.span>
                <motion.span variants={heroItem} className="text-accent block">Oladapo</motion.span>
              </h1>
              <motion.p variants={heroItem} className="text-text-secondary text-lg leading-relaxed max-w-lg">
                A hands-on Technical Product Manager who combines user-centric product thinking with technical execution to{" "}
                <span className="text-foreground font-semibold">build and ship</span>{" "}
                products that solve real-world problems and create meaningful impact.
              </motion.p>
              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/projects" className="px-8 py-3.5 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition-all flex items-center gap-2">
                  View My Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-8 py-3.5 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-background transition-all flex items-center gap-2">
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              className="md:w-[50%] w-full flex justify-center"
              initial={{ opacity: 0, x: 28, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.32, ease }}
            >
              <motion.div
                className="relative w-full max-w-[380px] rounded-2xl overflow-hidden bg-card aspect-[3/4]"
                whileHover={{
                  scale: 1.015,
                  y: -3,
                  boxShadow: "0 0 0 1.5px rgba(201,169,110,0.35), 0 16px 40px rgba(0,0,0,0.5)",
                  transition: { type: "spring", stiffness: 220, damping: 24 },
                }}
              >
                <img
                  src={headshot}
                  alt="Channels Oladapo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 5%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SCROLLING TICKER */}
      <div className="py-5 border-y border-border-subtle overflow-hidden bg-card/20 select-none">
        <div className="ticker-track gap-0">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="group/pill flex items-center gap-2.5 px-4 py-2 mx-2 rounded-full bg-card border border-border-subtle whitespace-nowrap hover:border-accent/40 transition-all cursor-default shrink-0"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 opacity-25 group-hover/pill:opacity-100 group-hover/pill:scale-125"
                style={{ backgroundColor: catColor[item.cat] }}
              />
              <span className="text-text-secondary text-sm font-medium group-hover/pill:text-foreground transition-colors">
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* BUILD → SHIP → REPEAT */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
          >
            {/* Card stack */}
            <div className="md:w-[48%] relative" style={{ paddingTop: "28px" }}>

              {/* Back card — warm, tilts left */}
              <motion.div
                className="absolute inset-x-0 bottom-0 rounded-2xl"
                style={{ top: "28px", background: "var(--card-lighter)", border: "1px solid var(--border-subtle)", zIndex: 1 }}
                initial={{ rotate: 0, x: 0, opacity: 0 }}
                whileInView={{ rotate: -7, x: -12, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
              />

              {/* Back card — cool, tilts right */}
              <motion.div
                className="absolute inset-x-0 bottom-0 rounded-2xl"
                style={{ top: "28px", background: "var(--card)", border: "1px solid var(--border-subtle)", zIndex: 2 }}
                initial={{ rotate: 0, x: 0, opacity: 0 }}
                whileInView={{ rotate: 6, x: 11, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.09, ease }}
              />

              {/* Main card — door-handle hover tilt */}
              <motion.div
                className="relative z-10 bg-card border border-border-subtle rounded-2xl p-5 md:p-9 overflow-hidden"
                style={{ transformOrigin: "50% 100%" }}
                whileHover={{
                  rotateZ: 2.5,
                  boxShadow: "0 0 0 1px rgba(201,169,110,0.22), 0 32px 64px rgba(0,0,0,0.55)",
                  transition: { type: "spring", stiffness: 220, damping: 14 },
                }}
              >
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-orange-400/80"></span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                  Build <span className="text-accent">→</span> Ship <span className="text-accent">→</span> Repeat
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-md">
                  Skilled in turning ideas into products, and products into results. Sharp with data, obsessed with users, always shipping.
                </p>
                <Link href="/projects" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Explore my work <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="absolute -right-6 -bottom-6 font-display text-[8rem] text-foreground/5 font-bold select-none leading-none">→</div>
              </motion.div>
            </div>

            <div className="md:w-[44%] space-y-6 text-text-secondary leading-relaxed text-lg">
              <p className="text-foreground font-semibold text-xl leading-snug">
                A Product Manager who builds and ships products that users love and drives revenue for the business.
              </p>
              <p>My technical foundation in backend engineering shapes how I think about product decisions. I see products as systems shaped by architecture, constraints, and trade-offs.</p>
              <p>What sets me apart is how I bridge the gap between product ideas and engineering. I prototype problems so designers, developers, and stakeholders can see exactly what we are building before anyone writes a line of production code.</p>
              <Link href="/about" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Read My Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="text-center mb-16"
          >
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">Portfolio</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Evidence-backed products shipped from idea to delivery. From 0-to-1 launches to live platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <GlowCard
                key={p.slug}
                className="bg-card rounded-xl border border-border-subtle hover:border-accent/25 flex flex-col group transition-colors"
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease } as Parameters<typeof motion.div>[0]["transition"]}
              >
                <div className="aspect-[16/9] overflow-hidden border-b border-border-subtle bg-card">
                  <img src={p.image} alt={p.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl text-foreground mb-1">{p.title}</h3>
                  <span className="text-xs text-text-secondary uppercase tracking-wider mb-4">{p.type}</span>
                  <span className="inline-block px-3 py-1 rounded-full border border-accent text-accent text-xs font-medium mb-4 w-fit">{p.role}</span>
                  <p className="text-text-secondary text-sm mb-6 flex-1">{p.short}</p>
                  <Link href={`/projects/${p.slug}`} className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/projects" className="px-6 py-3 border border-accent text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-background transition-all inline-flex items-center gap-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="text-center mb-16"
          >
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">Case Studies</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              Product <span className="text-accent">Thinking</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Six real-world PM exercises covering churn diagnosis, sprint prioritization, feature proposals, and competitive strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { slug: "borderflo",      number: "01", company: "BorderFlo",    type: "PM Internship",        hook: "Found a 40% post-signup churn rate, ran user interviews, and discovered the problem was not what the team assumed." },
              { slug: "deliveroo",      number: "02", company: "Deliveroo",    type: "Product Case Study",   hook: "Users were coordinating group orders on WhatsApp and splitting bills on separate apps. The product had no solution." },
              { slug: "vendsync",       number: "03", company: "VendSync",     type: "Product Case Study",   hook: "5 backlog items. 34 sprint points. 15 points of capacity. Three senior stakeholders. One PM framework." },
              { slug: "ladda",          number: "04", company: "Ladda",        type: "Feature Proposal",     hook: "30,000+ users, sharp post-onboarding drop-off, and no habit-forming systems. Three features that could change that." },
              { slug: "moneykids",      number: "05", company: "MoneyKids.ai", type: "Product Pitch",        hook: "Only 27% of sub-Saharan African adults are financially literate. The problem begins in childhood, and no AI platform addresses it." },
              { slug: "youtube-shorts", number: "06", company: "YouTube",      type: "Competitive Analysis", hook: "YouTube built a massive ad business on long-form creators. Then it structurally redirected viewer attention away from them." },
            ].map((cs, i) => (
              <GlowCard
                key={cs.slug}
                className="bg-card rounded-xl border border-border-subtle hover:border-accent/25 flex flex-col group transition-colors"
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.09, ease } as Parameters<typeof motion.div>[0]["transition"]}
              >
                <div className="h-40 bg-gradient-to-br from-card to-card-lighter flex items-center p-8 border-b border-border-subtle relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-8 font-display text-8xl text-foreground/5 font-bold select-none">{cs.number}</div>
                  <div className="relative z-10">
                    <span className="text-accent font-display text-xl">{cs.number}.</span>
                    <h3 className="font-display text-3xl text-foreground mt-1">{cs.company}</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full border border-accent text-accent text-xs font-medium mb-4 w-fit">{cs.type}</span>
                  <p className="text-text-secondary text-sm italic mb-8 flex-1 border-l-2 border-border-subtle pl-4 py-1">"{cs.hook}"</p>
                  <Link href={`/case-studies/${cs.slug}`} className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/case-studies" className="px-6 py-3 border border-accent text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-background transition-all inline-flex items-center gap-2">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="text-center mb-16"
          >
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">Expertise</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              Skills &amp; <span className="text-accent">Tools</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning product management, technical execution, and AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              variants={revealFast}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-card p-3 rounded-xl border border-border-subtle">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl">Product Skills</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Product Roadmapping & Strategy",      Icon: Map          },
                  { name: "PRD & TRD Writing",                   Icon: FileText     },
                  { name: "User Research & Interviews",           Icon: Users        },
                  { name: "Market Research",                      Icon: BarChart2    },
                  { name: "Design Thinking",                      Icon: Lightbulb    },
                  { name: "Sprint Planning & Facilitation",       Icon: CalendarDays },
                  { name: "Backlog Management",                   Icon: ListChecks   },
                  { name: "Feature Prioritization (RICE/MoSCoW)", Icon: Layers       },
                  { name: "Stakeholder Management",               Icon: Network      },
                  { name: "Competitive Analysis",                 Icon: Search       },
                  { name: "User Story Mapping",                   Icon: GitBranch    },
                  { name: "Data Analysis & A/B Testing",          Icon: FlaskConical },
                  { name: "Agile & Scrum",                        Icon: RefreshCw    },
                ].map(({ name, Icon }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.035, duration: 0.45, ease }}
                    className="bg-card p-4 rounded-lg border border-border-subtle flex items-center gap-4 hover:border-accent/40 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={revealFast}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-card p-3 rounded-xl border border-border-subtle">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl">Technical Skills</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "JavaScript (ES6+)",               Icon: SiJavascript },
                  { name: "Node.js",                         Icon: SiNodedotjs  },
                  { name: "Express.js",                      Icon: Code         },
                  { name: "RESTful APIs",                    Icon: Globe        },
                  { name: "MongoDB",                         Icon: SiMongodb    },
                  { name: "MySQL",                           Icon: SiMysql      },
                  { name: "PostgreSQL",                      Icon: SiPostgresql },
                  { name: "Database Design & Architecture",  Icon: Database     },
                  { name: "JWT Auth & API Security",         Icon: Shield       },
                  { name: "API Testing (Postman)",           Icon: SiPostman    },
                  { name: "API Documentation (Swagger)",     Icon: SiSwagger    },
                  { name: "QA Testing & Prototyping",        Icon: Bug          },
                  { name: "Git & GitHub",                    Icon: SiGithub     },
                  { name: "KoraPay & Paystack Integration",  Icon: CreditCard   },
                ].map(({ name, Icon }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.035, duration: 0.45, ease }}
                    className="bg-card p-4 rounded-lg border border-border-subtle flex items-center gap-4 hover:border-accent/40 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease }}
            className="pt-12 border-t border-border-subtle"
          >
            <h3 className="font-display text-2xl text-center mb-10">Tools &amp; AI</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
              {[
                { name: "Figma",            icon: SiFigma,     color: "#F24E1E" },
                { name: "Jira",             icon: SiJira,      color: "#0052CC" },
                { name: "Linear",           icon: SiLinear,    color: "#5E6AD2" },
                { name: "ClickUp",          icon: SiClickup,   color: "#7B68EE" },
                { name: "Notion",           icon: SiNotion,    color: "var(--foreground)" },
                { name: "Asana",            icon: SiAsana,     color: "#F06A6A" },
                { name: "Miro",             icon: SiMiro,      color: "#FFD02F" },
                { name: "Postman",          icon: SiPostman,   color: "#FF6C37" },
                { name: "Swagger",          icon: SiSwagger,   color: "#85EA2D" },
                { name: "GitHub",           icon: SiGithub,    color: "var(--foreground)" },
                { name: "Claude",           icon: SiAnthropic, color: "#D97757" },
                { name: "ChatGPT",          icon: SiOpenai,    color: "#10A37F" },
                { name: "Gemini",           icon: SiGoogle,          color: "#4285F4" },
                { name: "n8n",              icon: SiN8N,             color: "#EA4B71" },
                { name: "Power BI",         icon: TrendingUp,        color: "#F2C811" },
                { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" },
                { name: "PostHog",          icon: SiPosthog,         color: "#C9A96E" },
                { name: "SQL",              icon: Database,          color: "#60A5FA" },
                { name: "Cursor",           icon: MousePointer2,     color: "var(--foreground)" },
                { name: "Confluence",       icon: SiConfluence,      color: "#0052CC" },
                { name: "Whimsical",        icon: PenTool,           color: "#A78BFA" },
              ].map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.18), duration: 0.4, ease }}
                  whileHover={{ y: -5, scale: 1.06, boxShadow: "0 0 0 1px rgba(201,169,110,0.25), 0 16px 32px rgba(0,0,0,0.4)", transition: { type: "spring", stiffness: 320, damping: 22 } }}
                  className="bg-card border border-border-subtle rounded-2xl p-4 flex flex-col items-center justify-center gap-3 w-[96px] h-[96px] hover:border-accent/30 transition-colors cursor-pointer"
                >
                  <tool.icon className="w-7 h-7" style={{ color: tool.color }} />
                  <span className="text-[10px] font-medium text-text-secondary text-center leading-tight">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="text-center mb-14"
          >
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">Testimonials</div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                badge: "Peer Review",
                quote: "Every interaction with Channels would always leave one with no reason to doubt his exceptional ability, and his work is one I admire so much. As a fellow acting PM, I have seen him excel at product research, sprint prioritisation, and product defences (a key highlight he is known for). He has a proper understanding of whatever he is handling, and you can be anywhere else with peace of mind, knowing that \"Channels is on the job\". He carries such a wonderful charisma and is properly grounded. A typical needle (or gem, if you will) in any haystack of an organisation.",
                name: "Chidubem Ojukwu",
                title: "Product Manager Intern, HNG i14",
                initials: "CO",
              },
              {
                badge: "Mentor Evaluation",
                quote: "I can personally attest to Channels Oladapo's exemplary technical depth, product knowledge, research, and team collaboration skills. I served as his mentor during his Product Management Internship at HNG Tech, where he performed outstandingly in all team and individual tasks.\n\nAside from owning and steering his team's product effectively, he also demonstrated a deep interest in understanding the products of other teams. This curiosity, combined with his core PM skills, made him stand out throughout the internship and earned him one of the two 'Mentor's Choice' awards at the end of the program.\n\nI have no doubt in recommending him for any professional or academic pursuit, as I am confident he will be an outstanding addition to any team.",
                name: "Omotomiwa Afonja",
                title: "Product Management Mentor, HNG i14",
                initials: "OA",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.14, ease }}
                className="relative bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-6 overflow-hidden"
              >
                {/* Decorative background quote mark */}
                <div className="absolute -top-4 -right-2 font-display text-[9rem] leading-none text-accent/5 select-none pointer-events-none">"</div>

                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-bold tracking-wide uppercase">
                    {t.badge}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-text-secondary leading-relaxed text-[15px] relative z-10 flex-1">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-sm">{t.name}</div>
                    <div className="text-text-secondary text-xs mt-0.5">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact-cta" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">Get In Touch</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Let's Make <span className="text-accent italic">Magic</span>
            </h2>
            <p className="text-text-secondary text-xl mb-12">
              Do you have an idea? Ready to build something great? I'd love to hear about your project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition-all flex items-center gap-2">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="px-8 py-4 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-background transition-all flex items-center gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
