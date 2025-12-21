"use client";

import TopHero from "./TopHero";
import BottomHero from "./BottomHero";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import BottomTextHero from "./BottomTextHero";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const HeroTextRef = useRef<HTMLHeadingElement>(null);
  const ImagesRef = useRef<HTMLDivElement>(null);
  const TopRef = useRef<HTMLDivElement>(null);
  const BottomRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: TopRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      animation: gsap.to(HeroTextRef.current, {
        opacity: 0,
        scale: 0.4,
        duration: 3,
        ease: "power3.out",
      }),
    });
    ScrollTrigger.create({
      trigger: BottomRef.current,
      start: "top 50%",
      end: "bottom top",
      scrub: true,
      animation: gsap.fromTo(
        ImagesRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 3,
          ease: "power3.out",
        },
        {
          opacity:1,
          scale: 1.6,
          duration: 3,
          ease: "power3.out",
        }
      ),
    });
  });
  return (
    <div className="w-full h-full">
      <TopHero TopRef={TopRef} HeroTextRef={HeroTextRef} />
      <BottomHero BottomRef={BottomRef} ImagesRef={ImagesRef} />
      <BottomTextHero/>
    </div>
  );
};

export default Hero;
