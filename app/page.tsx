import { Hero } from "@/features/hero/components/Hero";
import { Overview } from "@/features/overview/components/Overview";
import { About } from "@/features/explorer/components/About";
import { Toolbox } from "@/features/toolbox/components/Toolbox";
import { Journey } from "@/features/journey/components/Journey";
import { MissionArchive } from "@/features/mission-archive/components/MissionArchive";
import { EngineeringProcess } from "@/features/engineering/components/EngineeringProcess";
import { Achievements } from "@/features/achievements/components/Achievements";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <About />
      <Toolbox />
      <Journey />
      <MissionArchive />
      <EngineeringProcess />
      <Achievements />
    </>
  );
}
