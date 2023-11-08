import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="bg-white h-20 flex flex-row shadow-md items-end justify-end px-4 gap-12 font-bold relative w-full pr-20">
      <div className="flex justify-center items-center h-full cursor-pointer ">
        Início
      </div>
      <div className="flex justify-center items-center h-full cursor-pointer">
        Meus Alguma Coisa
      </div>
      {false ? (
        <div className="flex justify-center items-center h-full cursor-pointer">
          Logado
        </div>
      ) : (
        <div className="flex justify-center items-center h-full cursor-pointer">
          Entrar
        </div>
      )}
    </div>
  );
};

export { NavBar };
