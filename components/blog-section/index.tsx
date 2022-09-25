import React from "react";
import Image from "next/future/image";
import BorderLineButton from "../common/button/BorderLineButton";
import { blogData } from "content";

const index = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-5 mb-[3.25rem] mt-28">
        <h1 className="text-5xl font-semibold">Get smarter, with our blog.</h1>
        <BorderLineButton onClick={() => {}}>
          <span>See all posts</span>
        </BorderLineButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] mb-10 md:mb-40">
        {blogData.map((blog) => (
          <div key={blog.id} className="mb-4">
            <Image
              className="rounded-2xl w-full"
              src={blog.image}
              alt={blog.alt}
              width={416}
              height={251}
            />
            <div className="pt-4">
              <span className="inline-block text-black bg-gray-100 rounded-full px-4 py-1 text-[14px]">
                {blog.tags}
              </span>
              <div className="pt-4 w-11/12">
                <div className="font-semibold text-3xl mb-2">{blog.title}</div>
                <p className="text-[#565656]">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
