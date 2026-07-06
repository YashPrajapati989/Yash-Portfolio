import { Hero } from "@/features/hero/components/Hero";
import { Overview } from "@/features/overview/components/Overview";
import { About } from "@/features/explorer/components/About";
import { Toolbox } from "@/features/toolbox/components/Toolbox";
import { Journey } from "@/features/journey/components/Journey";
import { MissionArchive } from "@/features/mission-archive/components/MissionArchive";
import { EngineeringProcess } from "@/features/engineering/components/EngineeringProcess";
import { Achievements } from "@/features/achievements/components/Achievements";
import { Contact } from "@/features/contact/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Prajapati",
  url: "https://yashprajapati.vercel.app",
  email: "pyash9263@gmail.com",
  telephone: "+917046970540",
  jobTitle: "Data Analyst",
  description:
    "Results-driven Data Analyst (BSc Computer Science, CGPA 9.02) with expertise in Python, SQL, PostgreSQL, and Excel-based analytics.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Mumbai",
  },
  knowsAbout: [
    "Data Analysis",
    "SQL",
    "Python",
    "PostgreSQL",
    "Pandas",
    "Business Intelligence",
    "KPI Dashboards",
    "Machine Learning",
  ],
  sameAs: [
    "https://github.com/YashPrajapati989",
    "https://linkedin.com/in/yash-prajapati",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Overview />
      <About />
      <Toolbox />
      <Journey />
      <MissionArchive />
      <EngineeringProcess />
      <Achievements />
      <Contact />
    </>
  );
}
