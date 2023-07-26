import Image from "next/image";

const ContactInfo = () => {
  return (
    <section className="md:my-20 my-12 lg:py-20 py-16 bg-[#FFF6F7]">
      <div
        className=" flex flex-row justify-around 2xl:justify-evenly items-center gap-4 text-[#141414] font-medium 
      text-base  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
      >
        <div className=" flex flex-row gap-3 md:gap-5">
          <div className="relative w-5 h-5 lg:w-7 lg:h-7 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11">
            <Image
              src="/icons/download (2).svg"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={42}
              height={42}
            />
          </div>
          <div>
            <p>Download CV</p>
          </div>
        </div>
        <div className=" flex flex-row gap-3 md:gap-5">
          <div className="relative w-5 h-5 lg:w-7 lg:h-7 xl:w-9 xl:h-9 2xl:w-11 2xl:h-11">
            <Image
              src="/icons/mail.svg"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={42}
              height={42}
            />
          </div>
          <div>
            <p className=" underline">shikh001@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
