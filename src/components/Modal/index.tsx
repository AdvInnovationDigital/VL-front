import React, { ReactNode } from "react";

interface ModalComponentProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: ReactNode;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  showModal,
  setShowModal,
  children,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pb-96 bg-black bg-opacity-50 z-20 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md min-w-200 p-15">
        <div className="w-full flex justify-end">
          <button onClick={() => setShowModal(false)} className="pr-4 pt-4">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
