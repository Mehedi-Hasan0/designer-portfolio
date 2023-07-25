import Image from "next/image";

const ArticleHead = () => {
  return (
    <div className=" flex flex-col gap-2 xl:gap-5 justify-center items-center">
      <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-semibold">
        <div className="inline-block relative">
          <h1>Writing</h1>
          <div className=" absolute top-1 -right-3 md:top-1 md:-right-5 2xl:top-2 2xl:-right-8">
            <div className=" relative w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 2xl:w-14 2xl:h-14">
              <Image
                src="/icons/shapeRed.svg"
                alt="shape"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sub head */}
      <div className=" font-medium text-center text-[10px] sm:text-sm md:text-base lg:text-xl 2xl:text-2xl ">
        <p>Sometimes write about design & development</p>
      </div>
    </div>
  );
};

export default ArticleHead;
