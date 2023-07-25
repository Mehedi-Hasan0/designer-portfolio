import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="">
      <div className=" relative">
        <div className="w-[185px] h-[290px] md:w-[220px] md:h-[360px] lg:w-[250px] lg:h-[390px] 2xl:w-[380px] 2xl:h-[579px] border border-[#2EC2F1] rounded-full flex justify-center items-center">
          <div className="w-[175px] h-[280px] md:w-[210px] md:h-[350px] lg:w-[240px] lg:h-[380px] 2xl:w-[370px] 2xl:h-[569px] rounded-full relative">
            <Image
              src="/images/HeroImage.png"
              alt="Hero image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-[185px] h-[290px] md:w-[210px] md:h-[350px] lg:w-[250px] lg:h-[390px] 2xl:w-[380px] 2xl:h-[579px] rounded-full flex justify-center items-center absolute top-0 -z-10 rotate-45 bg-gradient-to-bl from-[#F64749] to-[#2EC2F1]">
          <div className="w-[184px] h-[289px] md:w-[209px] md:h-[349px] lg:w-[249px] lg:h-[389px] 2xl:w-[379px] 2xl:h-[578px] rounded-full flex justify-center items-center bg-white">
            <div className="w-[175px] h-[280px] md:w-[200px] md:h-[340px] lg:w-[240px] lg:h-[380px] 2xl:w-[370px] 2xl:h-[569px] rounded-full bg-gradient-to-bl from-[#F64749] to-[#ffffff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
