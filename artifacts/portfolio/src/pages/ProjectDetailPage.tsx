import { useParams, Link } from "wouter";
import { useRef, useEffect, useState, ReactNode } from "react";
import { usePageTitle } from "@/hooks/use-page-title";
import { motion, useInView } from "framer-motion";
import { ExternalLink, FileText, Target, Lightbulb, Zap, BookOpen, Users } from "lucide-react";
import traceaidImg from "@assets/image_1781170985650.png";
import openProfileImg from "@assets/image_1781171105171.png";
import invoiceserImg from "@assets/invoiceser_image.jpg";

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

const iconMap: Record<string, ReactNode> = {
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

const sectionIcons: Record<string, ReactNode> = {
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
    role: "Overall Team Lead · Product Manager & Backend Developer",
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

• Organization verification: reviewing submitted documentation before any organization can create a public campaign
• Campaign approval: reviewing each campaign's structure and milestones before it goes live to donors
• Milestone evidence review: validating proof of impact submitted by fundraisers before disbursement is authorized
• Payout authorization: approving withdrawal requests and processing fund transfers to verified bank accounts

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
    role: "Technical Product Manager Lead",
    type: "Identity Platform · Web Application",
    stack: "PostgreSQL · 46 API Endpoints · 3-week sprint",
    status: "Live",
    team: "53 people across 5 functional streams",
    period: "3 weeks, discovery to launch",
    image: openProfileImg,
    stats: [
      { icon: "team",  value: "53",          label: "People coordinated across 5 streams" },
      { icon: "time",  value: "3 Weeks",     label: "Discovery to live production" },
      { icon: "api",   value: "46",         label: "API endpoints" },
      { icon: "live",  value: "On Schedule", label: "Launched within the build window" },
    ],
    sections: [
      {
        icon: "overview",
        label: "Overview",
        content: `Open Profile is a web-based identity platform that gives freelancers, creators, and indie builders a single, owned, and shareable public profile. Users build a structured, multi-section profile, select from three layout templates, customize the visual appearance, and get a permanent URL that anyone can find through the platform's built-in search system.

I led this product as Technical Product Manager Lead during a three-week intensive build sprint at HNG, one of Nigeria's largest developer internship programs. I was accountable for the product from the first planning session to the launch, coordinating a 53-person team across engineering, design, QA, DevOps, marketing, and fellow PMs.`,
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
        content: `## Profile Creation

The profile is structured as a tab-based layout rather than a single long scrolling page. Structured sections create navigability, which makes profile information easier to scan and evaluate quickly.

## Profile Customization

Users choose from three layout templates: Professional (linear, text and link focused, for consultants and service providers), Portfolio (visual-heavy, grid-based, for designers and developers), and Creator (balanced layout with a prominent content section and integrated social links). Switching between templates is non-destructive: no content is lost because content is stored in the database independently of display logic.

Appearance customization includes accent color selection, font pairing, corner style (Sharp, Rounded, or Pill), light/dark mode toggle, a custom CTA button, and an anonymous messaging option that routes messages through the platform without exposing the profile owner's email.

## Search and Discovery

The search system is what separates Open Profile from a standard link-in-bio tool. Any visitor can search by name or username from the landing page, with no account required. Search results display as profile cards showing the user's avatar, display name, username, and a truncated bio.

## Authentication

Two sign-up methods are supported: email and password, and Google OAuth 2.0. Email verification is required before a profile can be published publicly. The authentication system includes brute-force protection: five failed login attempts within ten minutes locks the account for fifteen minutes.

## Onboarding

Both authentication methods feed into a standardized three-step onboarding wizard: basic information (avatar upload, full name, username with live URL preview, and bio), template selection, and appearance customization. The live URL preview during username entry was a specific UX decision to help users understand exactly what they are committing to before they commit.\`,
      },en minutes locks the account for fifteen minutes.`,
      },
      {
        icon: "role",
        label: "My Role",
        content: `I was the Technical Product Manager Lead, accountable for the product from the first day of the sprint to the moment it launched.

I wrote the complete Product Requirements Document covering all five core feature areas, with user stories, acceptance criteria, edge cases, and success metrics for each. I co-authored the Technical Requirements Document with the backend lead, defining the system architecture, 46 API endpoints, PostgreSQL database schema design, authentication flow specifications, and security requirements.

I wrote every ticket for both the frontend and backend teams: detailed, implementation-ready tickets covering expected behavior, edge cases, and acceptance criteria for each task. All tickets were tracked and managed in ClickUp, where I ran the full backlog, maintained sprint structure, and ensured each stream had clear, unblocked work at all times.

I conducted QA testing across multiple rounds throughout the sprint, verifying that each feature behaved as specified before it was marked complete. This included testing the onboarding flow, profile customization, search and discovery, and authentication, across both happy paths and edge cases.

I collaborated with fellow PMs, the Design team, VAs, Data Analysts, and the Marketing team on both product delivery and go-to-market strategy, coordinating a launch approach built around a waitlist, a beta group, founder-led outreach, and the team's social media platforms.

The most consequential contribution I made was not a document. It was a user flow redesign that eliminated a three-week rework cycle that was accumulating because design and engineering were working from different mental models of the same feature. The two teams had made different assumptions about how the profile tab structure and content reordering logic would work. I caught the divergence during a cross-team review, ran a clarification session, and updated the specification so both teams were working from the same model. Catching this before any code was written twice was worth more to the timeline than any document I produced.

The most important prioritization decision I made was drawing a hard line on MVP scope when the team began attempting to build additional features before the core loop was stable. Create, share, and discover had to work end-to-end before anything else was touched. Holding that position, with a 53-person team and real time pressure, required direct communication and the willingness to deprioritize work that real people had already invested time in. It is what made the launch happen.`,
      },
      {
        icon: "learnings",
        label: "Key Learnings",
        content: `Clarity is the highest-leverage input on a large team. At 53 people, the marginal cost of ambiguity is enormous. A single unclear requirement generates misaligned work across multiple streams simultaneously. The most valuable thing I did on this project was not write better documents; it was reducing the time between confusion and resolution.

Scope protection is an active job. Scope does not stay where you set it. Features get added in conversations, in Slack threads, in design explorations. On a sprint this short, any unplanned scope is a deadline risk. I had to be explicitly, visibly firm about what was in and what was out, repeatedly, throughout the sprint.

The GTM is part of the product. A product is not ready when the last bug is fixed. It is ready when the product and the audience arrive at the same moment. Coordinating those two timelines is a PM responsibility.`,
      },
      {
        icon: "means",
        label: "What This Means For Your Team",
        content: `This project demonstrates that I can lead large, complex, cross-functional teams through delivery under pressure while maintaining product quality and hitting a deadline. What you get is a PM who:

• Writes detailed, implementation-ready tickets for both frontend and backend teams: not vague task titles, but real specifications with behavior, edge cases, and acceptance criteria
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
      { label: "API Documentation", url: "https://api.open-profile.hng14.com/docs#/" },
      { label: "Entity Relationship Document", url: "https://dbdiagram.io/d/open_profile_dbml-69fba7bd7a923b94723905aa" },
    ],
  },

  "invoiceser": {
    title: "Invoiceser",
    subtitle: "AI-Powered Invoicing and Financial Intelligence Platform",
    role: "AI Product Manager and Full-Stack Developer",
    type: "AI-Powered Invoicing and Financial Intelligence Platform, SaaS",
    stack: "Next.js 14, Convex (real-time serverless backend), Clerk, Nodemailer (SMTP), gpt-oss-120b (via Groq), KoraPay, PostHog, Recharts",
    status: "Live, in active development",
    image: invoiceserImg,
    stats: [
      { icon: "ai",       value: "AI Powered",    label: "gpt-oss-120b financial assistant (served by Groq)" },
      { icon: "currency", value: "Multi-Currency", label: "Per-currency earnings wallet" },
      { icon: "reminder", value: "Auto Reminders", label: "Scheduled payment nudges" },
      { icon: "notify",   value: "Real-time",      label: "In-app notifications on client actions" },
    ],
    sections: [
      {
        icon: "overview",
        label: "Overview",
        content: `Invoiceser is an AI-powered invoicing and payments platform for freelancers, creators, and small agencies. It streamlines the entire billing workflow from invoice creation through payment collection, layers real-time notifications on top of every state change, and gives users a conversational AI assistant that can answer plain-English questions about their own cash flow, revenue, and clients.

I designed and built this product from the ground up: product strategy, system architecture, database schema, AI integration, payment processing, analytics instrumentation, and the full frontend and backend implementation. I am also the one maintaining and evolving it, with a defined multi-phase roadmap guiding what gets built next.`,
      },
      {
        icon: "problem",
        label: "The Problem",
        content: `Freelancers, independent creators, and small agencies consistently run into the same four pain points when they try to manage billing. Their tools are fragmented: invoices in Word or Excel, a separate payment gateway, and a spreadsheet to track who has paid. Payments get delayed because chasing a client for money is awkward and easy to put off, so it does not happen consistently. Basic business questions are hard to answer quickly, things like how much came in last month or which client owes the most, because the data needed to answer them is scattered across tools that do not talk to each other. And the invoices themselves often look unprofessional, which quietly undermines the credibility of the person sending them.

Invoiceser was built to remove all four problems by consolidating the full invoice lifecycle, automated reminders, multi-currency tracking, and financial intelligence into one purpose-built platform.`,
      },
      {
        icon: "features",
        label: "The Solution",
        content: `The product centers on four commitments. Invoices that are genuinely beautiful and customizable, so they build trust and reinforce the sender's brand rather than undermine it. Automated payment reminders, so a user never has to manually chase a client unless they choose to. A real-time dashboard and wallet that instantly reflects what has been collected and what is still outstanding. And a gpt-oss-120b-powered AI assistant that can answer plain-English questions about cash flow, revenue, and clients on demand.`,
      },
      {
        icon: "features",
        label: "Product Core Features",
        content: `## Invoicing Engine

The invoice editor is a live, WYSIWYG builder. What the user sees while building the invoice is exactly what the client receives, with no separate preview step. Invoices support Draft and Published states, so a user can save work in progress without sending anything prematurely. The platform bills in 15 currencies including USD, GBP, EUR, and NGN, with built-in support for Sales Tax and VAT. Once an invoice is finalized, the platform generates a PDF and sends it by email in a single action.

## Invoice Lifecycle and Payment Tracking

Invoices move through four states: Draft, Sent, Overdue, and Paid. The transition to Overdue is automated by a Convex cron job that checks due dates daily, with no manual intervention required. The wallet dashboard strictly separates Collected from Awaiting Payment amounts, broken out per currency. Payments can be recorded as full or partial, and the dashboard reflects the outstanding balance instantly when a payment is logged.

## Client Management

A contact directory stores both individual and business clients, each with a historical view of every invoice issued to them. This gives a freelancer a single place to see their full relationship with any one client rather than reconstructing it from a search through old emails.

## Automated Payment Reminders

Users configure a reminder schedule per invoice, specifying how many days before the due date the first reminder should go out and how many days after a follow-up should fire. Convex cron jobs evaluate every invoice against its due date daily and trigger the appropriate reminder automatically via SMTP, with the invoice PDF attached. This is the single feature most directly responsible for removing the awkward, manual work of chasing a client for money.

## The AI Assistant

The AI assistant is powered by the gpt-oss-120b model (served via Groq for ultra-low latency) and is built on a context injection architecture rather than a generic chatbot wrapper. When a user submits a question, Convex retrieves that user's clients, invoices, and settings, serializes the relevant data into a strict, read-only system prompt, and only then sends it to the model. The assistant answers from the user's actual data: "Who owes me the most right now?", "What was my strongest month this year?", "Which clients consistently pay late?" The free plan includes ten AI queries per month. The Pro plan includes unlimited queries, which puts the most clearly valuable feature behind the upgrade rather than restricting basic invoicing functionality.

## Real-Time Notifications and Dashboard

The entire application is built on Convex live queries instead of a traditional client-side state management library. When a client opens a shared invoice link, the sender gets an in-app notification immediately. When a payment is recorded, the wallet updates without a page refresh. The UI is never out of sync with the database because it is wired directly to it.

## Multi-Currency Wallet

The earnings wallet tracks collected amounts per currency independently, with no forced conversion. A freelancer billing in dollars, naira, and pounds simultaneously sees exactly how much they have collected in each currency, alongside a consolidated summary view.

## Pro Plan and Monetization

The Pro plan is unlocked through a KoraPay checkout flow and includes unlimited AI queries, custom branding (the user's own fonts, invoice styles, and a custom invoice prefix, with no Invoiceser branding visible to their clients), and predictive analytics. A webhook handler confirms successful payment and upgrades the user's plan automatically with no manual step required.

## Product Analytics

Invoiceser is instrumented with PostHog across both client and server side, tracking the full funnel from signup through onboarding completion, first invoice sent, payment recorded, and Pro conversion. Specific events are tracked with deliberate properties: invoice_sent carries an is_first flag specifically to measure time-to-first-value for new users, and ai_query carries isPro to analyze whether AI usage correlates with upgrade behavior. This was a decision to make the product measurable from the inside, not just demoable from the outside.

## Admin Panel

An internal dashboard supports user management, system announcements, and support handling, built to support operational management of the platform as the user base grows.`,
      },
      {
        icon: "api",
        label: "System Architecture and Security",
        content: `The platform runs on a fully serverless, real-time stack. Convex serves as both the database and the backend function layer, maintaining live WebSocket connections so that any change to the data is pushed to the client instantly with no polling and no manual refresh logic anywhere in the codebase.

Authentication is handled by Clerk, which issues a signed JWT that the Next.js client passes to Convex over the WebSocket connection on every request. Authorization is enforced through Row-Level Security at the database layer: every single Convex query and mutation filters by the authenticated user's ID before returning any data, which makes cross-tenant data leakage architecturally impossible rather than something the application layer has to remember to check.`,
      },
      {
        icon: "time",
        label: "Product Roadmap",
        content: `I planned and am executing Invoiceser across five distinct phases, each with a clear goal and a defined scope. This roadmap is a living artifact I use to sequence what gets built next.

Phase 1, the MVP, is fully implemented. Its goal was to solve the core problem of fragmented invoice creation and basic cash flow visibility to reach initial product-market fit: the core invoicing engine, a basic client directory, manual payment tracking, and version one of the AI assistant.

Phase 2, Automation, Analytics, and Monetization, is in progress. Its goal is to remove manual friction from the user's workflow, introduce a sustainable revenue model, and instrument the product for data-driven decisions. The Pro plan tier, automated reminders, custom branding, and the full PostHog analytics integration are complete.

Phase 3, End-Client Experience and Frictionless Payments, is upcoming. Its goal is to improve the experience for the person paying the invoice, not just the person sending it, and to drive down time-to-paid. This phase includes direct payment links so a client can pay online from the public invoice page, automatic reconciliation on successful payment, a client portal for viewing payment history, and custom domain support for Pro users.

Phase 4, Ecosystem Integration and Accounting, is planned for the future. The goal is to position Invoiceser as a central financial hub by syncing with Xero, QuickBooks, and FreshBooks, adding expense tracking alongside revenue, and connecting bank feeds via Plaid for automatic transaction matching.

Phase 5, the Agency Operating System, is the long-term vision. The goal is to evolve Invoiceser from a single-player tool into a multiplayer operating system for scaling agencies, with team workspaces and role-based access control, automated recurring retainer billing, and native mobile apps.`,
      },
      {
        icon: "live",
        label: "Success Metrics",
        content: `North Star Metric: Monthly Active Senders. The number of unique users who successfully send at least one invoice in a given month. This is the single number that represents the core value Invoiceser delivers. If it grows, the product is succeeding.

Supporting KPIs, organized by funnel stage:

• Activation Rate: percentage of signups who send their first invoice within 24 hours, target above 40%
• Time-to-First-Value: average time between account creation and first invoice sent, target under 5 minutes
• Day 1 and Day 7 retention: percentage of users who return the day after and the week after signup
• Month 1 Retention Rate: percentage of users who return to send a second invoice, target above 30%
• Pro Conversion Rate: percentage of active users who upgrade to Pro, target above 5%
• Collection Success Rate: ratio of payments recorded against invoices sent, target above 75%
• AI Engagement Rate: percentage of active users using the AI assistant at least once per session, target above 15%

Every one of these metrics is mapped to a specific PostHog event with defined properties, so the measurement framework is implemented in the product, not just described in a document.`,
      },
      {
        icon: "docs",
        label: "Risk Register",
        content: `I maintain a documented risk register covering four areas. Email deliverability, where invoice emails landing in spam would directly cause missed payments, mitigated through SPF, DKIM, and DMARC enforcement plus a PDF download fallback link. Security and privacy, where unauthorized access to financial data would be high impact, mitigated through strict Row-Level Security and encryption of sensitive data at rest. LLM hallucination, where the AI assistant could state an incorrect financial figure, mitigated by scoping the system prompt strictly to read-only data the user actually owns and adding UI disclaimers. And third-party outages across Clerk, Convex, or the SMTP provider, mitigated through graceful degradation and retry logic on background jobs.`,
      },
      {
        icon: "role",
        label: "My Role",
        content: `I am the AI Product Manager and the sole developer on Invoiceser. I defined the product concept, wrote the PRD, designed the system architecture and database schema, built the AI integration, instrumented the analytics, defined the KPI framework and risk register, and built the entire application across both phases delivered so far.

The key product decision was the AI assistant's positioning. An AI feature can easily feel like a gimmick if it is bolted onto a product as an afterthought. I designed the assistant to be genuinely useful by giving it real, scoped access to the user's own data and framing it around questions freelancers actually ask themselves when trying to understand their cash flow. The "Who owes me the most?" framing came directly from picturing the moment a freelancer sits down on a Friday afternoon to figure out what they need to chase before the weekend. That specificity, not the model itself, is what separates useful AI from novelty AI.

The second significant decision was building the phased roadmap and KPI framework before continuing to add features. It would have been easy to keep shipping whatever seemed useful next. Instead, I defined what success looks like at each stage, instrumented the product to measure it, and used that to decide what Phase 3 should actually contain. The roadmap is sequenced by what removes the most friction for the user first, not by what is most interesting to build.`,
      },
      {
        icon: "learnings",
        label: "Key Learnings",
        content: `AI features need scoped data access and a specific use case to be genuinely useful. An AI button that opens a generic chatbot is a feature. An AI assistant that knows exactly which of your clients has owed you money the longest is a product. The difference is the specificity of the context and the clarity of the question it is built to answer.

Real-time infrastructure changes the product design space, not just the performance. Building on Convex live queries made instant notifications and a never-stale dashboard not just possible but the default behavior of the architecture. Understanding the infrastructure choice early changed what product experience I could imagine shipping.

A measurement framework should exist before the roadmap does, not after. Defining the North Star Metric, the supporting KPIs, and the PostHog event schema before deciding what Phase 3 should contain meant every roadmap decision could be argued from evidence rather than instinct. Instrumenting the product is a product decision, not an engineering afterthought.`,
      },
      {
        icon: "means",
        label: "What This Means For Your Team",
        content: `This project demonstrates that I can take an AI-powered product from a blank page to a live, measured, and strategically sequenced platform without an engineering team behind me. What you get is a PM who:

• Designs AI features around a specific, validated user need rather than around what the model can technically do
• Builds the analytics and measurement framework into the product itself, not as a reporting exercise after launch
• Plans and sequences a multi-phase roadmap with clear, falsifiable goals at each stage
• Documents risk before it becomes an incident, with a specific mitigation for each one
• Can take full ownership of a product from architecture through to a live, paying user base, end to end`,
      },
    ],
    links: [
      { label: "Live Application", url: "https://invoiceser.vercel.app/" },
      { label: "Product Requirement Document", url: "https://github.com/codeconnoisseur-channels/invoiceser/blob/main/docs/PRODUCT_REQUIREMENT_DOCUMENT.md" },
      { label: "Architecture and System Design", url: "https://github.com/codeconnoisseur-channels/invoiceser/blob/main/docs/SYSTEM_ARCHITECTURE.md" },
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
  usePageTitle(project?.title);

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
