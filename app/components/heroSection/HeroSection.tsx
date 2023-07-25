"use client";

import Image from "next/image";
import Blur from "../Blur";
import HeroImage from "../HeroImage";

const HeroSection = () => {
  return (
    <section className=" relative">
      <div className="absolute top-0 left-0 z-10">
        <Blur />
      </div>
      <section className=" pt-28 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-3 md:gap-10 xl:gap-20 mx-auto">
          {/* text section */}
          <div>
            <p className=" text-sm md:text-base 2xl:text-2xl text-[#141414] font-medium mb-4 2xl:mb-6">
              Hi, I&apos;m <span className="text-[#F64749]">Sheikh,</span> a...
            </p>
            <div className=" flex flex-col gap-2 md:gap-4 2xl:gap-7 text-[#141414] text-6xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-semibold mx-auto">
              <div className="flex items-center">
                <div className="relative inline-block">
                  <p className=" inline-block">Curious</p>
                  <div className=" w-6 h-6 md:w-9 md:h-9 2xl:w-12 2xl:h-12 absolute top-1/3 -left-3 md:-left-5">
                    <Image
                      src="/shapes/shape.svg"
                      alt="shape"
                      layout="responsive"
                      objectFit="contain"
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className=" w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-[76px] absolute -right-6 top-0 2xl:-top-0 2xl:-right-12 lg:-right-10 lg:-top-4 md:-top-2 md:-right-7 sm:-right-7 sm:-top-1 -z-10">
                    <Image
                      src="/shapes/imoji.png"
                      alt="shape"
                      layout="responsive"
                      objectFit="contain"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex flex-row items-center">
                  rese
                  <div className=" relative">
                    a
                    <div className=" w-14 sm:w-12 md:w-16 lg:w-[72px] h-20 2xl:w-32 2xl:h-32 absolute top-3 -left-1 md:-left-2 2xl:top-6 2xl:-left-3">
                      <Image
                        src="/shapes/search.svg"
                        alt="search"
                        layout="responsive"
                        objectFit="contain"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  rcher,
                </div>
              </div>
              <div className=" flex flex-row gap-2 items-center">
                <p className=" inline-block">designer</p>
                <div className=" w-7 md:w-8 lg:w-9 h-8 md:h-10 2xl:w-14 2xl:h-20 2xl:mt-4">
                  <Image
                    src="/shapes/mugs.svg"
                    alt="mug"
                    width={14}
                    height={20}
                    objectFit="contain"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            <p className=" text-sm md:text-base 2xl:text-2xl text-[#141414] font-medium mt-4 2xl:mt-6">
              from{" "}
              <span className=" bg-gradient-to-r from-green-700 via-red-800 to-red-900 text-transparent bg-clip-text">
                Bangladesh,
              </span>{" "}
              working
              <span className="text-[#2EC2F1]"> globally</span>.
            </p>
          </div>
          {/* Image section */}
          <div className=" flex flex-col">
            <div className=" mx-auto">
              <HeroImage />
            </div>
            <div className=" flex flex-row justify-center sm:justify-end md:justify-center gap-4 mt-6">
              <p>Follow me on:</p>
              <div className=" flex flex-row items-center gap-4">
                <Image
                  src="/linkedin 1.svg"
                  alt="linkedin"
                  width="20"
                  height="20"
                  className=" cursor-pointer"
                />
                <Image
                  src="/medium (1).svg"
                  alt="meduim"
                  width="24"
                  height="24"
                  className=" cursor-pointer"
                />
                <Image
                  src="/behance 3.svg"
                  alt="behance"
                  width="24"
                  height="24"
                  className=" cursor-pointer"
                />
                <Image
                  src="/instragram 1.svg"
                  alt="instragram"
                  width="20"
                  height="20"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 right-0 z-10">
        <Blur />
      </div>
    </section>
  );
};

export default HeroSection;
