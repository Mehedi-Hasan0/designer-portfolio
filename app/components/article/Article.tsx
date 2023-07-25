import ArticleCard from "./ArticleCard";
import ArticleHead from "./ArticleHead";

const Article = () => {
  return (
    <>
      <section className=" pb-10 md:pb-16 xl:20 2xl:pb-28">
        {/* heading */}
        <ArticleHead />
        {/* cards */}
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-12 md:16 xl:mt-20 sm:px-8 md:px-0">
          <ArticleCard
            label="UX/UI Design Process"
            rotate="-1.57deg"
            bgColor="#FFE3E6"
          />
          <ArticleCard
            label="What is Design Thinking Process?"
            rotate="1.73deg"
            bgColor="#E1FAED"
          />
          <ArticleCard
            label="Color Psychology: a brilliant helping"
            rotate="-2.3deg"
            bgColor="#F1E6B8"
          />
          <ArticleCard
            label="What’s a Design Sprint"
            rotate="1.9deg"
            bgColor="#EBEAFF"
          />
        </div>
      </section>
      <hr className=" h-[1px] bg-[#C2C2C2]  mb-10 md:mb-16 2xl:mb-28" />
    </>
  );
};

export default Article;
