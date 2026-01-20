"use client";
import { BlogData } from "@/app/data/BlogData";
import { ArrowLeftCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogRender } from "@/app/components/guide/BlogRender";

import { BlogContent } from "@/app/data/Blogtype";

const page = () => {
  const params = useParams();
  const [blogData, setblogData] = useState<BlogContent>();
  useEffect(() => {
    const blog = BlogData.find((blog) => blog.slug === params.slug);
    setblogData(blog);
  }, []);

  return (
    <article className="mb-30 md:px-14 px-3 relative ">
      <div className="pt-10 z-31 hidden md:block absolute  top-5 left-3 cursor-pointer ">
        <Link href="/guide">
          <p className="flex items-center gap-2 bg-gray-200 cursor-pointer  rounded-3xl px-6 py-2  ">
            <ArrowLeftCircle size={18} />
            Articles
          </p>
        </Link>
      </div>
      <div className="pt-40 w-full">
        {/* <div className="flex gap-2 flex-col items-center">
          <h2 className="text-2xl font-semibold">
            author : {blogData?.author}
          </h2>
          <h2 className="text-2xl font-semibold">
            authorPosition : {blogData?.authorPosition}
          </h2>
        </div> */}
        <div>
          <h1 className="lg:text-7xl w-full text-3xl md:text-5xl w-[700px] mx-auto font-bold text-center">
            {blogData?.title}
          </h1>
          <p className="text-gray-500 text-center pt-10 font-semibold ">
            Date: {blogData?.data}
          </p>
        </div>
        <div className="w-full h-[600px] relative mt-20 mb-13">
          {blogData?.image && (
            <Image
              src={blogData.image}
              alt="blog image"
              fill
              className="md:object-cover object-contain rounded-3xl"
            />
          )}
        </div>
        {/* Contents here */}
        <BlogRender content={blogData?.content ?? []} />
      </div>
    </article>
  );
};

export default page;
