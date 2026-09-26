export const profile = {
  name: "Gaurav Singh",
  role: "Full Stack Engineer",
  stack: ["React.js", "Next.js", "Node.js", "TypeScript"],
  location: "Mumbai, India",
  email: "gaurav878singh@gmail.com",
  linkedin: "https://linkedin.com/in/gauravsingh138",
  github: "https://github.com/gauravsingh919",
  resume: "Gaurav-Singh-Resume.pdf",
  years: "4+",
  summary:
    "I build fast, scalable booking and streaming products used across India and the Middle East — OTT platforms, multi-country cinema booking and live-event ticketing. My foundation is the frontend (React, Next.js, performance and SEO), and I own features end to end with Node.js, Express and REST APIs.",
};

export const stats = [
  { value: "4+", label: "Years building production web apps" },
  { value: "8+", label: "Client platforms shipped on a shared architecture" },
  { value: "60→100", label: "Cinépolis SEO score after the Next.js SSR migration" },
  { value: "40%", label: "Faster initial page loads from SSR and code splitting" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Enpointe Global",
    location: "Mumbai, Maharashtra",
    period: "May 2023 — Present",
    points: [
      "Built a reusable frontend architecture used across 8+ client platforms, cutting development time by 35%.",
      "Integrated payment, CMS and loyalty APIs into scalable booking and subscription flows, reducing drop-offs by 25%.",
      "Improved Core Web Vitals with SSR, lazy loading and code splitting — initial page performance up 40%.",
      "Own REST API integration and structured API documentation for the Dubai Opera event-booking platform, alongside frontend delivery.",
    ],
  },
];

export type ProjectIcon = "stage" | "play" | "ticket";

export const projects: {
  name: string;
  kind: string;
  period: string;
  icon: ProjectIcon;
  url?: string;
  metric: { value: string; label: string };
  summary: string;
  tags: string[];
}[] = [
  {
    name: "Dubai Opera",
    kind: "Event booking platform",
    period: "Ongoing",
    icon: "stage",
    url: "https://www.dubaiopera.com/en",
    metric: { value: "Live", label: "in production" },
    summary:
      "Frontend features for the public-facing booking site of Dubai’s flagship performing-arts venue, plus backend REST API integration and documentation that powers its booking workflows.",
    tags: ["Next.js", "Node.js", "REST APIs", "API Docs"],
  },
  {
    name: "SlasherPlay",
    url: "https://www.slasherplay.tv",
    kind: "OTT streaming platform",
    period: "Oct 2025 — Apr 2026",
    icon: "play",
    metric: { value: "+30%", label: "paid memberships" },
    summary:
      "Monthly, quarterly and yearly subscriptions with Apple Pay and Tap Payments, plus authenticated, protected streaming workflows that cut unauthorised access cases by 40%.",
    tags: ["React", "Apple Pay", "Tap Payments", "JWT Auth"],
  },
  {
    name: "Novo Cinemas",
    url: "https://www.novocinemas.com",
    kind: "Multi-country cinema booking",
    period: "Jan 2025 — Jul 2025",
    icon: "ticket",
    metric: { value: "+20%", label: "booking completion" },
    summary:
      "English and Arabic (RTL) booking interfaces for Qatar and the UAE, with Cybersource payments, loyalty, coupons and gift cards — usability up 30%.",
    tags: ["Next.js", "RTL / i18n", "Cybersource", "Loyalty"],
  },
  {
    name: "Cinépolis GCC",
    url: "https://www.cinepolisgulf.com",
    kind: "Regional cinema booking",
    period: "Gulf region",
    icon: "ticket",
    metric: { value: "GCC", label: "multi-country platform" },
    summary:
      "Cinema ticket booking for Cinépolis across the Gulf — showtimes, seat selection and checkout flows built on the reusable booking architecture shared across Enpointe’s cinema clients.",
    tags: ["Next.js", "Booking flows", "Payments", "Reusable UI"],
  },
  {
    name: "Cinépolis India",
    url: "https://cinepolisindia.com",
    kind: "Cinema ticket booking",
    period: "Jun 2023 — Jan 2024",
    icon: "ticket",
    metric: { value: "60→100", label: "SEO score" },
    summary:
      "Migrated the booking platform from React.js to Next.js with server-side rendering and rendering optimisations, taking the SEO score from 60 to a perfect 100.",
    tags: ["React → Next.js", "SSR", "SEO", "Core Web Vitals"],
  },
];

export const clients = [
  { name: "Dubai Opera", url: "https://www.dubaiopera.com/en", mono: "DO", sector: "Live events", region: "UAE" },
  { name: "Novo Cinemas", url: "https://www.novocinemas.com", mono: "NC", sector: "Cinema", region: "UAE · QA" },
  { name: "Cinépolis GCC", url: "https://www.cinepolisgulf.com", mono: "CG", sector: "Cinema", region: "GCC" },
  { name: "Cinépolis India", url: "https://cinepolisindia.com", mono: "CI", sector: "Cinema", region: "India" },
  { name: "SlasherPlay", url: "https://www.slasherplay.tv", mono: "SP", sector: "OTT", region: "Streaming" },
];

export const journey = [
  { date: "Jun 2023", title: "Cinépolis India", note: "React → Next.js, SEO 60→100" },
  { date: "Jan 2025", title: "Novo Cinemas", note: "EN/AR booking for Qatar & UAE" },
  { date: "Oct 2025", title: "SlasherPlay", note: "Subscriptions & protected streaming" },
  { date: "Now", title: "Dubai Opera", note: "Full-stack: frontend + REST APIs" },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Context API"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST API design", "JWT authentication", "Postman", "API documentation"],
  },
  { group: "Data", items: ["MySQL", "MongoDB"] },
  {
    group: "Performance",
    items: ["SSR / SSG", "Core Web Vitals", "Lazy loading", "Code splitting", "Vercel", "Axios"],
  },
  {
    group: "Motion & UI",
    items: ["GSAP", "Framer Motion", "Responsive design", "Accessibility", "Cross-browser"],
  },
];

export const education = [
  {
    school: "Thakur Institute of Management Studies, Career and Research",
    degree: "Master of Computer Applications (MCA)",
    score: "CGPA 8.9",
    period: "2021 — 2023",
  },
  {
    school: "Thakur College of Science and Commerce",
    degree: "Bachelor of Science (BSc)",
    score: "CGPA 8.18",
    period: "2019 — 2021",
  },
];
