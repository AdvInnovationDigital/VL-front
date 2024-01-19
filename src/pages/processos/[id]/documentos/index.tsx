import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

import data from "../../../../../process.json";
import { useRouter } from "next/router";
import { CustomerCard } from "@/components/CustomerCard";
import Image from "next/image";
import AddDoc from "@/../public/add-doc.svg";

export default function Processos() {
  const navigate = useRouter();
  const { id } = navigate.query;
  return (
    <div className="w-screen min-h-screen ">
      <SideBar />
      <NavBar />

      <div className="flex flex-col">
        <div className="h-full px-10 md:px-64 mt-20">
          <CustomerCard navigate={navigate} data={data} />
        </div>
        <div className="w-full h-full grid md:grid-cols-3 lg:grid-cols-4 px-64 py-24 gap-4">
          {/* {data.customer.process.map((e, key) => {
            return <ProcessComponent process={e} key={key} />;
          })} */}
          NOT YET IMPLEMENTED
        </div>
      </div>

      <div className="flex fixed justify-end left-0 bottom-0 right-0 z-[0]">
        <div className="align-center justify-center flex mr-24 mb-24">
          <button
            className="bg-blue-300 p-4 rounded-full hover:bg-blue-400 transition-all duration-200 ease-in-out"
            onClick={() => {
              navigate.push("/visual-law/teste");
            }}
          >
            <Image src={AddDoc} alt={""} className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
