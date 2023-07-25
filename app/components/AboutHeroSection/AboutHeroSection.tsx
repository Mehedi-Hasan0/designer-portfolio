import Image from "next/image";
import Blur from "../Blur";
import HeroImage from "../HeroImage";

const AboutHeroSection = () => {
  return (
    <section className="pt-28 mb-16 md:mb-28 relative">
      <div className="absolute top-0 left-0 z-10">
        <Blur />
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center gap-3 text-2xl md:text-lg lg:text-3xl 2xl:text-4xl xl:justify-around relative">
        <div className=" flex flex-col justify-center md:justify-start gap-2 md:gap-24 2xl:gap-32">
          <div className="flex flex-row gap-2 md:ml-10">
            <div className="relative w-4 h-4 md:w-7 md:h-7 2xl:w-9 2xl:h-9">
              <Image
                src="/icons/user research 1.svg"
                alt="element"
                layout="responsive"
                objectFit="contain"
                width={40}
                height={40}
              />
            </div>
            <p className="text-[#101010] font-semibold">User research</p>
          </div>
          <div className="flex flex-row md:justify-start gap-2 mx-auto md:mx-0">
            <p className="text-[#101010] font-semibold">Consulting</p>
            <div className="relative w-7 h-7 2xl:w-9 2xl:h-9">
              <Image
                src="/icons/consulting 1.svg"
                alt="element"
                layout="responsive"
                objectFit="contain"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 md:ml-4 lg:ml-10">
            <div className="relative w-7 h-7 2xl:w-9 2xl:h-9">
              <Image
                src="/icons/productdesign 1.svg"
                alt="element"
                layout="responsive"
                objectFit="contain"
                width={40}
                height={40}
              />
            </div>
            <p className="text-[#101010] font-semibold">Product Design</p>
          </div>
        </div>
        <div className=" flex justify-center items-center mx-auto md:mx-0">
          <HeroImage />
        </div>
        <div className=" flex flex-col gap-2 md:gap-24 2xl:gap-32">
          <div className="flex md:flex-row gap-2 md:mr-10 mx-auto md:mx-0">
            <p className="text-[#101010] font-semibold">Visual design</p>
            <div className="relative w-7 h-7 2xl:w-9 2xl:h-9">
              <Image
                src="/icons/visual design 1.svg"
                alt="element"
                layout="responsive"
                objectFit="contain"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex flex-row md:justify-end gap-2 mx-auto md:mx-0">
            <div className="relative w-7 h-7 2xl:w-9 2xl:h-9">
              <Image
                src="/icons/prototype 1.svg"
                alt="element"
                layout="responsive"
                objectFit="contain"
                width={40}
                height={40}
              />
            </div>
            <p className="text-[#101010] font-semibold">Prototyping</p>
          </div>
          <div className="flex flex-row gap-2 md:mr-10">
            <p className="text-[#101010] font-semibold">Usability testing</p>
            <div className="relative w-7 h-7 2xl:w-9 2xl:h-9">
              <Image
                src="/icons/usability testing 1.svg"
                alt="element"
                layout="responsive"
                objectFit="contain"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <Blur />
      </div>
    </section>
  );
};

export default AboutHeroSection;
