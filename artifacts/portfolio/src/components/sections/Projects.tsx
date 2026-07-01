import { motion } from "framer-motion";
import { ArrowUpRightIcon, ServerIcon, UsersIcon, SparklesIcon } from "lucide-react";

const projects = [
  {
    title: "Invoiceser",
    role: "AI Product Manager",
    type: "AI-Powered Invoicing Platform, SaaS",
    stack: ["Next.js 14", "Convex", "Clerk", "Resend", "gpt-oss-120b (via Groq)", "KoraPay", "Recharts"],
    status: "Live",
    description: "An AI-powered invoicing platform for freelancers and small businesses, with real-time invoice previews, automatic payment reminders, multi-currency support, and an AI assistant that answers natural language questions about your financial data.",
    problem: "",
    decision: "AI assistant powered by gpt-oss-120b (via Groq) that understands the user's invoice data and answers natural language questions: \"Who owes me the most right now?\", \"What was my strongest month this year?\", \"Which clients consistently pay late?\"",
    links: [
      { name: "Live App", url: "https://invoiceser.vercel.app/" }
    ],
    icon: SparklesIcon
  },
  {
    title: "Open Profile",
    role: "Technical Product Manager Lead (HNG Internship)",
    type: "Identity Platform, Web Application",
    stack: ["React", "Node", "Cross-functional Team (53 people)"],
    status: "Live",
    description: "An identity platform for freelancers, creators, and indie builders to consolidate their professional presence into one clean, searchable URL. Led it from zero to launch, coordinating 53 people across five functional streams, in three weeks.",
    problem: "",
    decision: "Wrote the complete PRD for four core features with user stories, acceptance criteria, edge cases, and success metrics. Co-authored the TRD with the backend lead. Designed a user flow redesign that eliminated a three-week rework cycle caused by design-engineering misalignment.",
    links: [
      { name: "Live App", url: "https://open-profile.hng14.com/" }
    ],
    icon: UsersIcon
  },
  {
    title: "TraceAid",
    role: "Product Manager and Backend Developer",
    type: "Crowdfunding and Accountability Platform",
    stack: ["Node.js", "Express.js", "MongoDB", "KoraPay", "Cloudinary", "Swagger"],
    status: "Live",
    description: "A crowdfunding platform built around a single conviction: donors deserve to see exactly what their money accomplished before the next tranche releases.",
    problem: "Crowdfunding has a trust problem. The 2025 World Giving Report found that 47% of Nigerians do not donate because they do not trust how their money will be used, and 51% say they would give more if they could see the impact directly. Standard platforms collect donations upfront and disburse funds in bulk, with no mechanism to verify how the money was spent before releasing the next amount. Donors give with hope and receive silence.",
    decision: "Milestone-based escrow model: funds are held until fundraisers upload verifiable proof of impact (geo-stamped photos, receipts, budget documents, video evidence) per milestone. An administrator reviews evidence. Only on approval does the next tranche unlock. Built the complete API infrastructure: user onboarding and KYC, campaign creation and milestone definition, escrow wallet system, donation processing via KoraPay, administrator verification workflows, Cloudinary media uploads, and analytics dashboards.",
    links: [
      { name: "Live App", url: "https://trace-aid.vercel.app/" },
      { name: "API Docs", url: "https://traceaid.onrender.com/docs/" }
    ],
    icon: ServerIcon
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Shipped Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Products built, led, and delivered. Where product thinking meets technical execution.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 text-primary rounded-xl">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium text-gray-500">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Role</span>
                      <span className="text-gray-800 font-medium">{project.role}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Type</span>
                      <span className="text-gray-800 font-medium">{project.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    {project.links.map(link => (
                      <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                      >
                        {link.name}
                        <ArrowUpRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">Overview</h4>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {project.problem && (
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">The Problem</h4>
                      <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                      {project.title === "TraceAid" ? "Key Decision & Execution" : project.title === "Open Profile" ? "Key Contribution" : "Key Feature"}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{project.decision}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
