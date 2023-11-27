"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  const navitems = ["Home", "Adversite", "Supports", "About"];
  return (
    <div className="mt-6 flex max-w-[1192px] mx-auto">
      <div className="flex gap-2">
        <Image
          src="/images/S 1.png"
          width={27}
          height={37}
          alt="Picture of the logo image"
        />
        <p className="h-6 font-bold my-auto ">StartupLanding</p>
      </div>
      <div className="flex gap-10 my-auto ms-14 max-lg:hidden">
        {navitems.map((nav, key) => (
          <div key={key}>
            <Link href={`/${nav.toLowerCase()}`}>{nav}</Link>
          </div>
        ))}
      </div>
      <div className="flex gap-10 my-auto ms-auto">
        <button className="my-auto font-semibold" onClick={() => signOut()}>
          SignOut
        </button>
        <div className="flex flex-col">
          <p className="text-special-green font-semibold mt-2">Get Started</p>
          <Image
            src="/images/Path 49.png"
            width={82}
            height={6}
            alt="Picture of the uline"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
