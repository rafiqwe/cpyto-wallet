import React from "react";
import SecurityText from "./SecurityText";
import SecurityImage from "./SecurityImage";
import Image from "next/image";
import bgImage from "@/public/images/hero-bg-image.png";

const Security = () => {
  return (
    <div className="w-full py-40 relative h-full px-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <SecurityText />
        </div>
        <div className="bg-black rounded-3xl w-full h-130 p-15 relative overflow-hidden ">
          <div className="relative z-10 w-full h-full">
            <SecurityImage />
            <div className="bg-gray-400 w-full h-full absolute top-0 left-0 z-5 blur-xl"></div>
          </div>
          <div className="absolute opacity-50 top-0 left-0 w-full h-full">
            <Image
              src={bgImage}
              alt="security bg image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
