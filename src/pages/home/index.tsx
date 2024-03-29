import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-bgColor w-screen h-screen">
      <SideBar />
      <NavBar />
    </div>
  );
}
