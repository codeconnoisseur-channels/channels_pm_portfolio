import { useParams, Link } from "wouter";
import { useRef, useEffect, useState } from "react";
import { usePageTitle } from "@/hooks/use-page-title";
import { motion, useInView } from "framer-motion";
import { ExternalLink, FileText, Target, Lightbulb, Zap, BookOpen, BarChart2 } from "lucide-react";

function useCountUp(end: number, active: boolean, duration = 1300) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(eased * end);
      if (t < 1) { raf = requestAnimationFrame(tick); } else { setVal(end); }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);
  return val;
}

function StatValue({ raw }: { raw: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const m = raw.match(/^(.*?)(\d[\d,.]*)(.*)$/);
  if (!m) return <span>{raw}</span>;
  const [, prefix, numStr, suffix] = m;
  if (raw.includes("–")) return <span>{raw}</span>;
  const target = parseFloat(numStr.replace(/,/g, ""));
  const isDecimal = numStr.includes(".");
  const useComma = numStr.includes(",") && !numStr.includes(".");
  const decPlaces = isDecimal ? (numStr.split(".")[1]?.length ?? 2) : 0;
  const count = useCountUp(target, inView);
  const fmt = (n: number) => {
    if (isDecimal) return n.toFixed(decPlaces);
    if (useComma) return Math.floor(n).toLocaleString();
    return String(Math.floor(n));
  };
  return <span ref={ref}>{prefix}{inView ? fmt(count) : "0"}{suffix}</span>;
}

function renderContent(content: string) {
  const chunks = content.split("\n\n").filter((c) => c.trim());
  return chunks.map((chunk, i) => {
    const lines = chunk.split("\n").map((l) => l.trim()).filter((l) => l);
    if (!lines.length) return null;

    if (lines[0].startsWith("## ")) {
      return (
        <h4 key={i} className="font-display text-base md:text-lg text-foreground mt-7 mb-2 first:mt-0 border-l-2 border-accent pl-3">
          {lines[0].replace(/^## /, "")}
        </h4>
      );
    }

    if (lines.length > 0 && lines.every((l) => /^\d+\.\s/.test(l))) {
      return (
        <ol key={i} className="space-y-2">
          {lines.map((line, j) => {
            const m = line.match(/^(\d+)\.\s*(.*)/);
            return m ? (
              <li key={j} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
                <span className="text-accent font-semibold flex-shrink-0 min-w-[1.25rem]">{m[1]}.</span>
                <span>{m[2]}</span>
              </li>
            ) : null;
          })}
        </ol>
      );
    }

    if (lines.length > 0 && lines.every((l) => l.startsWith("• "))) {
      return (
        <ul key={i} className="space-y-2">
          {lines.map((line, j) => (
            <li key={j} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
              <span className="text-accent flex-shrink-0 font-bold">•</span>
              <span>{line.replace(/^•\s*/, "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="text-text-secondary leading-relaxed text-sm md:text-base">
        {lines.join(" ")}
      </p>
    );
  }).filter(Boolean);
}

const iconMap: Record<string, JSX.Element> = {
  churn:       <BarChart2 className="w-4 h-4 text-accent" />,
  insight:     <Lightbulb className="w-4 h-4 text-accent" />,
  launch:      <Zap className="w-4 h-4 text-accent" />,
  fix:         <Target className="w-4 h-4 text-accent" />,
  team:        <BookOpen className="w-4 h-4 text-accent" />,
  result:      <FileText className="w-4 h-4 text-accent" />,
  market:      <BarChart2 className="w-4 h-4 text-accent" />,
  cagr:        <Zap className="w-4 h-4 text-accent" />,
  host:        <Target className="w-4 h-4 text-accent" />,
  payment:     <Lightbulb className="w-4 h-4 text-accent" />,
  personas:    <BookOpen className="w-4 h-4 text-accent" />,
  edge:        <FileText className="w-4 h-4 text-accent" />,
  items:       <BarChart2 className="w-4 h-4 text-accent" />,
  capacity:    <Target className="w-4 h-4 text-accent" />,
  rice1:       <Zap className="w-4 h-4 text-accent" />,
  rice2:       <Lightbulb className="w-4 h-4 text-accent" />,
  rice3:       <FileText className="w-4 h-4 text-accent" />,
  stakeholders:<BookOpen className="w-4 h-4 text-accent" />,
  users:       <BarChart2 className="w-4 h-4 text-accent" />,
  growth:      <Zap className="w-4 h-4 text-accent" />,
  retention:   <Target className="w-4 h-4 text-accent" />,
  engagement:  <Lightbulb className="w-4 h-4 text-accent" />,
  nudge:       <FileText className="w-4 h-4 text-accent" />,
  adoption:    <BookOpen className="w-4 h-4 text-accent" />,
  tam:         <BarChart2 className="w-4 h-4 text-accent" />,
  sam:         <Target className="w-4 h-4 text-accent" />,
  som:         <Zap className="w-4 h-4 text-accent" />,
  revenue:     <Lightbulb className="w-4 h-4 text-accent" />,
  literacy:    <FileText className="w-4 h-4 text-accent" />,
  seed:        <BookOpen className="w-4 h-4 text-accent" />,
  views:       <BarChart2 className="w-4 h-4 text-accent" />,
  drop:        <Target className="w-4 h-4 text-accent" />,
  slots:       <Zap className="w-4 h-4 text-accent" />,
  cpm:         <FileText className="w-4 h-4 text-accent" />,
  spotter:     <BookOpen className="w-4 h-4 text-accent" />,
};

const sectionIcons: Record<string, JSX.Element> = {
  context:      <BookOpen className="w-4 h-4 text-accent" />,
  challenge:    <Target className="w-4 h-4 text-accent" />,
  approach:     <Lightbulb className="w-4 h-4 text-accent" />,
  decisions:    <FileText className="w-4 h-4 text-accent" />,
  demonstrates: <Zap className="w-4 h-4 text-accent" />,
  learning:     <BarChart2 className="w-4 h-4 text-accent" />,
};

type CaseSection = { icon: string; label: string; content: string };
type CaseStudyData = {
  number: string;
  title: string;
  company: string;
  type: string;
  period?: string;
  hook: string;
  stats: { icon: string; value: string; label: string }[];
  sections: CaseSection[];
  links: { label: string; url: string }[];
};

const caseStudies: Record<string, CaseStudyData> = {
  "borderflo": {
    number: "01",
    title: "BorderFlo: Activation & Onboarding",
    company: "BorderFlo",
    type: "PM Internship",
    period: "Nov 2024 – Mar 2025",
    hook: "Found a 40% post-signup churn rate, ran user interviews, and discovered the problem was not what the team assumed.",
    stats: [
      { icon: "churn",   value: "40%",        label: "Post-signup churn rate (PostHog Analytics)" },
      { icon: "insight", value: "Sequencing", label: "Root cause: commitment before value" },
      { icon: "result",  value: "25%",    label: "Reduction in identity-verification drop-off" },
    ],
    sections: [
      {
        icon: "context",
        label: "Context",
        content: `BorderFlo is a Lagos-based startup solving a real and underserved problem: African students who need to pay tuition, application fees, and other educational costs to institutions outside Nigeria face a painful, fragmented payment process. BorderFlo was building a mobile app to let users fund a wallet and make those payments directly from it.

I joined as a Product Management Intern as the team was building toward the MVP launch. The core challenge I was given: improve the path from signup to first wallet funding.`,
      },
      {
        icon: "challenge",
        label: "The Challenge",
        content: `The team had observed that users were signing up but not completing the onboarding process. Using PostHog Analytics, I traced the user journey from signup through each onboarding step and identified where volume was dropping off. The data showed a 40% churn rate, concentrated at one specific step: identity verification (upfront KYC/NIN verification).

My first instinct (and the instinct of most product teams in this situation) would have been to optimize the verification step itself. Simplify the UI, improve the copy, add tooltips. But I ran user interviews before drawing that conclusion, because the data could only tell me where the problem was. It could not tell me why.`,
      },
      {
        icon: "approach",
        label: "My Approach",
        content: `The interviews changed everything. Users were not confused by the verification step. They understood exactly what they needed to do. The problem was that they had not yet decided it was worth doing. They had signed up, arrived at a step requiring them to submit identity documents, and made a rational cost-benefit calculation: the effort required to verify was not worth it because they had not yet experienced any product value. They had not funded a wallet. They had not made a payment. They had not seen the product solve the problem they came to solve.

The implication was significant. The team had a sequencing problem, not a communication problem. No amount of UX improvement on the verification step would fix a decision being made before the user had engaged with the product.`,
      },
      {
        icon: "decisions",
        label: "Key Decisions",
        content: `The first was progressive onboarding. The recommendation was to restructure the experience so users could explore the product, see their funding options, and understand what the wallet could do for them before being required to complete identity verification. The goal was to reverse the order of commitment and value: let the user see the value first, and then ask for the effort. Build commitment before demanding trust.

The second was event-triggered nudges. Rather than generic time-based emails sent to all inactive users, I recommended behavioral prompts triggered by specific in-app actions. A user who had started verification but not completed it would receive a different message from one who had not started at all.

The results validated the diagnosis. Progressive onboarding was shipped, cutting identity-verification drop-off by 25%.

My work on BorderFlo affirmed a core product principle: data shows you what is happening, but users show you why. Treating them as separate sources of truth is risky; combining them is how you find the real problem.`,
      },
      {
        icon: "demonstrates",
        label: "What This Demonstrates",
        content: `This case study demonstrates three specific PM capabilities.

• The discipline to not jump to solutions before completing the diagnosis: the easy answer was to optimize the verification step; the right answer required running research first
• The ability to distinguish between what data shows and what users explain: these are two different instruments and using only one produces an incomplete picture
• The willingness to recommend the harder, more structurally significant fix when the evidence points to it, rather than the easier, cosmetic one`,
      },
    ],
    links: [],
  },

  "deliveroo": {
    number: "02",
    title: "Deliveroo: Group Ordering with Split Payment",
    company: "Deliveroo",
    type: "Product Case Study",
    period: "April 2026",
    hook: "Users were coordinating group orders on WhatsApp and splitting bills on separate apps. The product had no solution.",
    stats: [
      { icon: "market",  value: "£14.3bn",     label: "UK food delivery market size" },
      { icon: "cagr",    value: "8.49%",       label: "Market CAGR" },
      { icon: "payment", value: "Pay-First",   label: "All shares paid before order submits" },
      { icon: "edge",    value: "4 Edge Cases", label: "Fully resolved payment failure flows" },
    ],
    sections: [
      {
        icon: "context",
        label: "Context",
        content: `This is a product case study exercise proposing a new feature for Deliveroo. I am not affiliated with Deliveroo. The exercise was an opportunity to practice end-to-end feature thinking: from market analysis and problem definition through to solution design, prototyping, edge case handling, and success metric definition.`,
      },
      {
        icon: "challenge",
        label: "The Problem",
        content: `When a group of friends, flatmates, or colleagues wants to order food together from Deliveroo, the product places the entire coordination burden on one person. That person compiles everyone's orders through a chat thread, enters them manually into the app, pays the full amount upfront, and then tries to collect money from everyone afterward through a separate payment app or bank transfer. The coordination happens outside the product. The payment reconciliation happens outside the product.

This is friction that actively suppresses a natural social use case. Group ordering is not a niche behavior. It is how people frequently order food. When the product fails to support it natively, it creates a worse experience for users and leaves higher average order values unrealized for the business.`,
      },
      {
        icon: "approach",
        label: "My Approach",
        content: `I started with market and competitive context to establish the size and nature of the opportunity. The UK food delivery market was valued at £14.3bn, growing at 8.49% CAGR. I then built two user personas using Jobs-to-Be-Done framing to ground the feature design in actual human behavior:

Sarah Craig, 25, an accountant who wants to order dinner with a group of friends without pausing the evening to play coordinator and accountant at the same time.

Mbalu Steve, 21, a student who wants to split a late-night takeaway order with three flatmates without the awkward math and the inevitable situation where one person ends up covering the whole bill.

I mapped the complete customer journey for the current experience, identifying exactly where the friction occurs and what it costs each user type in terms of time, cognitive load, and social discomfort.

The proposed feature: a host starts a group order session from a restaurant page. The app generates a shareable link. Guests click the link, verify with a one-time SMS code (no app download required), browse the same menu, and add their own items to a shared real-time basket. When the host locks the order, each participant pays their exact share through the app before the order is placed.`,
      },
      {
        icon: "decisions",
        label: "Key Decisions",
        content: `The most important design decision was making payment upfront and decoupled. Each participant pays before the order is placed, not after. This removes the social friction of informal debt between friends, which is the real reason group ordering fails in the current experience: not because people do not want to share orders, but because collecting money afterward is uncomfortable. Solving the payment problem is what makes the feature genuinely useful rather than just technically functional.

The second significant decision was SMS-based guest verification that does not require a Deliveroo account. Requiring guests to download an app and create an account to join a group order would kill the feature's adoption. The value proposition depends on the link being instantly usable.

I also designed four edge case resolution flows: a guest who fails to pay before the deadline, an item that goes out of stock while the basket is open, a payment card that declines during checkout, and a host who cancels after guests have already paid.

North Star Metric: Weekly Successful Group Orders (two or more participants, all shares paid, order placed). Supporting metrics across acquisition, financial impact, and retention clusters.`,
      },
      {
        icon: "demonstrates",
        label: "What This Demonstrates",
        content: `This case study demonstrates full-cycle feature thinking connected to a coherent product argument.

• Market analysis and competitive context to size the opportunity
• User research using Jobs-to-Be-Done framing, grounded in real behavior not abstract use cases
• Solution design with payment-first thinking: solving the social friction, not just the logistics
• Edge case reasoning with defined resolution paths for all critical failure states
• Success metric definition across acquisition, financial impact, and retention clusters
• The payment-upfront decision is not a UX preference: it is a product insight about what actually makes the feature work`,
      },
    ],
    links: [
      { label: "Figma Prototype", url: "https://www.figma.com/design/8BJ5CKNOsBD5ecOcsDK8to/Deliveroo-User-Flow-and-Prototype?node-id=0-1&t=XZsNqJldwSSUQuJ4-1" },
      { label: "Full Case Study",  url: "https://docs.google.com/presentation/d/1R5ecThTskbmiMN_H777zH8CrKDrQFAu3s0_8g86GrnE/edit" },
    ],
  },

  "vendsync": {
    number: "03",
    title: "VendSync: Q3 Roadmap Prioritization",
    company: "VendSync",
    type: "Product Case Study",
    period: "May 2026",
    hook: "5 backlog items. 34 sprint points. 15 points of capacity. Three senior stakeholders. One PM framework.",
    stats: [
      { icon: "items",        value: "5 Items",    label: "Competing backlog items totaling 34 pts" },
      { icon: "capacity",     value: "15 Pts",     label: "Engineering capacity ceiling" },
      { icon: "rice1",        value: "RICE 12.14", label: "Inventory Refactor (selected)" },
      { icon: "rice3",        value: "RICE 0.09",  label: "AI Predictor (deferred to Q1)" },
      { icon: "stakeholders", value: "3 Memos",    label: "Individual executive communications" },
    ],
    sections: [
      {
        icon: "context",
        label: "Context",
        content: `VendSync is a B2B SaaS commerce platform serving African merchants through digital transaction management, inventory control, and checkout facilitation. This is a PM exercise. The scenario: a hard engineering capacity ceiling of 15 sprint points, five competing backlog items totaling 34 points, and three simultaneous executive stakeholders who each believed their item was the most critical for the business.

The five items and their advocates:

1. WhatsApp Checkout Bot (8 points): Marketing projecting a 20% uplift in new merchant acquisition if this ships this quarter
2. Inventory Database Refactor (7 points): The Lead Engineer has formally warned that the current database will likely fail under Black Friday traffic
3. Multi-Currency Wallet (6 points): The Head of Sales is citing a $50,000 MRR enterprise deal that is contingent on this feature being available
4. White Screen Checkout Bug Fix (4 points): Currently causing 12% of all checkout attempts to fail, generating over 500 support tickets per week
5. AI Inventory Predictor (9 points): The CEO has publicly committed to investors that this will ship this quarter`,
      },
      {
        icon: "approach",
        label: "My Approach",
        content: `I applied the RICE framework (Reach × Impact × Confidence / Effort) across all five items, with explicitly defined scoring criteria for each variable documented in the deliverable. The reason I chose RICE for this scenario is that it forces every initiative through the same four variables simultaneously, penalizes initiatives with low execution confidence, and produces a score that stakeholders can audit. In a political environment where three different executives are each convinced their item is essential, the framework creates a shared basis for disagreement rather than a situation where the PM is perceived as picking sides.`,
      },
      {
        icon: "decisions",
        label: "Key Decisions",
        content: `## RICE Scores and Selections

Inventory Database Refactor: RICE 12.14. Selected. Reach scored 10 because every transaction on the platform passes through this database, meaning a failure takes the platform down for all users simultaneously. Impact scored 10 because a Black Friday outage is a business-critical event. Confidence 85% because the risk was formally diagnosed by the Lead Engineer.

White Screen Checkout Bug Fix: RICE 8.55. Selected. 12% of checkout-active users experiencing failures, confirmed by 500+ weekly support tickets. Confidence 95% because the bug is identified, reproducible, and scoped.

WhatsApp Checkout Bot: RICE 3.00. Deferred to Q4. 50% Confidence drove this result: engineering could not deliver this integration without defects in the current sprint window.

Multi-Currency Wallet: RICE 1.80. Deferred to Q4. The enterprise prospect was unsigned. A prospective, unsigned customer cannot be counted in current-sprint reach calculations without undermining the framework.

AI Inventory Predictor: RICE 0.09. Deferred to Q1. No merchant demand signal. No validated problem statement. No technical specification. The item originated from a LinkedIn article the CEO encountered.

## Stakeholder Communications

To the CEO on the AI Inventory Predictor: I reframed the deferral as disciplined validation rather than a broken commitment. The memo proposed specific investor-facing language positioning the item as entering a structured discovery and validation phase in Q3, with a confirmed build slot in Q1.

To the Head of Sales on the Multi-Currency Wallet: I argued that the most consequential threat to the enterprise deal was not a one-quarter delivery delay. It was a Black Friday platform outage occurring while the prospect was evaluating the platform. I committed the Q4 slot in writing, conditional on the Head of Sales delivering a signed letter of intent before the next sprint planning session.

To the Head of Marketing on the WhatsApp Checkout Bot: I showed that routing a projected 20% acquisition surge into a checkout pipeline with a live 12% failure rate would produce negative returns on acquisition spend. Fixing the checkout experience first is not in competition with the acquisition goal. It is a prerequisite for it.`,
      },
      {
        icon: "demonstrates",
        label: "What This Demonstrates",
        content: `This case study demonstrates three things simultaneously.

• The ability to apply a rigorous prioritization framework under conditions of real organizational pressure, with auditable reasoning rather than mere assertions
• The ability to write executive-level communication that addresses each stakeholder on their own terms, respects the legitimacy of their concern, and makes specific, bounded commitments
• The understanding that good prioritization work produces arguments, not just lists. The governing argument across all three memos was asymmetry of consequence: deferring a commercial item delays an opportunity; a Black Friday outage destroys revenue merchants were actively counting on`,
      },
    ],
    links: [{ label: "Full Document", url: "https://docs.google.com/document/d/1swESIXyqj-EqjuYWy5XJi9sOwU0QT7BepuVt0-tkcZs/edit" }],
  },

  "ladda": {
    number: "04",
    title: "Ladda: User Engagement & Retention",
    company: "Ladda",
    type: "Feature Proposal",
    hook: "Ladda had 30,000+ users on a wealthtech platform. Engagement dropped sharply after onboarding, the app had no habit-forming systems, and users were going inactive without the product ever having the chance to prove its value.",
    stats: [
      { icon: "users",      value: "30,000+",  label: "Users on the platform" },
      { icon: "retention",  value: "+60%",     label: "Retention lift from streak systems (Duolingo evidence)" },
      { icon: "engagement", value: "+30–47%",  label: "Engagement lift in gamified fintech apps" },
      { icon: "nudge",      value: "+25–40%",  label: "Savings uptake from AI-driven nudges" },
    ],
    sections: [
      {
        icon: "context",
        label: "Context",
        content: `Ladda is a Nigerian wealthtech platform where users save in naira and dollars and invest in real estate (HYRE) and Treasury Bills. The platform had reached meaningful scale but was experiencing a pattern common to fintech products with strong acquisition but weak habit formation: users signing up, making an initial deposit or exploration, and then going inactive.

This exercise was a feature proposal to address that retention problem.`,
      },
      {
        icon: "challenge",
        label: "The Problem",
        content: `I began with a product audit of the Ladda app and identified four interconnected problems.

Engagement dropped after onboarding because the app had no behavioral reinforcement mechanisms. No streaks, no rewards for consistency, no prompts to return after a user's initial session. Users experienced Ladda as a place to put money, not a product they interacted with regularly.

Product clarity was insufficient for investment adoption. Users who arrived with interest in the HYRE or T-Bills products could not find accessible explanations of how those products actually worked. The "Read More on HYRE" link in the app returned an error. Users who did not understand the products could not confidently invest in them, regardless of interest.

Real-time support was absent at critical decision points. The live chat feature was broken. Hesitation at the point of investment without a support pathway typically means the investment does not happen.

Several UX inconsistencies further undermined trust: a referral feature advertised on the marketing website did not exist in the iOS app. Session timeouts were frequent with no biometric login option to reduce re-entry friction.`,
      },
      {
        icon: "approach",
        label: "My Approach",
        content: `Before proposing any features, I conducted a competitive analysis across four comparable products: Piggyvest, Cowrywise, Risevest, and Trove. I was looking for where each competitor had invested in the engagement and education layer, and where there were gaps across the competitive set that Ladda could own.

The analysis showed that none of the four competitors had all three of the following features simultaneously: a gamification system, in-app micro-learning content, and an AI-powered wealth companion. This was the opportunity.

I also reviewed market data on the Nigerian savings context: 43% of Nigerians have stopped saving entirely. The behavioral challenge is not just competition with other apps. It is competition with no savings behavior at all.`,
      },
      {
        icon: "decisions",
        label: "Three Feature Recommendations",
        content: `## Gamification (Must Have)

Saving streak badges, mission challenges (No-Spend Week, Round-Up Savings Mission), and a loyalty points system redeemable for cashbacks or prize pool entries. Duolingo-style streak systems increase long-term retention by 60%. Gamified fintech apps drive 30–47% higher engagement.

## In-App Micro-Learning (Must Have)

A founder-led 45–60-second welcome explainer during onboarding, product-specific "How it Works" content at the point of investment discovery, and an in-app Learn Hub. Financial literacy education during onboarding increases product adoption by 2–3×.

## AI Wealth Companion (Should Have)

A conversational assistant providing 24/7 FAQ support, personalized portfolio summaries tied to the user's specific goals, and smart behavioral nudges triggered by specific events. AI-driven personalized nudges increase savings uptake by 25–40%.

The sequencing decision to place Gamification before AI Companion was based on evidence density and implementation risk. Gamification has the strongest published retention evidence and lowest technical complexity. It builds the habit loop that makes the AI Companion valuable. Shipping the companion before users have a habit of opening the app means the nudges land in a vacuum.`,
      },
      {
        icon: "demonstrates",
        label: "What This Demonstrates",
        content: `This case study demonstrates structured product thinking applied to a real retention problem.

• Structured product auditing: identifying interconnected problems before jumping to solutions
• Competitive analysis used as a strategic input rather than a documentation exercise
• Feature recommendations grounded in behavioral evidence (Duolingo retention data, fintech gamification studies, AI nudge research) rather than intuition
• Judgment to sequence feature investment across phases based on value and effort, not just what sounds exciting
• Revenue context awareness: understanding that the behavioral challenge competes with no savings behavior at all, not just competing apps`,
      },
    ],
    links: [{ label: "Full Pitch Deck", url: "https://docs.google.com/presentation/d/1qFDwGqRKedg40Ty-zKh6E8IQvt6MFSjudl551a6nBtg/edit" }],
  },

  "moneykids": {
    number: "05",
    title: "MoneyKids.ai: Product Pitch",
    company: "MoneyKids.ai",
    type: "Product Pitch",
    hook: "Only 27% of sub-Saharan African adults are financially literate. The problem begins in childhood, and no AI platform is addressing it.",
    stats: [
      { icon: "tam",      value: "468M",    label: "Children aged 5–17 in Africa (TAM)" },
      { icon: "som",      value: "500K",    label: "Target users within 2 years (SOM)" },
      { icon: "revenue",  value: "₦4.8bn", label: "Annual revenue at 20% conversion" },
      { icon: "literacy", value: "27%",     label: "Sub-Saharan African adult financial literacy rate" },
    ],
    sections: [
      {
        icon: "context",
        label: "Context",
        content: `MoneyAfrica Kids is an existing mobile app teaching financial literacy to children aged 5 to 17, with a user base of 10,000 users. The product brief was to make the case for a strategic transformation: evolving the product into MoneyKids.ai, an AI-powered adaptive financial literacy platform with a goal of scaling to 500,000 learners within two years.`,
      },
      {
        icon: "challenge",
        label: "The Problem",
        content: `Sub-Saharan Africa has the lowest financial literacy levels globally. Only 27% of sub-Saharan African adults are financially literate, compared to 50%+ in OECD countries. The IMF reports that 65% cannot complete basic financial tasks like budgeting or calculating interest. Only 20% of African children receive any financial education in school. The Central Bank of Nigeria's plan to integrate financial literacy into primary school curricula, announced in 2017, had not been implemented as of 2025.

The existing MoneyAfrica Kids product was constrained by thin content depth, low engagement loops, poor UX, and no AI personalization. No AI-powered, age-adaptive, curriculum-depth platform existed for children's financial literacy anywhere on the African continent. The window for first-mover advantage was open.`,
      },
      {
        icon: "approach",
        label: "Market Sizing & Product Architecture",
        content: `I sized the opportunity: TAM of 468 million children aged 5 to 17 in Africa, a SAM of 117 million in households willing to invest in digital learning (World Bank, 2021), and a two-year SOM of 500,000 users across Nigeria, Ghana, Kenya, and South Africa.

The transformation required designing a multi-sided platform serving three distinct user types.

## For Children

An AI Money Tutor (BuddyLearn) as the interactive learning companion, age-tiered learning paths calibrated for three developmental stages (5–8, 9–12, 13–17), daily missions structured as Word of the Day, flashcards, micro-lesson, game, and reward, three original financial games (Money Maze, Hustle Quest, Scam Spotter), and AI-powered adaptive quizzes that adjust difficulty based on prior performance.

## For Parents and Guardians

Multi-kid account management, subscription access control with secure per-child login tokens, real-time alerts for milestones, inactivity, and streak breaks, and achievement sharing within family groups.

## For Schools and Institutions

Bulk student enrollment via CSV, lesson assignment by class, real-time progress tracking at the class level, and exportable reports in PDF or CSV format for PTA meetings or government audits.`,
      },
      {
        icon: "decisions",
        label: "Key Decision",
        content: `The age-tiered architecture (5–8, 9–12, 13–17) was the most consequential product decision. A single curriculum cannot serve a 6-year-old and a 16-year-old. The tier boundaries were set based on cognitive development research and the Nigerian school system's class groupings. This decision drove everything downstream: content format, game mechanics, AI tutor language, and the concept complexity curve.

Revenue model: Freemium with a paid subscription at N4,000/month. At 20% conversion across 500,000 users: 100,000 paying users at N4,000/month generates N400 million monthly, or N4.8 billion annually. A school or institution tier with separate pricing was also defined based on student enrollment volume.`,
      },
      {
        icon: "demonstrates",
        label: "What This Demonstrates",
        content: `This case study demonstrates zero-to-one product thinking: starting from a market problem and building the complete case for a product transformation.

• Starting from a structural market problem (generational financial illiteracy) and defining the user population across three distinct segments
• Sizing the opportunity with TAM, SAM, and SOM grounded in World Bank and IMF data
• Designing a multi-sided platform architecture where each side (children, parents, schools) has distinct needs within a coherent product
• Building a business case with revenue modeling rather than just a feature list
• Using the first-mover framing credibly: the gap in the market is real and documentable`,
      },
    ],
    links: [{ label: "Full Pitch Deck", url: "https://docs.google.com/presentation/d/14ZF6WTe831PApjcRvxMviEU2twACN1Tb143E74fETXY/edit" }],
  },

  "youtube-shorts": {
    number: "06",
    title: "YouTube Shorts: Platform Strategy",
    company: "YouTube",
    type: "Competitive Analysis",
    period: "2026",
    hook: "YouTube built a $40.36 billion advertising business on long-form creators. Then it structurally redirected viewer attention away from them to compete with TikTok.",
    stats: [
      { icon: "revenue", value: "$40.36bn", label: "YouTube annual advertising revenue" },
      { icon: "drop",    value: "30% drop", label: "Long-form views after August 2025 algorithm update" },
      { icon: "slots",   value: "80% cut",  label: "Homepage long-form recommendation slots cut" },
      { icon: "cpm",     value: "53× gap",  label: "Long-form CPM vs Shorts: $1.61–$29.30 vs $0.03–$0.06" },
      { icon: "spotter", value: "$940M",    label: "Spotter capital missed targets after algorithmic shift" },
    ],
    sections: [
      {
        icon: "context",
        label: "Context",
        content: `This was a structured debate exercise on the question: "In prioritizing Shorts, is YouTube growing its future or compromising the long-form creator economy it was built on?" I led the team arguing the position that YouTube is compromising the long-form creator economy. My contribution covered research, structured argumentation, and four actionable platform recommendations.

YouTube's competitive moat is not short-form video. It is the world's second-largest search engine, built on high-intent, long-form educational and entertainment content. Competing with TikTok on TikTok's strongest ground is reactive imitation, not strategy.`,
      },
      {
        icon: "challenge",
        label: "The Argument",
        content: `The position rested on six substantiated claims.

YouTube did not allow Shorts to grow organically. It engineered the growth through a $100 million creator fund, a 45% Shorts creator revenue share versus 55% for long-form, and an August 2025 algorithm update that caused a 30% drop in long-form views and cut homepage long-form recommendation slots by approximately 80%.

The 200 billion daily Shorts views came from somewhere: long-form content on the same platform. Shorts does not expand the YouTube audience. It redistributes existing attention.

YouTube earns more from Shorts while paying creators less. On every $100 of advertising revenue, YouTube retains approximately $10 more from Shorts than from long-form, a 22% higher take rate per dollar. Per-view creator earnings: Shorts at $0.03–$0.06 per thousand views; long-form at $1.61–$29.30 per thousand views.

The September 2025 decision to decouple the Shorts and long-form recommendation engines was an admission of competition, not complementarity. Walls are not built between things that help each other.

The Spotter case: Spotter deployed $940 million into 735 long-form YouTube channel libraries, missed its 2024 revenue targets, and laid off 40% of its staff after YouTube's algorithmic shift degraded the projected earnings of those libraries. This is not a prediction. It is a company's balance sheet reflecting the consequence of a platform policy change.`,
      },
      {
        icon: "decisions",
        label: "Four Recommendations",
        content: `1. A $150 million Long-Form Creator Stabilization Fund targeting mid-tier creators (50,000–500,000 subscribers) with documented traffic declines since August 2025. Precedent: YouTube's own $100 million Shorts Creator Fund in 2021.

2. Proportional reorientation of the Creator Partnerships Hub toward long-form creators, connecting higher-CPM advertisers to long-form audiences where ad inventory value is highest for all parties.

3. Equalized revenue share: restore Shorts creator share to 55%, removing the financial incentive for YouTube to structurally favor the format from which it retains the most.

4. Reverse the December 2025 homepage change that reduced long-form recommendation slots from 12 to 2 to 3. YouTube's own data shows 76% of users cite access to both formats as the primary reason they choose YouTube as their go-to platform.`,
      },
      {
        icon: "demonstrates",
        label: "What This Demonstrates",
        content: `This exercise demonstrates the ability to build a rigorous, evidence-based product strategy argument and connect it to business outcomes.

• Building a rigorous, evidence-based argument rather than a narrative-only one: every claim has a number attached to it, traceable to a source a skeptic can check
• Connecting platform-level decisions to measurable economic outcomes (the Spotter case is the strongest element because it is financially concrete, not just analytically interesting)
• Translating analytical findings into specific, actionable recommendations with precedent and cost estimates
• Finding the evidence that closes the gap between a product observation and a business impact: the skill this exercise is directly testing`,
      },
    ],
    links: [{ label: "Full Presentation", url: "https://docs.google.com/presentation/d/1srd8MPjpzlQeHl9r091Z3lTTlKZZ2ErAKsxIRSPM2rs/edit" }],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45 } }),
};

export default function CaseStudyDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const cs = caseStudies[slug];
  usePageTitle(cs ? `${cs.company} Case Study` : undefined);

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl">Case study not found</h1>
          <Link href="/" className="text-accent underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10">

        {/* Top bar: back + all links */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href="/case-studies"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border-subtle rounded-lg text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Case Studies
          </Link>
          {cs.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-accent text-background hover:bg-accent/90"
                  : "border border-accent text-accent hover:bg-accent hover:text-background"
              }`}
            >
              {link.label} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        {/* Breadcrumb */}
        <nav className="text-xs text-text-secondary mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{cs.company}</span>
        </nav>

        {/* Hero banner */}
        <motion.div
          className="w-full rounded-2xl border border-border-subtle overflow-hidden mb-8"
          style={{ background: "linear-gradient(135deg, #1c1c1c 0%, #111 100%)" }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center py-10 md:py-14 px-6 md:px-10 text-center">
            <div>
              <motion.div
                className="text-accent/40 font-display text-6xl md:text-[110px] font-bold leading-none mb-2 select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {cs.number}
              </motion.div>
              <motion.div
                className="text-accent text-xs font-bold tracking-widest uppercase mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {cs.type}
              </motion.div>
              <motion.h1
                className="font-display text-3xl md:text-5xl text-white"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {cs.company}
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Title block */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">{cs.title}</h2>
          <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
            <span className="px-3 py-1 border border-accent/40 rounded-full text-accent">{cs.type}</span>
            {cs.period && <span className="text-text-secondary">{cs.period}</span>}
          </div>
          <p className="text-text-secondary leading-relaxed border-l-2 border-border-subtle pl-4">{cs.hook}</p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10"
          initial="hidden"
          animate="visible"
        >
          {cs.stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="bg-card border border-border-subtle rounded-lg p-3 flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                {iconMap[stat.icon] ?? <Zap className="w-4 h-4 text-accent" />}
              </div>
              <div>
                <div className="text-foreground font-semibold text-sm leading-snug">
                  <StatValue raw={stat.value} />
                </div>
                <div className="text-text-secondary text-[11px] leading-snug mt-0.5">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content sections */}
        <div className="space-y-12 max-w-3xl mx-auto">
          {cs.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  {sectionIcons[section.icon] ?? <Zap className="w-4 h-4 text-accent" />}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground">{section.label}</h3>
              </div>
              <div className="pl-4 md:pl-10 space-y-3">
                {renderContent(section.content)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom links */}
        {cs.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-16 max-w-3xl mx-auto">
            {cs.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "border border-accent text-accent hover:bg-accent hover:text-background"
                }`}
              >
                {link.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
