import { stringToColor } from "@/utils/color";
import Image from "next/image";
import Document from "../../../public/document.svg";
import Law from "../../../public/law.svg";
import Brasil from "../../../public/brasil.svg";
import { NextRouter } from "next/router";
import Link from "next/link";

const CustomerComponent = ({
  customer,
  navigate,
}: {
  customer: any;
  navigate: NextRouter;
}) => {
  const { name, id } = customer;

  const [fName, sName] = name.split(" ");

  return (
    <div className="lg:w-60 md:w-44  bg-white rounded-lg shadow-md flex flex-col hover:scale-110 transition-all duration-200">
      <div className="">
        <div className="flex justify-center text-center w-full pt-10">
          <div
            className={"p-8 rounded-full"}
            style={{ backgroundColor: stringToColor(name) }}
          >
            <span className="text-center text-white text-xl">
              {fName.charAt(0) + sName.charAt(0)}
            </span>
          </div>
        </div>

        <div className="w-full flex items-center justify-center py-6">
          <span className="text-center text-xs md:text-base">{name}</span>
        </div>
      </div>

      <div className="flex flex-col h-full p-2 lg:p-6 justify-center items-center">
        <div className="flex flex-col justify-start  gap-3 ">
          <div className="cursor-pointer w-full flex gap-2 justify-start items-center">
            <div className="w-5">
              <Image src={Law} alt="" />
            </div>
            <Link href={`/processos/${id}`}>
              <span className="hover:text-gray-500">Meus Processos</span>
            </Link>
          </div>
          <div className="cursor-pointer w-full flex gap-2 justify-start items-center">
            <div className="w-5">
              <Image src={Document} alt="" />
            </div>
            <Link href={`/${id}/documentos`}>
              <span className="hover:text-gray-500">Meus Documentos</span>
            </Link>
          </div>

          <div className="cursor-pointer w-full flex gap-2 justify-start items-center">
            <div className="w-5">
              <Image src={Brasil} alt="" />
            </div>
            <span className="hover:text-gray-500">Meu INSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CustomerComponent };
