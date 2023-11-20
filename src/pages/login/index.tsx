import { LoginForm } from "@/components/Forms/LoginForm";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
      <div className="w-box  p-6 flex flex-col shadow-lg rounded-md justify-around bg-white">
        <div className="flex items-center justify-center pb-12 text-center flex-col ">
          <div className="w-full h-full  flex justify-center">
            <Image src={Logo} alt="" width={128} />
          </div>
          <span className="text-black pt-12 font-regular">
            Entre agora e comece a fazer os seus documentos em Visual Law!
          </span>
          <span className="text-black pt-6 font-thin">
            Entre com seu email e senha.
          </span>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-8 w-full px-16 ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
