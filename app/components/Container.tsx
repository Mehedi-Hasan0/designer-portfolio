"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto 2xl:px-28 xl:px-24 md:px-12 sm:px-9 px-5">
      {children}
    </div>
  );
};

export default Container;
