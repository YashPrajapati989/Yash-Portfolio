export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and highly interactive user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend & Databases",
    description: "Designing scalable server-side architecture and managing relational/NoSQL data.",
    skills: ["Python", "Node.js", "SQL", "PostgreSQL", "MongoDB", "Express"],
  },
  {
    title: "Data Science & Machine Learning",
    description: "Extracting insights from data and training predictive models.",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "Jupyter"],
  },
  {
    title: "Tools & Architecture",
    description: "Utilizing modern development workflows, deployment strategies, and version control.",
    skills: ["Git", "GitHub", "Vercel", "Docker", "REST APIs", "VS Code"],
  },
];
