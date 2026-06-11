import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const caseStudies = [
  { slug: "borderflo",      number: "01", company: "BorderFlo",    type: "PM Internship",       title: "BorderFlo: Diagnosing 40% Churn",              hook: "Found a 40% post-signup churn rate, ran user interviews, and discovered the problem was not what the team assumed." },
  { slug: "deliveroo",      number: "02", company: "Deliveroo",    type: "Product Case Study",  title: "Deliveroo: Group Ordering with Split Payment",  hook: "Users were coordinating group orders on WhatsApp and splitting bills on separate apps. The product had no solution." },
  { slug: "vendsync",       number: "03", company: "VendSync",     type: "Product Case Study",  title: "VendSync: Q3 Roadmap Prioritization",           hook: "5 backlog items. 34 sprint points. 15 points of capacity. Three senior stakeholders. One PM framework." },
  { slug: "ladda",          number: "04", company: "Ladda",        type: "Feature Proposal",    title: "Ladda: User Engagement & Retention",            hook: "30,000+ users, sharp post-onboarding drop-off, and no habit-forming systems. Three features that could change that." },
  { slug: "moneykids",      number: "05", company: "MoneyKids.ai", type: "Product Pitch",       title: "MoneyKids.ai: Product Pitch",                   hook: "Only 27% of sub-Saharan African adults are financially literate. The problem begins in childhood, and no AI platform addresses it." },
  { slug: "youtube-shorts", number: "06", company: "YouTube",      type: "Competitive Analysis",title: "YouTube Shorts: Platform Strategy",             hook: "YouTube built a massive ad business on long-form creators. Then it structurally redirected viewer attention away from them." },
];

export default function CaseStudiesPage() {
  return (
    <main className="w-full pb-24">
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Case Studies</div>
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Product <span className="text-accent">Thinking</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-2xl">
              Six real-world PM exercises covering churn diagnosis, sprint prioritization, feature proposals, and competitive strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <GlowCard
                key={cs.slug}
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                className="bg-card rounded-xl border border-border-subtle hover:border-accent/25 overflow-hidden flex flex-col group transition-colors"
              >
                <div className="h-44 bg-gradient-to-br from-card to-card-lighter flex items-center p-8 border-b border-border-subtle relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-8 font-display text-8xl text-white/5 font-bold select-none">{cs.number}</div>
                  <div className="relative z-10">
                    <span className="text-accent font-display text-xl">{cs.number}.</span>
                    <h3 className="font-display text-3xl text-foreground mt-1">{cs.company}</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full border border-accent text-accent text-xs font-medium mb-3 w-fit">{cs.type}</span>
                  <h4 className="text-foreground font-semibold text-sm mb-3">{cs.title}</h4>
                  <p className="text-text-secondary text-sm italic mb-8 flex-1 border-l-2 border-border-subtle pl-4 py-1">"{cs.hook}"</p>
                  <Link href={`/case-studies/${cs.slug}`} className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                    View Case Study <ArrowRight className="w-4 h-4" />
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
