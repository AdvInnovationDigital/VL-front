import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Dash from "../../../public/dashboard.svg";
import X from "../../../public/x.svg";
import People from "../../../public/people.svg";
import Buildings from "../../../public/building.svg";
const SideBar = () => {
  const router = useRouter();

  return (
    <div className="bg-white h-screen flex flex-col shadow-md items-center pt-8 px-4 gap-6 font-bold fixed top-0 bottom-0 left-0 z-[9999] w-16 hover:w-52 group transition-width ease-in-out transition-all duration-200">
      <div className="flex items-center w-12 h-14 justify-center rounded-full ">
        <Image src={Dash} alt="" />
      </div>

      <div className="bg-gray-300 h-divider w-full" />

      <div className="flex flex-col  w-full items-center gap-4 ">
        <div className="flex flex-col gap-4">
          <div className="flex-row cursor-pointer flex justify-center items-center">
            <div className="w-8">
              <Image src={People} alt="" />
            </div>
            <Link
              href={"/clientes"}
              className={`px-4 py-2 group-hover:block hidden`}
            >
              Clientes
            </Link>
          </div>
          <div className="flex-row cursor-pointer flex justify-center items-center">
            <div className="w-8">
              <Image src={People} alt="" />
            </div>
            <Link
              href={"/clientes"}
              className={`px-4 py-2 group-hover:block hidden`}
            >
              Visual Docs
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-end gap-6">
        <div
          className="flex flex-row cursor-pointer pb-6"
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <div className="flex items-center w-8 justify-center">
            <Image src={Buildings} alt="" />
          </div>
          <span className={`px-4 py-2 group-hover:block hidden`}>
            Escritório
          </span>
        </div>
        <div
          className="flex flex-row cursor-pointer pb-6"
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <Image src={X} alt="" />
          <span className={`px-4 py-2 group-hover:block hidden`}>Sair</span>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
