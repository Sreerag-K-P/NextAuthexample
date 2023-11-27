import Image from "next/image";

export default function Menu() {
  const menu_items = [
    {
      icon: "/images/image 58.png",
      title: "Marketing & advertising",
      description: `Get your info tests delivered at  home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 62.png",
      title: "Ultimate development",
      description: `Get your info tests delivered at  home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 64.png",
      title: "Business Enterprise",
      description: `Get your info tests delivered at  home collect a sample from the your pogress tests.`,
    },
  ];
  const social_logos = [
    "/images/image 11.png",
    "/images/image 12.png",
    "/images/image 13.png",
    "/images/image 14.png",
  ];
  return (
    <div className="bg-rose-light -mt-16 max-xl:px-2 ">
      <div className="pt-40 gap-28 max-w-[1193px] mx-auto flex flex-col justify-center items-center">
        <div className="max-w-[556px] text-center text-dark-blue">
          <p className="font-bold text-[34px] leading-[50px] tracking-tight">
            Grow your startup with our Service
          </p>
          <p className="font-normal mt-5 text-base leading-7 mx-auto max-w-[527px]">
            Build an incredible workplace and grow your business with Gusto’s
            all-in-one platform with amazing contents.
          </p>
        </div>
        <div className="flex max-xl:flex-col gap-2 justify-center items-center">
          {menu_items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 w-1/3  max-xl:w-full justify-center"
            >
              <Image
                src={item.icon}
                width={88}
                height={88}
                className="h-20 w-20"
                alt="Picture of the menu icons"
              />
              <div className="text-dark-blue flex flex-col gap-3">
                <h4 className="font-bold text-lg leading-7">{item.title}</h4>
                <p className="w-5/6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[932px] flex">
          <div className="pt-6 pr-1">
            <hr className="h-[2px] w-[70px] max-xl:w-8  border-[#DBDEE7]" />
          </div>
          <div className="flex flex-col pl-4 pt-1 text-dark-blue relative">
            <p className="font-normal text-2xl leading-[50px] max-xl:text-xl max-lg:text-lg ">
              “Whatever we create in Qwilr looks absolutely brilliant. It helps
              show our work in the best light, and is downright impressive when
              clients see a Qwilr Page we have made for them.”
            </p>
            <p className="text-[#7E8896] font-medium text-base leading-10">
              By Denny Albuz, Adviser of Paypal
            </p>
            <Image
              src="/images/quote.png"
              width={88}
              height={88}
              className="h-10 w-12 absolute top-0 left-0"
              alt="Picture of the menu icons"
            />
          </div>
        </div>

        <div className="w-full">
          <hr className="h-[2px] w-[170px]  border-[#A17857] mx-auto" />
          <div className="border-t w-full flex justify-between max-xl:flex-wrap gap-2 max-xl:items-center">
            {social_logos.map((logo, key) => (
              <Image
                key={key}
                src={logo}
                width={88}
                height={88}
                className="my-16 max-xl:my-5"
                alt="Picture of the log icons"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
