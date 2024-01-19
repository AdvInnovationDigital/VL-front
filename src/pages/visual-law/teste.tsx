import React, { useRef } from "react";
import CanvaBoardComponent from "@/canvaComponents/CanvaBoardComponent";
import EditableText from "@/canvaComponents/DraggableText";

const Teste = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-auto h-auto shadow-md bg-white flex justify-center">
      <CanvaBoardComponent ref={ref}>
        <EditableText />
      </CanvaBoardComponent>
    </div>
  );
};

export default Teste;
