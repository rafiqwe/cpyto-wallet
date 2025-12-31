import Image, { StaticImageData } from "next/image";
import React from "react";

export const ExploreCoinCard = ({
  idx,
  item,
}: {
  idx: number;
  item: {
    title: string;
    coinsIcons: (string | StaticImageData)[];
  };
}) => {
  return (
    <div
      className={`
        relative p-6 w-full rounded-3xl
        bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]
        ${idx % 2 === 0 ? "rotate-[1deg]" : "-rotate-[1deg]"}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition duration-500" />

      {/* Icons */}
      <div className="relative flex items-center gap-4">
        {item.coinsIcons.map((icon, index) => (
          <div
            key={index}
            className="
              relative h-14 w-14 rounded-xl
              bg-black/40 backdrop-blur
              border border-white/10
              flex items-center justify-center
              transition duration-300
              hover:scale-110
            "
          >
            <Image src={icon} alt="coin" fill className="object-contain p-2" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <h3 className="text-xl font-semibold text-white tracking-wide">
          {item.title}
        </h3>
        <p className="text-sm text-neutral-400 mt-1">
          Explore market insights & trends
        </p>
      </div>
    </div>
  );
};
