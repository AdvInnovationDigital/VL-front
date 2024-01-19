import { PrimaryButton } from "@/components/Button";
import Eye from "../../../../public/eye.svg";
import { TextInput } from "@/components/Textfield";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("password");
  const router = useRouter();

  const makeLogin = async () => {
    try {
      const body = JSON.stringify({ username: email, password });

      const req = await fetch("http://localhost:3030/login", {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (req.status == 200) {
        const data = await req.json();

        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("offices", JSON.stringify(data.offices));

        toast.success("Seja bem-vindo!");
        router.push("/");
      }
    } catch {}
  };

  return (
    <>
      <TextInput
        onChangeValue={(e: any) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
        type="email"
        value={email}
      />
      <TextInput
        onChangeValue={(e: any) => {
          setPassword(e.target.value);
        }}
        placeholder="Senha"
        type={visible}
        value={password}
        iconSrc={Eye}
        onIconClick={(e) => {
          if (visible == "password") {
            setVisible("text");
          } else {
            setVisible("password");
          }
        }}
      />

      <div className="flex items-center flex-col gap-2">
        <PrimaryButton
          onClick={(e) => {
            makeLogin();
          }}
          text="Entrar"
          className={
            email == "" || password == ""
              ? "lex w-full cursor-pointer items-center justify-center rounded-lg bg-gray-300 p-2"
              : ""
          }
          disableLeft={true}
        />
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
