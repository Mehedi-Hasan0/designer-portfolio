import Image from "next/image";

const AboutInfo = () => {
  return (
    <section className="mb-16 md:mb-28">
      <div className=" flex flex-col gap-7 text-[#141414] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
        <p className=" ">
          I’m <span className="text-[#F64749]"> Sheikh</span> a Curious
          Researcher, designer and creativity enthusiast. currently working
          Physically from Dhaka, Bangladesh. I like making the web a more
          connected and less boring place
        </p>
        <p>
          I currently work at <span className="text-[#F64749]">Google</span> as
          UX/UI Designer — where I create UX/UI, Work with designers, maintain
          our design system, sit on the team Brainstorming, and oversee our
          design strategy.
        </p>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="flex flex-row items-center gap-3">
          <p className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
            Currently
          </p>
          <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
            <Image
              src="/aboutIcons/currently 1.svg"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className=" md:mt-7 mt-3 flex flex-col gap-2 text-base sm:text-lg md:text-xl xl:text-2xl font-medium">
          <p>
            UX/UI Designer At - <span className="text-[#F64749]">Google</span>
          </p>
          <p>
            Joined: November 14 - 2022 to{" "}
            <span className="text-[#0FC500]">Now!</span>
          </p>
        </div>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="flex flex-row items-center gap-3">
          <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
            Education
          </p>
          <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
            <Image
              src="/aboutIcons/eduation 1.svg"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="md:mt-7 mt-3 flex flex-col gap-2 text-base sm:text-lg md:text-xl xl:text-2xl font-medium">
          <p>
            Bsc. Computer Science & Engineering -
            <span className="text-[#F64749]"> DU</span>
          </p>
          <p>2017 - 2021</p>
        </div>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="flex flex-row items-center gap-3">
          <p className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
            Digital Capabilities
          </p>
          <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
            <Image
              src="/aboutIcons/capabilities 1.svg"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className=" mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-5 text-2xl font-medium">
          <div className=" flex justify-center items-center px-4 py-6 bg-[#FFE3E6] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/website 1.png"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#E1FAED] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/android&ios 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#DEF6FA] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/Strategy 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#F1E6B8] rounded-lg">
            <div className="relative w-[103px] h-[108px]">
              <Image
                src="/aboutIcons/ProblemSolve 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={103}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#FFEFE4] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/Research 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#EBEAFF] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/Dashboard 3.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="flex flex-row items-center gap-3">
          <p className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
            Certificate
          </p>
          <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
            <Image
              src="/aboutIcons/certificate 1.svg"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className=" mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-5 text-2xl font-medium">
          <div className=" flex justify-center items-center px-4 py-6 bg-[#FFE3E6] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/Mask group.png"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="flex flex-row items-center gap-3">
          <p className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
            Fun Fact
          </p>
          <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
            <Image
              src="/aboutIcons/funfact 1.png"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className=" mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-5 text-2xl font-medium">
          <div className=" flex justify-center items-center px-4 py-6 bg-[#FFE3E6] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/adventure 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#E1FAED] rounded-lg">
            <div className="relative w-[180px] h-[60px]">
              <Image
                src="/aboutIcons/animal 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={180}
                height={60}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#DEF6FA] rounded-lg">
            <div className="relative w-[124px] h-[108px]">
              <Image
                src="/aboutIcons/music 1.png"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={124}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#F1E6B8] rounded-lg">
            <div className="relative w-[162px] h-[80px]">
              <Image
                src="/aboutIcons/learning 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={161}
                height={80}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#FFEFE4] rounded-lg">
            <div className="relative w-[124px] h-[108px]">
              <Image
                src="/aboutIcons/food 1.svg"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={124}
                height={108}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center px-4 py-6 bg-[#EBEAFF] rounded-lg">
            <div className="relative w-[160px] h-[108px]">
              <Image
                src="/aboutIcons/game 1.png"
                alt="illustration"
                layout="responsive"
                objectFit="contain"
                width={160}
                height={108}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
