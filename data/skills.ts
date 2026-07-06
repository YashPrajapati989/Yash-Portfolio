export interface SkillCategory {
  category: string;
  description: string;
  items: { name: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Analytics & Python",
    description: "Core data analysis, manipulation, and statistical reporting.",
    items: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "EDA" },
      { name: "Data Wrangling" },
      { name: "Statistical Analysis" },
      { name: "KPI Analysis" },
      { name: "Business Reporting" },
    ],
  },
  {
    category: "SQL & Databases",
    description: "Relational database management and complex querying.",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Window Functions" },
      { name: "CTEs" },
      { name: "PL/pgSQL" },
      { name: "Joins & Indexing" },
    ],
  },
  {
    category: "Visualization & BI",
    description: "Turning raw data into actionable dashboards.",
    items: [
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Excel Dashboards" },
      { name: "Pivot Tables" },
      { name: "Power BI (basic)" },
      { name: "Tableau (basic)" },
    ],
  },
  {
    category: "AI / ML & Development",
    description: "Machine learning, AI concepts, and full-stack development.",
    items: [
      { name: "Face Recognition" },
      { name: "Predictive Modelling" },
      { name: "Prompt Engineering" },
      { name: "React Native" },
      { name: "Flask & REST APIs" },
      { name: "Git/GitHub" },
    ],
  },
];
