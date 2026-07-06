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
    id: "cert-1",
    title: "Data Analytics Virtual Experience",
    issuer: "KPMG",
    date: "2024",
    url: "#",
  },
  {
    id: "cert-2",
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "2023",
    url: "#",
  },
  {
    id: "cert-3",
    title: "React Native Developer Specialization",
    issuer: "Meta",
    date: "2023",
    url: "#",
  },
];

export const learningJourney: LearningItem[] = [
  {
    id: "learn-1",
    topic: "Advanced Machine Learning Algorithms",
    status: "in-progress",
  },
  {
    id: "learn-2",
    topic: "Cloud Architecture (AWS)",
    status: "in-progress",
  },
  {
    id: "learn-3",
    topic: "Data Visualization with D3.js",
    status: "planned",
  },
  {
    id: "learn-4",
    topic: "Full Stack Next.js Ecosystem",
    status: "completed",
  },
];
