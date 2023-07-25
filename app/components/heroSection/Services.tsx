import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className=" text-[8px] sm:text-xs md:text-base lg:text-xl 2xl:text-3xl text-[#141414] font-semibold pb-10 md:pb-16 2xl:pb-28 relative h-[90px] z-10">
        <div className=" bg-gradient-to-r from-[#F64749] to-[#2EC2F1] h-[40px] md:h-[50px] 2xl:h-[90px] rotate-[3deg] top-7 sm:top-8 2xl:top-8 relative z-10 opacity-50 w-[99%] mx-auto"></div>
        <div
          className=" bg-white mx-[0.5%] 2xl:px-28 xl:px-24 md:px-12 sm:px-9 px-1 absolute top-1/3 z-20 py-3 2xl:py-7 border border-[#F64749] w-[99%] flex felx-row justify-between items-center 
        gap-1 sm:gap-3 md:gap-0"
        >
          <div>
            <p>Product Design</p>
          </div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 relative">
            <Image
              src="/icons/plus.svg"
              layout="fill"
              objectFit="cover"
              alt="plus"
            />
          </div>
          <div>
            <p>App Design</p>
          </div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 relative">
            <Image
              src="/icons/plus.svg"
              layout="fill"
              objectFit="cover"
              alt="plus"
            />
          </div>
          <div>
            <p>Web Design</p>
          </div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 relative">
            <Image
              src="/icons/plus.svg"
              layout="fill"
              objectFit="cover"
              alt="plus"
            />
          </div>
          <div>
            <p>Strategy</p>
          </div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 relative">
            <Image
              src="/icons/plus.svg"
              layout="fill"
              objectFit="cover"
              alt="plus"
            />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
