import { PrimaryButton } from "@/components/Button";
import { NavBar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";
import { TextInput } from "@/components/Textfield";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <TextInput
        onChangeValue={(e) => {}}
        placeholder="Email"
        type="email"
        value=""
      />
      <TextInput
        onChangeValue={(e) => {}}
        placeholder="Senha"
        type="password"
        value=""
      />

      <div className="flex items-center flex-col gap-2">
        <PrimaryButton onClick={(e) => {}} text="Entrar" />
        <Link href={"/cadastrar"}>
          <span className="text-black cursor-pointer font-thin text-center">
            Cadastre-se
          </span>
        </Link>
      </div>
    </>
  );
};

export { LoginForm };
