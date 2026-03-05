import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Process } from "@/components/home/Process";
import { Work } from "@/components/home/Work";
import { Journey } from "@/components/home/Journey";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Process />
      <Work />
      <Journey />
      <Contact />
    </main>
  );
}
