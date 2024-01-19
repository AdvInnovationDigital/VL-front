import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

import AddDoc from "@/../public/add-doc.svg";

import data from "../../../../process.json";
import { useRouter } from "next/router";
import { CustomerCard } from "@/components/CustomerCard";
import { ProcessComponent } from "@/components/ProcessComponent";
import Image from "next/image";

import { ModalComponent } from "@/components/Modal";
import { useState } from "react";
import { ProcessRegisterForm } from "@/components/Forms/ProcessRegisterForm";

export default function Processos() {
  const navigate = useRouter();
  const { id } = navigate.query;

  const [modal, setModal] = useState(false);

  return (
    <div className="w-screen min-h-screen ">
      <SideBar />
      <NavBar />

      <ModalComponent setShowModal={setModal} showModal={modal}>
        <div className="w-96 h-auto px-12 py-4">
          <ProcessRegisterForm setShowModal={setModal} />
        </div>
      </ModalComponent>

      <div className="flex flex-col ">
        <div className="h-full px-10 md:px-64 mt-20 w-auto">
          <CustomerCard navigate={navigate} data={data} />
        </div>
        <div className="w-full h-full grid md:grid-cols-2 md:px-40 lg:grid-cols-4 lg:py-24 gap-4">
          {data.customer.process.map((e, key) => {
            return <ProcessComponent process={e} key={key} />;
          })}
        </div>

        <div className="flex fixed justify-end left-0 bottom-0 right-0 z-[0]">
          <div className="align-center justify-center flex mr-24 mb-24">
            <button
              onClick={() => {
                setModal(true);
              }}
              className="bg-blue-300 p-4 rounded-full hover:bg-blue-400 transition-all duration-200 ease-in-out"
            >
              <Image src={AddDoc} alt={""} className="w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
