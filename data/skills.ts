export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data & Analytics",
    description: "Extracting insights from data through cleaning, analysis, and visual storytelling.",
    skills: ["Python", "SQL", "Excel", "Pandas", "NumPy", "EDA", "Statistics", "Data Cleaning", "Dashboards"],
  },
  {
    title: "Mobile & Web Development",
    description: "Building performant, user-focused applications across mobile and web platforms.",
    skills: ["React Native", "Flask", "REST APIs", "JavaScript", "HTML/CSS", "Mobile App Development"],
  },
  {
    title: "AI & Machine Learning",
    description: "Applying intelligent systems and pattern recognition to solve real-world problems.",
    skills: ["Face Recognition", "Machine Learning", "AI Integration", "Python (ML)", "Scikit-Learn"],
  },
  {
    title: "Tools & Productivity",
    description: "Leveraging modern tools and workflows to deliver consistent, high-quality work.",
    skills: ["Git", "GitHub", "VS Code", "Data Visualization", "Problem Solving", "Excel (Advanced)"],
  },
];
