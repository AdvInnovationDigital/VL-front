import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Dash from "../../../public/dashboard.svg";
import X from "../../../public/x.svg";
import People from "../../../public/people.svg";
import Edit from "../../../public/edit.svg";
import Buildings from "../../../public/building.svg";
import { ModalComponent } from "../Modal";
import { useEffect, useState } from "react";
const SideBar = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [offices, setOffices] = useState<any>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("offices") || "";

    try {
      const data = storedData ? JSON.parse(storedData) : null;

      if (data) {
        setOffices(data);
      }
    } catch (error) {
      // Trate o erro de parsing, se necessário
      console.error("Erro ao analisar JSON:", error);
    }
  }, []);

  return (
    <div className="bg-white h-screen flex flex-col shadow-md items-center pt-8 px-4 gap-6 font-bold fixed top-0 bottom-0 left-0 z-[10] w-16 hover:w-52 group transition-width ease-in-out transition-all duration-200">
      <div className="flex items-center w-12 h-14 justify-center rounded-full ">
        <Image src={Dash} alt="" />
      </div>

      <ModalComponent showModal={modal} setShowModal={setModal}>
        <div className="w-80 py-6 px-12 flex gap-10 justify-center">
          {offices.map((obj: any, key: any) => {
            return (
              <div
                key={key}
                className="w-14 h-14 bg-red-300 rounded-md flex flex-col"
              >
                <span>{obj.office.name}</span>
                <span>{obj.role[0]}</span>
              </div>
            );
          })}
        </div>
      </ModalComponent>

      <div className="bg-gray-300 h-divider w-full" />

      <div className="flex flex-col  w-full items-center gap-4 ">
        <div className="flex flex-col gap-4">
          <div className="flex-row cursor-pointer flex justify-start items-center">
            <div className="w-8">
              <Image src={People} alt="" className="w-8" />
            </div>
            <Link
              href={"/clientes"}
              className={`px-4 py-2 group-hover:block hidden`}
            >
              Clientes
            </Link>
          </div>
          <div className="flex-row cursor-pointer flex justify-start items-center">
            <div className="w-8">
              <Image src={Edit} alt="" className="w-8" />
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
            setModal(true);
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
