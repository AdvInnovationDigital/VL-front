import Image from "next/image";
import React, { useEffect, useState } from "react";
import Draggable, {
  ControlPosition,
  DraggableData,
  DraggableEvent,
} from "react-draggable";

import Person from "@/../public/vl-person.png";

const MiddleCliente = ({
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
    <Draggable bounds={"parent"} defaultPosition={pos} onDrag={handleDrag}>
      <div className=" w-full flex gap-10 px-10 cursor-move">
        <div className="flex flex-col justify-center text-center w-32 items-center">
          <Image src={Person} alt="" width={90} />
          <span className="uppercase font-thin">Cliente</span>
        </div>
        <div className="border-l-2 border-l-yellow-300" />
        <div className="px-2 cursor-text">
          <p>{name}</p>
          <br />
          <p>
            Brasileiro (a), {profession}, portador da carteira de identidade{" "}
            {rg.code || ""}, inscrito (a) no CPF sob o número {cpf.code || ""},
            residente e domiciliado na {street},{district}, {city}, {uf}.
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export { MiddleCliente };
