import { useParams, Link } from "wouter";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, FileText, Target, Lightbulb, Zap, BookOpen, Users } from "lucide-react";
import traceaidImg from "@assets/image_1781170985650.png";
import openProfileImg from "@assets/image_1781171105171.png";
import invoiceserImg from "@assets/image_1781171180415.png";

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
  live:      <Zap className="w-4 h-4 text-accent" />,
  api:       <FileText className="w-4 h-4 text-accent" />,
  milestone: <Target className="w-4 h-4 text-accent" />,
  kyc:       <BookOpen className="w-4 h-4 text-accent" />,
  escrow:    <Lightbulb className="w-4 h-4 text-accent" />,
  docs:      <FileText className="w-4 h-4 text-accent" />,
  team:      <Users className="w-4 h-4 text-accent" />,
  time:      <Target className="w-4 h-4 text-accent" />,
  features:  <Lightbulb className="w-4 h-4 text-accent" />,
  streams:   <BookOpen className="w-4 h-4 text-accent" />,
  ai:        <Zap className="w-4 h-4 text-accent" />,
  currency:  <Target className="w-4 h-4 text-accent" />,
  reminder:  <Lightbulb className="w-4 h-4 text-accent" />,
  pdf:       <FileText className="w-4 h-4 text-accent" />,
  pro:       <BookOpen className="w-4 h-4 text-accent" />,
  notify:    <Zap className="w-4 h-4 text-accent" />,
};

const sectionIcons: Record<string, JSX.Element> = {
  overview:  <BookOpen className="w-4 h-4 text-accent" />,
  problem:   <Target className="w-4 h-4 text-accent" />,
  features:  <Lightbulb className="w-4 h-4 text-accent" />,
  role:      <Users className="w-4 h-4 text-accent" />,
  learnings: <FileText className="w-4 h-4 text-accent" />,
  means:     <Zap className="w-4 h-4 text-accent" />,
};

type ProjectSection = { icon: string; label: string; content: string };
type ProjectData = {
  title: string;
  subtitle: string;
  role: string;
  type: string;
  stack: string;
  status: string;
  team?: string;
  period?: string;
  image: string;
  stats: { icon: string; value: string; label: string }[];
  sections: ProjectSection[];
  links: { label: string; url: string }[];
};

const projects: Record<string, ProjectData> = {
  "traceaid": {
    title: "TraceAid",
    subtitle: "Three-Sided Crowdfunding & Accountability Platform",
    role: "Overall Team Lead · PM & Backend Developer",
    type: "Crowdfunding Platform",
    stack: "Node.js · Express.js · MongoDB · KoraPay · Cloudinary · JWT · Swagger",
    status: "Live",
    team: "2 product designers · 2 frontend developers · 2 backend developers",
    image: traceaidImg,
    stats: [
      { icon: "milestone", value: "Milestone-Based", label: "Escrow disbursement model" },
      { icon: "kyc",       value: "KYC Verified",    label: "User onboarding & verification" },
      { icon: "api",       value: "Full API",        label: "Complete backend infrastructure" },
      { icon: "docs",      value: "Swagger Docs",    label: "Published API documentation" },
    ],
    sections: [
      {
        icon: "overview",
        label: "Overview",
        content: `TraceAid is a three-sided platform that connects donors, fundraising organizations, and platform administrators in a structured accountability loop. The core thesis is that charitable giving fails not because people are unwilling to give, but because the systems built to receive donations do not create enough transparency to earn and sustain trust.

The platform is built around a milestone-based campaign and disbursement model. Funds are held in a per-campaign escrow wallet and released only after the fundraiser uploads verifiable proof of impact for the current milestone, which an administrator reviews and approves. This structure makes accountability a product mechanic rather than a promise.

I served as Overall Team Lead and Product Manager, and one of two backend developers on this project. I coordinated two product designers and two frontend developers while also building the core backend systems.`,
      },
      {
        icon: "problem",
        label: "The Problem",
        content: `Crowdfunding and charitable giving platforms have a trust crisis. The 2025 World Giving Report found that 47% of Nigerians do not donate because they do not trust that their money will be used as intended. A further 51% say they would give more if they could see direct evidence of impact.

The dominant platforms collect donations upfront and disburse funds in lump sums, with no obligation on the fundraiser to demonstrate impact before receiving money. The donor has no visibility beyond what the campaign page says. Once the money transfers, the relationship effectively ends.

This is not a bad actor problem. It is a design problem. The incentive architecture of standard crowdfunding does not reward accountability. TraceAid was built to redesign that architecture from the ground up.`,
      },
      {
        icon: "features",
        label: "Product Core Features",
        content: `## For Fundraising Organizations

Fundraising organizations go through a structured onboarding and verification process before they can create a live campaign. The platform does not allow unverified organizations to receive public donations.

Once verified, organizations can create campaigns with clearly defined milestones, each with its own target amount, timeline, and evidence requirements. Campaigns are not live until an administrator reviews and approves them.

The milestone tracking system is the operational core. When a fundraiser is ready to unlock the next tranche of funds, they upload proof of impact: geo-stamped photos, receipts, budget documents, and video evidence. The funds do not move until the administrator review is complete and approved.

## For Donors

Donors can register as an individual or as an organisation. They can browse live campaigns across eight categories: Health and Wellness, Education and Schools, Disaster Relief, Community Development, Environmental Causes, Animal Welfare, Arts and Culture, and General Support. The platform also supports anonymous donations.

Once a donor has contributed to a campaign, they can track the campaign's progress, follow milestone updates, and see the evidence submitted by the fundraiser at each stage.

## For Platform Administrators

Administrators are the operational gatekeepers of the entire trust model. They handle four major responsibilities:

• Organization verification — reviewing submitted documentation before any organization can create a public campaign
• Campaign approval — reviewing each campaign's structure and milestones before it goes live to donors
• Milestone evidence review — validating proof of impact submitted by fundraisers before disbursement is authorized
• Payout authorization — approving withdrawal requests and processing fund transfers to verified bank accounts

Administrators also have access to platform-wide analytics covering donor activity, fundraiser performance, and campaign metrics.

## The Nine-Stage Campaign Workflow

1. Organization registers and submits verification documentation
2. Administrator reviews and approves the organization
3. Verified organization creates a campaign with milestone definitions
4. Administrator reviews and approves the campaign
5. Campaign goes live and accepts donations from the public
6. Fundraiser uploads milestone evidence when the first stage is complete
7. Administrator reviews and approves the milestone evidence
8. Fundraiser submits a payout request for the approved tranche
9. Administrator processes the payout to the fundraiser's verified bank account`,
      },
      {
        icon: "role",
        label: "My Role",
        content: `I was the Overall Team Lead, Product Manager, and one of two backend developers on TraceAid. I coordinated two product designers and two frontend developers while also building the core backend systems.

On the product side, I:

• Identified the problem through research into charitable giving behavior in Nigeria
• Defined the platform concept and its three-sided architecture
• Wrote the complete PRD including all user flows and feature specifications
• Designed the milestone-based escrow model as the core product mechanic
• Made all prioritization decisions about what the MVP needed to include

On the engineering side, I built:

• The Node.js/Express API and MongoDB schema design for all collections
• JWT authentication system with role-based access control for three user types
• KoraPay payment gateway integration including webhook handling for donations and payouts
• Cloudinary media upload pipeline for evidence documents
• Automated email notification system across all major lifecycle events
• Security implementations: rate limiting, input validation, bcrypt password hashing, audit logging
• Swagger API documentation

The most consequential product design decision was the calibration of the milestone evidence standard. I landed on a three-component standard: geo-stamped media, itemized receipts, and a written milestone report. This is demanding enough to filter out bad-faith claims, but clear enough that any well-run organization can meet it.`,
      },
      {
        icon: "learnings",
        label: "Key Learnings",
        content: `Trust is an architecture decision, not a messaging decision. The escrow model is what makes TraceAid categorically different from any other crowdfunding platform. The product decision that mattered was redesigning the money flow, not the marketing copy.

The administrator experience is a product-critical feature. The reviewer workflow is the operational heartbeat of the entire system. Slow or unclear admin tooling creates bottlenecks that affect every downstream user simultaneously. A fundraiser waiting for milestone approval and a donor watching a campaign stall are both experiencing the same admin UX problem.

Three-sided platforms require three times the user thinking. Every single feature decision had to be evaluated from three angles: does it work for the donor, is it achievable for the fundraiser, and can the administrator action it efficiently?`,
      },
      {
        icon: "means",
        label: "What This Means For Your Team",
        content: `This project demonstrates end-to-end product ownership without gaps between definition and execution. What you get when you hire me is a PM who:

• Thinks about product decisions at the architectural level and understands the implementation consequences of every requirement they write
• Can lead a cross-functional team while simultaneously contributing as an engineer
• Closes the loop between a product idea and a deployed system
• Treats internal tooling (admin dashboards, ops workflows) as first-class product surfaces, not afterthoughts`,
      },
    ],
    links: [
      { label: "Visit Live App",           url: "https://trace-aid.vercel.app/" },
      { label: "API Documentation",         url: "https://traceaid.onrender.com/docs/" },
      { label: "GitHub (Backend)",          url: "https://github.com/codeconnoisseur-channels/TraceAid-Hackathon-Backend" },
    ],
  },

  "open-profile": {
    title: "Open Profile",
    subtitle: "Identity Platform for Freelancers & Creators",
    role: "Technical PM Lead",
    type: "Identity Platform · Web Application",
    stack: "PostgreSQL · 15+ API Endpoints · 3-week sprint",
    status: "Live",
    team: "53 people across 5 functional streams",
    period: "3 weeks, discovery to launch",
    image: openProfileImg,
    stats: [
      { icon: "team",  value: "53",          label: "People coordinated across 5 streams" },
      { icon: "time",  value: "3 Weeks",     label: "Discovery to live production" },
      { icon: "api",   value: "15+",         label: "API endpoints defined in TRD" },
      { icon: "live",  value: "On Schedule", label: "Launched within the build window" },
    ],
    sections: [
      {
        icon: "overview",
        label: "Overview",
        content: `Open Profile is a web-based identity platform that gives freelancers, creators, and indie builders a single, owned, and shareable public profile. Users build a structured, multi-section profile, select from three layout templates, customize the visual appearance, and get a permanent URL that anyone can find through the platform's built-in search system.

I led this product as Technical PM Lead during a three-week intensive build sprint at HNG, one of Nigeria's largest developer internship programs. I was accountable for the product from the first planning session to the launch, coordinating a 53-person team across engineering, design, QA, DevOps, marketing, and fellow PMs.`,
      },
      {
        icon: "problem",
        label: "The Problem",
        content: `A freelancer's professional identity is scattered. They might have a LinkedIn with one version of their story, a Behance or Dribbble showing some of their work, a GitHub with their code, and a personal website built three years ago. None of these tell the same story. None of them are consistently discoverable. When a potential client or collaborator searches for this person, they are doing reconstruction work across four platforms.

This problem is not just a discovery problem. It is a trust problem. Fragmented presence creates friction before a relationship even begins.

Existing solutions either push the problem onto another platform (LinkedIn) or give people a single link page with no searchability and no structure beyond a list of buttons (Linktree). Open Profile was designed to sit between those two: owned and shareable like a personal website, structured and searchable like a directory.`,
      },
      {
        icon: "features",
        label: "Product Core Features",
        content: `## Profile Creation and Customization

The profile is structured as a tab-based layout rather than a single long scrolling page. Structured sections create navigability, which makes profile information easier to scan and evaluate quickly.

Users choose from three layout templates: Professional (linear, text and link focused, for consultants and service providers), Portfolio (visual-heavy, grid-based, for designers and developers), and Creator (balanced layout with a prominent content section and integrated social links). Switching between templates is non-destructive — no content is lost because content is stored in the database independently of display logic.

Appearance customization includes accent color selection, font pairing, corner style (Sharp, Rounded, or Pill), light/dark mode toggle, a custom CTA button, and an anonymous messaging option that routes messages through the platform without exposing the profile owner's email.

## Search and Discovery

The search system is what separates Open Profile from a standard link-in-bio tool. Any visitor can search by name or username from the landing page, with no account required. Search results display as profile cards showing the user's avatar, display name, username, and a truncated bio.

## Authentication and Onboarding

Two sign-up methods are supported: email and password, and Google OAuth 2.0. Both feed into a standardized three-step onboarding wizard: basic information (avatar upload, full name, username with live URL preview, and bio), template selection, and appearance customization.

The live URL preview during username entry was a specific UX decision to help users understand exactly what they are committing to before they commit. Email verification is required before a profile can be published publicly. The authentication system includes brute-force protection: five failed login attempts within ten minutes locks the account for fifteen minutes.`,
      },
      {
        icon: "role",
        label: "My Role",
        content: `I was the Technical PM Lead, accountable for the product from the first day of the sprint to the moment it launched.

I wrote the complete Product Requirements Document covering all three core feature areas, with user stories, acceptance criteria, edge cases, and success metrics for each. I co-authored the Technical Requirements Document with the backend lead, defining the system architecture, 15+ API endpoints, PostgreSQL database schema design, authentication flow specifications, and security requirements.

I wrote every ticket for both the frontend and backend teams — detailed, implementation-ready tickets covering expected behavior, edge cases, and acceptance criteria for each task. All tickets were tracked and managed in ClickUp, where I ran the full backlog, maintained sprint structure, and ensured each stream had clear, unblocked work at all times.

I conducted QA testing across multiple rounds throughout the sprint, verifying that each feature behaved as specified before it was marked complete. This included testing the onboarding flow, profile customization, search and discovery, and authentication — across both happy paths and edge cases.

I collaborated with fellow PMs, the Design team, VAs, Data Analysts, and the Marketing team on both product delivery and go-to-market strategy — coordinating a launch approach built around a waitlist, a beta group, founder-led outreach, and the team's social media platforms.

The most consequential contribution I made was not a document. It was a user flow redesign that eliminated a three-week rework cycle that was accumulating because design and engineering were working from different mental models of the same feature. The two teams had made different assumptions about how the profile tab structure and content reordering logic would work. I caught the divergence during a cross-team review, ran a clarification session, and updated the specification so both teams were working from the same model. Catching this before any code was written twice was worth more to the timeline than any document I produced.

The most important prioritization decision I made was drawing a hard line on MVP scope when the team began attempting to build additional features before the core loop was stable. Create, share, and discover had to work end-to-end before anything else was touched. Holding that position, with a 53-person team and real time pressure, required direct communication and the willingness to deprioritize work that real people had already invested time in. It is what made the launch happen.`,
      },
      {
        icon: "learnings",
        label: "Key Learnings",
        content: `Clarity is the highest-leverage input on a large team. At 53 people, the marginal cost of ambiguity is enormous. A single unclear requirement generates misaligned work across multiple streams simultaneously. The most valuable thing I did on this project was not write better documents — it was reduce the time between confusion and resolution.

Scope protection is an active job. Scope does not stay where you set it. Features get added in conversations, in Slack threads, in design explorations. On a sprint this short, any unplanned scope is a deadline risk. I had to be explicitly, visibly firm about what was in and what was out, repeatedly, throughout the sprint.

The GTM is part of the product. A product is not ready when the last bug is fixed. It is ready when the product and the audience arrive at the same moment. Coordinating those two timelines is a PM responsibility.`,
      },
      {
        icon: "means",
        label: "What This Means For Your Team",
        content: `This project demonstrates that I can lead large, complex, cross-functional teams through delivery under pressure while maintaining product quality and hitting a deadline. What you get is a PM who:

• Writes detailed, implementation-ready tickets for both frontend and backend teams — not vague task titles, but real specifications with behavior, edge cases, and acceptance criteria
• Manages the full ticket backlog and sprint structure in ClickUp so engineers always have clear, unblocked work
• Conducts QA testing across multiple rounds, catching issues before they reach users
• Protects scope without creating friction with the team
• Catches design-engineering misalignment before code is written twice
• Treats the launch as a coordinated event, not just a code deployment`,
      },
    ],
    links: [
      { label: "Visit Live App",               url: "https://open-profile.hng14.com/" },
      { label: "Product Requirements Doc (PRD)", url: "https://docs.google.com/document/d/1FF2PDRPHEyODepfxCFEzHcGXHHwTRfjU-DadeiS6jhY/edit" },
      { label: "Technical Requirements Doc (TRD)", url: "https://docs.google.com/document/d/1yN8NWlFPGvhMejkEDVfq3Yo0RwMXRlCStUbpBHS9CzM/edit" },
    ],
  },

  "invoiceser": {
    title: "Invoiceser",
    subtitle: "AI-Powered Invoicing & Financial Intelligence Platform",
    role: "AI Product Manager · Full-Stack Developer",
    type: "SaaS · AI-Powered Invoicing",
    stack: "Next.js 14 · Convex · Clerk · Resend · Groq (Llama 3 70B) · KoraPay · Recharts",
    status: "Live",
    image: invoiceserImg,
    stats: [
      { icon: "ai",       value: "AI Powered",    label: "Groq Llama 3 70B financial assistant" },
      { icon: "currency", value: "Multi-Currency", label: "Per-currency earnings wallet" },
      { icon: "reminder", value: "Auto Reminders", label: "Scheduled payment nudges" },
      { icon: "notify",   value: "Real-time",      label: "In-app notifications on client actions" },
    ],
    sections: [
      {
        icon: "overview",
        label: "Overview",
        content: `Invoiceser is an AI-powered invoicing platform for freelancers and small businesses. It handles the full invoice lifecycle from creation to payment, automates the parts of payment collection that freelancers hate most — chasing clients, tracking what is overdue, sending reminders — and layers an AI assistant on top of the user's financial data so they can get answers to natural language questions about their business.

I designed and built this product from the ground up, handling product vision, system architecture, AI integration, payment processing, and the full frontend and backend implementation.`,
      },
      {
        icon: "problem",
        label: "The Problem",
        content: `Freelancers and small business owners manage invoicing across a combination of spreadsheets, WhatsApp messages, email threads, and memory. When a payment is overdue, they have to manually identify it, manually compose a reminder, and manually track whether it was read. When they want to understand their revenue pattern, they have to aggregate data across multiple sources by hand. When they need a professional-looking PDF invoice, they use tools not designed for their context, with currencies and formatting that do not fit their reality.

Invoiceser was built to consolidate the full invoice lifecycle, automated reminders, multi-currency tracking, and financial intelligence into one purpose-built platform for freelancers.`,
      },
      {
        icon: "features",
        label: "Product Core Features",
        content: `## Invoice Lifecycle Management

Invoices move through four states: Draft, Sent, Overdue, and Paid. The transition from Sent to Overdue is automated by a Convex cron job that runs daily and checks due dates. Partial payments are supported: a client can pay in multiple installments, and the dashboard reflects the outstanding balance in real time.

## Live Invoice Preview

The invoice editor renders a real-time preview of the final document as the user builds it. There is no save-and-preview cycle. What the user sees in the editor is exactly what the client will receive — a deliberate product decision to eliminate the anxiety of not knowing what you are sending until after you send it.

## Automated Payment Reminders

Users configure a reminder schedule per invoice: how many days before the due date to send the first reminder, and how many days after to send follow-up reminders. Invoiceser handles the sending automatically via Resend, with the invoice PDF attached. Users never have to manually chase a payment unless they choose to.

## The AI Assistant

The AI assistant is the feature that separates Invoiceser from every standard invoicing tool. It is powered by Groq's Llama 3 70B model and has full access to the user's invoice data. It answers natural language questions: "Who owes me the most right now?", "What was my strongest month this year?", "Which clients consistently pay late?", "How much have I collected in dollars versus naira?"

The free plan includes ten AI queries per month. The Pro plan includes unlimited queries — putting the most clearly valuable feature behind the upgrade, rather than restricting basic functionality.

## Multi-Currency Support

The earnings wallet tracks collected amounts per currency independently, without forced conversion. A freelancer billing in dollars, naira, and pounds simultaneously can see exactly how much they have collected in each currency, alongside a consolidated summary. This was a product requirement driven by the reality of how freelancers work across international clients.

## Real-Time Notifications

When a client opens a shared invoice link, the user receives an in-app notification immediately, powered by Convex's live query subscriptions. Notifications are also triggered when a payment is recorded and when an invoice moves to Overdue.

## Pro Plan and Monetization

The Pro plan is accessible via a KoraPay upgrade flow and unlocks unlimited AI queries, predictive analytics, custom branding (own fonts, invoice styles, and email domain with no Invoiceser branding), and the ability to set a custom reply-to address. The upgrade flow uses KoraPay's hosted payment page, with a webhook handler that confirms the transaction and upgrades the user's plan automatically.`,
      },
      {
        icon: "role",
        label: "My Role",
        content: `I was the AI Product Manager and full-stack developer on Invoiceser. I defined the product concept, made every feature and prioritization decision, designed the system architecture, and built the entire application.

The key product decision was the AI assistant's positioning. An AI feature can easily feel like a gimmick if bolted on as an afterthought. I designed the assistant to be genuinely useful by giving it full access to the user's data and framing it around questions that freelancers actually ask when they are trying to understand their cash flow. The "Who owes me the most?" framing came directly from thinking about the moment a freelancer sits down on a Friday afternoon to figure out what they need to chase before the weekend. That specificity is what separates useful AI from novelty AI.

The second significant decision was the multi-currency wallet design. I chose to track per-currency balances without conversion rather than normalizing everything to a single currency. Forced conversion creates a false picture of the business for freelancers who think in multiple currencies. Showing real amounts in each currency is more honest and more useful.`,
      },
      {
        icon: "learnings",
        label: "Key Learnings",
        content: `AI features need data access and a specific use case to be genuinely useful. An AI button that opens a generic chatbot is a feature. An AI assistant that knows which of your clients has owed you money for the longest time is a product. The difference is specificity of context and clarity of the use case it is solving.

Real-time infrastructure changes the product design space. Building on Convex's live query subscriptions made features like instant open-notifications and real-time dashboard updates not just possible but easy. The architecture choice unlocked product decisions. Understanding the infrastructure you are building on changes the product you can imagine.

Monetization design should align incentives, not restrict functionality. Putting AI queries behind the Pro plan, rather than restricting invoice limits or client counts, was a deliberate choice. Users experience the full core product for free and hit the upgrade wall only at the point where they are actively getting value from the AI. That alignment between value experience and upgrade trigger is better product thinking than an arbitrary limit on the number of invoices.`,
      },
      {
        icon: "means",
        label: "What This Means For Your Team",
        content: `This project demonstrates that I can build AI-powered products that are useful rather than decorative. What you get is a PM who:

• Understands how to identify the specific high-value use case for an AI feature
• Designs the data access and context that makes AI genuinely work for users
• Monetizes AI in a way that aligns with the user's experience of value rather than restricting core functionality
• Can ship a complete product — architecture to deployment — as a solo builder`,
      },
    ],
    links: [
      { label: "Visit Live App", url: "https://invoiceser.vercel.app/" },
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45 } }),
};

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const project = projects[slug];

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
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10">

        {/* Top bar: back + all links */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border-subtle rounded-lg text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Projects
          </Link>
          {project.links.map((link, i) => (
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
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{project.title}</span>
        </nav>

        {/* Project image */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden border border-border-subtle bg-card mb-8"
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain object-top max-h-[480px]"
          />
        </motion.div>

        {/* Title block */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{project.type}</div>
          <h1 className="font-display text-3xl md:text-5xl text-foreground mb-1">{project.title}</h1>
          <p className="text-text-secondary text-lg mb-3">{project.subtitle}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-accent font-medium">{project.role}</span>
            <span className="text-border-subtle">•</span>
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full inline-block animate-pulse ${project.status === "Live" ? "bg-green-500" : "bg-amber-400"}`}></span>
              <span className="text-foreground">{project.status}</span>
            </span>
            {project.team && (
              <>
                <span className="text-border-subtle">•</span>
                <span className="text-text-secondary">{project.team}</span>
              </>
            )}
            {project.period && (
              <>
                <span className="text-border-subtle">•</span>
                <span className="text-text-secondary">{project.period}</span>
              </>
            )}
          </div>
        </motion.div>

        {/* Stack bar */}
        <div className="mb-8 p-3 bg-card border border-border-subtle rounded-xl flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="text-text-secondary uppercase tracking-widest font-semibold shrink-0">Stack</span>
          <span className="w-px h-3 bg-border-subtle hidden sm:block"></span>
          <span className="text-foreground">{project.stack}</span>
        </div>

        {/* Stat cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
          initial="hidden"
          animate="visible"
        >
          {project.stats.map((stat, i) => (
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
          {project.sections.map((section, i) => (
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
        <div className="flex flex-wrap gap-3 mt-16 max-w-3xl mx-auto">
          {project.links.map((link, i) => (
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

      </div>
    </div>
  );
}
