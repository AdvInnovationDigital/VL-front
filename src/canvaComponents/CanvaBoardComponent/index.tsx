import React, { useState } from "react";

function CanvaBoardComponent({ children, ref }: { children: any; ref: any }) {
  return (
    <div ref={ref} className="bg-white shadow-xl w-[210mm] h-[297mm] relative">
      {children}
    </div>
  );
}

export default CanvaBoardComponent;
