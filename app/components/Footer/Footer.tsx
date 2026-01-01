import Image from "next/image";
import FallingStar from "./FallingStar";
import FooterStars from "./FooterStars";
import TopFooterText from "./TopFooterText";
import FooterBottomImage from "@/public/images/footer bg.png";

const Footer = () => {
  return (
    <div className="px-2 relative w-full h-full  ">
      <div className="overflow-hidden relative w-full h-full pb-20 bg-black rounded-4xl">
        <div className="w-full ">
          <div className="w-full mx-auto overflow-hidden flex relative items-center justify-center">
            <FooterStars />
            <div className="absolute   -left-50 -top-30 z-10 w-full h-200">
              <FallingStar />
            </div>
          </div>
        </div>
        <TopFooterText />
        <div className="w-full h-full absolute bottom-0 ">
          <Image
            src={FooterBottomImage}
            alt="footer bottom image"
            sizes="100vw"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
