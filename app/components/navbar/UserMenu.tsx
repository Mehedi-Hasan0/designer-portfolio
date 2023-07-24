"use client";

import Image from "next/image";

const UserMenu = () => {
  return (
    <div className=" flex flex-row items-center gap-3 sm:gap-5 md:gap-7 lg:gap-10">
      <div className=" md:flex flex-row items-center gap-2 hidden">
        <p className=" text-sm md:text-base text-[#141414] underline">
          shikh001@gmail.com
        </p>
        <Image src="/icons/mail.svg" alt="email" width="18" height="18" />
      </div>
      <div className="bg-[#F64749] rounded-full p-2 xl:p-3 cursor-pointer hover:shadow-md">
        <Image src="/icons/menubar.svg" width="24" height="24" alt="menu" />
      </div>
    </div>
  );
};

export default UserMenu;
