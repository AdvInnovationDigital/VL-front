import { stringToColor } from "@/utils/color";
import Image from "next/image";
import Document from "../../../public/document.svg";
import Law from "../../../public/law.svg";
import Brasil from "../../../public/brasil.svg";
import { NextRouter } from "next/router";
import Link from "next/link";

const CustomerCard = ({
  data,
  navigate,
}: {
  data: any;
  navigate: NextRouter;
}) => {
  const { name } = data.customer;

  const [fName, sName] = name.split(" ");

  return (
    <div className=" w-full  bg-white rounded-lg shadow-md flex flex-col transition-all duration-200">
      <div className=" flex ">
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

      <div className="flex flex-col h-full p-2 lg:p-6 justify-center items-center"></div>
    </div>
  );
};

export { CustomerCard };
