export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface LearningItem {
  id: string;
  topic: string;
  status: "completed" | "in-progress" | "planned";
}

export const githubUsername = "YashPrajapati989";

export const certifications: Certification[] = [
  {
    id: "cert-deloitte",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte via Forage",
    date: "Jun 2026",
  },
  {
    id: "cert-tata-viz",
    title: "Data Visualisation: Empowering Business",
    issuer: "Tata Group via Forage",
    date: "Jun 2026",
  },
  {
    id: "cert-tata-ai",
    title: "GenAI Powered Data Analytics",
    issuer: "Tata Group via Forage",
    date: "Sep 2025",
  },
  {
    id: "cert-udemy",
    title: "SQL and PostgreSQL for Beginners",
    issuer: "Udemy",
    date: "Jun 2026",
  },
  {
    id: "cert-infosys",
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "Jun 2026",
  },
  {
    id: "cert-microsoft",
    title: "Skill Competency — SOAR: AI to Aspire",
    issuer: "Microsoft / Skill India",
    date: "Nov 2025",
  },
];

export const learningJourney: LearningItem[] = [
  {
    id: "learn-data",
    topic: "Advanced Data Analytics & KPI Reporting",
    status: "in-progress",
  },
  {
    id: "learn-sql",
    topic: "PostgreSQL Stored Procedures & Optimization",
    status: "in-progress",
  },
  {
    id: "learn-ai",
    topic: "Prompt Engineering & GenAI Integrations",
    status: "planned",
  },
  {
    id: "learn-python",
    topic: "Python Pandas & Matplotlib Dashboards",
    status: "completed",
  },
];
