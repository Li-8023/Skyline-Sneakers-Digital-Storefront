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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit hid hdiah dhwid ahdiw dqhwidh bduxahwi dwhidh w99rei 
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit hid hdiah dhwid ahdiw dqhwidh bduxahwi dwhidh w99rei 
        </p>
         <p>Lorem ipsum dolor si
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
