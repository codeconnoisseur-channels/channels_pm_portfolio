import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, Target, Lightbulb, Zap, BookOpen, BarChart2 } from "lucide-react";

const caseStudies: Record<string, {
  number: string;
  title: string;
  company: string;
  type: string;
  period?: string;
  hook: string;
  stats: { icon: string; value: string; label: string }[];
  background: string;
  discovery: string;
  keyDecision: string;
  impact: string;
  keyLearning?: string;
  links: { label: string; url: string }[];
}> = {
  "borderflo": {
    number: "01",
    title: "BorderFlo — Activation & Onboarding",
    company: "BorderFlo",
    type: "PM Internship",
    period: "Nov 2024 – Feb 2025",
    hook: "Found a 40% post-signup churn rate, ran user interviews, and discovered the problem was not what the team assumed.",
    stats: [
      { icon: "churn", value: "40%", label: "Post-signup churn rate (Google Analytics)" },
      { icon: "insight", value: "Sequencing", label: "Root cause: commitment before value" },
      { icon: "launch", value: "Jan 2025", label: "MVP Android app launched on schedule" },
      { icon: "fix", value: "Progressive", label: "Onboarding restructured, not polished" },
      { icon: "team", value: "6-Person", label: "Cross-functional team (hybrid internal/external)" },
      { icon: "result", value: "Reduced", label: "Abandonment at verification stage" },
    ],
    background: "BorderFlo is a cross-border payment platform. I joined as a PM intern in November 2024, and the team was preparing to launch an MVP Android app.\n\nUsing Google Analytics, I identified that 40% of users who completed signup were going inactive before funding their wallet or completing identity verification. The team's initial assumption was a UX problem with the verification step itself.",
    discovery: "My first instinct, and the instinct of most product teams in this situation, would have been to optimize the verification step itself. Simplify the UI, improve the copy, add tooltips. But I ran user interviews before drawing that conclusion, because the data could only tell me where the problem was. It could not tell me why.\n\nThe interviews changed everything. Users were not confused by the verification step. They understood exactly what they needed to do. The problem was that they had not yet decided it was worth doing. They had signed up, arrived at a step requiring them to submit identity documents, and made a rational cost-benefit calculation: the effort required to verify was not worth it because they had not yet experienced any product value. They had not funded a wallet. They had not made a payment. They had not seen the product solve the problem they came to solve.\n\nThe implication was significant. The team had a sequencing problem, not a communication problem. No amount of UX improvement on the verification step would fix a decision being made before the user had engaged with the product.",
    keyDecision: "I proposed two activation features based on this diagnosis.\n\nThe first was progressive onboarding. The recommendation was to restructure the experience so users could explore the product, see their funding options, and understand what the wallet could do for them before being required to complete identity verification. The goal was to reverse the order of commitment and value: let the user see the value first, and then ask for the effort. Build commitment before demanding trust.\n\nThe second was event-triggered nudges. Rather than generic time-based emails sent to all inactive users, I recommended behavioral prompts triggered by specific in-app actions. A user who had started verification but not completed it would receive a different message from one who had not started at all.\n\nThe decision to frame this as a sequencing problem rather than a UX problem was the most important call I made. It meant the solution required restructuring the onboarding flow rather than polishing it. That is a larger and more complex change to recommend. But it was the right diagnosis.\n\nProgressive onboarding was implemented and shipped. It reduced abandonment at the verification stage.",
    impact: "MVP Android app launched in January 2025 on schedule. Progressive onboarding shipped and reduced abandonment at the verification stage. The engineering team was a hybrid of internal engineers and specialist external contractors working on different timelines, coordinated through sprint planning and backlog grooming sessions in ClickUp.",
    links: [],
  },
  "deliveroo": {
    number: "02",
    title: "Deliveroo — Group Ordering with Split Payment",
    company: "Deliveroo",
    type: "Product Case Study",
    period: "April 2026",
    hook: "Users were coordinating group orders on WhatsApp and splitting bills on separate apps. The product had no solution.",
    stats: [
      { icon: "market", value: "£14.3bn", label: "UK food delivery market size" },
      { icon: "cagr", value: "8.49%", label: "Market CAGR" },
      { icon: "host", value: "Host Model", label: "One session link, multiple participants" },
      { icon: "payment", value: "Pay-First", label: "All shares paid before order submits" },
      { icon: "personas", value: "2 Personas", label: "Jobs-to-Be-Done framework" },
      { icon: "edge", value: "4 Edge Cases", label: "Fully resolved payment failure flows" },
    ],
    background: "This is a product case study exercise proposing a new feature for Deliveroo. I am not affiliated with Deliveroo. The exercise was an opportunity to practice end-to-end feature thinking: from market analysis and problem definition through to solution design, prototyping, edge case handling, and success metric definition.\n\nWhen a group of friends, flatmates, or colleagues wants to order food together from Deliveroo, the product places the entire coordination burden on one person. That person compiles everyone's orders through a chat thread, enters them manually into the app, pays the full amount upfront, and then tries to collect money from everyone afterward through a separate payment app or bank transfer. The coordination happens outside the product. The payment reconciliation happens outside the product.\n\nThis is friction that actively suppresses a natural social use case. Group ordering is not a niche behavior. It is how people frequently order food.",
    discovery: "I started with market and competitive context to establish the size and nature of the opportunity. The UK food delivery market was valued at £14.3bn, growing at 8.49% CAGR. I then built two user personas using Jobs-to-Be-Done framing:\n\nSarah Craig, 25, an accountant who wants to order dinner with a group of friends without pausing the evening to play coordinator and accountant at the same time.\n\nMbalu Steve, 21, a student who wants to split a late-night takeaway order with three flatmates without the awkward math and the inevitable situation where one person ends up covering the whole bill.\n\nI mapped the complete customer journey for the current experience, identifying exactly where the friction occurs and what it costs each user type in terms of time, cognitive load, and social discomfort.",
    keyDecision: "The most important design decision was making payment upfront and decoupled. Each participant pays before the order is placed, not after. This removes the social friction of informal debt between friends, which is the real reason group ordering fails in the current experience: not because people do not want to share orders, but because collecting money afterward is uncomfortable. Solving the payment problem is what makes the feature genuinely useful rather than just technically functional.\n\nThe second significant decision was SMS-based guest verification that does not require a Deliveroo account. Requiring guests to download an app and create an account to join a group order would kill the feature's adoption. The value proposition depends on the link being instantly usable.\n\nI also designed four edge case resolution flows: a guest who fails to pay before the deadline, an item that goes out of stock while the basket is open, a payment card that declines during checkout, and a host who cancels after guests have already paid.",
    impact: "Full case study with Figma prototype, complete feature specification, and success metric framework. North Star Metric: Weekly Successful Group Orders (two or more participants, all shares paid, order placed). Supporting metrics across acquisition, financial impact, and retention clusters.",
    links: [
      { label: "Figma Prototype", url: "https://www.figma.com/design/8BJ5CKNOsBD5ecOcsDK8to/Deliveroo-User-Flow-and-Prototype?node-id=0-1&t=XZsNqJldwSSUQuJ4-1" },
      { label: "Full Case Study", url: "https://docs.google.com/presentation/d/1R5ecThTskbmiMN_H777zH8CrKDrQFAu3s0_8g86GrnE/edit" },
    ],
  },
  "vendsync": {
    number: "03",
    title: "VendSync — Q3 Roadmap Prioritization",
    company: "VendSync",
    type: "Product Case Study",
    period: "May 2026",
    hook: "5 backlog items. 34 sprint points. 15 points of capacity. Three senior stakeholders. One PM framework.",
    stats: [
      { icon: "items", value: "5 Items", label: "Competing backlog items totaling 34 pts" },
      { icon: "capacity", value: "15 Pts", label: "Engineering capacity ceiling" },
      { icon: "rice1", value: "RICE 12.14", label: "Inventory Refactor — selected" },
      { icon: "rice2", value: "RICE 8.55", label: "Bug Fix — selected" },
      { icon: "rice3", value: "RICE 0.09", label: "AI Predictor — deferred to Q1" },
      { icon: "stakeholders", value: "3 Memos", label: "Individual executive communications" },
    ],
    background: "VendSync is a B2B SaaS commerce platform serving African merchants through digital transaction management, inventory control, and checkout facilitation. This is a PM exercise. The scenario: a hard engineering capacity ceiling of 15 sprint points, five competing backlog items totaling 34 points, and three simultaneous executive stakeholders who each believed their item was the most critical for the business.\n\nThe five items:\n1. WhatsApp Checkout Bot (8 points): Marketing projecting a 20% uplift in new merchant acquisition\n2. Inventory Database Refactor (7 points): The Lead Engineer has formally warned the current database will likely fail under Black Friday traffic\n3. Multi-Currency Wallet (6 points): Head of Sales citing a $50,000 MRR enterprise deal contingent on this feature\n4. White Screen Checkout Bug Fix (4 points): Causing 12% of all checkout attempts to fail, generating over 500 support tickets per week\n5. AI Inventory Predictor (9 points): The CEO has publicly committed to investors this will ship this quarter",
    discovery: "I applied the RICE framework (Reach × Impact × Confidence / Effort) across all five items, with explicitly defined scoring criteria for each variable. The reason I chose RICE for this scenario is that it forces every initiative through the same four variables simultaneously, penalizes initiatives with low execution confidence, and produces a score that stakeholders can audit. In a political environment where three different executives are each convinced their item is essential, the framework creates a shared basis for disagreement rather than a situation where the PM is perceived as picking sides.\n\nInventory Database Refactor: RICE 12.14. Selected. Reach scored 10 because every transaction on the platform passes through this database. A failure does not degrade the experience for some users. It takes the platform down for all users simultaneously. Impact scored 10 because a Black Friday outage is a business-critical event. Confidence 85% because the risk was formally diagnosed by the Lead Engineer.\n\nWhite Screen Checkout Bug Fix: RICE 8.55. Selected. 12% of checkout-active users experiencing failures, confirmed by 500+ weekly support tickets. Confidence 95% because the bug is identified, reproducible, and scoped.\n\nWhatsApp Checkout Bot: RICE 3.00. Deferred to Q4. 50% Confidence drove this result. Engineering could not deliver this integration without defects in the current sprint window.\n\nMulti-Currency Wallet: RICE 1.80. Deferred to Q4. The enterprise prospect was unsigned. A prospective, unsigned customer cannot be counted in current-sprint reach calculations.\n\nAI Inventory Predictor: RICE 0.09. Deferred to Q1. No merchant demand signal. No validated problem statement. No technical specification. The item originated from a LinkedIn article the CEO encountered.",
    keyDecision: "I wrote individual executive memos to each of the three affected stakeholders.\n\nTo the CEO on the AI Inventory Predictor: I reframed the deferral as disciplined validation rather than a broken commitment. The memo proposed specific investor-facing language positioning the item as entering a structured discovery and validation phase in Q3, with a confirmed build slot in Q1. I offered to present the roadmap directly to investors alongside the CEO.\n\nTo the Head of Sales on the Multi-Currency Wallet: I argued that the most consequential threat to the enterprise deal was not a one-quarter delivery delay. It was a Black Friday platform outage occurring while the prospect was evaluating the platform. I committed the Q4 slot in writing, conditional on the Head of Sales delivering a signed letter of intent from the prospect before the next sprint planning session.\n\nTo the Head of Marketing on the WhatsApp Checkout Bot: I showed that routing a projected 20% acquisition surge into a checkout pipeline with a live 12% failure rate would produce negative returns on acquisition spend. Fixing the checkout experience first is not in competition with the acquisition goal. It is a prerequisite for it.",
    impact: "Full written prioritization framework, RICE scores for all five items, and three individual executive memos produced. The governing argument across all three memos was asymmetry of consequence: deferring each commercial item delays an opportunity that VendSync had not yet earned. A Black Friday outage destroys revenue its merchants were actively counting on. Those are not equivalent risks.",
    links: [{ label: "Full Document", url: "https://docs.google.com/document/d/1swESIXyqj-EqjuYWy5XJi9sOwU0QT7BepuVt0-tkcZs/edit" }],
  },
  "ladda": {
    number: "04",
    title: "Ladda — User Engagement & Retention",
    company: "Ladda",
    type: "Feature Proposal",
    hook: "Ladda had 30,000+ users on a wealthtech platform. Engagement dropped sharply after onboarding, the app had no habit-forming systems, and users were going inactive without the product ever having the chance to prove its value.",
    stats: [
      { icon: "users", value: "30,000+", label: "Users on the platform" },
      { icon: "growth", value: "9.32%", label: "Nigerian digital savings market CAGR 2025–2030" },
      { icon: "retention", value: "+60%", label: "Retention lift from streak systems (Duolingo evidence)" },
      { icon: "engagement", value: "+30-47%", label: "Engagement lift in gamified fintech apps" },
      { icon: "nudge", value: "+25-40%", label: "Savings uptake from AI-driven nudges" },
      { icon: "adoption", value: "2-3×", label: "Product adoption lift from in-app financial literacy" },
    ],
    background: "Ladda is a Nigerian wealthtech platform where users save in naira and dollars and invest in real estate and Treasury Bills. The platform had reached meaningful scale but was experiencing a pattern common to fintech products with strong acquisition but weak habit formation: users signing up, making an initial deposit or exploration, and then going inactive.\n\nI began with a product audit of the Ladda app and identified four interconnected problems.\n\nEngagement dropped after onboarding because the app had no behavioral reinforcement mechanisms. No streaks, no rewards for consistency, no prompts to return after a user's initial session.\n\nProduct clarity was insufficient for investment adoption. Users who arrived with interest in the HYRE or T-Bills products could not find accessible explanations of how those products actually worked. The \"Read More on HYRE\" link in the app returned an error. Users who did not understand the products could not confidently invest in them.\n\nReal-time support was absent at critical decision points. The live chat feature was broken. Hesitation at the point of investment without a support pathway typically means the investment does not happen.\n\nSeveral UX inconsistencies further undermined trust: a referral feature advertised on the marketing website did not exist in the iOS app.",
    discovery: "Before proposing any features, I conducted a competitive analysis across four comparable products: Piggyvest, Cowrywise, Risevest, and Trove. None of the four competitors had all three of the following features simultaneously: a gamification system, in-app micro-learning content, and an AI-powered wealth companion. This was the opportunity.\n\nThree recommendations, prioritized using a Value vs. Effort matrix and MoSCoW framework:\n\nRecommendation 1 — Gamification (Must Have): Saving streak badges, mission challenges (No-Spend Week, Round-Up Savings Mission), and loyalty points redeemable for cashbacks or prize pool entries. Duolingo-style streak systems increase long-term retention by 60%. Gamified fintech apps drive 30–47% higher engagement.\n\nRecommendation 2 — In-App Micro-Learning (Must Have): A founder-led 45–60-second welcome explainer during onboarding, product-specific \"How it Works\" content at the point of investment discovery, and an in-app Learn Hub. Financial literacy education during onboarding increases product adoption by 2–3×.\n\nRecommendation 3 — AI Wealth Companion (Should Have): A conversational assistant providing 24/7 FAQ support, personalized portfolio summaries, and smart behavioral nudges. AI-driven personalized nudges increase savings uptake by 25–40%.",
    keyDecision: "The sequencing decision — Gamification before AI Companion — was based on evidence density and implementation risk. Gamification has the strongest published retention evidence and lowest technical complexity. It builds the habit loop that makes the AI Companion valuable. Shipping the companion before users have a habit of opening the app means the nudges land in a vacuum.\n\nI used a Value vs Effort matrix to position all three features, then applied MoSCoW prioritization to produce a clear recommendation. Gamification and Micro-Learning were Must Haves: high value at relatively low implementation complexity. The AI Wealth Companion was a Should Have: high value but higher technical investment, appropriate for a second phase after the first two features have been validated.",
    impact: "Defined user stories with acceptance criteria, North Star metrics per feature, and a six-stage outcome-based roadmap from discovery through to full launch across all three features.",
    links: [{ label: "Full Pitch Deck", url: "https://docs.google.com/presentation/d/1qFDwGqRKedg40Ty-zKh6E8IQvt6MFSjudl551a6nBtg/edit" }],
  },
  "moneykids": {
    number: "05",
    title: "MoneyKids.ai — Product Pitch",
    company: "MoneyKids.ai",
    type: "Product Pitch",
    hook: "Only 27% of sub-Saharan African adults are financially literate. The problem begins in childhood, and no AI-powered platform is addressing it in Africa.",
    stats: [
      { icon: "tam", value: "468M", label: "Children aged 5–17 in Africa (TAM)" },
      { icon: "sam", value: "117M", label: "SAM: households investing in digital learning" },
      { icon: "som", value: "500K", label: "Target users within 2 years (SOM)" },
      { icon: "revenue", value: "₦4.8bn", label: "Annual revenue at 20% conversion" },
      { icon: "literacy", value: "27%", label: "Sub-Saharan African adult financial literacy rate" },
      { icon: "seed", value: "10K → 500K", label: "Scale target from current MoneyAfrica Kids base" },
    ],
    background: "MoneyAfrica Kids is an existing mobile app teaching financial literacy to children aged 5 to 17, with a user base of 10,000 users. The product brief was to make the case for a strategic transformation: evolving the product into MoneyKids.ai, an AI-powered adaptive financial literacy platform with a goal of scaling to 500,000 learners within two years.\n\nSub-Saharan Africa has the lowest financial literacy levels globally. Only 27% of sub-Saharan African adults are financially literate. The IMF reports that 65% cannot complete basic financial tasks like budgeting or calculating interest. Only 20% of African children receive any financial education in school. The Central Bank of Nigeria's plan to integrate financial literacy into primary school curricula, announced in 2017, had not been implemented as of 2025.\n\nThe existing MoneyAfrica Kids product was constrained by thin content depth, low engagement loops, poor UX, and no AI personalization. No AI-powered, age-adaptive, curriculum-depth platform existed for children's financial literacy anywhere on the African continent.",
    discovery: "The market conditions created a specific window. Mobile penetration in sub-Saharan Africa was accelerating. EdTech gamification proven to increase engagement by 3.6 to 4.5× was available and validated. I sized the opportunity: TAM of 468 million children aged 5 to 17 in Africa, a SAM of 117 million in households willing to invest in digital learning, and a two-year SOM of 500,000 users across Nigeria, Ghana, Kenya, and South Africa.\n\nThe transformation required designing a multi-sided platform serving three distinct user types.\n\nFor children: an AI Money Tutor (BuddyLearn) as the interactive learning companion, age-tiered learning paths for three developmental stages (5–8, 9–12, 13–17), daily missions structured as Word of the Day, flashcards, micro-lesson, game, and reward, three original financial games (Money Maze, Hustle Quest, Scam Spotter), and AI-powered adaptive quizzes.\n\nFor parents and guardians: multi-kid account management, subscription access control, real-time milestone alerts, and achievement sharing.\n\nFor schools and institutions: bulk student enrollment via CSV, lesson assignment by class, real-time progress tracking, and exportable reports.",
    keyDecision: "The age-tiered architecture (5–8, 9–12, 13–17) was the most consequential product decision. A single curriculum cannot serve a 6-year-old and a 16-year-old. The tier boundaries were set based on cognitive development research and the Nigerian school system's class groupings. This decision drove everything downstream: content format, game mechanics, AI tutor language, and the concept complexity curve.",
    impact: "Revenue model: Freemium with a paid subscription at N4,000/month. At 20% conversion across 500,000 users: 100,000 paying users at N4,000/month generates N400 million monthly, or N4.8 billion annually. Full pitch deck including market sizing, product architecture, user flows, revenue model, and go-to-market strategy.",
    links: [{ label: "Full Pitch Deck", url: "https://docs.google.com/presentation/d/14ZF6WTe831PApjcRvxMviEU2twACN1Tb143E74fETXY/edit" }],
  },
  "youtube-shorts": {
    number: "06",
    title: "YouTube Shorts — Platform Strategy",
    company: "YouTube",
    type: "Competitive Analysis",
    period: "2026",
    hook: "YouTube built a $40.36 billion advertising business on the back of long-form creators. Then it structurally redirected viewer attention away from them to compete with TikTok.",
    stats: [
      { icon: "revenue", value: "$40.36bn", label: "YouTube annual advertising revenue" },
      { icon: "views", value: "200bn/day", label: "Daily Shorts views" },
      { icon: "drop", value: "30% drop", label: "Long-form views after August 2025 algorithm update" },
      { icon: "slots", value: "80% cut", label: "Homepage long-form recommendation slots cut" },
      { icon: "cpm", value: "53× gap", label: "Long-form CPM vs Shorts: $1.61–$29.30 vs $0.03–$0.06" },
      { icon: "spotter", value: "$940M", label: "Spotter capital into long-form channels — missed targets after algorithmic shift" },
    ],
    background: "This was a structured debate exercise on the question: \"In prioritizing Shorts, is YouTube growing its future or compromising the long-form creator economy it was built on?\" I led the team arguing the position that YouTube is compromising the long-form creator economy. My contribution covered research, structured argumentation, and four actionable platform recommendations.\n\nYouTube's competitive moat is not short-form video. It is the world's second-largest search engine, built on high-intent, long-form educational and entertainment content. Competing with TikTok on TikTok's strongest ground is reactive imitation, not strategy.",
    discovery: "YouTube did not let Shorts grow organically. It engineered the growth through a $100 million creator fund, a 45% Shorts creator revenue share versus 55% for long-form, and an August 2025 algorithm update that caused a 30% drop in long-form views and cut homepage long-form recommendation slots by 80%.\n\nThe 200 billion daily Shorts views came from somewhere — they came from long-form content on the same platform. Shorts does not expand the YouTube audience. It redistributes existing attention.\n\nYouTube earns more from Shorts while paying creators less. On every $100 of advertising revenue, YouTube retains approximately $10 more from Shorts than from long-form — a 22% higher take rate per dollar. Per-view creator earnings: Shorts at $0.03–$0.06 per thousand views; long-form at $1.61–$29.30 per thousand views.\n\nThe September 2025 decision to decouple the Shorts and long-form recommendation engines was an admission of competition, not complementarity. Walls are not built between things that help each other.\n\nThe Spotter case: Spotter deployed $940 million into 735 long-form YouTube channel libraries, missed its 2024 revenue targets, and laid off 40% of its staff after YouTube's algorithmic shift degraded the projected earnings of those libraries.",
    keyDecision: "Four recommendations:\n\n1. A $150 million Long-Form Creator Stabilization Fund targeting mid-tier creators (50,000–500,000 subscribers) with documented traffic declines since August 2025.\n\n2. Reorientation of the Creator Partnerships Hub toward long-form creators proportionally, connecting more high-CPM advertisers to long-form audiences.\n\n3. Equalized revenue share: restore Shorts creator share to 55%, eliminating the platform's structural financial incentive to redirect viewers away from long-form.\n\n4. Restore balanced homepage allocation: reverse the December 2025 change that cut long-form recommendation slots from 12 to 2 or 3. YouTube's own data shows 76% of users cite access to both formats as the primary reason they choose YouTube as their go-to platform.",
    impact: "Good strategic arguments require quantified evidence, not just narrative. The Spotter case was the strongest piece of evidence in the analysis because it translated an algorithmic policy decision into financial consequences that a business decision-maker could not dismiss. Connecting product decisions to measurable economic outcomes is a skill that transfers directly into PM work.",
    keyLearning: "Evidence density beats narrative density. Every claim in a strategic argument should have a number attached to it, and that number should trace back to a source a skeptic can check. The Spotter case was the most persuasive element in the entire analysis — not because it was emotionally compelling, but because it was financially concrete. Finding the evidence that closes the gap between a product observation and a business impact is the skill this exercise is testing.",
    links: [{ label: "Full Presentation", url: "https://docs.google.com/presentation/d/1srd8MPjpzlQeHl9r091Z3lTTlKZZ2ErAKsxIRSPM2rs/edit" }],
  },
};

const iconMap: Record<string, JSX.Element> = {
  churn: <BarChart2 className="w-5 h-5 text-accent" />,
  insight: <Lightbulb className="w-5 h-5 text-accent" />,
  launch: <Zap className="w-5 h-5 text-accent" />,
  fix: <Target className="w-5 h-5 text-accent" />,
  team: <BookOpen className="w-5 h-5 text-accent" />,
  result: <FileText className="w-5 h-5 text-accent" />,
  market: <BarChart2 className="w-5 h-5 text-accent" />,
  cagr: <Zap className="w-5 h-5 text-accent" />,
  host: <Target className="w-5 h-5 text-accent" />,
  payment: <Lightbulb className="w-5 h-5 text-accent" />,
  personas: <BookOpen className="w-5 h-5 text-accent" />,
  edge: <FileText className="w-5 h-5 text-accent" />,
  items: <BarChart2 className="w-5 h-5 text-accent" />,
  capacity: <Target className="w-5 h-5 text-accent" />,
  rice1: <Zap className="w-5 h-5 text-accent" />,
  rice2: <Lightbulb className="w-5 h-5 text-accent" />,
  rice3: <FileText className="w-5 h-5 text-accent" />,
  stakeholders: <BookOpen className="w-5 h-5 text-accent" />,
  users: <BarChart2 className="w-5 h-5 text-accent" />,
  growth: <Zap className="w-5 h-5 text-accent" />,
  retention: <Target className="w-5 h-5 text-accent" />,
  engagement: <Lightbulb className="w-5 h-5 text-accent" />,
  nudge: <FileText className="w-5 h-5 text-accent" />,
  adoption: <BookOpen className="w-5 h-5 text-accent" />,
  tam: <BarChart2 className="w-5 h-5 text-accent" />,
  sam: <Target className="w-5 h-5 text-accent" />,
  som: <Zap className="w-5 h-5 text-accent" />,
  revenue: <Lightbulb className="w-5 h-5 text-accent" />,
  literacy: <FileText className="w-5 h-5 text-accent" />,
  seed: <BookOpen className="w-5 h-5 text-accent" />,
  views: <BarChart2 className="w-5 h-5 text-accent" />,
  drop: <Target className="w-5 h-5 text-accent" />,
  slots: <Zap className="w-5 h-5 text-accent" />,
  cpm: <FileText className="w-5 h-5 text-accent" />,
  spotter: <BookOpen className="w-5 h-5 text-accent" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }),
};

export default function CaseStudyDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const cs = caseStudies[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      <div className="container mx-auto px-6 pt-10">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/case-studies"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border-subtle rounded-lg text-sm text-text-secondary hover:text-foreground transition-colors"
            data-testid="back-to-case-studies"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          {cs.links[0] && (
            <a
              href={cs.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
              data-testid="view-case-study-doc"
            >
              {cs.links[0].label} <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <nav className="text-sm text-text-secondary mb-10" data-testid="breadcrumb">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{cs.company}</span>
        </nav>

        <motion.div
          className="w-full rounded-2xl border border-border-subtle overflow-hidden mb-10"
          style={{ minHeight: 280, background: "linear-gradient(135deg, #1c1c1c 0%, #111 100%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center h-full min-h-[280px] p-10 text-center">
            <div>
              <div className="text-accent/50 font-display text-8xl md:text-[140px] font-bold leading-none mb-2 select-none">{cs.number}</div>
              <div className="text-accent text-xs font-bold tracking-widest uppercase mb-3">{cs.type}</div>
              <h1 className="font-display text-3xl md:text-5xl text-foreground">{cs.company}</h1>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{cs.title}</h2>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 border border-accent/40 rounded-full text-accent text-sm">{cs.type}</span>
            {cs.period && <span className="text-text-secondary text-sm">{cs.period}</span>}
          </div>
          <blockquote className="border-l-2 border-accent pl-6 mb-10">
            <p className="font-display text-xl md:text-2xl text-accent italic leading-relaxed">{cs.hook}</p>
          </blockquote>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          initial="hidden"
          animate="visible"
        >
          {cs.stats.map((stat, i) => (
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

        <div className="space-y-14 max-w-3xl">
          {[
            { icon: <BookOpen className="w-5 h-5 text-accent" />, label: "Background", content: cs.background },
            { icon: <Target className="w-5 h-5 text-accent" />, label: "Discovery", content: cs.discovery },
            { icon: <Lightbulb className="w-5 h-5 text-accent" />, label: "Key Decision", content: cs.keyDecision },
            { icon: <Zap className="w-5 h-5 text-accent" />, label: "Impact", content: cs.impact },
            ...(cs.keyLearning
              ? [{ icon: <FileText className="w-5 h-5 text-accent" />, label: "Key Learning", content: cs.keyLearning }]
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
          {cs.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors"
              data-testid={`case-study-link-${i}`}
            >
              {link.label} <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
