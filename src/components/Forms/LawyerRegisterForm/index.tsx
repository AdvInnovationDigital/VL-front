import { PrimaryButton } from "@/components/Button";
import Eye from "../../../../public/eye.svg";
import { TextInput } from "@/components/Textfield";
import Link from "next/link";
import { useState } from "react";

const LawyerRegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("password");

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
      <div className="flex gap-5">
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
        <TextInput
          onChangeValue={(e: any) => {
            setPassword(e.target.value);
          }}
          placeholder="Confirme sua senha"
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
      </div>

      <div className="flex items-center flex-col gap-2">
        <PrimaryButton onClick={(e) => {}} text="Entrar" />
      </div>
    </>
  );
};

export { LawyerRegisterForm };
