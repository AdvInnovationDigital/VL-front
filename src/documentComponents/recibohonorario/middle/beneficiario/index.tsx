import Image from "next/image";
import React, { useEffect, useState } from "react";
import Draggable, {
  ControlPosition,
  DraggableData,
  DraggableEvent,
} from "react-draggable";

import Beneficiario from "@/../public/vl-balancr.png";
import Person from "@/../public/vl-person.png";

const MiddleBeneficiario = ({
  cliente,
  position,
}: {
  cliente: any;
  position: any;
}) => {
  const { name, profession, customerAddress, document } = cliente;
  const { street, uf, city, district } = customerAddress;
  const [rg, setRg] = useState<any>({});
  const [cpf, setCpf] = useState<any>({});

  const [pos, setPos] = useState<ControlPosition>({
    x: position.x,
    y: position.y,
  });

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setPos({ x: data.x, y: data.y });
  };

  useEffect(() => {
    setCpf(
      document.find((e: any) => {
        return e.type == "CPF";
      })
    );
    setRg(
      document.find((e: any) => {
        return e.type == "RG";
      })
    );
  }, []);

  return (
    <Draggable
      bounds={"parent"}
      defaultPosition={pos}
      onDrag={handleDrag}
      grid={[10, 10]}
    >
      <div className="w-full flex-col flex gap-10 px-10 cursor-move ">
        <div className="border-t-2 border-b-2 py-5 gap-3 flex flex-col border-yellow-300">
          {/* Cliente */}
          <div className="flex gap-10 ">
            <div className="flex flex-col justify-center text-center items-center w-64">
              <Image src={Person} alt="" width={90} />
              <span className="uppercase font-thin">Cliente</span>
            </div>
            <div className="border-l-2 border-l-yellow-300"> {""}</div>
            <div className="flex flex-col cursor-text">
              <p>{name}</p>
              <br />
              <p className="font-thin">
                Brasileiro (a), {profession}, portador da carteira de identidade{" "}
                {rg.code || ""}, inscrito (a) no CPF sob o número{" "}
                {cpf.code || ""}, residente e domiciliado na {street},{district}
                , {city}, {uf}.
              </p>
            </div>
          </div>

          {/* Beneficiario */}
          <div className="flex gap-10">
            <div className="flex flex-col justify-center text-center items-center w-64 overflow-hidden ">
              <Image src={Beneficiario} alt="" width={90} />
              <span className="uppercase font-thin">BENEFICIÁRIO</span>
            </div>
            <div className="border-l-2 border-l-yellow-300" />
            <div className="flex flex-col cursor-text">
              <p>{name}</p>
              <br />
              <p className="font-thin">
                Brasileiro (a), {profession}, portador da carteira de identidade{" "}
                {rg.code || ""}, inscrito (a) no CPF sob o número{" "}
                {cpf.code || ""}, residente e domiciliado na {street},{district}
                , {city}, {uf}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export { MiddleBeneficiario };
