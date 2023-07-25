import Image from "next/image";

interface ArticleCardProps {
  label: string;
  rotate: string;
  bgColor: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  label,
  rotate,
  bgColor,
}) => {
  const rotateAndColorProps = {
    rotate: rotate,
    backgroundColor: bgColor,
  };
  return (
    <div
      className=" flex justify-center items-center py-16 lg:py-24 xl:py-28 2xl:py-40 px-5 sm:px-10 rounded-[20px] bg-blue-300 sm:mx-5 md:sm-12 lg:mx-0 rotate__comp"
      style={rotateAndColorProps}
    >
      <div style={rotateAndColorProps}>
        <div className=" flex flex-col gap-2">
          <h4 className=" text-[#141414] xl:text-xl 2xl:text-2xl font-semibold">
            {label}
          </h4>
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

export default ArticleCard;
