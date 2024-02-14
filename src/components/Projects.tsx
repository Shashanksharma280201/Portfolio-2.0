"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="max-w-5xl relative top-[10vh] mx-auto px-8">
      <h1 className="flex items-center justify-center text-5xl text-red-400">Projects</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Backend VLSI",
    description:
      "Sub-Threshold Standard Cell Design",
    link: "https://www.chips.pes.edu/projects/sub-threshold-standard-cell-design",
  },
  {
    title: "Image processing on FPGA",
    description:
      "My Internship at Indian Space Research Organisation (ISRO)",
    link: "https://github.com/ISRO-Project/Shashank",
  },
  {
    title: "Optimized Routing algorithm",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://github.com/Shashanksharma280201/modified-lee-s-algorithm",
  },
  {
    title: "Detailed study on processors",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://github.com/ISRO-Project/Shashank/tree/main/Processors",
  },
  {
    title: "Portfolio",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://shashanksharma280201.github.io/portfolio/",
  },
  {
    title: "NFT React-Native app",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://github.com/Shashanksharma280201/NFTapp",
  },
];
