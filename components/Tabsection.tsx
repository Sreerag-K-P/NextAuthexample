import Image from "next/image";
import React from "react";

function Tabsection() {
  return (
    <div className="max-w-[75rem] mx-auto flex flex-col">
      <div className="border-b flex gap-16 justify-center max-xl:flex-col max-xl:px-5 max-xl:text-center">
        <h2 className="font-bold text-[#0F2137] h-16 border-b-2 border-[#A17857] text-[20px]">
          Why you choose our service?
        </h2>
        <h2 className="font-bold text-[#0F2137] h-16 text-[20px] max-xl:hidden">
          What’s our business promise?
        </h2>
        <h2 className="font-bold text-[#0F2137] h-16 text-[20px] max-xl:hidden">
          What’s our role model plan?
        </h2>
      </div>
      <div className="flex py-24 max-xl:flex-col max-xl:px-2">
        <div className="w-1/2 max-xl:w-full">
          <div className="flex flex-col w-5/6 max-xl:mx-auto">
            <span className="font-bold text-[40px] max-xl:text-[25px]">
              We will turn your idea in the successful business model framework
              <Image
                src="/images/emoji.png"
                width={44}
                height={49}
                className="object-cover inline ps-2"
                alt="Picture of the menu icons"
              />
            </span>
            <span className="font-normal text-lg leading-10 mt-4 ">
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </span>
            <div className="grid grid-cols-2 text-[#02073E] font-medium text-base gap-5 my-5 w-5/6 max-xl:grid-cols-1">
              <span>
                <Image
                  src="/images/tick.png"
                  width={24}
                  height={24}
                  className="object-cover inline ps-2"
                  alt="Picture of the menu icons"
                />
                {"  "}
                Medical and vision
              </span>
              <span>
                <Image
                  src="/images/tick.png"
                  width={24}
                  height={24}
                  className="object-cover inline ps-2"
                  alt="Picture of the menu icons"
                />
                {"  "}
                Life insurance
              </span>
              <span>
                <Image
                  src="/images/tick.png"
                  width={24}
                  height={24}
                  className="object-cover inline ps-2"
                  alt="Picture of the menu icons"
                />
                {"  "}
                HSAs and FSAs
              </span>
              <span>
                <Image
                  src="/images/tick.png"
                  width={24}
                  height={24}
                  className="object-cover inline ps-2"
                  alt="Picture of the menu icons"
                />
                {"  "}
                Commuter benefits
              </span>
            </div>
            <h4 className="text-[#3183FF]">Explore more &gt;</h4>
          </div>
        </div>
        <div className="w-1/2 max-xl:w-full">
          <Image
            src="/images/illustration2.png"
            width={581}
            height={587}
            className="w-5/6 object-cover max-xl:mx-auto"
            alt="Picture of the menu icons"
          />
        </div>
      </div>
    </div>
  );
}

export default Tabsection;
