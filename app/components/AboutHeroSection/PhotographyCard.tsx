import Image from "next/image";

const PhotographyCard = () => {
  return (
    <section>
      <div className="flex flex-row items-center gap-3">
        <p className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
          Photograph
        </p>
        <div className=" relative w-4 h-4 xl:w-7 xl:h-7">
          <Image
            src="/icons/photograph.svg"
            alt="currently"
            layout="responsive"
            objectFit="contain"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 lg:gap-10 mt-5 md:mt-7 mx-auto">
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
          <div className=" absolute top-1/2 -left-2 xl:-left-4 md:block hidden">
            <div className="relative w-5 h-5 xl:w-8 xl:h-8 rotate-180">
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
        <div className="relative max-w-xl">
          <Image
            src="/images/cardImage.png"
            alt="currently"
            layout="responsive"
            objectFit="contain"
            width={600}
            height={600}
            className="2xl:rounded-tr-[40px] 2xl:rounded-br-[40px] sm:rounded-tr-[20px] sm:rounded-br-[20px] md:rounded-tr-[30px] md:rounded-br-[30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotographyCard;
