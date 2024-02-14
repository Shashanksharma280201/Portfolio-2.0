import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import Header from "@/components/Header";
import Image from "next/image";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">

        <div className="flex w-full">
          <Header />
        </div>

        <div className="flex items-center justify-center w-full h-screen">
          <About />
        </div>

        <div className="flex">
          <Projects />
        </div>
        <div className="flex">
          <Experience />
        </div>

      </div>
    </>
  );
}
