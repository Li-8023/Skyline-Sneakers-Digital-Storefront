import Image from "next/image";
import Right from "@/components/icons/Right.js";

//123
export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          {/* Every Shoe, Every Journey. */}
          Every Shoe,
          <br /> Every&nbsp;
          {/* <br /> with a&nbsp; */}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Journey
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Our carefully curated selection ensures you find
          the perfect match for any occasion, style, or adventure. 
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-gradient-to-r from-primary to-secondary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            get started
            <Right />
          </button>
          <button className="flex border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more <Right />
          </button>
        </div>
      </div>
      <div className="relative mt-2">
        <Image
          src={"/online_shopping.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
