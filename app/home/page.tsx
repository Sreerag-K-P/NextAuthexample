import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Subscribe from "@/components/Subscribe";
import Tabsection from "@/components/Tabsection";
import Team from "@/components/Team";
import UltraFeatures from "@/components/UltraFeatures";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(options);
  if (!session) redirect("/");
  const user = session?.user;
  return (
    <div>
      <h1 className="flex justify-center w-full font-medium text-black shadow-2xl my-10">
        {" "}
        Hello , Welcome {user?.name}
      </h1>
      <Header />
      <Menu />
      <Team />
      <UltraFeatures />
      <Tabsection />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default page;
