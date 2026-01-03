import { Instagram, Linkedin, LucideTwitter, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const ActualFooter = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Guides",
      href: "/guides",
    },
    {
      name: "Support",
      href: "/support",
    },
    {
      name: "404",
      href: "/404",
    },
  ];
  const socialIcons = [
    {
      name: "Twitter",
      icons: <LucideTwitter />,
      href: "https://twitter.com",
    },
    {
      name: "Linkedin",
      icons: <Linkedin />,
      href: "https://linkedin.com",
    },
    {
      name: "Instagram",
      icons: <Instagram />,
      href: "https://instagram.com",
    },
  ];
  return (
    <footer className=" mt-50 border-t border-slate-600 text-white h-full w-full rounded-none px-10 relative bottom-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
      <div className="flex items-center justify-between flex-col md:flex-row w-full h-full">
        <div className="flex-1 md:border-r border-none mb-10 md:mb-0 border-slate-400 ">
          <ul className=" flex flex-col gap-3 py-7">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <li className="text-lg font-bold font-sans">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="md:px-7  pb-10">
          <div>
            <div className="flex items-center justify-between w-[80%] md:w-full mx-auto">
              <h2 className="text-lg font-semibold font-sans">Stay in touch</h2>
              <div className="flex items-center gap-4 text-gray-500">
                {socialIcons.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <li className="text-lg font-bold text-white font-sans list-none">
                      {item.icons}
                    </li>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-[70%] md:w-full ">
              <form className="flex gap-10 p-1 bg-black text-white rounded-2xl border border-gray-500 mt-5 ">
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="md:px-5 px-3 md:py-2 outline-none w-48 md:w-full  text-lg font-semibold font-sans "
                />
                <button
                  type="submit"
                  className=" py-2 bg-white text-black md:px-12 px-6 md:text-lg text-sm font-semibold font-sans rounded-2xl cursor-pointer ml-10 "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ActualFooter;
