import Image from "next/image";

const ExploreCard = () => {
  return (
    <section className="">
      <div className="flex flex-row items-center gap-3">
        <p className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
          Explore Sheikh
        </p>
        <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
          <Image
            src="/images/explore.svg"
            alt="currently"
            layout="responsive"
            objectFit="contain"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 lg:gap-10 mt-5 md:mt-7 mx-auto">
        <div className="relative max-w-xl">
          <Image
            src="/images/cardImage.png"
            alt="currently"
            layout="responsive"
            objectFit="contain"
            width={600}
            height={600}
            className="2xl:rounded-tl-[40px] 2xl:rounded-bl-[40px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] md:rounded-tl-[30px] md:rounded-bl-[30px]"
          />
        </div>
        <div className="relative max-w-xl">
          <Image
            src="/images/cardImage.png"
            alt="currently"
            layout="responsive"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div className=" relative">
          <div className="relative max-w-xl">
            <Image
              src="/images/cardImage.png"
              alt="currently"
              layout="responsive"
              objectFit="contain"
              width={600}
              height={600}
            />
          </div>
          <div className=" absolute top-1/2 -right-2 xl:-right-4 md:block hidden">
            <div className="relative w-5 h-5 xl:w-8 xl:h-8">
              <Image
                src="/icons/next.svg"
                alt="currently"
                layout="responsive"
                objectFit="contain"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCard;
