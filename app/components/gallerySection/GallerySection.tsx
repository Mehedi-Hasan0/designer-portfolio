import Image from "next/image";
import GalleryCard from "./GalleryCard";
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
      {/* cads */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10 mt-20">
        <GalleryCard
          label="A selection of provides quality dental care to the
patients."
          bgColor="#FFE3E6"
        />
        <GalleryCard
          label="A selection of is a safe, reliable, and efficient
elevator/lift maintenance service Provider."
          bgColor="#E1FAED"
        />
        <GalleryCard
          label="A selection of is a  medical services for workers's
compensation and personal injury patients."
          bgColor="#DEF6FA"
        />
        <GalleryCard
          label="A selection of is a global chauffeured travel service. it
deliver service for 67 countries."
          bgColor="#F1E6B8"
        />
        <GalleryCard
          label="A selection of is a Wellness & Event Management
Solutions."
          bgColor="#FFEFE4"
        />
        <GalleryCard
          label="A selection of is Solutions for make document or maintain
documentation."
          bgColor="#EBEAFF"
        />
      </div>
      <div className=" pt-8 lg:pt-16 2xl:pt-20 flex justify-center">
        <div className=" flex flex-row gap-2 items-center text-[10px] sm:text-xs md:text-base 2xl:text-2xl text-[#F64749] font-semibold">
          <p>See All Work Here</p>
          <div className=" w-2 h-2 2xl:w-3 2xl:h-3 smd:mt-1 relative">
            <Image
              src="/icons/linkIcon.svg"
              alt="link"
              layout="responsive"
              objectFit="contain"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
