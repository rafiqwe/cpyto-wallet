import chrome from "@/public/images/Google_Chrome.svg.webp";
import app from "@/public/images/arc.png";
import firefox from "@/public/images/firefox_icon.png";
import Image from "next/image";
import Link from "next/link";

const AppsIcon = ({ bgColor }: { bgColor: string }) => {
  const icons = [
    { icon: chrome, href: "https://chromewebstore.google.com/" },
    { icon: app, href: "https://arc.net/" },
    { icon: firefox, href: "https://www.mozilla.org/en-US/firefox/new/" },
  ];
  return (
    <div className="flex items-center  ">
      {icons.map((item, index) => (
        <Link href={item.href} key={index}>
          <div
            className={`w-13 h-13 border border-gray-400 relative flex items-center justify-center  rounded-2xl mt-8 ${bgColor}  ${
              index % 2 === 0 ? "rotate-2" : "-rotate-2"
            }`}
          >
            <Image
              src={item.icon}
              alt="icon"
              width={34}
              height={34}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AppsIcon;
