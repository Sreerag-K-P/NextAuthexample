import Image from "next/image";

export default function Header() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center max-w-[1192px] mx-auto">
      <div className="max-w-[817px] text-center text-banner-blue p-4">
        <p className="font-bold text-5xl max-md:text-3xl leading-[75px] ">
          Creativity starts with viewing the whole world differently
        </p>
        <p className="font-normal text-lg leading-10">
          A service agency with customer satisfaction
        </p>
        <button className="bg-special-green rounded-md h-14 w-44 text-white font-bold text-lg mt-10">
          Get Started
        </button>
      </div>
      <div className="-mt-12">
        <Image
          src="/images/illustration.png"
          width={1024}
          height={700}
          alt="Picture of the logo image"
        />
      </div>
    </div>
  );
}
