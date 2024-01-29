import CanvaBoardComponent from "@/canvaComponents/CanvaBoardComponent";
import { MiddleBeneficiario } from "@/documentComponents/recibohonorario/middle/beneficiario";
import { MiddleCliente } from "@/documentComponents/recibohonorario/middle/cliente";
import { useRef } from "react";
import api from "@/../singleCustomer.json";
import FooterCanva from "@/documentComponents/recibohonorario/middle/servico";

const Teste = () => {
  const ref = useRef();

  console.log(JSON.stringify(FooterCanva));

  return (
    <div className="flex justify-center p-40 bg-red-300">
      <CanvaBoardComponent ref={ref}>
        {/* <MiddleCliente cliente={api.customer} position={{ x: 0, y: 300 }} /> */}

        <MiddleBeneficiario
          cliente={api.customer}
          position={{ x: 0, y: 160 }}
        />
        {/* <MiddleBeneficiario
          cliente={api.customer}
          position={{ x: 0, y: 320 }}
        /> */}

        <FooterCanva position={{ x: 0, y: 170 }} />
      </CanvaBoardComponent>
    </div>
  );
};

export default Teste;
