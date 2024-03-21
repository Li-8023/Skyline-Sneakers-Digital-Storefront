import Image from "next/image";
import Right from "@/components/icons/Right.js";

//123
export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          {/* Stride with Elegance, Land with Style.  */}
          Stride
          <br />
          with Elegance,
          <br /> Land with&nbsp;
          {/* <br /> with a&nbsp; */}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Style
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Step into a world where every shoe tells the story of a new adventure
          waiting to unfold.
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
