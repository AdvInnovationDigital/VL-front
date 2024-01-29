import Draggable from "react-draggable";

const FooterCanva = ({ position }: { position: any }) => {
  return (
    <Draggable bounds={"parent"} defaultPosition={position}>
      <div>
        <div className="w-full bg-blue-950 flex text-center items-center justify-center p-4">
          <span className="uppercase text-white font-thin text-[36px] text-center">
            Serviço
          </span>
        </div>

        <div className="px-16 py-7 gap-10 flex flex-col">
          <div>
            <span className="font-thin text-blue-950">
              Prestação de serviços advocatícios firmados no contrato de
              honorários em anexo, para fins de ação previdenciária de revisão
              da vida toda.
            </span>
          </div>

          <div className="flex flex-col">
            <div className="border-t-2 border-b-2 border-yellow-300 flex justify-evenly p-7 ">
              <div className="bg-blue-950 h-auto w-44 flex flex-col pt-3">
                <div className="bg-yellow-300 p-3 items-center justify-center flex ">
                  <span className="text-xl font-extralight">VALOR</span>
                </div>
                <div className="flex justify-center items-center text-center h-full ">
                  <span className="font-extrathin text-white text-center">
                    R$1.000,00
                  </span>
                </div>
              </div>

              <div className="bg-blue-950 h-32 w-44 flex flex-col pt-3">
                <div className="bg-yellow-300 p-3 items-center justify-center flex ">
                  <span className="text-xl font-extralight">DATA</span>
                </div>
                <div className="flex justify-center items-center text-center h-full ">
                  <span className="font-extrathin text-white text-center">
                    18/06/2022
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full py-4 text-end">
              <span className="text-end ">Alegrete, 16 de junho de 2022.</span>
            </div>
            <div className="w-full flex justify-center flex-col items-center pt-10">
              <div className=" border-gray-500 border-b-4 w-[75%]"></div>
              <div className="pt-4">
                <span className="font-semibold">
                  Gláucia Pinheiro Serafini - OAB/RS 109.123
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default FooterCanva;
