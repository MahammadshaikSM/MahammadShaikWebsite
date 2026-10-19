// Single source of truth for all four site versions.
window.SITE = {
  name: "Shaik Mahammad",
  short: "Moh",
  role: "Workday Integration & Reporting Consultant",
  company: "Deloitte",
  location: "Dallas, TX",
  email: "Mohammadshaik345@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahammad-shaik-5b422b11a",
  github: "https://github.com/MahammadshaikSM",
  summary:
    "6+ years designing, building and governing enterprise Workday integrations across HCM, Finance and Payroll, from 80,000-employee public sector go-lives to Fortune 500 HRIS environments. Now pairing deep Workday engineering with AI-assisted delivery.",

  stats: [
    { value: 70, suffix: "+", label: "Integrations built at Deloitte" },
    { value: 433, suffix: "", label: "Migrations across 11 tenants" },
    { value: 80, suffix: "K+", label: "Employees on a single go-live" },
    { value: 40, suffix: "%", label: "Faster Studio dev with AI" },
  ],

  experience: [
    {
      company: "Deloitte",
      title: "Workday Integration and Reporting Consultant",
      dates: "Jun 2024 – Present",
      headline: "Led the full-lifecycle Workday implementation for an 80,000+ employee public sector client.",
      points: [
        "Built and maintained 70+ integrations across HCM, Finance, Payroll, Time & Absence and Benefits using Workday Studio, EIB, Core Connectors, RAAS, XML, XSLT, JSON, SOAP/REST APIs, Orchestrate and Extend, including complex mappings to vendors such as ADP, Alight, ERS and Concur.",
        "Led the full-lifecycle implementation for an 80,000+ employee public sector client: requirements, integration specs, field mappings, process design, data conversion, development, testing, go-live and Hypercare.",
        "Led and mentored a team of 4 Workday consultants: task allocation, design and code reviews, quality checks and development best practices.",
        "Coordinated 433 integration migrations across 11 implementation tenants as the single point of contact for migration governance, sandbox refreshes, release management and Production promotions.",
        "Used AI assistants to write and debug XSLT and Studio logic in Groovy, MVEL and XPath, cutting development and troubleshooting time by 40% across 14 Studio integrations, with all AI-generated code peer reviewed and tested.",
        "Built 20+ Workday Orchestrate integrations using AI-assisted design for orchestration logic, expressions and JSON/XML transformations, reducing build time by 40%.",
        "Created an Integration Control Document library of reusable specs, mappings and process designs for 200+ integrations, reducing team development time by ~30%.",
        "Ran SIT, UAT and EUAT cycles with 20+ external vendors, resolving cross-module data gaps and securing final go-live approvals.",
        "Designed integration security architecture: security groups, ISUs, domain/BP access, cross-tenant validation, SSH/PGP keys and certificates, in line with audit, SoD and data-protection requirements.",
        "Developed 40+ Advanced, Matrix and Composite reports and 200+ calculated fields, and used AI to reconcile report outputs, cutting validation time by at least 35%.",
      ],
    },
    {
      company: "IBM",
      title: "Workday Consultant",
      dates: "Jan 2022 – Jul 2022",
      headline: "30+ integrations across three simultaneous clients of 40,000+ employees each.",
      points: [
        "Delivered 30+ Studio, EIB and Core Connector integrations plus BIRT and Tableau reporting across three simultaneous client projects supporting 40,000+ employees each.",
        "Created BIRT layouts for Bank and Merit Statements, earning formal client recognition for quality and delivery.",
        "Led integration design discussions, documented the technical impact of configuration decisions and presented deliverables to HR and Payroll leadership.",
        "Resolved 100+ production support tickets across ServiceNow, Jira and MS Dynamics 365 under strict change governance, with zero compliance breaches.",
      ],
    },
    {
      company: "Accenture",
      title: "Application Development Analyst",
      dates: "Jan 2019 – Jan 2022",
      headline: "A 120-report Workday dashboard adopted by 500+ managers and leaders.",
      points: [
        "Built Core Connectors, inbound/outbound EIBs and Studio integrations for an HRIS environment with 100,000+ employee records; configured Supervisory Orgs, Cost Centers, Companies and Account Codes.",
        "Designed a Workday Dashboard of 120+ custom reports (Advanced, Matrix, Composite) adopted by 500+ managers, HR leads and leadership teams.",
        "Developed reports and calculated fields across HCM, Compensation, Payroll, Talent and Finance.",
        "Created multilingual BIRT layouts for Merit Statements, Bank Statements and Talent Cards using Business Form Layout.",
        "Trained analysts in Workday report writing and configured security groups, domain access, integration security and report access governance.",
      ],
    },
  ],

  skills: [
    { group: "Functional Modules & Security", items: ["Workday HCM", "Workday Finance", "Workday Security", "Workday Payroll", "Workday Benefits"] },
    { group: "Workday Integrations", items: ["EIB", "Core Connectors", "Workday Studio", "Workday Orchestration", "SOAP / REST / WQL APIs"] },
    { group: "Reporting & Analytics", items: ["Advanced Reporting", "BIRT", "Dashboards", "Workday Prism", "Calculated Fields"] },
    { group: "Integration Technologies", items: ["XSLT", "XML", "JSON", "SOAP", "REST", "Flat File", "EDI", "PECI / PICOF", "AI-enabled automation", "SIT / UAT", "Defect management"] },
  ],

  certifications: ["Workday Pro Integrations", "Orchestrate for Workday", "Workday Report Writer", "Workday BIRT"],

  education: [
    { school: "Arizona State University", degree: "M.S., Information Systems Management", detail: "GPA 3.79 / 4", dates: "Aug 2022 – May 2024", place: "Tempe, AZ" },
    { school: "NBKR Institute of Technology", degree: "B.S., Electronics & Communication Engineering", detail: "GPA 3.25 / 4", dates: "Sep 2013 – May 2017", place: "Nellore, India" },
  ],

  ventures: [
    { name: "Crypto Trading Platform", status: "In development", text: "A personal platform for market analysis, position management and strategy execution." },
    { name: "DeFi & Liquidity Research", status: "Exploring", text: "Liquidity provision, yield strategies, on-chain analytics and Uniswap v3 LP strategies." },
    { name: "Mesa Signal", status: "Building", text: "A crypto & stock prediction company and app bringing integration-grade data discipline to markets." },
  ],
  disclaimer: "Personal projects and research only. Nothing here is financial or investment advice.",

  // Venture brand (working name; change it here and every version updates).
  venture: {
    name: "Mesa Signal",
    tagline: "Market signals, shown honestly.",
    principles: [
      { title: "No confetti", text: "No streaks, points or celebrations tied to trading. Regulator experiments show game mechanics raise risk-taking." },
      { title: "Dollars, not 'up to'", text: "Figures are quoted in plain dollars with a point of comparison, never 'up to X%'." },
      { title: "Labelled returns", text: "Every return says how it was calculated, time-weighted or money-weighted." },
      { title: "Pausable live data", text: "Moving prices can always be paused, and gains never rely on colour alone." },
      { title: "You approve the AI", text: "The agent proposes, explains why, and waits. Nothing happens without your tap." },
      { title: "Dated proofs", text: "Any claim about reserves or accuracy carries a date, its scope and its limits." },
    ],
  },

  // "Secure by design": named trust section (MetaMask / Public pattern), from real Workday work.
  security: [
    { title: "Least-privilege access", text: "Security groups, ISUs and domain/BP policies scoped per integration." },
    { title: "Encrypted transport", text: "SSH/PGP keys, certificates and secure authentication for every vendor feed." },
    { title: "Audit & SoD ready", text: "Designs aligned to audit, segregation-of-duties and data-protection rules." },
    { title: "Zero compliance breaches", text: "100+ production tickets resolved under strict change governance at IBM." },
    { title: "Reviewed AI code", text: "AI-assisted XSLT, Groovy and Orchestrate logic is peer reviewed and tested before release." },
    { title: "Hypercare discipline", text: "SIT, UAT and EUAT with 20+ vendors, then stabilization after go-live." },
  ],

  // Floating notifications in the hero (Moto pattern), each a real achievement.
  toasts: [
    { title: "Go-live approved", text: "80,000-employee public sector client" },
    { title: "433 migrations promoted", text: "Across 11 implementation tenants" },
    { title: "Studio build time −40%", text: "AI-assisted, peer reviewed¹" },
    { title: "Dashboard adopted", text: "120+ reports · 500+ managers" },
    { title: "Certified", text: "Workday Pro Integrations" },
  ],

  footnotes: [
    "Measured across 14 Workday Studio integrations at Deloitte. All AI-generated code was peer reviewed and tested before release.",
    "433 integration migrations across 11 implementation tenants, June 2024 to present.",
    "Mesa Signal is a personal project in development. It is not a broker-dealer, investment adviser or exchange, offers no services and holds no customer funds. Market data shown on this page is illustrative and not live.",
    "Nothing on this site is financial or investment advice. Investing and crypto carry risk, including the loss of all money invested.",
  ],
};

// Tiny helpers shared by every version.
window.SITE_UTIL = {
  esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  years() {
    return new Date().getFullYear() - 2019;
  },
};
