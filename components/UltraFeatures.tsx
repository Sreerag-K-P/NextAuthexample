import Image from "next/image";

export default function UltraFeatures() {
  const feature_items = [
    {
      icon: "/images/image 65.png",
      title: "3D modeling & art",
      description: `Get your info tests delivered at 
       home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 66.png",
      title: "Digital promotion",
      description: `Get your info tests delivered at 
       home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 67.png",
      title: "Business Enterprise",
      description: `Get your info tests delivered at 
       home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 58.png",
      title: "Marketing & advertising",
      description: `Get your info tests delivered at 
       home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 62.png",
      title: "Ultimate development",
      description: `Get your info tests delivered at 
       home collect a sample from the your pogress tests.`,
    },
    {
      icon: "/images/image 68.png",
      title: "Online support",
      description: `Get your info tests delivered at 
       home collect a sample from the your pogress tests.`,
    },
  ];
  return (
    <div className="my-20 py-20 mx-auto bg-[#F9FAFC]">
      <div className="max-xl:px-2">
        <p className=" text-center font-bold text-[34px] leading-[50px] tracking-tight">
          Other sevices you must appreciate
        </p>
        <p className=" text-center font-normal mt-5 mb-24 text-base leading-7 mx-auto max-w-[527px]">
          Focus only on the meaning, we take care of the design. As soon as the
          meeting end you can export in one click into your preferred.
        </p>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-xl:px-2 max-md:grid-cols-1 gap-20 max-w-[74rem] mx-auto">
        {feature_items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <Image
              src={item.icon}
              width={88}
              height={88}
              className="h-[5.5rem] w-[5.5rem]"
              alt="Picture of the menu icons"
            />
            <div className="text-dark-blue flex flex-col gap-3">
              <h4 className="font-bold text-lg leading-7">{item.title}</h4>
              <p>{item.description}</p>
              <h4 className="text-[#3183FF]">Learn more &gt;</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
