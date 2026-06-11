# PORTFOLIO CONTENT BRIEF
## Channels Okunade Oladapo

---

## NOTE TO BUILDER

This document contains all the content for the portfolio. Sections, copy, links, and structured data are provided in order. Handle all design decisions independently.

---

## SITE METADATA

- Site Name / Logo Text: Channels Oladapo (displayed as the brand name in the navigation bar)
- Page Title: Channels Oladapo, Technical Product Manager
- Description: Technical Product Manager who builds and ships products that solve real-world problems and create meaningful impact.

---

## NAVIGATION ORDER

Hero, About, Projects, Case Studies, Certifications, CV, Contact

---

## SECTION: HERO

### Name
Channels Okunade Oladapo

### Role Label
Technical Product Manager

### Availability Badge
Available for opportunities

### Short Bio
A hands-on Technical Product Manager who combines user-centric product thinking with technical execution to build and ship products that solve real-world problems and create meaningful impact, taking them all the way from idea to delivery.

### CTA Buttons
- Primary: "View My Work" (scrolls to Projects)
- Secondary: "Get in Touch" (scrolls to Contact)

### Social Links
- LinkedIn: https://www.linkedin.com/in/channels-oladapo-67253a187/
- GitHub: https://github.com/codeconnoisseur-channels/
- Email: channelsokunade@gmail.com

---

## SECTION: ABOUT

### Heading
Meet Channels

### Picture Note
A headshot of Channels sits beside this copy. See the headshot note at the end of this document.

### Body Copy
A Product Manager who builds and ships products that users love and drives revenue for the business.

My technical foundation in backend engineering, where I designed database schemas, built APIs, integrated payment systems, and worked on production applications using Node.js, Express, MongoDB, and PostgreSQL, has shaped how I think about product decisions. I do not see products as just features and outcomes. I see them as systems shaped by architecture, constraints, and trade-offs.

As a Product Manager, I build end-to-end. I conduct user research, define product direction, write PRDs and TRDs, define acceptance criteria, plan roadmaps, prioritize features, and coordinate cross-functional teams to ship.

What sets me apart is how I bridge the gap between product ideas and engineering. When my team and I have a problem to solve, I do not just describe it in a document. I prototype it. I vibe code it into an actual clickable product so designers, developers, and stakeholders can see exactly what we are building before anyone writes a line of production code.

Right now, I am focused on building AI-powered products at the intersection of LLMs, AI Agents, and automation.

---

## SECTION: PROJECTS

---

### PROJECT 1: TRACEAID

**Role:** Product Manager and Backend Developer
**Type:** Crowdfunding and Accountability Platform
**Stack:** Node.js, Express.js, MongoDB, KoraPay, Cloudinary, Swagger
**Status:** Live

**Short Description**
A crowdfunding platform built around a single conviction: donors deserve to see exactly what their money accomplished before the next tranche releases.

**The Problem**
Crowdfunding has a trust problem, and the numbers make it concrete. The 2025 World Giving Report found that 47% of Nigerians do not donate because they do not trust how their money will be used, and 51% say they would give more if they could see the impact directly. Standard platforms collect donations upfront and disburse funds in bulk, with no mechanism to verify how the money was spent before releasing the next amount. Donors give with hope and receive silence.

I built TraceAid to change that. I was both the product manager and the sole backend developer on this project, which meant I was responsible for deciding what needed to exist and for building the systems that made it possible.

**The Solution and Key Decisions**
The core product decision was the milestone-based escrow model. Funds are not released to fundraisers in bulk. They are held until the fundraiser uploads verifiable proof of impact for the current milestone: geo-stamped photos, receipts, budget documents, and video evidence. An administrator reviews the evidence. Only on approval does the next tranche unlock.

This was not a feature. It was the entire trust thesis of the platform, made tangible.

The hardest design question was calibrating the evidence threshold. Too lenient and the platform becomes indistinguishable from any other crowdfunding site. Too demanding and fundraisers abandon the process before donors ever see the difference. I landed on a standard that was thorough but achievable: geo-stamped media, itemized receipts, and a written milestone report per stage.

On the engineering side, I built the complete API infrastructure: user onboarding and KYC verification, campaign creation and milestone definition, the escrow wallet system, donation processing through KoraPay, administrator verification workflows, Cloudinary-based media uploads for proof of impact documents, and analytics dashboards for both fundraisers and donors.

**Impact**
Live production application. Swagger API documentation published. The full end-to-end flow from campaign creation to milestone-based disbursement is functional and tested.

**What I Would Do Differently**
I would invest more time, earlier, in the administrator dashboard experience. The reviewer's workflow is the critical bottleneck in the entire system. If the admin interface is slow or unclear, the whole disbursement model stalls. I understood this in retrospect. I should have understood it at the start.

**Links**
- Live App: https://trace-aid.vercel.app/
- API Docs (Swagger): https://traceaid.onrender.com/docs/

---

### PROJECT 2: OPEN PROFILE

**Role:** Technical PM Lead (HNG Internship)
**Type:** Identity Platform, Web Application
**Team:** 53 people across frontend, backend, DevOps, QA, design, marketing, and product
**Build Window:** 3 weeks, discovery to launch
**Status:** Live

**Short Description**
An identity platform for freelancers, creators, and indie builders to consolidate their professional presence into one clean, searchable URL. I led it from zero to launch, coordinating 53 people across five functional streams, in three weeks.

**The Problem**
A freelancer might have a LinkedIn, a Behance, a GitHub, and a personal website, and none of them tell the same story. When a client wants to verify someone quickly, they are piecing things together across platforms. The friction costs real opportunities and erodes trust before a working relationship even begins.

**My Role and What I Did**
I was the Technical PM Lead, accountable for the product from the first planning session to the launch. I wrote the complete Product Requirements Document covering four core features, with user stories, acceptance criteria, edge cases, and success metrics. I co-authored the Technical Requirements Document with the backend lead, defining the system architecture, over 30 API endpoints, PostgreSQL database schemas, authentication flows, and security requirements.

I collaborated with fellow Product Managers, Design, VAs, and Data Analysts to align the product across all workstreams. I also worked with the Marketing team on the go-to-market strategy, leveraging a waitlist, a beta group, founder-led outreach, communities, and the team's active social media platforms to build early traction leading into launch.

The most consequential contribution I made was not a document. It was a user flow redesign that eliminated a three-week rework cycle that was quietly building up due to misaligned assumptions between design and engineering. The two teams were working toward different mental models of the same feature. I caught it before any code was written twice, ran a clarification session, and resolved it cleanly.

The most important prioritization decision I made was drawing a hard line on MVP scope at the point where the team was attempting to add features before the core loop was stable. Create, share, and discover had to work end-to-end before anything else shipped. Holding that line, under real time pressure with a large team, is what made the launch happen on schedule.

**Impact**
Product launched within the three-week build window. Core loop functional and live. A 53-person team delivered a working product from zero because the product management held throughout.

**What I Would Do Differently**
I would build in a structured handoff session between design and engineering at the start of each sprint, not just share Figma files and assume shared understanding. Most of the misalignment I had to resolve mid-sprint could have been caught in a 30-minute conversation at the start.

**Links**
- Live App: https://open-profile.hng14.com/

---

### PROJECT 3: INVOICESER

**Role:** AI Product Manager
**Type:** AI-Powered Invoicing Platform, SaaS
**Stack:** Next.js 14, Convex, Clerk, Resend, Groq (Llama 3 70B), KoraPay, Recharts
**Status:** Live

**Short Description**
An AI-powered invoicing platform for freelancers and small businesses, with real-time invoice previews, automatic payment reminders, multi-currency support, and an AI assistant that answers natural language questions about your financial data.

**The Problem**
Freelancers and small business owners spend too much time chasing payments and tracking invoices across spreadsheets, WhatsApp messages, and memory. There is no purpose-built invoicing tool for the African freelancer that handles invoicing, payment tracking, automated reminders, and financial intelligence in one place.

**What I Built**
I designed and built Invoiceser end-to-end, from system architecture through to the product experience.

The platform handles the full invoice lifecycle: draft, sent, overdue, and paid, with automatic status transitions managed by scheduled cron jobs. It generates PDFs, delivers invoices by email, and sends configurable payment reminders automatically before and after due dates.

The feature I'm most proud of is the AI assistant, powered by Groq's Llama 3 70B model. It understands the user's invoice data and answers natural language questions: "Who owes me the most right now?", "What was my strongest month this year?", "Which clients consistently pay late?" Most invoicing tools surface numbers. This one helps users understand what those numbers mean.

I also built multi-currency support with an earnings wallet that tracks collected amounts per currency without forced conversion, a Pro plan upgrade flow via KoraPay with custom branding, real-time in-app notifications when clients open invoices or payments are recorded, and a full admin panel for internal user management.

**Links**
- Live App: https://invoiceser.vercel.app/

---

## SECTION: CASE STUDIES

---

### CASE STUDY 1: BORDERFLO

**Type:** Product Management Internship
**Company:** BorderFlo, cross-border educational payment startup
**Period:** November 2024 to February 2025

**Hook**
I found a 40% post-signup churn rate in Google Analytics, ran user interviews to understand it, and discovered that the problem was not what the team assumed it was.

**Background**
BorderFlo is a Lagos-based startup building a mobile application to simplify international education payments for African students. Users fund a wallet and use it to pay tuition and application fees to foreign institutions. I joined as a Product Management Intern as the team was building toward the MVP Android launch in January 2025.

**My Role**
I ran user research, coordinated a hybrid engineering team of internal and specialist external engineers, facilitated sprint operations in ClickUp, and led the analysis that identified and diagnosed the platform's core activation problem.

**Discovery: The 40% Churn Problem**
Google Analytics showed a 40% churn rate between signup and first wallet funding, concentrated at one specific point: the identity verification step.

The obvious read is that the verification step is confusing or too difficult, and most teams respond to this kind of data by improving the copy, simplifying the UI, or adding tooltips. I ran user interviews before drawing that conclusion.

What the interviews revealed was different. Users understood exactly what they needed to do. They were making a rational decision: the effort required to complete verification was not yet worth it, because they had not experienced any product value. They had not funded a wallet, made a payment, or seen the platform work for them. The product was asking for trust before it had given any reason to extend it.

This distinction mattered because it changed the solution entirely. The problem was sequencing, not communication.

**Key Decision**
I proposed two activation features. The first was progressive onboarding: restructure the experience so users can explore the product and see its value before identity verification is required. Build commitment before demanding effort. The second was event-triggered nudges: behavioral prompts to re-engage users who had stalled at verification, tied to specific in-app actions rather than arbitrary time intervals.

Progressive onboarding was implemented and shipped. It reduced abandonment at the verification stage.

**Coordination**
The engineering team was a hybrid of internal engineers and specialist external contractors on different timelines and with different context. I held sprint planning and backlog grooming sessions that maintained shared understanding of priority across both tracks throughout the build cycle.

**Impact**
MVP launched in January 2025. Progressive onboarding shipped and reduced verification abandonment. The product launched on schedule with a functioning core flow.

**Links**
- BorderFlo: https://www.borderflo.com/

---

### CASE STUDY 2: DELIVEROO, COLLABORATIVE GROUP ORDERING WITH SPLIT PAYMENT

**Type:** Product Case Study Exercise (speculative feature proposal, not affiliated with Deliveroo)
**Completed:** April 2026

**Hook**
Deliveroo's users were coordinating group food orders on WhatsApp and splitting bills on separate payment apps. The product had no solution for the most social food ordering use case in its market.

**The Problem**
When a group of friends, flatmates, or colleagues wants to order food together from Deliveroo, the experience places the entire burden on one person: compile everyone's orders through a chat thread, enter them manually, pay the full amount upfront, and then chase everyone for their share afterward. This friction suppresses group ordering, which naturally produces larger basket sizes and higher average order values for the platform.

**My Approach**
I began with market context: the UK food delivery market at £14.3bn with a CAGR of 8.49%, operating in a competitive landscape. I then built two user personas grounded in realistic use cases, using Jobs-to-Be-Done framing to make sure the solution addressed the actual motivation rather than the surface request. I then mapped the complete customer journey from current behavior to the proposed new experience for both the order host and guests.

**The Proposed Feature**
A host starts a group order session directly from a restaurant page and generates a shareable link. Guests click the link, verify with a one-time SMS code, browse the same menu, and add their items to a shared real-time basket. When the host locks the order, each participant is prompted to pay their exact share directly through the app. The order submits only after all shares are confirmed paid.

I designed edge cases for four scenarios: a guest who fails to pay before the deadline, an item that goes out of stock while the basket is open, a payment card that declines during checkout, and a host who cancels after guests have already paid. Each has a defined resolution path.

**Key Decision**
The most important design choice was making payment decoupled and upfront. Each participant pays before the order is placed, not after. This removes the social friction of informal debt between friends, which is the real reason group ordering fails in the current experience. Every other feature decision followed from that principle.

**Success Metrics**
North Star: Weekly Successful Group Orders. Supporting metrics by cluster: Acquisition (group order initiation rate, participant join rate, drop-off by flow stage), Financial Impact (average order value, split payment success rate), and Retention (group order completion rate, average participants per order, repeat usage rate).

**Artifacts**
Interactive Figma prototype covering both the host flow and the guest flow end-to-end. Full case study PDF with market analysis, personas, user flow, prototype, edge cases, and success metrics.

**Links**
- Figma Prototype: https://www.figma.com/design/8BJ5CKNOsBD5ecOcsDK8to/Deliveroo-User-Flow-and-Prototype?node-id=0-1&t=XZsNqJldwSSUQuJ4-1
- Full Case Study: https://docs.google.com/presentation/d/1R5ecThTskbmiMN_H777zH8CrKDrQFAu3s0_8g86GrnE/edit

---

### CASE STUDY 3: VENDSYNC, Q3 ROADMAP PRIORITIZATION AND STAKEHOLDER MANAGEMENT

**Type:** Product Case Study Exercise
**Completed:** May 2026

**Hook**
Five backlog items. 34 sprint points. 15 points of engineering capacity. The CEO, Head of Sales, and Head of Marketing each believed their item was the most critical. I said no to all three, and I built the written case for each decision.

**Background**
VendSync is a B2B SaaS commerce platform serving African merchants. This is a PM exercise. The scenario involved a hard engineering capacity ceiling and three simultaneous senior stakeholder conflicts arriving at the same sprint planning session.

**The Five Competing Items**
1. WhatsApp Checkout Bot (8 pts): Marketing projecting a 20% uplift in new merchant acquisition
2. Inventory Database Refactor (7 pts): Lead Engineer formally warning of probable platform failure under Black Friday traffic
3. Multi-Currency Wallet (6 pts): Sales citing a potential $50,000 MRR enterprise deal contingent on delivery
4. White Screen Checkout Bug Fix (4 pts): Affecting 12% of all checkout attempts and generating 500+ support tickets per week
5. AI Inventory Predictor (9 pts): Publicly committed to investors by the CEO

**The Framework**
I applied RICE prioritization (Reach x Impact x Confidence / Effort) across all five items, with explicitly defined scoring criteria for each variable. The purpose of the framework was not to generate a shortcut around a difficult conversation. It was to give every stakeholder a basis to audit the reasoning rather than simply receive a decision they were expected to accept.

**The Results**
Inventory Database Refactor: Selected. RICE score 12.14. Protects 100% of active merchant transaction volume against a formally diagnosed, probable Black Friday failure. Every other commercial item on the backlog depends on this database to function.

White Screen Bug Fix: Selected. RICE score 8.55. Resolves a live, reproducible failure confirmed by over 500 weekly support tickets. The most cost-efficient item in the backlog relative to its certainty of value delivery.

WhatsApp Checkout Bot: Deferred to Q4. RICE score 3.00. Engineering formally assessed low confidence in defect-free delivery within the sprint window.

Multi-Currency Wallet: Deferred to Q4. RICE score 1.80. Deal unsigned. Q4 commitment given in writing as part of a bilateral agreement with the Head of Sales.

AI Inventory Predictor: Deferred to Q1. RICE score 0.09. No validated merchant demand signal. No problem statement. No technical specification. The most expensive item in the backlog.

**Stakeholder Communication**
I wrote individual executive memos to each stakeholder.

To the CEO: I reframed the AI Predictor deferral as disciplined validation rather than a broken commitment. I offered to lead the merchant discovery work in Q3 and to present the roadmap directly to investors alongside them, positioning the delay as evidence of capital discipline rather than execution failure.

To the Head of Sales: I argued that a Black Friday platform outage would be more damaging to the enterprise deal than a one-quarter delay, and committed the Q4 slot for the wallet in writing. The memo included a bilateral condition: a signed letter of intent from the prospect before the next sprint planning session.

To the Head of Marketing: I showed that routing a 20% acquisition surge into a checkout funnel with a live 12% failure rate produces negative returns on acquisition spend. The acquisition opportunity was real. The platform first had to be ready to sustain it.

The governing argument across all three memos was asymmetry of consequence. Deferring each commercial item delays an opportunity that VendSync had not yet earned. A Black Friday outage destroys revenue its merchants were actively counting on. Those are not equivalent risks.

**Links**
- Full Document: https://docs.google.com/document/d/1swESIXyqj-EqjuYWy5XJi9sOwU0QT7BepuVt0-tkcZs/edit

---

### CASE STUDY 4: LADDA, USER ENGAGEMENT AND RETENTION

**Type:** Product Case Study Exercise (feature proposal for an existing product)

**Hook**
Ladda had 30,000+ users on a wealthtech platform. Engagement dropped sharply after onboarding, the app had no habit-forming systems, and users were going inactive without the product ever having the chance to prove its value. I audited the product and built the case for three features that could change that.

**Background**
Ladda is a Nigerian wealthtech platform where users save in naira and dollars and invest in real estate and Treasury Bills. This is a speculative feature proposal. Not affiliated with Ladda.

**The Problem Diagnosis**
I audited the Ladda app and identified four interconnected problems. Post-onboarding engagement dropped sharply because there were no streak systems, behavioral rewards, or mechanisms to bring users back after the initial session. Users did not fully understand the investment products available to them because key educational content was missing or broken (the "Read More on HYRE" link returned an error). There was no real-time guidance or support at the moments when users needed to make investment decisions. Several UX inconsistencies, including a referral feature advertised on the website but absent from the iOS app, further undermined trust.

**Market Context**
Nigeria's digital savings and investment market is projected to grow at 9.32% CAGR between 2025 and 2030. 43% of Nigerians have stopped saving entirely. I ran a competitive analysis across Piggyvest, Cowrywise, Risevest, and Trove, and found that none of the four had all three of the following: gamification, in-app micro-learning, and an AI wealth companion. This gap was the opportunity.

**Three Recommendations**

Recommendation 1: Gamification (Must Have)
Saving streak badges, mission challenges (No-Spend Week, Round-Up Savings Mission), and loyalty points redeemable for cashbacks or prize pool entries. Evidence base: Duolingo-style streak systems increase long-term retention by 60%. Gamified fintech apps drive 30 to 47% higher engagement compared to non-gamified alternatives.

Recommendation 2: In-App Micro-Learning (Must Have)
A founder-led 45 to 60-second welcome explainer during onboarding, product-specific "How it Works" content at the point of investment discovery, and an in-app Learn Hub with bite-sized content organized by savings, investing, and success stories. Financial literacy education during onboarding reduces anxiety and increases product adoption by 2 to 3x.

Recommendation 3: AI Wealth Companion (Should Have)
A conversational assistant providing 24/7 FAQ support, personalized portfolio summaries ("Your Emergency Fund is now 65% complete"), and smart behavioral nudges ("You missed your usual weekly deposit. Would you like to top up now?"). AI-driven personalized nudges increase savings uptake by 25 to 40%.

**Prioritization**
I used a Value vs Effort matrix and MoSCoW prioritization across all three features, defined user stories with acceptance criteria, specified North Star metrics per feature, and built an outcome-based roadmap from discovery through to full launch.

**Links**
- Full Pitch Deck: https://docs.google.com/presentation/d/1qFDwGqRKedg40Ty-zKh6E8IQvt6MFSjudl551a6nBtg/edit

---

### CASE STUDY 5: MONEYKIDS.AI, PRODUCT PITCH

**Type:** Product Case Study Exercise (new product pitch)

**Hook**
Only 27% of sub-Saharan African adults are financially literate. The problem begins in childhood, and no AI-powered platform is addressing it in Africa. I built the product case for one that could.

**The Market Problem**
Sub-Saharan Africa has the lowest financial literacy levels globally. The IMF found that 65% of sub-Saharan Africans cannot complete basic financial tasks like budgeting or calculating interest. Only 20% of African children understand basic financial concepts. The Central Bank of Nigeria planned to integrate financial literacy into primary and secondary school curricula in 2017. As of 2025, this has not been implemented.

MoneyAfrica Kids had grown to 10,000 users but was constrained by thin content, low engagement loops, poor UX, and no AI personalization. No existing app offered age-tiered learning paths, adaptive AI tutoring, and curriculum depth together in an African context.

**The Opportunity**
Transform MoneyAfrica Kids into MoneyKids.ai, Africa's first AI-powered financial literacy platform for children aged 5 to 17, with a target of scaling from 10,000 to 500,000 learners within two years.

TAM: 468 million children aged 5 to 17 in Africa.
SAM: 117 million children in households willing to invest in digital learning (World Bank, 2021).
SOM: 500,000 users within two years, focused on Nigeria, Ghana, Kenya, and South Africa.

**Product Architecture**
The platform serves three user types, each with a distinct product experience.

For children: an AI Money Tutor (BuddyLearn) that explains concepts in plain language, recommends lessons based on progress, and responds via chat or voice. Age-tiered learning paths (5 to 8, 9 to 12, 13 to 17) with increasing complexity. Daily missions structured as Word of the Day, flashcards, micro-lesson, game, and reward. Financial games including Money Maze, Hustle Quest, and Scam Spotter. AI-powered adaptive quizzes that adjust difficulty based on performance. A coin wallet earned through lessons and redeemable for in-app rewards.

For parents and guardians: multi-kid management, subscription access control, real-time alerts for milestones and inactivity, and achievement sharing.

For schools and institutions: bulk student enrollment via CSV, lesson assignment by class, real-time progress tracking, and exportable PDF or CSV reports for PTA meetings or government audits.

**Revenue Model**
Freemium with a paid subscription at N4,000 per month. At 20% conversion across 500,000 users: 100,000 paying users at N4,000 per month generates N400 million monthly, or N4.8 billion annually.

**Links**
- Full Pitch Deck: https://docs.google.com/presentation/d/14ZF6WTe831PApjcRvxMviEU2twACN1Tb143E74fETXY/edit

---

### CASE STUDY 6: YOUTUBE SHORTS, COMPETITIVE ANALYSIS AND PLATFORM STRATEGY

**Type:** Research and Debate Exercise
**Completed:** 2026

**Hook**
YouTube built a $40.36 billion advertising business on the back of long-form creators. Then it structurally redirected viewer attention away from them to compete with TikTok. I built the evidence-based case that this is strategic self-harm.

**Position**
I was part of the team arguing against the motion: "In prioritizing Shorts, YouTube is compromising the long-form creator economy it was built on." My contribution covered research, structured argumentation, and four actionable platform recommendations.

**The Core Argument**
The case rested on eight structural observations.

YouTube's competitive moat is not short-form video. It is the world's second-largest search engine, built on high-intent, long-form educational and entertainment content. Competing with TikTok on TikTok's strongest ground is reactive imitation, not strategy.

YouTube did not let Shorts grow organically. It engineered the growth through a $100 million creator fund, a 45% Shorts creator revenue share versus 55% for long-form, and an August 2025 algorithm update that caused a 30% drop in long-form views and cut homepage long-form recommendation slots by 80%.

The 200 billion daily Shorts views came from somewhere. They came from long-form content on the same platform. Shorts does not expand the YouTube audience. It redistributes existing attention.

YouTube earns more from Shorts while paying creators less. On every $100 of advertising revenue, YouTube retains $10 more from Shorts than from long-form content. Per-view earnings for creators: Shorts at $0.03 to $0.06 per thousand views, long-form at $1.61 to $29.30 per thousand views.

The September 2025 decision to decouple the Shorts and long-form recommendation engines was an admission of competition, not complementarity. Walls are not built between things that help each other.

The Spotter case provides concrete financial evidence of damage already done. Spotter deployed $940 million into 735 long-form YouTube channel libraries, missed its 2024 revenue targets, and laid off 40% of its staff after YouTube's algorithmic shift degraded the projected earnings of those libraries.

**Four Recommendations**
1. A $150 million Long-Form Creator Stabilization Fund targeting mid-tier creators (50,000 to 500,000 subscribers) with documented traffic declines since August 2025.
2. Reorientation of the Creator Partnerships Hub toward long-form creators proportionally, connecting more high-CPM advertisers to long-form audiences.
3. Equalized revenue share: restore Shorts creator share to 55%, eliminating the platform's structural financial incentive to redirect viewers away from long-form.
4. Restore balanced homepage allocation: reverse the December 2025 change that cut long-form recommendation slots from 12 to 2 or 3. YouTube's own data shows 76% of users cite access to both formats as the primary reason YouTube remains their go-to platform.

**Key Learning**
Good strategic arguments require quantified evidence, not just narrative. The Spotter case was the strongest piece of evidence in the analysis because it translated an algorithmic policy decision into financial consequences that a business decision-maker could not dismiss. Connecting product decisions to measurable economic outcomes is a skill that transfers directly into PM work.

**Links**
- Full Presentation: https://docs.google.com/presentation/d/1srd8MPjpzlQeHl9r091Z3lTTlKZZ2ErAKsxIRSPM2rs/edit

---

## SECTION: CERTIFICATIONS

### Heading
Continuing Education

### List
1. Diploma in Backend Engineering, AltSchool Africa, November 2024 to October 2025, Lagos, Nigeria
2. Product Management, DevCareer, August 2023 to April 2024, Lagos, Nigeria
3. Advanced Diploma in Business Administration, Tekedia Institute, March 2023 to February 2024, Boston, USA

---

## SECTION: SKILLS AND TOOLS

### Product Skills
Product Roadmapping and Strategy, PRD and TRD Writing, User Research and Interviews, Market Research, Design Thinking, Sprint Planning and Facilitation, Backlog Management, Feature Prioritization, RICE Framework, MoSCoW Prioritization, Stakeholder Management, Competitive Analysis, User Story Mapping, Acceptance Criteria Definition, Data Analysis, A/B Testing, Agile and Scrum

### Technical Skills
JavaScript (ES6+), Node.js, Express.js, MongoDB and Mongoose, MySQL, Sequelize, PostgreSQL, RESTful API Design, API Testing, Database Design, System Architecture, JWT Authentication, API Documentation via Swagger, QA Testing, Prototyping, Git and GitHub, Payment Gateway Integration (KoraPay, Paystack)

### Tools
ClickUp, Linear, Jira, Notion, Confluence, Asana, Miro, Figma, Whimsical, Google Analytics, PostHog Analytics, PowerBI, SQL, Postman, Swagger, Claude Code, Cursor, n8n, Gemini, ChatGPT, Microsoft 365, Google Suite

---

## SECTION: EXPERIENCE

### Heading
Where I have worked.

### Entries (newest to oldest)

**Product Manager Intern**
HNG Tech | April 2026 to June 2026 | Lagos, Nigeria
Technical PM Lead coordinating a 53-person cross-functional team to deliver Open Profile from zero to live production in three weeks. Collaborated with Product Managers, Design, VAs, and Data Analysts, and partnered with Marketing on a GTM strategy leveraging a waitlist, beta group, founder-led outreach, and community channels.

**Backend Development Trainee**
The Curve Africa | May 2025 to November 2025 | Lagos, Nigeria
Built production-grade RESTful APIs, integrated payment gateways, and shipped TraceAid as both product manager and backend developer.

**Product Management Intern**
BorderFlo | November 2024 to February 2025 | Lagos, Nigeria
Diagnosed a 40% post-signup churn rate through analytics and user interviews. Proposed and shipped progressive onboarding that reduced abandonment at the verification stage. Coordinated a hybrid team of internal and specialist external engineers across the full build cycle.

**Research and Strategy Analyst (NYSC)**
SavvyCrest Limited | December 2023 to October 2024 | Lagos, Nigeria
Conducted market research and competitive analysis for SMEs across FMCG, consulting, real estate, and technology, informing go-to-market and expansion strategy.

---

## SECTION: EDUCATION

### Entry
Bachelor of Science, Industrial Relations and Personnel Management
University of Lagos (UNILAG), Lagos, Nigeria
December 2017 to October 2023
First Class (Hons), CGPA 4.82 out of 5.0, Top 1%, HOD Prize for Best Graduating Student, Department of IRPM

---

## SECTION: CV

### Heading
Curriculum Vitae

---

**PERSONAL INFORMATION**
Name: Channels Okunade Oladapo
Location: Lagos State, Nigeria
Email: channelsokunade@gmail.com
Phone: +(234) 816-0424-398
LinkedIn: linkedin.com/in/channels-oladapo-67253a187
GitHub: github.com/codeconnoisseur-channels

---

**PROFESSIONAL SUMMARY**
Technical Product Manager with hands-on backend engineering experience across Node.js, Express, MongoDB, and PostgreSQL. Proven track record leading cross-functional teams from discovery to launch across fintech, edtech, and B2B SaaS. Builds and ships end-to-end: from user research and PRD writing through to API design, prototyping, and GTM coordination. Currently building at the intersection of LLMs, AI Agents, and automation.

---

**WORK EXPERIENCE**

Product Manager Intern
HNG Tech | April 2026 to June 2026 | Lagos, Nigeria
- Served as Technical PM Lead coordinating a 53-person cross-functional team (frontend, backend, DevOps, QA) to ship Open Profile from zero to live production in three weeks.
- Wrote the complete PRD for four core features with user stories, acceptance criteria, edge cases, and success metrics.
- Co-authored the Technical Requirements Document with the backend team, defining system architecture, over 30 API endpoints, PostgreSQL database schemas, and security requirements.
- Collaborated with fellow Product Managers, Design, VAs, and Data Analysts across all product workstreams.
- Partnered with Marketing on the GTM strategy, leveraging a waitlist, beta group, founder-led outreach, community channels, and existing social media platforms.
- Designed user flows that eliminated a three-week rework cycle caused by design-engineering misalignment.
- Managed the full ticket backlog in ClickUp, ran daily standups, and coordinated across five functional streams simultaneously.

Backend Development Trainee
The Curve Africa | May 2025 to November 2025 | Lagos, Nigeria
- Designed and deployed secure RESTful APIs implementing authentication, authorization, CRUD operations, and data validation.
- Integrated KoraPay and Paystack payment gateways across multiple applications.
- Managed and optimized databases with MySQL, Sequelize, and MongoDB.
- Built TraceAid as both PM and Backend Developer, delivering API documentation via Swagger for frontend developers.

Product Management Intern
BorderFlo | November 2024 to February 2025 | Lagos, Nigeria
- Collaborated with a 6-person cross-functional team to build and launch BorderFlo's MVP Android app in January 2025.
- Ran user interviews and iterated on PRDs for onboarding and wallet funding, reducing identity verification drop-off.
- Used Google Analytics to identify a 40% post-signup churn rate, diagnosed the root cause as a sequencing problem, and proposed and shipped progressive onboarding that reduced abandonment at the verification stage.
- Coordinated a hybrid team of internal and specialist external engineers across competing priorities and timelines.
- Facilitated sprint planning and backlog grooming in ClickUp.

Research and Strategy Analyst (NYSC)
SavvyCrest Limited | December 2023 to October 2024 | Lagos, Nigeria
- Conducted in-depth market research and competitive analysis for SMEs across FMCG, consulting, real estate, and technology sectors.
- Prepared strategic reports that improved client go-to-market execution and expansion plans.

---

**EDUCATION**
Bachelor of Science, Industrial Relations and Personnel Management
University of Lagos (UNILAG), Lagos, Nigeria | December 2017 to October 2023
First Class (Hons), CGPA 4.82 out of 5.0, Top 1%, HOD Prize for Best Graduating Student, Department of IRPM

---

**CONTINUING EDUCATION**
Diploma in Backend Engineering, AltSchool Africa | November 2024 to October 2025
Product Management, DevCareer | August 2023 to April 2024
Advanced Diploma in Business Administration, Tekedia Institute | March 2023 to February 2024

---

**SKILLS**
Product: Roadmapping and Strategy, PRD and TRD Writing, User Research, Market Research, Design Thinking, Sprint Facilitation, Backlog Management, Feature Prioritization, RICE, MoSCoW, Stakeholder Management, Competitive Analysis, User Story Mapping, Data Analysis, A/B Testing, Agile/Scrum

Technical: JavaScript (ES6+), Node.js, Express.js, MongoDB, MySQL, Sequelize, PostgreSQL, RESTful APIs, API Testing, Database Design, System Architecture, JWT Authentication, Swagger, QA Testing, Prototyping, Git, GitHub, KoraPay, Paystack

Tools: ClickUp, Linear, Jira, Notion, Confluence, Miro, Figma, Whimsical, Google Analytics, PostHog Analytics, PowerBI, SQL, Postman, Swagger, Claude Code, Cursor, n8n, Gemini, ChatGPT, Microsoft 365, Google Suite

---

## SECTION: CONTACT

### Heading
Let's Make Magic

### Primary Subtext
Ready to build something great? I'd love to hear about your project.

### Secondary Subtext
Open to entry to mid-level roles at early-stage to growth-stage startups: AI companies, B2B SaaS, fintechs, and beyond.

### Contact Details
- Email: channelsokunade@gmail.com (mailto link)
- LinkedIn: https://www.linkedin.com/in/channels-oladapo-67253a187/
- Phone: +(234) 816-0424-398

### Footer Text
Channels Okunade Oladapo, 2026

### Footer Links
- LinkedIn: https://www.linkedin.com/in/channels-oladapo-67253a187/
- GitHub: https://github.com/codeconnoisseur-channels/
- Email: channelsokunade@gmail.com

---

## ALL LINKS REFERENCE

**Live Products**
- TraceAid: https://trace-aid.vercel.app/
- TraceAid API Docs: https://traceaid.onrender.com/docs/
- Open Profile: https://open-profile.hng14.com/
- Invoiceser: https://invoiceser.vercel.app/
- BorderFlo: https://www.borderflo.com/

**Social and Profile**
- LinkedIn: https://www.linkedin.com/in/channels-oladapo-67253a187/
- GitHub: https://github.com/codeconnoisseur-channels/

**Case Study Documents**
- Deliveroo Case Study: https://docs.google.com/presentation/d/1R5ecThTskbmiMN_H777zH8CrKDrQFAu3s0_8g86GrnE/edit
- Deliveroo Figma Prototype: https://www.figma.com/design/8BJ5CKNOsBD5ecOcsDK8to/Deliveroo-User-Flow-and-Prototype?node-id=0-1&t=XZsNqJldwSSUQuJ4-1
- VendSync Prioritization Document: https://docs.google.com/document/d/1swESIXyqj-EqjuYWy5XJi9sOwU0QT7BepuVt0-tkcZs/edit
- Ladda Pitch Deck: https://docs.google.com/presentation/d/1qFDwGqRKedg40Ty-zKh6E8IQvt6MFSjudl551a6nBtg/edit
- MoneyKids.ai Pitch Deck: https://docs.google.com/presentation/d/14ZF6WTe831PApjcRvxMviEU2twACN1Tb143E74fETXY/edit
- YouTube Shorts Research: https://docs.google.com/presentation/d/1srd8MPjpzlQeHl9r091Z3lTTlKZZ2ErAKsxIRSPM2rs/edit

---

## THINGS TO ADD BEFORE GOING LIVE

1. Professional headshot (upload to builder or host and reference as channels_headshot.jpg, to appear beside the About section copy)
2. Any additional certifications to add to the Certifications section and CV
3. Open Profile Figma design file link, if you want to showcase design artifacts alongside the live product
4. TraceAid GitHub repo link, if the repository is public
5. CV PDF file, once updated, to add as a download option in the CV section

---

## HEADSHOT NOTE

A professional photo of Channels is available from existing pitch deck materials: grey three-piece suit, glasses, warm background. This photo should appear beside the About section body copy on desktop, and above the copy on mobile.

---

*End of Portfolio Content Brief*
*Channels Okunade Oladapo*
*Version 3.0*
