import React from "react";
import GoBackHome from "./GoBack";

const NotFoundAndThanksText = ({ title }: { title: string }) => {
  return (
    <div className="md:h-[80vh] h-[65vh] flex flex-col justify-center items-center w-full">
      <h1 className="xl:text-7xl text-center md:text-6xl lg:text-5xl text-4xl font-bold">
        {title}
      </h1>
      <GoBackHome />
    </div>
  );
};

export default NotFoundAndThanksText;
