import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex relative justify-center items-center">
        <Header />
      </section>
      {/* <h1 className="flex text-white">hwlllo</h1> */}
      <section className="flex">
        <About />
      </section>
      <section className="flex">
        <Experience />
      </section>
    </>
  );
}
