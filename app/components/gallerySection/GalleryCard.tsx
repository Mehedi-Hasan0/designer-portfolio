import Image from "next/image";

interface GalleryCardProps {
  label: string;
  bgColor: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ label, bgColor }) => {
  const bg = { backgroundColor: bgColor };
  return (
    <div
      className=" px-3 pt-2 pb-5 2xl:px-6 2xl:pt-4 2xl:pb-9 rounded-xl mx-6 sm:mx-0"
      style={bg}
    >
      <div className=" relative">
        <Image
          src="/images/galleryImage.png"
          alt="gallery"
          layout="responsive"
          objectFit="contain"
          width={600}
          height={800}
        />
      </div>
      <div className=" pt-4 2xl:pt-10 xl:max-w-[420px] 2xl:max-w-[450px] ml-3 xl:ml-6 2xl:ml-8">
        <div className=" flex flex-col gap-2 2xl:gap-6">
          <h4 className=" text-[#101010] text-xl 2xl:text-3xl font-semibold ">
            A Selection Of
          </h4>
          <p className=" text-[#141414] text-sm 2xl:text-xl">{label}</p>
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
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
