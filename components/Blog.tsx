import Image from "next/image";
import React from "react";

function Blog() {
  return (
    <div className="max-w-[75rem] mx-auto flex flex-col max-xl:px-2 ">
      <div className="max-xl:px-9">
        <p className=" text-center font-bold text-[34px] leading-[50px] tracking-tight">
          Popular blog post we update everyday
        </p>
        <p className=" text-center font-normal mt-5 mb-24 text-base leading-7 mx-auto max-w-[527px]">
          Focus only on the meaning, we take care of the design. As soon as the
          meeting end you can export in one click.
        </p>
      </div>
      <div className="flex gap-8 max-xl:flex-wrap max-xl:justify-center max-xl:px-2 ">
        <div className="flex flex-col gap-6 max-md:text-center">
          <Image
            src="/images/pic1.png"
            width={375}
            height={270}
            className="object-cover rounded-md"
            alt="Picture of the logo image"
          />
          <p className="text-[#0F2137] font-bold text-xl leading-9  ">
            How to work with prototype design <br />
            with adobe xd featuring tools
          </p>
          <p className="opacity-60 leading-7">
            The 2019 Innovation by Design Awards <br /> honor the designers and
            businesses solving <br />
            the problems of today and tomorrow. It is <br /> one of the most
            sought-after design
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="hover border-blue-800 bg-[#FBF5F1] rounded-sm p-7 max-md:text-center text-xl">
            <p className="text-[#0F2137] font-bold leading-9  ">
              Antibias receives honorable gift <br /> mention at Fast Company’s
              most <br /> Innovation by Design Awards
            </p>
          </div>
          <Image
            src="/images/pic2.png"
            width={375}
            height={170}
            className="object-cover rounded-md"
            alt="Picture"
          />
          <p className="text-[#0F2137] font-bold text-xl leading-9 ">
            Multiple arbard prototype with Figma
          </p>
          <p className="opacity-60 leading-7">
            Beyond launched antibias, a Chrome extension <br /> that replaces
            LinkedIn profile photos
          </p>
        </div>
        <div className=" flex flex-col  gap-7">
          <Image
            src="/images/pic3.png"
            width={375}
            height={230}
            className="object-cover rounded-md"
            alt="Picture"
          />
          <Image
            src="/images/pic4.png"
            width={375}
            height={230}
            className="object-cover rounded-md"
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
