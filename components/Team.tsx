import Image from "next/image";

const Team = () => {
  const members = [
    {
      image: "/images/Emmalee Mclan.png",
      name: "Emmalee Mclain",
      role: "Product Designer",
      socials: [
        "/images/Group.png",
        "/images/Vector.png",
        "/images/group3.png",
      ],
    },
    {
      image: "/images/Daisy Morgan.png",
      name: "Daisy Morgan",
      role: "Lead developer",
      socials: ["/images/Group.png", "/images/group3.png"],
    },
    {
      image: "/images/Ariyanna Hicks.png",
      name: "Ariyann Hicks",
      role: "Experience Designer",
      socials: ["/images/Group.png", "/images/Vector.png"],
    },
    {
      image: "/images/Yamilet Hooker.png",
      name: "Yamilet Hooker",
      role: "User interface designer",
      socials: [
        "/images/Group.png",
        "/images/Vector.png",
        "/images/group3.png",
      ],
    },
  ];
  return (
    <div className="mx-auto">
      <div className="max-w-[1610px] text-center text-dark-blue mx-auto px-2  mt-24">
        <p className="font-bold text-[34px] leading-[50px] tracking-tight">
          Meet our superheros
        </p>
        <p className="font-normal mt-5 mb-24 text-base leading-7 mx-auto max-w-[527px]">
          Build an incredible workplace and grow your business with Gusto’s
          all-in-one platform with amazing contents.
        </p>
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 max gap-7 px-2 ">
          {members.map((member) => (
            <div
              className="flex flex-col gap-1 text-left mx-auto"
              key={member.name}
            >
              <Image
                src={member.image}
                width={1024}
                height={960}
                className="w-96 h-96"
                alt="Picture of the logo image"
              />
              <p className="text-xl font-medium text-dark-blue">
                {member.name}
              </p>
              <p className="font-normal text-base text-[#7589A1]">
                {member.role}
              </p>
              <div className="flex gap-2">
                {member.socials.map((icon) => (
                  <Image
                    key={icon}
                    src={icon}
                    width={1024}
                    height={960}
                    className="h-4 w-5"
                    alt="Picture of the logo image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
