export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ProjectLink {
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  outcome: string;
  tags: string[];
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  links: ProjectLink;
}

export const projects: Project[] = [
  {
    id: "retail-sales-analysis",
    title: "Retail Sales Analysis",
    subtitle: "Advanced SQL & Python Data Analytics",
    description: "Designed a retail_sales database with 1,000+ transactions to identify top-spending customers, best-selling months, and peak shopping shifts to guide inventory decisions.",
    problem: "Needed a way to extract actionable business insights from raw transaction logs, which contained NULLs and schema inconsistencies.",
    outcome: "Resolved all inconsistencies through systematic data cleaning and answered 15+ business questions using advanced SQL window functions and CTEs.",
    tags: ["Data Analysis", "SQL", "Python"],
    stack: ["PostgreSQL", "Pandas", "Excel"],
    status: "completed",
    featured: true,
    links: {
      github: "https://github.com/YashPrajapati989",
    },
  },
  {
    id: "smart-attendx",
    title: "Smart AttendX",
    subtitle: "AI-Powered Attendance System",
    description: "Engineered a full-stack AI attendance platform using face recognition for automated real-time tracking, eliminating ~80% of manual attendance effort.",
    problem: "Traditional attendance systems are slow, error-prone, and easy to manipulate. Organizations needed a reliable, automated solution that works in real-time.",
    outcome: "Designed a normalized PostgreSQL schema with JWT-based authentication. Presented at the 20th Aavishkar Inter-Collegiate Research Convention.",
    tags: ["AI", "Face Recognition", "Full Stack"],
    stack: ["React Native", "Python", "Flask", "PostgreSQL"],
    status: "completed",
    featured: true,
    links: {
      github: "https://github.com/YashPrajapati989",
    },
  },
  {
    id: "online-food-delivery",
    title: "Online Food Delivery Analysis",
    subtitle: "Interactive Pivot Table Dashboard",
    description: "Analyzed a 5,000-row, 5-table dataset to surface customer behavior and restaurant performance metrics across major cities.",
    problem: "Underperforming restaurant segments needed targeted promotional recommendations based on actual revenue data.",
    outcome: "Pinpointed top revenue-generating items and seasonal trends. Delivered an interactive Excel Pivot Table dashboard with actionable recommendations.",
    tags: ["Data Visualization", "Dashboards"],
    stack: ["SQL", "PostgreSQL", "Excel Pivot Tables"],
    status: "completed",
    featured: false,
    links: {
      github: "https://github.com/YashPrajapati989",
    },
  },
  {
    id: "library-management",
    title: "Library Management System",
    subtitle: "Relational Database Engineering",
    description: "Engineered a fully normalized 6-table relational schema with complete referential integrity for a library system.",
    problem: "Needed an automated backend to handle book issuance, returns, inventory updates, and productivity tracking.",
    outcome: "Built PL/pgSQL stored procedures for transactions. Generated KPI reports for borrowed books, revenue, and branchwise return rates using CTEs and window functions.",
    tags: ["Backend", "Database Design"],
    stack: ["PostgreSQL", "PL/pgSQL", "SQL"],
    status: "completed",
    featured: false,
    links: {
      github: "https://github.com/YashPrajapati989",
    },
  },
];
