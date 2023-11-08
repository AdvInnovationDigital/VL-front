import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

import data from "../../../customer.json";
import { CustomerComponent } from "@/components/CustomerComponent";
import { useState } from "react";
import { TextInput } from "@/components/Textfield";
import { useRouter } from "next/router";

export default function Clientes() {
  const navigate = useRouter();
  const [filter, setFilter] = useState("");
  const filteredList =
    filter.length > 0
      ? data.customers.filter((user) =>
          user.name.toLowerCase().includes(filter.toLowerCase())
        )
      : data.customers;
  return (
    <div className="w-screen min-h-screen">
      <SideBar />
      <NavBar />

      <div className="ml-20 flex justify-around flex-col ">
        <div className="w-full items-center justify-center text-center mt-10 px-36">
          <TextInput
            onChangeValue={(e: any) => {
              setFilter(e.currentTarget.value);
            }}
            placeholder="Busque seu cliente"
            type="text"
            value={filter}
          />
        </div>
        <div className="py-10 px-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredList.map((c, key) => {
            return (
              <CustomerComponent customer={c} key={key} navigate={navigate} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
