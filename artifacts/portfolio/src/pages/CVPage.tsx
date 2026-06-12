import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Award, BarChart2, Code, Lightbulb, Database, TrendingUp, MousePointer2, PenTool, Download } from "lucide-react";
import { SiFigma, SiJira, SiLinear, SiClickup, SiNotion, SiAsana, SiMiro, SiPostman, SiSwagger, SiGithub, SiAnthropic, SiOpenai, SiGoogle, SiN8N, SiGoogleanalytics, SiPosthog, SiConfluence } from "react-icons/si";
import { GlowCard } from "@/components/GlowCard";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)" },
};

const experience = [
  {
    company: "HNG Tech",
    role: "Product Manager Intern",
    period: "April 2026 – June 2026",
    location: "Lagos, Nigeria",
    bullets: [
      "Served as Technical PM Lead coordinating a 53-person cross-functional team (frontend, backend, DevOps, QA) to ship Open Profile from zero to live production in three weeks.",
      "Wrote the complete PRD for four core features with user stories, acceptance criteria, edge cases, and success metrics.",
      "Co-authored the Technical Requirements Document with the backend team, defining system architecture, 15+ API endpoints, PostgreSQL database schemas, and security requirements.",
      "Wrote all detailed implementation tickets for both the frontend and backend teams, covering expected behavior, edge cases, and acceptance criteria for every task, and managed the full sprint backlog in ClickUp.",
      "Collaborated with the QA team to conduct multiple testing rounds throughout the sprint, including UI/UX testing, functional testing, User Acceptance Testing (UAT), and regression testing, verifying feature behavior against specifications across happy paths and edge cases.",
      "Collaborated with fellow Product Managers, Design, VAs, and Data Analysts across all product workstreams.",
      "Partnered with Marketing on the GTM strategy, leveraging a waitlist, beta group, founder-led outreach, community channels, and existing social media platforms.",
      "Designed user flows that eliminated a three-week rework cycle caused by design-engineering misalignment.",
    ],
  },
  {
    company: "The Curve Africa",
    role: "Backend Development Trainee",
    period: "May 2025 – November 2025",
    location: "Lagos, Nigeria",
    bullets: [
      "Designed and deployed secure RESTful APIs implementing authentication, authorization, CRUD operations, and data validation.",
      "Integrated KoraPay and Paystack payment gateways across multiple applications.",
      "Managed and optimized databases with MySQL, Sequelize, and MongoDB.",
      "Built TraceAid as Overall Team Lead, PM, and one of two backend developers, delivering API documentation via Swagger for frontend developers.",
    ],
  },
  {
    company: "BorderFlo",
    role: "Product Management Intern",
    period: "November 2024 – February 2025",
    location: "Lagos, Nigeria",
    bullets: [
      "Collaborated with a 6-person cross-functional team to build and launch BorderFlo's MVP Android app in January 2025.",
      "Ran user interviews and iterated on PRDs for onboarding and wallet funding, reducing identity verification drop-off.",
      "Used Google Analytics to identify a 40% post-signup churn rate, diagnosed the root cause as a sequencing problem, and proposed and shipped progressive onboarding that reduced abandonment at the verification stage.",
      "Coordinated a hybrid team of internal and specialist external engineers across competing priorities and timelines.",
      "Facilitated sprint planning and backlog grooming in ClickUp.",
    ],
  },
  {
    company: "SavvyCrest Limited",
    role: "Research and Strategy Analyst (NYSC)",
    period: "December 2023 – October 2024",
    location: "Lagos, Nigeria",
    bullets: [
      "Conducted in-depth market research and competitive analysis for SMEs across FMCG, consulting, real estate, and technology sectors.",
      "Prepared strategic reports that improved client go-to-market execution and expansion plans.",
    ],
  },
];

const productSkills = [
  "Roadmapping & Strategy", "PRD & TRD Writing", "User Research", "Market Research",
  "Design Thinking", "Sprint Facilitation", "Backlog Management", "Feature Prioritization",
  "RICE Framework", "MoSCoW Prioritization", "Stakeholder Management", "Competitive Analysis",
  "User Story Mapping", "Data Analysis", "A/B Testing", "Agile & Scrum",
];

const technicalSkills = [
  "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "MySQL", "Sequelize",
  "PostgreSQL", "RESTful APIs", "API Testing", "Database Design", "System Architecture",
  "JWT Authentication", "Swagger", "QA Testing", "Prototyping", "Git & GitHub",
  "KoraPay", "Paystack",
];

const tools: { name: string; icon: React.ElementType; color: string }[] = [
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
];

const certifications = [
  { title: "Diploma in Backend Engineering", org: "AltSchool Africa", period: "November 2024 – October 2025", location: "Lagos, Nigeria" },
  { title: "Product Management", org: "DevCareer", period: "August 2023 – April 2024", location: "Lagos, Nigeria" },
  { title: "Advanced Diploma in Business Administration", org: "Tekedia Institute", period: "March 2023 – February 2024", location: "Boston, USA" },
];

const achievements = [
  {
    title: "HNG Finalist – Product Management Track",
    org: "HNG Tech",
    period: "2026",
    badges: ["10 Stages Completed", "Won Best in Product Management", "Top 1% of 1,000+ PM Interns"],
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen pb-24">
      <div className="container mx-auto px-5 sm:px-8 pt-12 max-w-4xl">

        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.75, ease }}
          className="mb-12"
        >
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">RESUME</div>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-2">Channels Okunade Oladapo</h1>
          <p className="text-accent text-xl font-medium mb-1">Technical Product Manager</p>
          <p className="text-text-secondary text-sm mb-6">Lagos State, Nigeria · Available Globally</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-secondary mb-6">
            <a href="mailto:channelsokunade@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors min-w-0" data-testid="cv-email">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="truncate">channelsokunade@gmail.com</span>
            </a>
            <a href="tel:+2348160424398" className="flex items-center gap-2 hover:text-accent transition-colors shrink-0" data-testid="cv-phone">
              <Phone className="w-4 h-4 text-accent shrink-0" /> +(234) 816-0424-398
            </a>
            <span className="flex items-center gap-2 shrink-0">
              <MapPin className="w-4 h-4 text-accent shrink-0" /> Lagos State, Nigeria · Available Globally
            </span>
            <a href="https://www.linkedin.com/in/channels-oladapo-67253a187/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors min-w-0" data-testid="cv-linkedin">
              <Linkedin className="w-4 h-4 text-accent shrink-0" />
              <span className="truncate">linkedin.com/in/channels-oladapo</span>
            </a>
            <a href="https://github.com/codeconnoisseur-channels/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors min-w-0" data-testid="cv-github">
              <Github className="w-4 h-4 text-accent shrink-0" />
              <span className="truncate">github.com/codeconnoisseur-channels</span>
            </a>
          </div>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1m5WSfuVq2IfAgh5fVbubAiyXUktcfUB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="w-4 h-4" /> Download CV
          </motion.a>
        </motion.div>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Professional Summary */}
        <motion.section
          className="mb-14"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-display text-2xl text-foreground mb-5">Professional Summary</h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            Technical Product Manager with hands-on backend engineering experience in Node.js, Express, MongoDB, and PostgreSQL. Builds end-to-end: from user research, PRD and TRD writing, and acceptance criteria through to API design, prototyping, and GTM coordination. Bridges the gap between product thinking and engineering execution. When there is a problem to solve, the answer is not just a document, it is a working prototype. Currently focused on building AI-powered products at the intersection of LLMs, AI Agents, and automation.
          </p>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Work Experience */}
        <section className="mb-14">
          <motion.h2
            className="font-display text-2xl text-foreground mb-8"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
          >
            Work Experience
          </motion.h2>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <GlowCard
                key={i}
                className="bg-card border border-border-subtle hover:border-accent/25 rounded-xl p-6 transition-colors"
                initial={{ opacity: 0, y: 44, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.1, ease }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                  <div>
                    <div className="text-accent text-xs font-bold tracking-widest uppercase mb-1">{job.company}</div>
                    <h3 className="text-foreground font-semibold text-lg">{job.role}</h3>
                  </div>
                  <div className="text-text-secondary text-sm shrink-0 md:text-right mt-1">
                    <div>{job.period}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-text-secondary leading-relaxed text-sm">
                      <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </section>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Education */}
        <motion.section
          className="mb-14"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Education</h2>
          <GlowCard className="bg-card border border-border-subtle hover:border-accent/25 rounded-xl p-6 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-foreground font-semibold text-lg">Bachelor of Science, Industrial Relations and Personnel Management</h3>
                <div className="text-accent font-medium mt-1">University of Lagos (UNILAG)</div>
                <div className="text-text-secondary text-sm mt-1">Lagos, Nigeria</div>
              </div>
              <div className="text-text-secondary text-sm text-right shrink-0">December 2017 – October 2023</div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {["First Class (Hons)", "CGPA 4.82 / 5.0", "Top 1%", "HOD Prize: Best Graduating Student"].map((badge, i) => (
                <span key={i} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium">{badge}</span>
              ))}
            </div>
          </GlowCard>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Achievements */}
        <motion.section
          className="mb-14"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Achievements &amp; Recognition</h2>
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <GlowCard key={i} className="bg-card border border-accent/30 hover:border-accent/50 rounded-xl p-5 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">{item.title}</div>
                      <div className="text-accent text-sm">{item.org}</div>
                    </div>
                  </div>
                  <div className="text-text-secondary text-sm shrink-0 md:text-right">{item.period}</div>
                </div>
                <div className="flex flex-wrap gap-2 pl-11">
                  {item.badges.map((badge, j) => (
                    <span key={j} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium">{badge}</span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Continuing Education */}
        <motion.section
          className="mb-14"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Continuing Education</h2>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <GlowCard
                key={i}
                className="bg-card border border-border-subtle hover:border-accent/25 rounded-xl p-5 transition-colors"
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="text-foreground font-medium">{cert.title}</div>
                    <div className="text-accent text-sm">{cert.org}</div>
                  </div>
                  <div className="text-text-secondary text-sm text-right">
                    <div>{cert.period}</div>
                    <div>{cert.location}</div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        {/* Skills */}
        <motion.section
          className="mb-14"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-4">Product Skills</h3>
              <div className="flex flex-wrap gap-2">
                {productSkills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4, ease }}
                    className="px-3 py-1.5 bg-card border border-border-subtle rounded-lg text-foreground text-sm hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4, ease }}
                    className="px-3 py-1.5 bg-card border border-border-subtle rounded-lg text-foreground text-sm hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tools */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.035, 0.18), duration: 0.4, ease }}
                whileHover={{ y: -5, scale: 1.06, boxShadow: "0 0 0 1px rgba(201,169,110,0.25), 0 16px 32px rgba(0,0,0,0.4)", transition: { type: "spring", stiffness: 320, damping: 22 } }}
                className="bg-card border border-border-subtle rounded-2xl p-4 flex flex-col items-center justify-center gap-2 w-[88px] h-[88px] hover:border-accent/30 transition-colors cursor-pointer"
              >
                <tool.icon className="w-6 h-6" style={{ color: tool.color }} />
                <span className="text-[10px] font-medium text-text-secondary text-center leading-tight">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
