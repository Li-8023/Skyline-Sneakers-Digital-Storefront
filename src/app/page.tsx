import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Layout/Hero";
import HomeMenu from "@/components/Layout/HomeMenu";
import SessionHeaders from "@/components/Layout/SectionHeaders";
// define primary color in tailwind.config.ts
export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SessionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Discover Footprint Haven: Where Every Step Leads to Discovery. At Footprint Haven, we don't just sell shoes;
        </p>
        <p>we curate a world of steps. From sleek sneakers to elegant heels, rugged boots to comfy sandals, we've scoured the globe to bring every shoe type under one roof. 
        </p>
         <p>"Find Your Perfect Step" with us, where your next pair awaits, ready to embark on life's adventures alongside you. Dive into our collection, where every shoe has a story, waiting for you to walk it into yours.
        </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SessionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
        <div className="mt-8">
           <a className="text-4xl underline text-gray-500" href="tel:+12345678901">+1 234 567 8901</a>
        </div>
      </section>
     
    </>
  );
}
