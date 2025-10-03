import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Hero from "./sections/Hero";
import TopAppBar from "./components/TopAppBar";

export default function Home() {
  return (
    <div className="bg-neutral-900 w-full h-full flex flex-col">
      <TopAppBar />
      <Hero />
    </div>
  );
}
