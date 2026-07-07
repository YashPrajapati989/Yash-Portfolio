import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/features/hero/components/Hero";
import { Overview } from "@/features/overview/components/Overview";

// ---------------------------------------------------------------------------
// Below-the-fold sections — lazy loaded to keep initial bundle small
// ---------------------------------------------------------------------------
const About = dynamic(() =>
  import("@/features/explorer/components/About").then((m) => m.About)
);
const Journey = dynamic(() =>
  import("@/features/journey/components/Journey").then((m) => m.Journey)
);

const MissionArchive = dynamic(() =>
  import("@/features/mission-archive/components/MissionArchive").then(
    (m) => m.MissionArchive
  )
);
const EngineeringProcess = dynamic(() =>
  import("@/features/engineering/components/EngineeringProcess").then(
    (m) => m.EngineeringProcess
  )
);
const Achievements = dynamic(() =>
  import("@/features/achievements/components/Achievements").then(
    (m) => m.Achievements
  )
);
const Contact = dynamic(() =>
  import("@/features/contact/components/Contact").then((m) => m.Contact)
);

// ---------------------------------------------------------------------------
// Section skeleton — shown while a lazy section loads
// ---------------------------------------------------------------------------
function SectionSkeleton() {
  return (
    <div className="w-full py-24 md:py-32 animate-pulse" aria-hidden="true">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <div className="h-4 w-32 rounded-full bg-[var(--color-bg-elevated)] mx-auto" />
        <div className="h-10 w-64 rounded-xl bg-[var(--color-bg-elevated)] mx-auto" />
        <div className="h-4 w-96 rounded-full bg-[var(--color-bg-elevated)] mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-[var(--color-bg-elevated)]" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// JSON-LD structured data
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Prajapati",
  url: "https://yashprajapati-portfolio.netlify.app",
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
        // Keep as client-safe: Next will render this into the document head/body
        // via a script tag; using a string avoids React script-block warnings.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />

      {/* Above the fold — loaded immediately */}
      <Hero />
      <Overview />

      {/* Below the fold — lazy loaded with skeleton fallbacks */}
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Journey />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <MissionArchive />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <EngineeringProcess />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Achievements />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </>
  );
}
