import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="max-w-[75rem] mx-auto mb-16 gap-10 max-xl:px-2 flex flex-wrap justify-between text-[#0F2137]">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Image
            src="/images/S 1.png"
            width={27}
            height={37}
            alt="Picture of the logo image"
          />
          <p className="h-6 font-bold my-auto ">StartupLanding</p>
        </div>
        <p className="text-sm">Terms of use | Privacy</p>
        <p className="opacity-60 text-sm">Copyright by 2023 Sreerag</p>
      </div>
      <div className=" flex flex-col gap-7">
        <h1 className="font-medium text-lg leading-8 tracking-tight">
          About Us
        </h1>
        <div className="text-sm flex flex-col gap-2">
          <p>Support Center</p>
          <p>Customer Support</p>
          <p> About Us</p>
          <p>Copyright</p>
        </div>
      </div>
      <div className=" flex flex-col gap-7">
        <h1 className="font-medium text-lg leading-8 tracking-tight">
          Our Information
        </h1>
        <div className="text-sm flex flex-col gap-2">
          <p>Return Policy </p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Site Map</p>
        </div>
      </div>
      <div className=" flex flex-col gap-7">
        <h1 className="font-medium text-lg leading-8 tracking-tight">
          My Account
        </h1>
        <div className="text-sm flex flex-col gap-2">
          <p>Press inquiries</p>
          <p>Social media </p>
          <p>directories</p>
          <p>Images & B-roll</p>
        </div>
      </div>
      <div className=" flex flex-col gap-7">
        <h1 className="font-medium text-lg leading-8 tracking-tight">
          Connect
        </h1>
        <div className="text-sm flex flex-col gap-2 ">
          <p className="flex gap-1 items-center">
            <Image
              src="/images/fbook.png"
              width={200}
              height={160}
              alt="x"
              className="h-4 w-4 "
            />
            Facebook
          </p>
          <p className="flex gap-1 items-center">
            <Image
              src="/images/Group.png"
              width={200}
              height={160}
              alt="x"
              className="h-4 w-4"
            />
            Twitter
          </p>
          <p className="flex gap-1 items-center">
            <Image
              src="/images/Vector.png"
              width={200}
              height={160}
              alt="x"
              className="h-4 w-4"
            />
            Github
          </p>
          <p className="flex gap-1 items-center">
            <Image
              src="/images/Group3.png"
              width={200}
              height={160}
              alt="x"
              className="h-4 w-4"
            />
            Dribbble
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
