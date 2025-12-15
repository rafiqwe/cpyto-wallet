import Image from "next/image";
import React from "react";
import glow from "@/public/images/Glow.png";
import device from "@/public/images/Device.png";
import image1 from "@/public/images/Image-01.png";
import image2 from "@/public/images/Image-02.png";
import image3 from "@/public/images/Image-03.png";
import image4 from "@/public/images/Image-04.png";
import image5 from "@/public/images/Image-05.png";
import image6 from "@/public/images/Image-06.png";

const BottomHero = () => {
  const Images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="relative -top-25 ">
      <div className="h-[110vh] relative ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full overflow-hidden w-[600px] h-[600px] blur-[100px]">
          <Image
            src={glow}
            alt="glow image"
            fill
            className="object-contain rounded-full"
          />
        </div>

        <div className="absolute hidden md:block inset-0 z-0 w-full h-full">
          {Images.map((imag, index) => {
            const positions = [
              "top-20 left-20",
              "top-20 right-20",
              "top-1/2 left-10 -translate-y-1/2",
              "top-1/2 right-10 -translate-y-1/2",
              "bottom-40 left-20",
              "bottom-40 right-20",
            ];

            return (
              <div
                key={index}
                className={`absolute  w-24 h-24 ${positions[index] || "hidden"}`}
              >
                <Image
                  src={imag}
                  fill
                  alt="items image"
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="z-5 ">
          <Image
            src={device}
            alt="glow image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
