import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const GalleryHead = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-2 md:gap-6 mt-5 text-[#141414]">
      {/* heading */}
      <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-semibold">
        <div className="inline-block relative -z-10">
          <h1>Gallery</h1>
          <div className=" absolute top-1 -left-3 md:top-0 md:-left-5 2xl:top-3 2xl:-left-7">
            <div className=" relative w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 2xl:w-12 2xl:h-12">
              <Image
                src="/icons/shapeYellow.svg"
                alt="shape"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sub heading */}

      <div className=" font-medium text-center text-[10px] sm:text-sm md:text-base lg:text-xl 2xl:text-2xl ">
        <p>A Selection Of UX/UI Projects For Many Type Clients, I Create</p>
        <p>
          Better Experience For <span className=" line-through"> Users</span>
          <span className={pacifico.className}>
            <span className="text-[#2EC2F1]"> People</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default GalleryHead;
