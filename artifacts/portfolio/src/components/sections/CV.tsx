import { motion } from "framer-motion";

const experience = [
  {
    role: "Product Manager Intern",
    company: "HNG Tech",
    period: "April 2026 to June 2026",
    location: "Lagos, Nigeria",
    description: "Technical Product Manager Lead coordinating a 53-person cross-functional team to deliver Open Profile from zero to live production in three weeks. Collaborated with Product Managers, Design, VAs, and Data Analysts, and partnered with Marketing on a GTM strategy leveraging a waitlist, beta group, founder-led outreach, and community channels."
  },
  {
    role: "Backend Development Trainee",
    company: "The Curve Africa",
    period: "May 2025 to November 2025",
    location: "Lagos, Nigeria",
    description: "Built production-grade RESTful APIs, integrated payment gateways, and shipped TraceAid as both product manager and backend developer."
  },
  {
    role: "Product Management Intern",
    company: "BorderFlo",
    period: "November 2024 to March 2025",
    location: "Lagos, Nigeria",
    description: "Used PostHog Analytics to diagnose a 40% post-signup churn rate due to upfront KYC requirements. Proposed and shipped progressive onboarding that cut identity-verification drop-off by 25%. Coordinated a 6-person team to build and launch MVP Android app."
  },
  {
    role: "Research and Strategy Analyst (NYSC)",
    company: "SavvyCrest Limited",
    period: "December 2023 to October 2024",
    location: "Lagos, Nigeria",
    description: "Conducted market research and competitive analysis for SMEs across FMCG, consulting, real estate, and technology, informing go-to-market and expansion strategy."
  }
];

const education = {
  degree: "Bachelor of Science, Industrial Relations and Personnel Management",
  institution: "University of Lagos (UNILAG), Lagos, Nigeria",
  period: "December 2017 to October 2023",
  details: "First Class (Hons), CGPA 4.82 out of 5.0, Top 1%, HOD Prize for Best Graduating Student"
};

const certifications = [
  {
    title: "Diploma in Backend Engineering",
    issuer: "AltSchool Africa",
    period: "November 2024 to October 2025",
    location: "Lagos, Nigeria"
  },
  {
    title: "Product Management",
    issuer: "DevCareer",
    period: "August 2023 to April 2024",
    location: "Lagos, Nigeria"
  },
  {
    title: "Advanced Diploma in Business Administration",
    issuer: "Tekedia Institute",
    period: "March 2023 to February 2024",
    location: "Boston, USA"
  }
];

const skills = {
  product: ["Product Roadmapping and Strategy", "PRD and TRD Writing", "User Research and Interviews", "Market Research", "Design Thinking", "Sprint Planning and Facilitation", "Backlog Management", "Feature Prioritization", "RICE Framework", "MoSCoW Prioritization", "Stakeholder Management", "Competitive Analysis", "User Story Mapping", "Acceptance Criteria Definition", "Data Analysis", "A/B Testing", "Agile and Scrum"],
  technical: ["JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB and Mongoose", "MySQL", "Sequelize", "PostgreSQL", "RESTful API Design", "API Testing", "Database Design", "System Architecture", "JWT Authentication", "API Documentation via Swagger", "QA Testing", "Prototyping", "Git and GitHub", "KoraPay", "Paystack"],
  tools: ["ClickUp", "Linear", "Jira", "Notion", "Confluence", "Asana", "Miro", "Figma", "Whimsical", "Mixpanel", "PostHog Analytics", "PowerBI", "SQL", "Postman", "Swagger", "Claude Code", "Cursor", "n8n", "Antigravity", "ChatGPT", "Microsoft 365", "Google Suite"]
};

export function CV() {
  return (
    <section id="cv" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Curriculum Vitae</h2>
          <p className="text-lg text-gray-600">The structured path of my professional journey.</p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-16">
          
          {/* Contact Header in CV */}
          <div className="border-b border-gray-200 pb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Channels Okunade Oladapo</h3>
              <p className="text-primary font-medium">Technical Product Manager</p>
            </div>
            <div className="text-sm text-gray-600 space-y-1 text-center md:text-right">
              <p>channelsokunade@gmail.com</p>
              <p>+(234) 816-0424-398</p>
              <p>Lagos State, Nigeria (GMT+1)</p>
              <div className="flex justify-center md:justify-end gap-3 pt-2">
                <a href="https://linkedin.com/in/channels-oladapo-67253a187" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                <span className="text-gray-300">•</span>
                <a href="https://github.com/codeconnoisseur-channels" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <section>
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary hidden md:inline-block"></span>
              Where I have worked
            </h4>
            <div className="space-y-10 pl-0 md:pl-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-12 top-1.5 w-3 h-3 rounded-full bg-primary/20 border border-primary hidden md:block"></div>
                  {idx !== experience.length - 1 && (
                    <div className="absolute -left-[43px] top-6 bottom-[-40px] w-px bg-gray-200 hidden md:block"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                    <h5 className="text-xl font-bold text-gray-900">{exp.role}</h5>
                    <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-primary font-medium text-sm">
                    <span>{exp.company}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{exp.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary hidden md:inline-block"></span>
              Education
            </h4>
            <div className="pl-0 md:pl-12">
              <div className="mb-2">
                <h5 className="text-xl font-bold text-gray-900">{education.degree}</h5>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 text-primary font-medium text-sm">
                <span>{education.institution}</span>
                <span className="hidden md:inline text-gray-300">•</span>
                <span className="text-gray-500">{education.period}</span>
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base bg-blue-50/50 inline-block px-3 py-1.5 rounded-md border border-blue-100/50">
                {education.details}
              </p>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications">
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary hidden md:inline-block"></span>
              Continuing Education
            </h4>
            <div className="space-y-6 pl-0 md:pl-12">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-gray-50/50 p-4 rounded-lg border border-gray-100">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h5>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                    <span className="text-primary font-medium">{cert.issuer}</span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span className="text-gray-500">{cert.location}</span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span className="text-gray-500">{cert.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary hidden md:inline-block"></span>
              Skills & Tools
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pl-0 md:pl-12">
              
              <div>
                <h5 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Product Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.product.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Technical Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h5 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </section>
  );
}
