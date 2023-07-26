"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className=" relative w-8 h-5 md:w-[43px] md:h-[20px] mb-[6px] md:mb-0">
      <Image
        src="/images/logo.png"
        width={43}
        height={20}
        layout="responsive"
        objectFit="contain"
        alt="Logo"
        onClick={() => {
          router.push("/");
        }}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Logo;
