import chrome from "@/public/images/Google_Chrome.svg.webp";
import app from "@/public/images/arc.png";
import firefox from "@/public/images/firefox_icon.png";
import Image from "next/image";

const AppsIcon = ({ bgColor }: { bgColor: string }) => {
  const icons = [chrome, app, firefox];
  return (
    <div className="flex items-center  ">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`w-13 h-13 border border-gray-400 relative flex items-center justify-center  rounded-2xl mt-8 ${bgColor}  ${
            index % 2 === 0 ? "rotate-2" : "-rotate-2"
          }`}
        >
          <Image
            src={icon}
            alt="icon"
            width={34}
            height={34}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default AppsIcon;
