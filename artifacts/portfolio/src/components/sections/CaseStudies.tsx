import { motion } from "framer-motion";
import { ArrowUpRightIcon, FileTextIcon } from "lucide-react";

const caseStudies = [
  {
    title: "BorderFlo",
    type: "Product Management Internship",
    context: "Cross-border educational payment startup",
    hook: "Found a 40% post-signup churn rate in Google Analytics, ran user interviews to understand it, and discovered that the problem was not what the team assumed it was.",
    insight: "Users understood exactly what they needed to do. They were making a rational decision — the effort required to complete verification was not yet worth it, because they had not experienced any product value. The problem was sequencing, not communication.",
    decision: "Progressive onboarding — restructure the experience so users can explore the product and see its value before identity verification is required. Build commitment before demanding effort.",
    impact: "MVP launched in January 2025. Progressive onboarding shipped and reduced verification abandonment. The product launched on schedule.",
    link: "https://www.borderflo.com/"
  },
  {
    title: "Deliveroo",
    type: "Collaborative Group Ordering with Split Payment",
    context: "Product Case Study Exercise (speculative feature proposal)",
    hook: "Deliveroo's users were coordinating group food orders on WhatsApp and splitting bills on separate payment apps. The product had no solution for the most social food ordering use case in its market.",
    insight: "A host starts a group order session, guests verify with SMS, browse the same menu, and add items to a shared basket. When locked, each participant is prompted to pay their share directly.",
    decision: "Payment decoupled and upfront. Each participant pays before the order is placed, not after. This removes the social friction of informal debt between friends.",
    impact: "Interactive Figma prototype covering host and guest flows. Full case study PDF with market analysis, personas, user flow, edge cases, and success metrics.",
    link: "https://docs.google.com/presentation/d/1R5ecThTskbmiMN_H777zH8CrKDrQFAu3s0_8g86GrnE/edit"
  },
  {
    title: "VendSync",
    type: "Q3 Roadmap Prioritization & Stakeholder Management",
    context: "Product Case Study Exercise",
    hook: "Five backlog items. 34 sprint points. 15 points of engineering capacity. CEO, Head of Sales, and Head of Marketing each believed their item was the most critical. Said no to all three, and built the written case.",
    insight: "Used RICE prioritization (Reach x Impact x Confidence / Effort) across all five items to establish objective ground truth.",
    decision: "Selected: Inventory Database Refactor (RICE 12.14) & White Screen Bug Fix (RICE 8.55). Deferred WhatsApp Checkout Bot, Multi-Currency Wallet, and AI Inventory Predictor.",
    impact: "Protected 100% of transaction volume against Black Friday failure. Resolved a live failure causing 500+ weekly support tickets.",
    link: "https://docs.google.com/document/d/1swESIXyqj-EqjuYWy5XJi9sOwU0QT7BepuVt0-tkcZs/edit"
  },
  {
    title: "Ladda",
    type: "User Engagement and Retention",
    context: "Product Case Study Exercise (feature proposal)",
    hook: "Ladda had 30,000+ users on a wealthtech platform. Engagement dropped sharply after onboarding, the app had no habit-forming systems, and users were going inactive without seeing value.",
    insight: "Diagnosis: Missing streak systems, educational content broken, no real-time guidance during investment decisions, and UX inconsistencies.",
    decision: "Three recommendations: Gamification (Must Have), In-App Micro-Learning (Must Have), and AI Wealth Companion (Should Have).",
    impact: "Evidence-backed proposal showing Duolingo-style streaks increase retention by 60% and AI nudges increase savings uptake by 25-40%.",
    link: "https://docs.google.com/presentation/d/1qFDwGqRKedg40Ty-zKh6E8IQvt6MFSjudl551a6nBtg/edit"
  },
  {
    title: "MoneyKids.ai",
    type: "Product Pitch",
    context: "Product Case Study Exercise",
    hook: "Only 27% of sub-Saharan African adults are financially literate. The problem begins in childhood, and no AI-powered platform is addressing it in Africa.",
    insight: "Opportunity: Transform MoneyAfrica Kids into MoneyKids.ai. Scale from 10k to 500k learners in 2 years. TAM: 468M children. SAM: 117M.",
    decision: "Product architecture: AI Money Tutor explaining concepts plainly, age-tiered learning paths, daily missions, adaptive quizzes, parent dashboard, school admin panel.",
    impact: "Freemium revenue model projected at N4.8 billion annually at 20% conversion across 500,000 users.",
    link: "https://docs.google.com/presentation/d/14ZF6WTe831PApjcRvxMviEU2twACN1Tb143E74fETXY/edit"
  },
  {
    title: "YouTube Shorts",
    type: "Competitive Analysis & Platform Strategy",
    context: "Research and Debate Exercise",
    hook: "YouTube built a $40B business on long-form creators. Then it structurally redirected viewer attention away from them to compete with TikTok.",
    insight: "YouTube's moat is high-intent, long-form educational/entertainment content, not short-form. Algorithm changes caused a 30% drop in long-form views.",
    decision: "Four recommendations: $150M Long-Form Creator Stabilization Fund, reorient Partnerships Hub, equalize Shorts revenue share to 55%, restore homepage allocation.",
    impact: "Data-backed argument citing per-view earnings disparity ($0.03-$0.06 Shorts vs $1.61-$29.30 Long-form) and Spotter's $940M miss.",
    link: "https://docs.google.com/presentation/d/1srd8MPjpzlQeHl9r091Z3lTTlKZZ2ErAKsxIRSPM2rs/edit"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Deep dives into strategy, prioritization, research, and product architecture. Evidence of structured thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col h-full bg-white border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <div className="p-2 bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-primary rounded-lg transition-colors">
                      <FileTextIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="inline-block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    {study.type}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-gray-600 mb-8 flex-grow">
                  <p><span className="font-semibold text-gray-900">Hook:</span> {study.hook}</p>
                  <p><span className="font-semibold text-gray-900">Insight/Diagnosis:</span> {study.insight}</p>
                  <p><span className="font-semibold text-gray-900">Decision:</span> {study.decision}</p>
                  <p><span className="font-semibold text-gray-900">Impact:</span> {study.impact}</p>
                </div>

                <a 
                  href={study.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary mt-auto group-hover:underline"
                >
                  Read Full Study
                  <ArrowUpRightIcon className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
