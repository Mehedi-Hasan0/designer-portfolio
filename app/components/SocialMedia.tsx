import Image from "next/image";

const SocialMedia = () => {
  return (
    <>
      <p className=" text-xs lg:text-sm">Follow me on:</p>
      <div className=" flex flex-row items-center gap-4">
        <div className=" w-3 h-3 2xl:w-5 2xl:h-5 relative">
          <Image
            src="/linkedin 1.svg"
            alt="linkedin"
            layout="fill"
            objectFit="cover"
            className=" cursor-pointer"
          />
        </div>
        <div className=" w-4 h-4 2xl:w-6 2xl:h-6 relative">
          <Image
            src="/medium (1).svg"
            alt="meduim"
            layout="fill"
            objectFit="cover"
            className=" cursor-pointer"
          />
        </div>
        <div className=" w-4 h-4 2xl:w-6 2xl:h-6 relative">
          <Image
            src="/behance 3.svg"
            alt="behance"
            layout="fill"
            objectFit="cover"
            className=" cursor-pointer"
          />
        </div>
        <div className=" w-3 h-3 2xl:w-5 2xl:h-5 relative">
          <Image
            src="/instragram 1.svg"
            alt="instragram"
            layout="fill"
            objectFit="cover"
            className=" cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
