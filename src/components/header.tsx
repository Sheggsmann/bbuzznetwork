import React from "react";
import Image from "next/image";
import landingImg from "@/assets/landing.jpg";
import styles from "@/styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="w-full h-fit py-16 md:py-0 md:h-[280px] flex items-center relative">
      <Image
        src={landingImg}
        alt="landing image"
        className="w-full h-[100%] object-cover absolute top-0 left-0 right-0"
      />
      <div className="absolute top-0 left-0 right-0 w-full h-[100%] z-10 bg-black/60"></div>
      <div className={`${styles.paddingX} z-20`}>
        <div className={`${styles.boxWidth} z-20 mx-auto`}>
          <h1 className="text-3xl text-white font-bold">{title}</h1>
          <p className="text-white mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
