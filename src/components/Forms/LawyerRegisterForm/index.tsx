import { PrimaryButton } from "@/components/Button";
import Eye from "../../../../public/eye.svg";
import { TextInput } from "@/components/Textfield";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const LawyerRegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [visible, setVisible] = useState("password");
  const [confirmVisible, setConfirmVisible] = useState("password");

  const [cep, setCep] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");

  const [oab, setOab] = useState("");
  const [emissionDate, setEmissionDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [emissionCity, setEmissionCity] = useState("");

  // const [district, setDistrict] = useState("");

  const [step, setStep] = useState(0);

  const getAddressInfo = async (cepVar: any) => {
    const response = await fetch(`https://viacep.com.br/ws/${cepVar}/json/`);

    if (!response.ok) {
      throw new Error("Failed to fetch address information");
    }

    const data = await response.json();

    if (data.erro) {
      toast.warning("CEP Não encontrado");
    }

    console.log(data);

    // Handle the data as needed
    setCity(data.localidade);
    setUf(data.uf);
    setDistrict(data.bairro);
    setStreet(data.logradouro);
  };

  const forms = [
    <div key={0} className="gap-5 flex flex-col">
      <TextInput
        onChangeValue={(e: any) => {
          setName(e.target.value);
        }}
        placeholder="Seu nome"
        type="text"
        value={name}
      />
      <TextInput
        onChangeValue={(e: any) => {
          setPhoneNumber(e.target.value);
        }}
        placeholder="Telefone"
        type="number"
        value={phoneNumber}
      />

      <div className="flex gap-5">
        <TextInput
          onChangeValue={(e: any) => {
            setRg(e.target.value);
          }}
          placeholder="RG"
          type={"text"}
          value={rg}
        />
        <TextInput
          onChangeValue={(e: any) => {
            setCpf(e.target.value);
          }}
          placeholder="CPF / CNPJ"
          type={"text"}
          value={cpf}
        />
      </div>
      <div className="flex gap-5">
        <TextInput
          onChangeValue={(e: any) => {
            setOab(e.target.value);
          }}
          placeholder="OAB"
          type={"text"}
          value={oab}
        />
        <TextInput
          onChangeValue={(e: any) => {
            setEmissionDate(e.target.value);
          }}
          placeholder="Data de Emissão"
          type={"date"}
          value={emissionDate}
        />
      </div>
      <div className="flex gap-5">
        <TextInput
          onChangeValue={(e: any) => {
            setEmissionCity(e.target.value);
          }}
          placeholder="Estado de Emissão"
          type={"text"}
          value={emissionCity}
        />
        <TextInput
          onChangeValue={(e: any) => {
            setEmissionCity(e.target.value);
          }}
          placeholder="Cidade de Emissão"
          type={"text"}
          value={emissionCity}
        />
      </div>
    </div>,

    <div key={1} className="flex flex-col gap-5">
      <TextInput
        onChangeValue={(e: any) => {
          setCep(e.target.value);

          if (e.target.value.length == 8) {
            getAddressInfo(e.target.value);
            return;
          }
        }}
        placeholder="CEP"
        type="text"
        value={cep}
      />
      <div className="flex gap-5 w-full ">
        <TextInput
          onChangeValue={(e: any) => {
            setCity(e.target.value);
          }}
          placeholder="Cidade"
          type={"text"}
          value={city}
          disabled={true}
        />
        <div className=" w-1/3 ">
          <TextInput
            onChangeValue={(e: any) => {
              setUf(e.target.value);
            }}
            placeholder="UF"
            type={"text"}
            value={uf}
            disabled={true}
          />
        </div>
      </div>
      <div className="flex gap-5 w-full ">
        <TextInput
          onChangeValue={(e) => {}}
          placeholder="Bairro"
          type={"text"}
          value={district}
          disabled={true}
        />
        <div className=" ">
          <TextInput
            onChangeValue={(e: any) => {
              setHouseNumber(e.target.value);
            }}
            placeholder="Número"
            type={"text"}
            value={houseNumber}
          />
        </div>
      </div>
      <div className=" ">
        <TextInput
          onChangeValue={(e: any) => {
            setStreet(e.target.value);
          }}
          placeholder="Rua"
          type={"text"}
          value={street}
          disabled={true}
        />
      </div>
      <div className=" ">
        <TextInput
          onChangeValue={(e: any) => {
            setHouseNumber(e.target.value);
          }}
          placeholder="Complemento"
          type={"text"}
          value={houseNumber}
        />
      </div>
    </div>,

    <div key={2} className="flex flex-col gap-5">
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
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirme sua senha"
          type={confirmVisible}
          value={confirmPassword}
          iconSrc={Eye}
          onIconClick={(e) => {
            if (confirmVisible == "password") {
              setConfirmVisible("text");
            } else {
              setConfirmVisible("password");
            }
          }}
        />
      </div>
    </div>,
  ];

  return (
    <div className="flex flex-col gap-10  ">
      {forms[step]}

      <div className="flex items-center justify-between px-12 gap-2 ">
        {step != 0 ? (
          <div
            onClick={(e) => {
              var step1 = step > 0 ? step - 1 : 0; // Check if step is greater than 0, if true, decrement by 1; otherwise, keep it at 0
              console.log(step1);
              setStep(step1);
            }}
            className="bg-red-300 w-10 h-10 rounded-full shadow-md"
          ></div>
        ) : (
          <div></div>
        )}

        {step != forms.length - 1 ? (
          <div
            onClick={(e) => {
              var step1 = step < forms.length - 1 ? step + 1 : step; // Check if step is less than the maximum step, if true, increment by 1; otherwise, keep it at the current step
              console.log(step1);
              setStep(step1);
            }}
            className="bg-red-300 w-10 h-10 rounded-full shadow-md"
          ></div>
        ) : (
          <div className="bg-blue-300">
            <Link href={"/"}>FINALIZAR</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export { LawyerRegisterForm };
