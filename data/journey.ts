export type JourneyType = "education" | "experience" | "milestone";

export interface JourneyEntry {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: JourneyType;
  tags?: string[];
  current?: boolean;
}

export const journeyEntries: JourneyEntry[] = [
  {
    year: "2024 – Present",
    title: "BSc in Computer Science",
    organization: "University of Mumbai",
    location: "Mumbai, Maharashtra, India",
    description:
      "Pursuing a Bachelor of Science in Computer Science, building a strong foundation in algorithms, data structures, software engineering, and applied machine learning. Actively working on real-world projects that bridge academia and industry.",
    type: "education",
    tags: ["Computer Science", "Algorithms", "Data Structures", "Machine Learning"],
    current: true,
  },
  {
    year: "Sep 2025 – Dec 2025",
    title: "Data Analyst Intern",
    organization: "Unified Mentor",
    location: "Remote",
    description:
      "Analyzed real-world business datasets to extract actionable insights and identify trends. Cleaned and validated data to improve accuracy and consistency. Built interactive reports and dashboards using Excel and Python, and collaborated directly on business analytics use cases.",
    type: "experience",
    tags: ["Python", "Excel", "SQL", "Pandas", "Data Cleaning", "Dashboards"],
  },
  {
    year: "2024",
    title: "Smart AttendX — AI Attendance System",
    organization: "Personal Project",
    location: "Umbergaon, Gujarat, India",
    description:
      "Built a full-stack AI-powered attendance system combining a web backend with a mobile application. Implemented face recognition for automated attendance, secure login, real-time tracking, detailed logs, and exportable reports. Optimized for accuracy, performance, and user experience.",
    type: "milestone",
    tags: ["React Native", "Python", "Flask", "Face Recognition", "REST APIs", "AI"],
  },
  {
    year: "2024",
    title: "AI Video Player Mobile App",
    organization: "Personal Project",
    location: "Umbergaon, Gujarat, India",
    description:
      "Developed a feature-rich mobile video player with a polished UI/UX. Implemented seek bar navigation, play/pause controls, 10-second forward/rewind, screen rotation lock, and playback performance optimizations from the ground up.",
    type: "milestone",
    tags: ["React Native", "Mobile Development", "UI/UX", "Performance"],
  },
  {
    year: "2022 – 2024",
    title: "Higher Secondary Certificate (HSC)",
    organization: "P.G Junior College",
    location: "Gujarat, India",
    description:
      "Completed Higher Secondary education with a focus on Science. Scored 53%, while beginning to explore programming and software development independently outside the curriculum.",
    type: "education",
    tags: ["Science", "Mathematics"],
  },
  {
    year: "2022",
    title: "Secondary School Certificate (SSC)",
    organization: "Jadi Rana High School",
    location: "Gujarat, India",
    description:
      "Completed secondary education with a 68% score. Developed early interests in technology, mathematics, and logical problem-solving that would later drive a career in software engineering and data science.",
    type: "education",
    tags: ["Mathematics", "Science"],
  },
];
