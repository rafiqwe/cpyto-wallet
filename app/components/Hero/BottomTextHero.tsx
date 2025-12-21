import Image from "next/image";
import icons from "@/public/images/logotemplate_4x@4x.png";
import Link from "next/link";
const BottomTextHero = () => {
  return (
    <div className="relative z-10 max-h-50 -top-20  w-full h-44 min-h-35 ">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-xl w-1/3 text-center ">
          From transactions to dapps — explore every corner of the Bitcoin
          universe with ease.
        </h2>
        <Link href={"https://www.apple.com/app-store/"} target="_blank">
          <button className="px-7 py-3 rounded-2xl bg-orange-500 text-white font-bold  cursor-pointer">
            Download for free
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col mt-7 font-bold">
        <div>
          {/* <Image src={icons} alt="icons" fill className="object-contain" /> */}
        </div>
        <h3>Also available in browsers</h3>
      </div>
    </div>
  );
};

export default BottomTextHero;
