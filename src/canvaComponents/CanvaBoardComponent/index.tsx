import React, { useState } from "react";

function CanvaBoardComponent({ children, ref }: { children: any; ref: any }) {
  return (
    <div ref={ref} className="bg-blue-400 w-[210mm] h-[297mm] absolute">
      {children}
    </div>
  );
}

export default CanvaBoardComponent;
