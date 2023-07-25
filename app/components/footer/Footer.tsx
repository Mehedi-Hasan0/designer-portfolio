import Image from "next/image";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  return (
    <footer className=" py-8 sm:py-10 md:py-16 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* texts */}
        <div className=" flex flex-col text-[#141414] max-w-[90%] gap-2 lg:gap-5 mx-auto lg:mx-0">
          <p className=" text-sm lg:text-base">
            Still curious about how to bring those imaginative thoughts to life?
          </p>
          <h1 className=" text-3xl xl:text-4xl 2xl:text-6xl font-semibold leading-normal lg:leading-relaxed xl:leading-relaxed">
            Let me make your own story for you
          </h1>
          <div className=" flex flex-row items-center gap-2">
            <SocialMedia />
          </div>
        </div>
        {/* arrows */}
        <div className=" grid grid-cols-2 gap-4 lg:gap-8 mx-auto">
          <div className=" flex flex-row items-center gap-5">
            <div className=" w-10 relative">
              <Image
                src="/footerIcons/arrow-1 4.svg"
                alt="arrow"
                layout="responsive"
                objectFit="contain"
                width={45}
                height={45}
              />
            </div>
            <div className="w-10">
              <Image
                src="/footerIcons/arrow-1 3.svg"
                alt="arrow"
                layout="responsive"
                objectFit="contain"
                width={50}
                height={50}
              />
            </div>
            <div className=" w-10">
              <Image
                src="/footerIcons/arrow-1 2.svg"
                alt="arrow"
                layout="responsive"
                objectFit="contain"
                width={55}
                height={55}
              />
            </div>
            <div className=" w-10">
              <Image
                src="/footerIcons/arrow-1 1.svg"
                alt="arrow"
                layout="responsive"
                objectFit="contain"
                width={60}
                height={60}
              />
            </div>
          </div>
          {/* shape */}
          <div className="relative mx-auto">
            <div className="">
              <div className=" w-24 h-24 md:w-32 md:h-32 relative -z-10">
                <Image
                  src="/shapeFooter.svg"
                  alt="shape"
                  layout="responsive"
                  objectFit="contain"
                  width={264}
                  height={242}
                />
              </div>
            </div>
            <div className=" w-12 h-12 md:w-16 md:h-16 top-6 left-7 md:top-8 md:left-9 absolute z-10">
              <Image
                src="/footerIcons/mail 1.svg"
                alt="shape"
                layout="responsive"
                objectFit="contain"
                width={80}
                height={80}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
