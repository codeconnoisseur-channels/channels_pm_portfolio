import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
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
      "Co-authored the Technical Requirements Document with the backend team, defining system architecture, over 30 API endpoints, PostgreSQL database schemas, and security requirements.",
      "Collaborated with fellow Product Managers, Design, VAs, and Data Analysts across all product workstreams.",
      "Partnered with Marketing on the GTM strategy, leveraging a waitlist, beta group, founder-led outreach, community channels, and existing social media platforms.",
      "Designed user flows that eliminated a three-week rework cycle caused by design-engineering misalignment.",
      "Managed the full ticket backlog in ClickUp, ran daily standups, and coordinated across five functional streams simultaneously.",
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

const tools = [
  "ClickUp", "Linear", "Jira", "Notion", "Confluence", "Asana", "Miro", "Figma",
  "Whimsical", "Google Analytics", "PostHog", "PowerBI", "SQL", "Postman", "Swagger",
  "Claude Code", "Cursor", "n8n", "Gemini", "ChatGPT",
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
    badges: ["10 Stages Completed", "Won Best in Product Management", "Top 1% of 1,000+ Interns"],
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen pb-24">
      <div className="container mx-auto px-6 pt-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">RESUME</div>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-2">Channels Okunade Oladapo</h1>
          <p className="text-accent text-xl font-medium mb-1">Technical Product Manager</p>
          <p className="text-text-secondary text-sm mb-6">Lagos State, Nigeria</p>
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
            <a href="mailto:channelsokunade@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors" data-testid="cv-email">
              <Mail className="w-4 h-4 text-accent" /> channelsokunade@gmail.com
            </a>
            <a href="tel:+2348160424398" className="flex items-center gap-2 hover:text-accent transition-colors" data-testid="cv-phone">
              <Phone className="w-4 h-4 text-accent" /> +(234) 816-0424-398
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" /> Lagos State, Nigeria
            </span>
            <a href="https://www.linkedin.com/in/channels-oladapo-67253a187/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors" data-testid="cv-linkedin">
              <Linkedin className="w-4 h-4 text-accent" /> linkedin.com/in/channels-oladapo-67253a187
            </a>
            <a href="https://github.com/codeconnoisseur-channels/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors" data-testid="cv-github">
              <Github className="w-4 h-4 text-accent" /> github.com/codeconnoisseur-channels
            </a>
          </div>
        </motion.div>

        <div className="h-px bg-border-subtle mb-12" />

        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-foreground mb-5">Professional Summary</h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            Technical Product Manager with hands-on backend engineering experience in Node.js, Express, MongoDB, and PostgreSQL. Builds end-to-end: from user research, PRD and TRD writing, and acceptance criteria through to API design, prototyping, and GTM coordination. Bridges the gap between product thinking and engineering execution. When there is a problem to solve, the answer is not just a document, it is a working prototype. Currently focused on building AI-powered products at the intersection of LLMs, AI Agents, and automation.
          </p>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        <section className="mb-14">
          <motion.h2
            className="font-display text-2xl text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-foreground font-semibold text-lg">{job.role}</h3>
                    <div className="text-accent font-medium">{job.company}</div>
                  </div>
                  <div className="text-text-secondary text-sm text-right shrink-0">
                    <div>{job.period}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-text-secondary leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border-subtle mb-12" />

        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Education</h2>
          <div className="bg-card border border-border-subtle rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-foreground font-semibold text-lg">Bachelor of Science, Industrial Relations and Personnel Management</h3>
                <div className="text-accent font-medium mt-1">University of Lagos (UNILAG)</div>
                <div className="text-text-secondary text-sm mt-1">Lagos, Nigeria</div>
              </div>
              <div className="text-text-secondary text-sm text-right shrink-0">
                December 2017 – October 2023
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {["First Class (Hons)", "CGPA 4.82 / 5.0", "Top 1%", "HOD Prize: Best Graduating Student"].map((badge, i) => (
                <span key={i} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Achievements & Recognition</h2>
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <div key={i} className="bg-card border border-accent/30 rounded-xl p-5">
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
                    <span key={j} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Continuing Education</h2>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-card border border-border-subtle rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div className="text-foreground font-medium">{cert.title}</div>
                  <div className="text-accent text-sm">{cert.org}</div>
                </div>
                <div className="text-text-secondary text-sm text-right">
                  <div>{cert.period}</div>
                  <div>{cert.location}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-border-subtle mb-12" />

        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-foreground mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-4">Product Skills</h3>
              <div className="flex flex-wrap gap-2">
                {productSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-card border border-border-subtle rounded-lg text-foreground text-sm hover:border-accent/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-text-secondary text-xs uppercase tracking-widest mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-card border border-border-subtle rounded-lg text-foreground text-sm hover:border-accent/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-foreground mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span key={i} className="px-3 py-1.5 bg-card border border-border-subtle rounded-lg text-text-secondary text-sm hover:text-accent hover:border-accent/40 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
