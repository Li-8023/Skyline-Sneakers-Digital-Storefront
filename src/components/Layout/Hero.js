import Image from "next/image";

//
export default function Hero() {
  return (
    <session className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">Everything is better with a Pizza</h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-2 rounded-full">Order now</button>
            <button>Learn more</button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.jpg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </session>
  );
}
