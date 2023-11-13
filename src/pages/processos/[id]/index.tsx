import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

import data from "../../../../process.json";
import { useRouter } from "next/router";
import { CustomerCard } from "@/components/CustomerCard";
import { ProcessComponent } from "@/components/ProcessComponent";

export default function Processos() {
  const navigate = useRouter();
  const { id } = navigate.query;
  return (
    <div className="w-screen min-h-screen ">
      <SideBar />
      <NavBar />

      <div className="flex flex-col ">
        <div className="h-full px-10 md:px-64 mt-20">
          <CustomerCard navigate={navigate} data={data} />
        </div>
        <div className="w-full h-full grid md:grid-cols-2 md:px-40 lg:grid-cols-4 lg:py-24 gap-4">
          {data.customer.process.map((e, key) => {
            return <ProcessComponent process={e} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}
