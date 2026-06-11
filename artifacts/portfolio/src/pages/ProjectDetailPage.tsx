import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, Target, Lightbulb, Zap, BookOpen } from "lucide-react";

const projects: Record<string, {
  title: string;
  subtitle: string;
  role: string;
  type: string;
  stack: string;
  status: string;
  period?: string;
  team?: string;
  stats: { icon: string; value: string; label: string }[];
  overview: string;
  problem: string;
  keyDecisions: string;
  impact: string;
  whatIdDoDifferently?: string;
  links: { label: string; url: string }[];
}> = {
  "traceaid": {
    title: "TraceAid",
    subtitle: "Crowdfunding & Accountability Platform",
    role: "PM, Team Lead & Backend Developer",
    type: "Crowdfunding Platform",
    stack: "Node.js · Express.js · MongoDB · KoraPay · Cloudinary · Swagger",
    status: "Live",
    team: "2 designers · 2 frontend devs · 2 backend devs",
    stats: [
      { icon: "live", value: "Live", label: "Production app fully deployed" },
      { icon: "api", value: "Full API", label: "Complete backend infrastructure" },
      { icon: "milestone", value: "Milestone-Based", label: "Escrow disbursement model" },
      { icon: "kyc", value: "KYC Verified", label: "User onboarding & verification" },
      { icon: "escrow", value: "Escrow", label: "Funds held until proof uploaded" },
      { icon: "docs", value: "Swagger Docs", label: "Published API documentation" },
    ],
    overview: "TraceAid is a crowdfunding platform built around a single conviction: donors deserve to see exactly what their money accomplished before the next tranche releases. I served as overall team lead and product manager, and one of two backend developers on this project. I coordinated 2 designers and 2 frontend developers while also being responsible for building the core backend systems that made the product possible.",
    problem: "Crowdfunding has a trust problem, and the numbers make it concrete. The 2025 World Giving Report found that 47% of Nigerians do not donate because they do not trust how their money will be used, and 51% say they would give more if they could see the impact directly. Standard platforms collect donations upfront and disburse funds in bulk, with no mechanism to verify how the money was spent before releasing the next amount. Donors give with hope and receive silence.",
    keyDecisions: "The core product decision was the milestone-based escrow model. Funds are not released to fundraisers in bulk. They are held until the fundraiser uploads verifiable proof of impact for the current milestone: geo-stamped photos, receipts, budget documents, and video evidence. An administrator reviews the evidence. Only on approval does the next tranche unlock.\n\nThe hardest design question was calibrating the evidence threshold. Too lenient and the platform becomes indistinguishable from any other crowdfunding site. Too demanding and fundraisers abandon the process before donors ever see the difference. I landed on a standard that was thorough but achievable: geo-stamped media, itemized receipts, and a written milestone report per stage.\n\nOn the engineering side, I built the complete API infrastructure: user onboarding and KYC verification, campaign creation and milestone definition, the escrow wallet system, donation processing through KoraPay, administrator verification workflows, Cloudinary-based media uploads for proof of impact documents, and analytics dashboards for both fundraisers and donors.",
    impact: "Live production application. Swagger API documentation published. The full end-to-end flow from campaign creation to milestone-based disbursement is functional and tested.",
    whatIdDoDifferently: "I would invest more time, earlier, in the administrator dashboard experience. The reviewer's workflow is the critical bottleneck in the entire system. If the admin interface is slow or unclear, the whole disbursement model stalls. I understood this in retrospect. I should have understood it at the start.",
    links: [
      { label: "Visit Live App", url: "https://trace-aid.vercel.app/" },
      { label: "API Documentation", url: "https://traceaid.onrender.com/docs/" },
      { label: "GitHub (Backend)", url: "https://github.com/codeconnoisseur-channels/TraceAid-Hackathon-Backend" },
    ],
  },
  "open-profile": {
    title: "Open Profile",
    subtitle: "Identity Platform for Freelancers & Creators",
    role: "Technical PM Lead",
    type: "Identity Platform · Web Application",
    stack: "PostgreSQL · 30+ API Endpoints",
    status: "Live",
    team: "53 people across 5 functional streams",
    period: "3 weeks, discovery to launch",
    stats: [
      { icon: "team", value: "53", label: "People coordinated across 5 streams" },
      { icon: "time", value: "3 Weeks", label: "Discovery to live production" },
      { icon: "features", value: "4 Core Features", label: "Fully shipped in PRD" },
      { icon: "api", value: "30+ Endpoints", label: "API endpoints defined in TRD" },
      { icon: "streams", value: "5 Streams", label: "Frontend, backend, DevOps, QA, design" },
      { icon: "live", value: "On Schedule", label: "Launched within the build window" },
    ],
    overview: "An identity platform for freelancers, creators, and indie builders to consolidate their professional presence into one clean, searchable URL. I led it from zero to launch, coordinating 53 people across five functional streams, in three weeks.",
    problem: "A freelancer might have a LinkedIn, a Behance, a GitHub, and a personal website, and none of them tell the same story. When a client wants to verify someone quickly, they are piecing things together across platforms. The friction costs real opportunities and erodes trust before a working relationship even begins.",
    keyDecisions: "I wrote the complete Product Requirements Document covering four core features: profile creation, public profile display, profile customization, and search and discovery. Each feature included user stories, acceptance criteria, edge cases, and success metrics. I co-authored the Technical Requirements Document with the backend lead, defining the system architecture, over 30 API endpoints, PostgreSQL database schemas, and security requirements.\n\nThe most consequential contribution I made was not a document. It was a user flow redesign that eliminated a three-week rework cycle that was quietly building up due to misaligned assumptions between design and engineering. The two teams were working toward different mental models of the same feature. I caught it before any code was written twice, ran a clarification session, and resolved it cleanly.\n\nThe most important prioritization decision I made was drawing a hard line on MVP scope at the point where the team was attempting to add features before the core loop was stable. Create, share, and discover had to work end-to-end before anything else shipped.",
    impact: "Product launched within the three-week build window. Core loop functional and live. A 53-person team delivered a working product from zero because the product management held throughout.",
    whatIdDoDifferently: "I would build in a structured handoff session between design and engineering at the start of each sprint, not just share Figma files and assume shared understanding. Most of the misalignment I had to resolve mid-sprint could have been caught in a 30-minute conversation at the start.",
    links: [
      { label: "Visit Live App", url: "https://open-profile.hng14.com/" },
      { label: "Product Requirements Doc (PRD)", url: "https://docs.google.com/document/d/1FF2PDRPHEyODepfxCFEzHcGXHHwTRfjU-DadeiS6jhY/edit" },
      { label: "Technical Requirements Doc (TRD)", url: "https://docs.google.com/document/d/1yN8NWlFPGvhMejkEDVfq3Yo0RwMXRlCStUbpBHS9CzM/edit" },
    ],
  },
  "invoiceser": {
    title: "Invoiceser",
    subtitle: "AI-Powered Invoicing Platform for Freelancers",
    role: "AI Product Manager",
    type: "SaaS · AI-Powered Invoicing",
    stack: "Next.js 14 · Convex · Clerk · Resend · Groq (Llama 3 70B) · KoraPay · Recharts",
    status: "Live",
    stats: [
      { icon: "ai", value: "AI Powered", label: "Groq Llama 3 70B financial assistant" },
      { icon: "currency", value: "Multi-Currency", label: "Earnings wallet per currency" },
      { icon: "reminder", value: "Auto Reminders", label: "Scheduled payment nudges" },
      { icon: "pdf", value: "PDF Generation", label: "Email-delivered invoices" },
      { icon: "pro", value: "Pro Plan", label: "KoraPay upgrade flow with branding" },
      { icon: "notify", value: "Real-time", label: "In-app notifications on client actions" },
    ],
    overview: "An AI-powered invoicing platform for freelancers and small businesses, with real-time invoice previews, automatic payment reminders, multi-currency support, and an AI assistant that answers natural language questions about your financial data. I designed and built Invoiceser end-to-end, from system architecture through to the product experience.",
    problem: "Freelancers and small business owners spend too much time chasing payments and tracking invoices across spreadsheets, WhatsApp messages, and memory. The tools that exist are either too complex, too expensive, or built for markets where payment infrastructure and currency contexts are entirely different.",
    keyDecisions: "The platform handles the full invoice lifecycle: draft, sent, overdue, and paid, with automatic status transitions managed by scheduled cron jobs. It generates PDFs, delivers invoices by email, and sends configurable payment reminders automatically before and after due dates.\n\nThe feature I am most proud of is the AI assistant, powered by Groq's Llama 3 70B model. It understands the user's invoice data and answers natural language questions: \"Who owes me the most right now?\", \"What was my strongest month this year?\", \"Which clients consistently pay late?\" Most invoicing tools surface numbers. This one helps users understand what those numbers mean.\n\nI also built multi-currency support with an earnings wallet that tracks collected amounts per currency without forced conversion, a Pro plan upgrade flow via KoraPay with custom branding, real-time in-app notifications when clients open invoices or payments are recorded, and a full admin panel for internal user management.",
    impact: "Live production application with full invoice lifecycle management, AI-powered financial intelligence, automated payment reminders, multi-currency support, and a Pro subscription tier. The complete product from architecture to deployment was shipped by one person.",
    links: [
      { label: "Visit Live App", url: "https://invoiceser.vercel.app/" },
    ],
  },
};

const iconMap: Record<string, JSX.Element> = {
  live: <Zap className="w-5 h-5 text-accent" />,
  api: <FileText className="w-5 h-5 text-accent" />,
  milestone: <Target className="w-5 h-5 text-accent" />,
  kyc: <BookOpen className="w-5 h-5 text-accent" />,
  escrow: <Lightbulb className="w-5 h-5 text-accent" />,
  docs: <FileText className="w-5 h-5 text-accent" />,
  team: <Zap className="w-5 h-5 text-accent" />,
  time: <Target className="w-5 h-5 text-accent" />,
  features: <Lightbulb className="w-5 h-5 text-accent" />,
  streams: <BookOpen className="w-5 h-5 text-accent" />,
  ai: <Zap className="w-5 h-5 text-accent" />,
  currency: <Target className="w-5 h-5 text-accent" />,
  reminder: <Lightbulb className="w-5 h-5 text-accent" />,
  pdf: <FileText className="w-5 h-5 text-accent" />,
  pro: <BookOpen className="w-5 h-5 text-accent" />,
  notify: <Zap className="w-5 h-5 text-accent" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const project = projects[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl">Project not found</h1>
          <Link href="/" className="text-accent underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <div className="container mx-auto px-6 pt-10">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border-subtle rounded-lg text-sm text-text-secondary hover:text-foreground transition-colors"
            data-testid="back-to-projects"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          {project.links[0] && (
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
              data-testid="visit-live-project"
            >
              Visit Live Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <nav className="text-sm text-text-secondary mb-10" data-testid="breadcrumb">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{project.title}</span>
        </nav>

        <motion.div
          className="w-full rounded-2xl border border-border-subtle bg-card mb-10 overflow-hidden"
          style={{ minHeight: 280 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center h-full min-h-[280px] p-10 text-center" style={{ background: "linear-gradient(135deg, #1c1c1c 0%, #111 100%)" }}>
            <div>
              <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">{project.type}</div>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-3">{project.title}</h1>
              <p className="text-text-secondary text-lg">{project.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
            {project.title}: {project.subtitle}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-accent font-medium">{project.role}</span>
            <span className="text-border-subtle">•</span>
            <span className="flex items-center gap-1.5 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              {project.status}
            </span>
            {project.team && (
              <>
                <span className="text-border-subtle">•</span>
                <span className="text-sm text-text-secondary">{project.team}</span>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial="hidden"
          animate="visible"
        >
          {project.stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="bg-card border border-border-subtle rounded-xl p-4 flex flex-col gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                {iconMap[stat.icon] ?? <Zap className="w-4 h-4 text-accent" />}
              </div>
              <div>
                <div className="text-foreground font-bold text-base">{stat.value}</div>
                <div className="text-text-secondary text-xs">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-12 p-4 bg-card border border-border-subtle rounded-xl">
          <div className="flex items-start gap-2 min-w-[140px]">
            <span className="text-text-secondary text-xs uppercase tracking-widest mt-0.5">Role</span>
            <span className="text-foreground text-sm font-medium">{project.role}</span>
          </div>
          <div className="w-px bg-border-subtle hidden md:block" />
          <div className="flex items-start gap-2 flex-1 min-w-[200px]">
            <span className="text-text-secondary text-xs uppercase tracking-widest mt-0.5 shrink-0">Stack</span>
            <span className="text-foreground text-sm font-medium">{project.stack}</span>
          </div>
          <div className="w-px bg-border-subtle hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-text-secondary text-xs uppercase tracking-widest">Status</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              {project.status}
            </span>
          </div>
        </div>

        <div className="space-y-14 max-w-3xl">
          {[
            { icon: <BookOpen className="w-5 h-5 text-accent" />, label: "Overview", content: project.overview },
            { icon: <Target className="w-5 h-5 text-accent" />, label: "The Problem", content: project.problem },
            { icon: <Lightbulb className="w-5 h-5 text-accent" />, label: "Key Decisions", content: project.keyDecisions },
            { icon: <Zap className="w-5 h-5 text-accent" />, label: "Impact", content: project.impact },
            ...(project.whatIdDoDifferently
              ? [{ icon: <FileText className="w-5 h-5 text-accent" />, label: "What I'd Do Differently", content: project.whatIdDoDifferently }]
              : []),
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="font-display text-2xl text-foreground">{section.label}</h3>
              </div>
              <div className="pl-12 space-y-4">
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-text-secondary leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-16">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors"
              data-testid={`project-link-${i}`}
            >
              {link.label} <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
