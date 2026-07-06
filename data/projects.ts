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
    id: "smart-attendx",
    title: "Smart AttendX",
    subtitle: "AI-Powered Attendance System",
    description:
      "A full-stack attendance management system that eliminates manual roll calls by using face recognition to automate the entire process — from detection and verification to logging and reporting.",
    problem:
      "Traditional attendance systems are slow, error-prone, and easy to manipulate. Educational institutions and organizations needed a reliable, automated solution that works in real-time.",
    outcome:
      "Delivered a production-ready system with secure login, real-time face detection, attendance logs, and exportable reports — significantly reducing administrative overhead.",
    tags: ["AI", "Face Recognition", "Full Stack", "Mobile"],
    stack: ["React Native", "Python", "Flask", "REST APIs", "Face Recognition"],
    status: "completed",
    featured: true,
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: "ai-video-player",
    title: "AI Video Player",
    subtitle: "Feature-Rich Mobile Video Player",
    description:
      "A polished mobile video player application built from scratch with a focus on smooth playback controls, intuitive navigation, and an exceptional user experience across different devices and screen orientations.",
    problem:
      "Most mobile video players lack fine-grained controls or have cluttered UIs. The goal was to build a minimal, powerful player with all essential controls elegantly designed.",
    outcome:
      "Shipped a fully functional mobile video player with seek bar navigation, play/pause controls, 10-second forward/rewind, screen rotation, lock mode, and optimized playback performance.",
    tags: ["Mobile", "React Native", "UI/UX"],
    stack: ["React Native", "JavaScript", "Mobile APIs"],
    status: "completed",
    featured: false,
    links: {
      github: "",
      live: "",
    },
  },
];
