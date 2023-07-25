import Image from "next/image";
import GalleryHead from "./GalleryHead";

const GallerySection = () => {
  return (
    <section className=" py-8 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className=" flex flex-row gap-2 items-center text-[10px] sm:text-xs md:text-base 2xl:text-2xl text-[#F64749] font-semibold">
        <p>See Website</p>
        <div className=" w-2 h-2 2xl:w-3 2xl:h-3 smd:mt-1 relative">
          <Image
            src="/icons/linkIcon.svg"
            alt="link"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Heading */}
      <GalleryHead />
    </section>
  );
};

export default GallerySection;
