import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
// define primary color in tailwind.config.ts
export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
    </>
  );
}
