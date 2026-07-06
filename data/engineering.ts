import { Lightbulb, TestTube, Rocket, MonitorCheck, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export const engineeringProcess: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Architecture",
    description: "Understanding the core problem, defining system requirements, and planning the architecture before writing a single line of code.",
    icon: Lightbulb,
    skills: ["System Design", "Requirement Analysis", "Wireframing"],
  },
  {
    id: "frontend",
    title: "Client-Side Engineering",
    description: "Building responsive, accessible, and highly interactive user interfaces with a strong focus on component reusability and design systems.",
    icon: MonitorCheck,
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Server & Data Layer",
    description: "Designing robust APIs, managing databases, and integrating AI models to power the application logic seamlessly and securely.",
    icon: Server,
    skills: ["Python / Flask", "REST APIs", "SQL"],
  },
  {
    id: "testing",
    title: "Testing & Refinement",
    description: "Ensuring code quality through rigorous debugging, performance optimization, and validating against edge cases.",
    icon: TestTube,
    skills: ["Debugging", "Performance Audit", "UX Polish"],
  },
  {
    id: "deployment",
    title: "Deployment & Delivery",
    description: "Shipping production-ready applications, setting up environments, and ensuring smooth delivery to end users.",
    icon: Rocket,
    skills: ["Vercel", "Git / GitHub", "CI/CD Basics"],
  },
];
