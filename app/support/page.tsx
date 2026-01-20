import React from "react";
import SupportForm from "../components/support/SupportForm";

const page = () => {
  return (
    <section className=" my-20 md:h-screen h-full  w-full">
      <div className="flex items-center  flex-col h-full w-full">
        <div className="flex text-center mt-20 flex-col items-center justify-center w-full ">
          <h3 className="font-semibold bg-black text-white px-3 py-1 mb-3 rounded-full">Get help</h3>
          <h4 className="text-black font-bold text-5xl md:w-1/2 w-full">Get support or Share Your Feedback</h4>
        </div>
        <SupportForm />
      </div>
    </section>
  );
};

export default page;
