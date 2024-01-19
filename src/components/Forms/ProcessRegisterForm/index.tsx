import { PrimaryButton } from "@/components/Button";
import Eye from "../../../../public/eye.svg";
import { TextInput } from "@/components/Textfield";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Select from "@/components/Select";

interface ProcessRegisterFormProps {
  setShowModal: (show: boolean) => void;
}

const ProcessRegisterForm: React.FC<ProcessRegisterFormProps> = ({
  setShowModal,
}) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [selected, setSelected] = useState(0);

  const handleReq = () => {
    console.log(name);
    console.log(startDate);
    console.log(selected);

    setShowModal(false);
  };

  return (
    <div className="gap-5 flex flex-col">
      <TextInput
        onChangeValue={(e: any) => {
          setName(e.target.value);
        }}
        placeholder="Nome do Processo"
        type="text"
        value={name}
      />
      <TextInput
        onChangeValue={(e: any) => {
          setStartDate(e.target.value);
        }}
        placeholder="Início"
        type={"date"}
        value={startDate}
      />

      <Select
        options={[
          { value: "0", label: "Selecione Status" },
          { value: "1", label: "Em andamento" },
        ]}
        value={selected}
        onChange={(e: any) => {
          setSelected(Number(e.target.value));
        }}
      />

      <div className="w-full flex flex-col items-center pt-4">
        <button
          className="bg-blue-800 px-8 py-2 rounded-md text-bold shadow-sm text-white"
          onClick={handleReq}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export { ProcessRegisterForm };
