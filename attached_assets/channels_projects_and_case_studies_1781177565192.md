# PROJECTS AND CASE STUDIES
## Channels Okunade Oladapo
### Detailed content for portfolio projects and case studies sections

---

# PART ONE: PROJECTS

---

## PROJECT 1: TRACEAID

**Role:** Product Manager and Backend Developer
**Type:** Three-Sided Fundraising Accountability Platform
**Stack:** Node.js, Express.js, MongoDB, KoraPay, Cloudinary, JWT, Swagger
**Period:** 2025
**Status:** Live

**Links:**
- Live Application: https://trace-aid.vercel.app/
- API Documentation (Swagger): https://traceaid.onrender.com/docs/

---

### Overview

TraceAid is a three-sided platform that connects donors, fundraising organizations (NGOs, foundations, and charitable institutions), and platform administrators in a structured accountability loop. The core thesis of the product is that charitable giving fails not because people are unwilling to give, but because the systems built to receive donations do not create enough transparency to earn and sustain trust.

The platform is built around a milestone-based campaign and disbursement model. Fundraisers do not receive donated funds in bulk. Money is held in a per-campaign escrow wallet and released only after the fundraiser uploads verifiable proof of impact for the current milestone, which an administrator reviews and approves. This structure makes accountability a product mechanic rather than a promise.

I owned this product entirely, both as the Product Manager who defined it and as the sole backend developer who built it.

---

### The Problem

Crowdfunding and charitable giving platforms have a trust crisis. The 2025 World Giving Report found that 47% of Nigerians do not donate because they do not trust that their money will be used as intended. A further 51% say they would give more if they could see direct evidence of impact. These are not fringe sentiments. They represent a structural failure in how donation platforms are designed.

The dominant platforms in the market collect donations upfront and disburse funds in lump sums, with no obligation on the fundraiser to demonstrate impact before receiving money. The donor has no visibility beyond what the campaign page says. The fundraiser has no incentive structure that ties continued access to funds to continued accountability. Once the money transfers, the relationship effectively ends.

This is not a bad actor problem. It is a design problem. The incentive architecture of standard crowdfunding does not reward accountability. TraceAid was built to redesign that architecture from the ground up.

---

### Product Complexity and Core Features

TraceAid is a significantly complex platform with three distinct user experiences, a nine-stage operational workflow, and interlocking systems for fund management, evidence validation, and payment processing. Here is what was built:

**For Fundraising Organizations**

Fundraising organizations go through a structured onboarding and verification process before they can create a live campaign. The platform does not allow unverified organizations to receive public donations.

Once verified, organizations can create campaigns with clearly defined milestones, each with its own target amount, timeline, and evidence requirements. Campaigns are not live until an administrator reviews and approves them.

The milestone tracking system is the operational core of the platform. When a fundraiser is ready to unlock the next tranche of funds, they upload proof of impact for the current milestone: geo-stamped photos, receipts, budget documents, and video evidence. This evidence goes to an administrator for review. The funds do not move until the review is complete and approved.

Each organization has a per-campaign escrow wallet that tracks available balance and payout history. When milestone evidence is approved, the fundraiser can initiate a payout request, which also requires bank account verification before the transfer is processed.

**For Donors**

Donors can create individual accounts with email verification or sign in via social authentication. They can browse live campaigns across eight categories: Health and Wellness, Education and Schools, Disaster Relief, Community Development, Environmental Causes, Animal Welfare, Arts and Culture, and General Support. The platform also supports anonymous donations for donors who want to contribute without public visibility.

Once a donor has contributed to a campaign, they can track the campaign's progress, follow milestone updates, and see the evidence submitted by the fundraiser at each stage. The donation history is tied to the donor's account and persists across all their contributions.

**For Platform Administrators**

Administrators are the operational gatekeepers of the entire trust model. The platform was designed so that no significant transfer of funds or public exposure happens without administrative review. Administrators handle four major responsibilities:

Organization verification: reviewing submitted documentation before any organization can create a public campaign. Campaign approval: reviewing each campaign's structure, milestones, and target amounts before it goes live to donors. Milestone evidence review: validating the proof of impact submitted by fundraisers at each milestone before disbursement is authorized. Payout authorization: approving individual withdrawal requests and processing fund transfers to verified bank accounts.

Administrators also have access to platform-wide analytics covering donor activity, fundraiser performance, and campaign metrics.

**Platform Infrastructure and Security**

The authentication system supports three user types with role-based access control. Each role has strictly defined permissions: donors cannot initiate payouts, fundraisers cannot approve their own evidence, and the separation of concerns is enforced at the API level. JWT-based session management handles secure authentication with token refresh logic and brute-force protection via rate-limited endpoints.

The payment processing pipeline handles both the inbound donation flow and the outbound disbursement flow. Donations are confirmed via KoraPay webhook verification before being credited to the campaign wallet. Outbound transfers go through an admin approval step before being processed to the fundraiser's bank account.

The platform triggers automated email notifications at every major lifecycle event: account registration and email verification, organization verification status updates, campaign approval or rejection, milestone completion updates, payout confirmations, and password reset requests. Nothing significant happens in silence.

Security standards applied across the platform include encrypted password storage with bcrypt, OTP-based account verification, input validation on all endpoints, rate limiting on authentication endpoints, secure file upload handling via Cloudinary, and transaction logging with full audit timestamps.

**The Nine-Stage Campaign Workflow**

To understand the full complexity of what was built, it helps to trace one campaign from start to finish:

1. Organization registers and submits verification documentation
2. Administrator reviews and approves the organization
3. Verified organization creates a campaign with milestone definitions
4. Administrator reviews and approves the campaign
5. Campaign goes live and accepts donations from the public
6. Fundraiser uploads milestone evidence when the first stage is complete
7. Administrator reviews and approves the milestone evidence
8. Fundraiser submits a payout request for the approved tranche
9. Administrator processes the payout to the fundraiser's verified bank account

This cycle repeats for each milestone until the campaign is complete. Every release of funds is gated by a documented evidence review.

---

### My Role

I was the Product Manager and sole backend developer on TraceAid. I was the only person who worked on this product.

On the product side, I identified the problem through research into charitable giving behavior, defined the platform concept and its three-sided architecture, wrote the complete PRD including all user flows and feature specifications, designed the milestone-based escrow model as the core product mechanic, and made all prioritization decisions about what the MVP needed to include and what could wait.

On the engineering side, I built the complete backend infrastructure from scratch: the Node.js/Express API, MongoDB schema design for all collections, JWT authentication system with RBAC, KoraPay payment gateway integration including webhook handling for donation confirmation and payout processing, Cloudinary media upload pipeline for evidence documents, automated email notification system, and all security implementations including rate limiting, input validation, and audit logging. I also wrote and deployed the Swagger API documentation.

The most consequential product design decision I made was the calibration of the milestone evidence standard. I had to land on requirements that were genuinely demanding enough to create accountability, but practically achievable for a legitimate fundraiser operating in the field. Too loose and the platform becomes meaningless. Too strict and real organizations stop using it. I landed on a three-component standard: geo-stamped media, itemized receipts, and a written milestone report. This is demanding enough to filter out bad faith claims, but clear enough that any well-run organization can meet it.

---

### Key Learnings

**Trust is an architecture decision, not a messaging decision.** The escrow model is what makes TraceAid categorically different from any other crowdfunding platform. If I had built a platform with a compelling brand story about accountability but the same bulk-disbursement mechanics as every other platform, nothing would actually be different for donors. The product decision that mattered was redesigning the money flow, not the marketing copy.

**The administrator experience is a product-critical feature.** I underweighted the admin dashboard in early prioritization. In retrospect, the reviewer workflow is the operational heartbeat of the entire system. Slow or unclear admin tooling creates bottlenecks that affect every downstream user simultaneously. A fundraiser waiting for milestone approval and a donor watching a campaign stall are both experiencing the same admin UX problem. I would treat the internal tooling as a first-class product surface from day one in any future build.

**Three-sided platforms require three times the user thinking.** Every single feature decision had to be evaluated from three different angles: does it work for the donor, is it achievable for the fundraiser, and can the administrator action it efficiently? When those three questions produce conflicting answers, you have a real product problem to solve. Most of the hard design work on TraceAid lived in exactly those conflicts.

---

### What This Means for Your Team

This project demonstrates end-to-end product ownership without gaps between definition and execution. I defined the product architecture, specified every feature, made the key design trade-offs, and built the system that makes it real. What you get when you hire me is a PM who thinks about product decisions at the architectural level, understands the implementation consequences of every requirement they write, and can close the loop between a product idea and a deployed system.

---

---

## PROJECT 2: OPEN PROFILE

**Role:** Technical PM Lead
**Organization:** HNG Tech Internship
**Type:** Identity Platform, Web Application
**Team:** 53 people across frontend, backend, DevOps, QA, design, marketing, and product
**Period:** April 2026 - June 2026
**Build Window:** 3 weeks, discovery to live deployment
**Status:** Live

**Links:**
- Live Application: https://open-profile.hng14.com/

---

### Overview

Open Profile is a web-based identity platform that gives freelancers, creators, and indie builders a single, owned, and shareable public profile. Users build a structured, multi-section profile, select from three layout templates, customize the visual appearance, and get a permanent URL at openprofile.com/username that anyone can find through the platform's built-in search system.

I led this product as Technical PM Lead during a three-week intensive build sprint at HNG, one of Nigeria's largest developer internship programs. I was responsible for the product from the first planning session to the launch, coordinating a 53-person team simultaneously across engineering, design, QA, DevOps, marketing, and fellow PMs.

---

### The Problem

A freelancer's professional identity is scattered. They might have a LinkedIn with one version of their story, a Behance or Dribbble showing some of their work, a GitHub with their code, a personal website built three years ago, and a portfolio PDF they send on request. None of these tell the same story. None of them are consistently discoverable. When a potential client, employer, or collaborator searches for this person, they are doing reconstruction work across four platforms, making judgment calls on incomplete and inconsistent information.

This problem is not just a discovery problem. It is a trust problem. Fragmented presence creates friction before a relationship even begins. The person who cannot be easily understood cannot easily be trusted.

Existing solutions either push the problem onto another platform (LinkedIn) or give people a single link page with no searchability and no structure beyond a list of buttons (Linktree). Open Profile was designed to sit between those two: owned and shareable like a personal website, structured and searchable like a directory.

---

### Product Complexity and Core Features

The product was built around four core feature areas, each of which I specified completely in the PRD and TRD.

**Profile Creation and Customization**

The profile is structured as a tab-based layout rather than a single long scrolling page. This distinction was a deliberate product decision: structured sections create navigability, which makes profile information easier to scan and evaluate quickly.

Users choose from three layout templates: Professional (linear, text and link focused, designed for consultants and service providers), Portfolio (visual-heavy, grid-based, designed for designers and developers who want work examples front and center), and Creator (balanced layout with a prominent content section and integrated social links). Switching between templates is non-destructive. No content is lost or reordered when a user changes their template, because content is stored in the database independently of display logic.

Appearance customization includes accent color selection from a preset palette, font pairing selection, corner style (Sharp, Rounded, or Pill), and a light/dark mode toggle. Users can also configure a custom CTA button with their own label and URL, and choose between a standard contact form and an anonymous messaging option that routes messages through the platform without exposing the profile owner's actual email address to senders.

**Search and Discovery**

The search system is what separates Open Profile from a standard link-in-bio tool. Any visitor to the platform can search by name or username from the landing page, with no account required. Search results display as profile cards showing the user's avatar, display name, username, and a truncated bio.

**The Invite Loop**

When a search returns no results for someone who is not yet on the platform, the system does not simply show an empty state. It prompts the searcher to invite that person by email. The invite system creates a record in the database, sends a branded email via the Resend integration, and pre-fills the signup form with the recipient's email address when they click the invite link. Duplicate invites within 24 hours are blocked at the API level to prevent spam.

This feature was designed to turn every failed search into a growth mechanism. The product grows when people look for each other.

**Verification Badge**

A verification badge is displayed on profiles that meet two conditions: the account email address has been confirmed, and the user has connected at least one social account (LinkedIn or X/Twitter). The badge is automatically removed if either condition is later unmet. It functions as a lightweight, self-service trust signal for profile visitors.

**Authentication and Onboarding**

Three sign-up methods are supported: email and password, Google OAuth 2.0, and LinkedIn OAuth 2.0. All three methods feed into a standardized three-step onboarding wizard: basic information (avatar upload, full name, username with live URL preview, and bio), template selection, and appearance customization. The live URL preview during username entry was a specific UX decision to help users understand exactly what they are committing to before they commit.

Email verification is required before a profile can be published publicly. The authentication system includes brute-force protection: five failed login attempts within ten minutes locks the account for fifteen minutes.

---

### My Role

I was the Technical PM Lead. I was accountable for the product from the first day of the sprint to the moment it launched.

I wrote the complete Product Requirements Document covering all four core feature areas, with user stories, acceptance criteria, edge cases, and success metrics for each. I co-authored the Technical Requirements Document with the backend lead, defining the system architecture, over 30 API endpoints, PostgreSQL database schema design, authentication flow specifications, security requirements, and the design-to-engineering handoff standards that governed how the frontend and backend teams interfaced.

I collaborated with fellow Product Managers, the Design team, VAs, and Data Analysts to align the product across all workstreams. I also partnered with the Marketing team on the go-to-market strategy, coordinating a launch approach built around a waitlist, a beta group, founder-led outreach, community channels, and the team's active social media platforms.

The most consequential contribution I made to the outcome was not a document. It was a user flow redesign that eliminated a three-week rework cycle that was accumulating due to design and engineering working from different mental models of the same feature. The two teams had made different assumptions about how the profile tab structure and content reordering logic would work. I caught the divergence during a cross-team review, ran a clarification session that resolved the ambiguity, and updated the specification so both teams were working from the same model. Catching this before any code was written twice was worth more to the timeline than any document I produced.

The most important prioritization decision I made was drawing a hard line on MVP scope when the team began attempting to build additional features before the core loop was stable. Create, share, and discover had to work end-to-end before anything else was touched. Holding that position, with a 53-person team and real time pressure, required direct communication and the willingness to deprioritize work that real people had already invested time in. It is what made the launch happen.

---

### Key Learnings

**Clarity is the highest-leverage input on a large team.** At 53 people, the marginal cost of ambiguity is enormous. A single unclear requirement generates misaligned work across multiple streams simultaneously. The most valuable thing I did on this project was not write better documents. It was reduce the time between confusion and resolution. Every day of misalignment across a team this size is multiple weeks of wasted engineering effort.

**Scope protection is an active job.** Scope does not stay where you set it. Features get added in conversations, in Slack threads, in design explorations. On a sprint this short, any unplanned scope is a deadline risk. I had to be explicitly, visibly firm about what was in and what was out, repeatedly, throughout the sprint. That is not a comfortable position. It is a necessary one.

**The GTM is part of the product.** Running the launch campaign as a parallel workstream alongside product development changed how I thought about what "ready" means. A product is not ready when the last bug is fixed. It is ready when the product and the audience arrive at the same moment. Coordinating those two timelines is a PM responsibility.

---

### What This Means for Your Team

This project demonstrates that I can lead large, complex, cross-functional teams through delivery under pressure while maintaining product quality and hitting a deadline. What you get is a PM who writes technical documentation that engineers find useful rather than vague, who protects scope without creating friction with the team, and who treats the launch as a coordinated event rather than a code deployment.

---

---

## PROJECT 3: INVOICESER

**Role:** AI Product Manager
**Type:** AI-Powered Invoicing and Financial Intelligence Platform, SaaS
**Stack:** Next.js 14, Convex (real-time serverless backend), Clerk, Resend, Groq (Llama 3 70B), KoraPay, Recharts
**Status:** Live

**Links:**
- Live Application: https://invoiceser.vercel.app/

---

### Overview

Invoiceser is an AI-powered invoicing platform for freelancers and small businesses. It handles the full invoice lifecycle from creation to payment, automates the parts of payment collection that freelancers hate most (chasing clients, tracking what is overdue, sending reminders), and layers an AI assistant on top of the user's financial data so they can get answers to natural language questions about their business.

I designed and built this product from the ground up, handling product vision, system architecture, AI integration, payment processing, and the full frontend and backend implementation.

---

### The Problem

Freelancers and small business owners in African markets manage invoicing across a combination of spreadsheets, WhatsApp messages, email threads, and memory. When a payment is overdue, they have to manually identify it, manually compose a reminder, and manually track whether it was read. When they want to understand their revenue pattern, they have to aggregate data across multiple sources by hand. When they need a professional-looking PDF invoice, they use tools not designed for their context, with currencies and formatting that do not fit their reality.

There is no single purpose-built invoicing tool for the African freelancer that handles all of these problems together. Most invoicing tools are built for Western markets, lack multi-currency support that fits African use cases, and offer no intelligence layer on top of the financial data they store.

Invoiceser was built to close that gap.

---

### Product Complexity and Core Features

**Invoice Lifecycle Management**

Invoices move through four states: Draft, Sent, Overdue, and Paid. The transition from Sent to Overdue is automated by a Convex cron job that runs daily and checks due dates. Partial payments are supported: a client can pay in multiple installments, and the dashboard reflects the outstanding balance in real time. When an invoice moves to Overdue, the system triggers the configured reminder sequence automatically.

**Live Invoice Preview**

The invoice editor renders a real-time preview of the final document as the user builds it. There is no save-and-preview cycle. What the user sees in the editor is exactly what the client will receive. This was a deliberate product decision to eliminate the anxiety of not knowing what you are sending until after you send it.

**Automated Payment Reminders**

Users configure a reminder schedule per invoice: how many days before the due date to send the first reminder, and how many days after to send follow-up reminders. Invoiceser handles the sending automatically via Resend. The reminder emails include the invoice PDF as an attachment. Users never have to manually chase a payment unless they choose to.

**The AI Assistant**

The AI assistant is the feature that separates Invoiceser from every standard invoicing tool. It is powered by Groq's Llama 3 70B model and has full access to the user's invoice data. It answers natural language questions: "Who owes me the most right now?", "What was my strongest month this year?", "Which clients consistently pay late?", "How much have I collected in dollars versus naira?" It also provides summaries and pattern analysis on request.

The free plan includes ten AI queries per month. The Pro plan includes unlimited queries. This framing was a deliberate monetization decision: it puts the most clearly valuable feature behind the upgrade, rather than restricting basic functionality.

**Multi-Currency Support**

The earnings wallet tracks collected amounts per currency independently, without forced conversion. A freelancer billing in dollars, naira, and pounds simultaneously can see exactly how much they have collected in each currency, alongside a consolidated summary. This was a product requirement driven by the reality of how African freelancers work across international clients.

**Real-Time Notifications**

When a client opens a shared invoice link, the user receives an in-app notification immediately, powered by Convex's live query subscriptions. Notifications are also triggered when a payment is recorded and when an invoice moves to Overdue. Users do not have to refresh or check in. They see what is happening as it happens.

**Pro Plan and Monetization**

The Pro plan is accessible via a KoraPay upgrade flow and unlocks unlimited AI queries, predictive analytics, custom branding (users' own fonts, invoice styles, and email domain with no Invoiceser branding), and the ability to set a custom reply-to address using their own business email. The upgrade flow uses KoraPay's hosted payment page, with a webhook handler that confirms the transaction and upgrades the user's plan automatically.

**Admin Panel**

An internal admin dashboard supports user management, system announcements, support ticket handling, and audit log access. This was built to support operational management of the platform as it scales.

---

### My Role

I was the AI Product Manager and full-stack developer on Invoiceser. I defined the product concept, made every feature and prioritization decision, designed the system architecture, and built the entire application.

The key product decision I made was the AI assistant's positioning. An AI feature can easily feel like a gimmick if it is bolted onto a product as an afterthought. I designed the assistant to be genuinely useful by giving it full access to the user's data and framing it around questions that freelancers actually ask themselves when they are trying to understand their cash flow. The "Who owes me the most?" framing came directly from thinking about the moment a freelancer sits down on a Friday afternoon to figure out what they need to chase before the weekend. That specificity is what separates useful AI from novelty AI.

The second significant decision was the multi-currency wallet design. I chose to track per-currency balances without conversion rather than normalizing everything to a single currency. This was a product empathy decision: forced conversion creates a false picture of the business for freelancers who think in multiple currencies. Showing real amounts in each currency is more honest and more useful.

---

### Key Learnings

**AI features need data access and a specific use case to be genuinely useful.** An AI button that opens a generic chatbot is a feature. An AI assistant that knows which of your clients has owed you money for the longest time is a product. The difference is specificity of context and clarity of the use case it is solving.

**Real-time infrastructure changes the product design space.** Building on Convex's live query subscriptions made features like instant open-notifications and real-time dashboard updates not just possible but easy. The architecture choice unlocked product decisions. Understanding the infrastructure you are building on changes the product you can imagine.

**Monetization design should align incentives, not restrict functionality.** Putting AI queries behind the Pro plan, rather than restricting invoice limits or client counts, was a deliberate choice. I wanted users to experience the full core product for free and hit the upgrade wall only at the point where they are actively getting value from the AI. That alignment between value experience and upgrade trigger is better product thinking than an arbitrary limit on the number of invoices.

---

### What This Means for Your Team

This project demonstrates that I can build AI-powered products that are useful rather than decorative. I understand how to identify the specific high-value use case for an AI feature, how to design the data access and context that makes it work, and how to monetize it in a way that aligns with the user's experience of value. If you are building an AI product and need a PM who understands what makes AI features genuinely useful at the product level, this is the evidence for that.

---
---

# PART TWO: CASE STUDIES

---

## CASE STUDY 1: BORDERFLO

**Type:** Product Management Internship
**Company:** BorderFlo, cross-border educational payment startup
**Period:** November 2024 - February 2025
**Deliverable:** MVP Android launch, churn diagnosis, activation feature proposal and implementation

---

### Context

BorderFlo is a Lagos-based startup solving a real and underserved problem: African students who need to pay tuition, application fees, and other educational costs to institutions outside Nigeria face a painful, fragmented payment process. BorderFlo was building a mobile app to let users fund a wallet and make those payments directly from it. I joined as a Product Management Intern as the team was building toward the MVP launch.

---

### The Challenge

The core product challenge I was given was to improve the path from signup to first wallet funding. The team had observed that users were signing up but not completing the onboarding process. They needed to understand why and what to do about it.

---

### My Approach

I started with the data before forming any hypothesis. Using Google Analytics, I traced the user journey from signup through each onboarding step and identified where volume was dropping off. The data showed a 40% churn rate, concentrated at one specific step: identity verification.

My first instinct, and the instinct of most product teams in this situation, would have been to optimize the verification step itself. Simplify the UI, improve the copy, add tooltips. But I ran user interviews before drawing that conclusion, because the data could only tell me where the problem was. It could not tell me why.

The interviews changed everything. Users were not confused by the verification step. They understood exactly what they needed to do. The problem was that they had not yet decided it was worth doing. They had signed up, arrived at a step requiring them to submit identity documents, and made a rational cost-benefit calculation: the effort required to verify was not worth it because they had not yet experienced any product value. They had not funded a wallet. They had not made a payment. They had not seen the product solve the problem they came to solve.

The implication was significant. The team had a sequencing problem, not a communication problem. No amount of UX improvement on the verification step would fix a decision being made before the user had engaged with the product.

---

### Key Decisions

I proposed two activation features based on this diagnosis.

The first was progressive onboarding. The recommendation was to restructure the experience so users could explore the product, see their funding options, and understand what the wallet could do for them before being required to complete identity verification. The goal was to reverse the order of commitment and value: let the user see the value first, and then ask for the effort. Build commitment before demanding trust.

The second was event-triggered nudges. Rather than generic time-based emails sent to all inactive users, I recommended behavioral prompts triggered by specific in-app actions. A user who had started verification but not completed it would receive a different message from one who had not started at all. This required more sophistication in the trigger logic but would produce more relevant re-engagement than broadcast messaging.

The decision to frame this as a sequencing problem rather than a UX problem was the most important call I made. It meant the solution required restructuring the onboarding flow rather than polishing it. That is a larger and more complex change to recommend. But it was the right diagnosis.

Progressive onboarding was implemented and shipped. It reduced abandonment at the verification stage.

---

### Coordination

The engineering team was a hybrid of internal engineers and specialist external contractors working on different timelines and with different levels of context about the product. I ran sprint planning and backlog grooming sessions in ClickUp that maintained a shared understanding of priority across both groups throughout the build cycle. The MVP launched in January 2025 on schedule.

---

### What This Demonstrates

This case study demonstrates three specific PM capabilities. First, the discipline to not jump to solutions before completing the diagnosis. The easy answer was to optimize the verification step. The right answer required running research first. Second, the ability to distinguish between what data shows and what users explain. These are two different instruments and using only one of them produces an incomplete picture. Third, the willingness to recommend the harder, more structurally significant fix when the evidence points to it, rather than the easier, more cosmetic one.

---

---

## CASE STUDY 2: DELIVEROO, COLLABORATIVE GROUP ORDERING WITH SPLIT PAYMENT

**Type:** Product Case Study Exercise (speculative feature proposal, not affiliated with Deliveroo)
**Completed:** April 2026
**Artifacts:** Full case study PDF, interactive Figma prototype

**Links:**
- Figma Prototype: https://www.figma.com/design/8BJ5CKNOsBD5ecOcsDK8to/Deliveroo-User-Flow-and-Prototype?node-id=0-1&t=XZsNqJldwSSUQuJ4-1
- Full Case Study: https://docs.google.com/presentation/d/1R5ecThTskbmiMN_H777zH8CrKDrQFAu3s0_8g86GrnE/edit

---

### Context

This is a product case study exercise proposing a new feature for Deliveroo. I am not affiliated with Deliveroo. The exercise was an opportunity to practice end-to-end feature thinking: from market analysis and problem definition through to solution design, prototyping, edge case handling, and success metric definition.

---

### The Problem

When a group of friends, flatmates, or colleagues wants to order food together from Deliveroo, the product places the entire coordination burden on one person. That person compiles everyone's orders through a chat thread, enters them manually into the app, pays the full amount upfront, and then tries to collect money from everyone afterward through a separate payment app or bank transfer. The coordination happens outside the product. The payment reconciliation happens outside the product.

This is friction that actively suppresses a natural social use case. Group ordering is not a niche behavior. It is how people frequently order food. When the product fails to support it natively, it creates a worse experience for users and leaves higher average order values unrealized for the business.

---

### My Approach

I started with market and competitive context to establish the size and nature of the opportunity. The UK food delivery market was valued at £14.3bn at the time of this exercise, growing at 8.49% CAGR. I then built two user personas using Jobs-to-Be-Done framing to ground the feature design in actual human behavior rather than abstract use cases:

Sarah Craig, 25, an accountant who wants to order dinner with a group of friends without pausing the evening to play coordinator and accountant at the same time.

Mbalu Steve, 21, a student who wants to split a late-night takeaway order with three flatmates without the awkward math and the inevitable situation where one person ends up covering the whole bill because others forget.

I mapped the complete customer journey for the current experience, identifying exactly where the friction occurs and what it costs each user type in terms of time, cognitive load, and social discomfort.

---

### The Proposed Feature

A host starts a group order session from a restaurant page. The app generates a shareable link. The host sends it via WhatsApp or any messaging app. Guests click the link, verify with a one-time SMS code (no app download required), browse the same menu, and add their own items to a shared real-time basket. When the host locks the order, each participant pays their exact share through the app before the order is placed. The order submits only when all payments are confirmed.

---

### Key Decisions

The most important design decision was making payment upfront and decoupled. Each participant pays before the order is placed, not after. This removes the social friction of informal debt between friends, which is the real reason group ordering fails in the current experience: not because people do not want to share orders, but because collecting money afterward is uncomfortable. Solving the payment problem is what makes the feature genuinely useful rather than just technically functional.

The second significant decision was the SMS-based guest verification that does not require a Deliveroo account. This was a deliberate friction reduction choice. Requiring guests to download an app and create an account to join a group order would kill the feature's adoption. The value proposition depends on the link being instantly usable.

I also designed four edge case resolution flows: a guest who fails to pay before the deadline, an item that goes out of stock while the basket is open, a payment card that declines during checkout, and a host who cancels after guests have already paid. These are not edge cases that can be left to chance on a payment-critical flow. Each has a defined resolution path.

---

### Success Metrics

North Star Metric: Weekly Successful Group Orders (defined as orders with two or more participants where all shares are paid and the order is placed).

Supporting metrics by cluster:

Acquisition and Conversion: Group order initiation rate (what proportion of eligible sessions result in a host starting a group order), participant join rate (what proportion of invites result in a guest joining the basket), and drop-off rate by flow stage (where participants exit before completing payment).

Financial Impact: Average order value for group orders versus individual orders (the core business case), and split payment success rate (how often all guests complete payment before the deadline).

Retention and Velocity: Group order completion rate, average number of participants per order, and repeat usage rate for both hosts and guests.

---

### What This Demonstrates

This case study demonstrates full-cycle feature thinking: market analysis, user research, solution design, edge case reasoning, and metric definition, all connected to a coherent product argument. The payment-upfront decision is not a UX preference. It is a product insight about what actually makes the feature work for users. Identifying the real problem (social friction from post-hoc payment) and designing the solution around it is what this exercise is showing.

---

---

## CASE STUDY 3: VENDSYNC, Q3 ROADMAP PRIORITIZATION AND STAKEHOLDER MANAGEMENT

**Type:** Product Case Study Exercise
**Completed:** May 2026
**Artifacts:** Full prioritization document with RICE scoring matrix and three executive memos

**Links:**
- Full Document: https://docs.google.com/document/d/1swESIXyqj-EqjuYWy5XJi9sOwU0QT7BepuVt0-tkcZs/edit

---

### Context

VendSync is a B2B SaaS commerce platform serving African merchants through digital transaction management, inventory control, and checkout facilitation. This is a PM exercise. The scenario: a hard engineering capacity ceiling of 15 sprint points, five competing backlog items totaling 34 points, and three simultaneous executive stakeholders who each believed their item was the most critical for the business.

---

### The Challenge

The five items and their competing advocates:

1. WhatsApp Checkout Bot (8 points): Marketing projecting a 20% uplift in new merchant acquisition if this ships this quarter
2. Inventory Database Refactor (7 points): The Lead Engineer has formally warned that the current database will likely fail under Black Friday traffic if it is not refactored before that window opens
3. Multi-Currency Wallet (6 points): The Head of Sales is citing a $50,000 MRR enterprise deal that is contingent on this feature being available
4. White Screen Checkout Bug Fix (4 points): Currently causing 12% of all checkout attempts to fail, generating over 500 support tickets per week
5. AI Inventory Predictor (9 points): The CEO has publicly committed to investors that this will ship this quarter

Total requested: 34 sprint points. Available: 15. The job was to choose two items, decline the other three, and communicate each decision in a way that the relevant stakeholder could accept and act on.

---

### My Approach

I applied the RICE framework (Reach x Impact x Confidence / Effort) across all five items, with explicitly defined scoring criteria for each variable documented in the deliverable. The reason I chose RICE over other prioritization frameworks for this scenario is that RICE forces every initiative through the same four variables simultaneously, penalizes initiatives with low execution confidence, and produces a score that stakeholders can audit. In a political environment where three different executives are each convinced their item is essential, the framework creates a shared basis for disagreement rather than a situation where the PM is perceived as picking sides.

---

### RICE Scores and Selections

Inventory Database Refactor: RICE score 12.14. Selected.

Reach scored 10 because the database is the infrastructure that every transaction on the platform passes through. A failure does not degrade the experience for some users. It takes the platform down for all users simultaneously. Impact scored 10 because a Black Friday outage is not a poor experience. It is a business-critical event for a merchant platform: every checkout fails, every merchant loses sales at the highest-revenue period of the year, and the reputational damage extends beyond the current quarter. Confidence scored 85% because the risk was formally diagnosed by the Lead Engineer with a specific trigger condition named. Effort is 7.

White Screen Checkout Bug Fix: RICE score 8.55. Selected.

Reach scored 4 because 12% of checkout-active users are currently experiencing failures, confirmed by 500+ weekly support tickets as independent corroboration. Impact scored 9 because checkout is the single most commercially critical action on a commerce platform. Confidence scored 95% because the bug is identified, reproducible, and scoped. Effort is 4.

WhatsApp Checkout Bot: RICE score 3.00. Deferred to Q4.

The 50% Confidence score drove this result. Engineering formally assessed that they could not deliver this integration without defects in the current sprint window due to third-party API dependency and session state management complexity. A low-confidence 8-point item with uncertain delivery produces poor RICE output regardless of the projected reach.

Multi-Currency Wallet: RICE score 1.80. Deferred to Q4.

Reach scored 2 because 5% of active users transact cross-border. The enterprise prospect driving the $50,000 MRR case was unsigned at the time of scoring. A prospective, unsigned customer cannot be counted in the current-sprint reach calculation without undermining the integrity of the framework.

AI Inventory Predictor: RICE score 0.09. Deferred to Q1.

No merchant demand signal exists. No validated problem statement. No technical specification. The item originated from a LinkedIn article the CEO encountered. At 9 sprint points, it is the most expensive item in the backlog. The framework correctly identifies this as the lowest-value use of engineering capacity in the sprint.

---

### Stakeholder Communication

I wrote individual executive memos to each of the three affected stakeholders.

To the CEO on the AI Inventory Predictor: I reframed the deferral as disciplined validation rather than a broken commitment. The memo proposed specific investor-facing language positioning the item as entering a structured discovery and validation phase in Q3, with a confirmed build slot in Q1. I offered to present the roadmap directly to investors alongside the CEO to demonstrate capital discipline rather than execution failure.

To the Head of Sales on the Multi-Currency Wallet: I argued that the most consequential threat to the enterprise deal was not a one-quarter delivery delay. It was a Black Friday platform outage occurring while the prospect was evaluating the platform for a significant contract. I committed the Q4 slot for the wallet in writing as part of a bilateral agreement, conditional on the Head of Sales delivering a signed letter of intent from the prospect before the next sprint planning session.

To the Head of Marketing on the WhatsApp Checkout Bot: I showed that routing a projected 20% acquisition surge into a checkout pipeline with a live 12% failure rate would produce negative returns on acquisition spend. A merchant acquired through a new channel who hits a white screen on their first checkout attempt does not become a retained user. The acquisition cost is spent and the return is negative. Fixing the checkout experience first is not in competition with the acquisition goal. It is a prerequisite for it.

---

### What This Demonstrates

This case study demonstrates three things simultaneously. First, the ability to apply a rigorous prioritization framework under conditions of real organizational pressure, and to document the reasoning in a way that is auditable rather than merely asserted. Second, the ability to write executive-level communication that addresses each stakeholder on their own terms, respects the legitimacy of their concern, and makes a specific, bounded commitment that moves the conversation forward. Third, the understanding that good prioritization work produces arguments, not just lists.

---

---

## CASE STUDY 4: LADDA, USER ENGAGEMENT AND RETENTION

**Type:** Product Case Study Exercise (feature proposal for an existing product)
**Links:**
- Full Pitch Deck: https://docs.google.com/presentation/d/1qFDwGqRKedg40Ty-zKh6E8IQvt6MFSjudl551a6nBtg/edit

---

### Context

Ladda is a Nigerian wealthtech platform with 30,000+ users, offering savings in naira and dollars alongside investment options including High-Yield Real Estate (HYRE) and Treasury Bills. The platform had reached meaningful scale but was experiencing a pattern common to fintech products with strong acquisition but weak habit formation: users signing up, making an initial deposit or exploration, and then going inactive. This exercise was a feature proposal to address that retention problem.

---

### The Problem

I began with a product audit of the Ladda app and identified four interconnected problems.

Engagement dropped after onboarding because the app had no behavioral reinforcement mechanisms. No streaks, no rewards for consistency, no prompts to return after a user's initial session. Users experienced Ladda as a place to put money, not a product they interacted with regularly.

Product clarity was insufficient for investment adoption. Users who arrived with interest in the HYRE or T-Bills products could not find accessible explanations of how those products actually worked. The "Read More on HYRE" link in the app returned an error. T-Bills information was surface-level. Users who did not understand the products could not confidently invest in them, regardless of interest.

Real-time support was absent at critical decision points. Users trying to make their first investment had no guidance available to them in the moment. The live chat feature was broken. Hesitation at the point of investment without a support pathway typically means the investment does not happen.

Several UX inconsistencies further undermined trust: a referral feature advertised on the marketing website did not exist in the iOS app. Session timeouts were frequent with no biometric login option to reduce re-entry friction.

---

### My Approach

Before proposing any features, I conducted a competitive analysis across four comparable products: Piggyvest, Cowrywise, Risevest, and Trove. I was looking for where each competitor had invested in the engagement and education layer, and where there were gaps across the competitive set that Ladda could own.

The analysis showed that none of the four competitors had all three of the following features simultaneously: a gamification system, in-app micro-learning content, and an AI-powered wealth companion. This was the opportunity. Ladda could build all three and position itself as the most behaviorally sophisticated wealthtech product in the Nigerian market.

I also reviewed market data on the Nigerian savings context to frame the size of the problem: 43% of Nigerians have stopped saving entirely. The behavioral challenge is not just competition with other apps. It is competition with no savings behavior at all.

---

### Three Feature Recommendations

Gamification (Must Have): Saving streak badges, mission challenges, and a loyalty points system redeemable for cashbacks or prize pool entries. The behavioral evidence base is strong: streak systems modeled on Duolingo have been shown to increase long-term retention by 60%, and gamified fintech products demonstrate 30 to 47% higher engagement compared to non-gamified alternatives.

In-App Micro-Learning (Must Have): A founder-led welcome video during onboarding, product-specific explanatory content at the point of feature discovery (so users encountering HYRE for the first time get a "How this works" explanation in context, not buried in a FAQ), and a centralized Learn Hub with content organized by topic. Financial literacy education integrated into onboarding reduces anxiety and increases adoption of investment products by 2 to 3x.

AI Wealth Companion (Should Have): A conversational assistant that provides 24/7 FAQ support, personalized portfolio summaries tied to the user's specific goals, and smart behavioral nudges triggered by specific events ("You missed your usual weekly deposit. Would you like to top up now?"). AI-driven personalized nudges have been shown to increase savings uptake by 25 to 40%.

---

### Prioritization

I used a Value vs Effort matrix to position all three features, then applied MoSCoW prioritization to produce a clear recommendation for the order of investment. Gamification and Micro-Learning were Must Haves, both offering high value at relatively low implementation complexity. The AI Wealth Companion was a Should Have: high value but higher technical investment, appropriate for a second phase after the first two features have been validated. I defined user stories with acceptance criteria and a six-stage outcome-based roadmap from discovery to full launch.

---

### What This Demonstrates

This case study demonstrates structured product auditing, competitive analysis used as a strategic input rather than a documentation exercise, the ability to generate feature recommendations grounded in behavioral evidence rather than intuition, and the judgment to sequence feature investment across phases based on value and effort.

---

---

## CASE STUDY 5: MONEYKIDS.AI, PRODUCT PITCH

**Type:** Product Case Study Exercise (new product pitch)
**Links:**
- Full Pitch Deck: https://docs.google.com/presentation/d/14ZF6WTe831PApjcRvxMviEU2twACN1Tb143E74fETXY/edit

---

### Context

MoneyAfrica Kids is an existing mobile app teaching financial literacy to children aged 5 to 17, with a user base of 10,000 users at the time of this exercise. The product brief was to make the case for a strategic transformation: evolving the product into MoneyKids.ai, an AI-powered adaptive financial literacy platform with a goal of scaling to 500,000 learners within two years.

---

### The Problem

Sub-Saharan Africa has the lowest financial literacy levels globally. Only 27% of sub-Saharan African adults are financially literate, compared to 50%+ in OECD countries. The IMF reports that 65% cannot complete basic financial tasks like budgeting or calculating interest. The generational root of this problem begins in childhood: only 20% of African children receive any financial education in school. The CBN's plan to integrate financial literacy into primary school curricula, announced in 2017, had not been implemented as of 2025.

The existing MoneyAfrica Kids product was constrained by thin content depth, low engagement loops, poor UX, and no AI personalization. Competitors in the children's financial literacy space were focused on savings wallets and guided spending with minimal structured learning.

---

### The Opportunity

The market conditions created a specific window. Mobile penetration in sub-Saharan Africa was accelerating. EdTech gamification proven to increase engagement by 3.6 to 4.5x was available and validated. No AI-powered, age-adaptive, curriculum-depth platform existed for children's financial literacy anywhere on the African continent. The window for first-mover advantage was open.

I sized the opportunity: TAM of 468 million children aged 5 to 17 in Africa, a SAM of 117 million in households willing to invest in digital learning (World Bank, 2021), and a two-year SOM of 500,000 users across Nigeria, Ghana, Kenya, and South Africa.

---

### Product Architecture

The transformation required designing a multi-sided platform serving three distinct user types.

For children: an AI Money Tutor (BuddyLearn) as the interactive learning companion, age-tiered learning paths calibrated for three developmental stages (5 to 8, 9 to 12, and 13 to 17), daily missions structured as Word of the Day, flashcards, micro-lesson, game, and reward, three original financial games (Money Maze, Hustle Quest, Scam Spotter), AI-powered adaptive quizzes that adjust difficulty based on prior performance, and a coin wallet earned through learning activities and redeemable for in-app rewards.

For parents and guardians: multi-kid account management, subscription access control with secure per-child login tokens, real-time alerts for milestones, inactivity, and streak breaks, and achievement sharing within family groups.

For schools and institutions: bulk student enrollment via CSV, lesson assignment by class, real-time progress tracking at the class level, and exportable reports in PDF or CSV format for PTA meetings, government audits, or curriculum reviews.

---

### Revenue Model

Freemium with a paid subscription at N4,000 per month. At 20% conversion across 500,000 users, this produces 100,000 paying users, generating N400 million monthly and N4.8 billion annually. I also defined a school or institution tier with a separate pricing model based on student enrollment volume.

---

### What This Demonstrates

This case study demonstrates zero-to-one product thinking: starting from a market problem, defining the user population and its segments, sizing the opportunity, and designing a multi-sided platform architecture that serves distinct user needs within a coherent product. It also demonstrates the ability to build a business case with revenue modeling, not just a feature list.

---

---

## CASE STUDY 6: YOUTUBE SHORTS, PLATFORM STRATEGY AND COMPETITIVE ANALYSIS

**Type:** Research and Structured Debate Exercise
**Completed:** 2026
**Links:**
- Full Presentation: https://docs.google.com/presentation/d/1srd8MPjpzlQeHl9r091Z3lTTlKZZ2ErAKsxIRSPM2rs/edit

---

### Context

This was a structured debate exercise on the question: "In prioritizing Shorts, is YouTube growing its future or compromising the long-form creator economy it was built on?" I was part of the team arguing the position that YouTube is compromising the long-form creator economy. My role was to research the position, structure the argument, and build platform-level recommendations for what YouTube should do differently.

---

### The Argument

The position I argued rested on six substantiated claims.

YouTube's competitive moat is not short-form video. It is the world's second-largest search engine, built on high-intent long-form educational and entertainment content. Competing with TikTok on TikTok's strongest ground is reactive imitation. YouTube's strength is what makes it different from TikTok, not what it shares with it.

YouTube did not allow Shorts to grow organically alongside long-form. It engineered the growth through structural interventions: a $100 million creator fund to incentivize short-form production, a 45% creator revenue share on Shorts versus 55% for long-form, and an August 2025 algorithm update that caused a 30% drop in long-form views and reduced homepage long-form recommendation slots by approximately 80%.

The viewer attention that Shorts is accumulating is not new attention. The 200 billion daily Shorts views came from within the same platform. They represent a redistribution of existing viewer time, not an expansion of the overall audience. Long-form creators lost views without losing anything about their content quality.

YouTube earns more from Shorts while paying creators less. On every $100 of advertising revenue, YouTube retains approximately $10 more from Shorts than from long-form, a 22% higher take rate per dollar. For creators, the earnings gap between formats is approximately 99% per view. The incentive structure that YouTube has designed rewards the format from which YouTube profits most, not the format that sustains the creator ecosystem.

The September 2025 decoupling of the Shorts and long-form recommendation engines is an admission that the two formats compete for viewer attention rather than complement each other. The architecture was separated because allowing Shorts growth to affect long-form recommendations was causing damage. Walls are not built between things that help each other.

The Spotter case is financial evidence of damage already done. Spotter deployed $940 million across 735 long-form YouTube channels as investments in future advertising revenue. After YouTube's algorithmic shift, the projected revenue from those libraries degraded, Spotter missed its 2024 financial targets, and 40% of its staff was laid off. This is not a prediction. It is a company's balance sheet reflecting the consequence of a platform policy change.

---

### Four Recommendations

1. A $150 million Long-Form Creator Stabilization Fund targeting mid-tier channels (50,000 to 500,000 subscribers) that have experienced documented traffic declines since August 2025. Precedent: YouTube's own $100 million Shorts Creator Fund in 2021.

2. Proportional reorientation of the Creator Partnerships Hub toward long-form creators, connecting higher-CPM advertisers to long-form audiences where ad inventory value is highest for all parties.

3. Equalized revenue share: restore Shorts creator share to 55%, removing the financial incentive for YouTube to structurally favor the format from which it retains the most.

4. Reverse the December 2025 homepage change that reduced long-form recommendation slots from 12 to 2 to 3. YouTube's own data shows 76% of users cite access to both formats as the primary reason they choose YouTube as their go-to platform. The product architecture should reflect that.

---

### What This Demonstrates

This exercise demonstrates the ability to build a rigorous, evidence-based product strategy argument, connect platform-level decisions to measurable economic outcomes, and translate analytical findings into specific, actionable recommendations. The Spotter case was the most effective piece of evidence in the analysis precisely because it moved the argument from claims about user behavior to financial consequences that a business decision-maker cannot dismiss. Finding the evidence that closes the gap between a product observation and a business impact is the skill this exercise is testing.

---

*End of Projects and Case Studies*
*Channels Okunade Oladapo*
