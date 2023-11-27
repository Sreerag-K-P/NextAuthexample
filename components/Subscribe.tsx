import React from "react";

function Subscribe() {
  return (
    <div className="bg-[#F8F0EA] my-20 py-20">
      <div className="max-w-[75rem] mx-auto p-11 flex max-lg:flex-col  max-lg:gap-5 rounded-xl bg-white">
        <div className="w-1/2 max-lg:w-full max-lg:items-center  flex flex-col">
          <p className="font-bold text-[34px]  max-lg:text-center leading-[50px] tracking-tight">
            Like our service? Subscribe us
          </p>
          <p className="font-normal text-base leading-7  max-lg:text-center max-w-[527px]">
            We have more than thousand of creative entrepreneurs <br />
            and stat joining our business
          </p>
        </div>
        <div className="flex w-1/2  max-lg:w-full justify-center items-center mt-auto">
          <form action="" className="flex flex-col  gap-3">
            <div className="flex gap-4 max-sm:flex-col w-auto">
              <input
                type="text"
                placeholder="Enter Email address"
                className="bg-[#EFF3F7] rounded p-3 max-w-[350px]"
              />
              <button className=" bg-[#DB4A87] text-white p-3 rounded">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 text-[#9095AD] text-sm">
              <input type="checkbox" className="bg-[#9095AD]" />
              Don’t provide any promotional message.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
