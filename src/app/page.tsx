
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
      <section className="text-center my-16" id="about">
        <SessionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>Ascend to new heights with Skyline Sneakers – where every step is an elevation of discovery. Here at Skyline Sneakers, it's more than just about selling footwear; it's about offering a launchpad for every stride of your journey.</p>
          <p>Our collection is a skyline of diverse styles, silhouettes, and stories. From the ground-breaking edge of performance sneakers to the laid-back charm of casual kicks, we soar high and search wide to gather an unparalleled assortment of shoes. We handpick each pair with a vision to suit the eclectic tastes of the adventurers, the trendsetters, the dreamers.</p>
          <p>"Rise Above the Ordinary" with us. In our world, every pair of sneakers is a vessel for exploration, a companion for your everyday conquests and extraordinary escapades alike. Navigate through our curated collection and discover the pair that resonates with your spirit. Each shoe in our haven is a chapter in a storybook, ready to journey through the chronicles of your life.</p>
          <p>Step into Skyline Sneakers, where every sole has a saga and every purchase paves the path to new horizons. Your next favorite pair awaits among the clouds, promising to walk with you towards the remarkable and beyond. Join us, and leave footprints on the skyline.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SessionHeaders subHeader={'Don\'t hesitate'} mainHeader={'Contact us'}/>
        <div className="mt-8">
           <a className="text-4xl underline text-gray-500" href="tel:+12345678901">+1 234 567 8901</a>
        </div>
      </section>
     
    </>
  );
}
