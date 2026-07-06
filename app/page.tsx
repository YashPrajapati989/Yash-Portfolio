import { Hero } from "@/features/hero/components/Hero";
import { Overview } from "@/features/overview/components/Overview";
import { About } from "@/features/explorer/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <About />
    </>
  );
}
