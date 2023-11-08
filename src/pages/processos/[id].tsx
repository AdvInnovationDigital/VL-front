import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

import data from "../../../process.json";
import { CustomerComponent } from "@/components/CustomerComponent";
import { useState } from "react";
import { TextInput } from "@/components/Textfield";
import { useRouter } from "next/router";
import { CustomerCard } from "@/components/CustomerCard";

export default function Processos() {
  const navigate = useRouter();
  const { id } = navigate.query;
  return (
    <div className="w-screen min-h-screen ">
      <SideBar />
      <NavBar />

      <div className="h-full px-10 md:px-40 mt-20">
        <CustomerCard navigate={navigate} data={data} />
      </div>
    </div>
  );
}
