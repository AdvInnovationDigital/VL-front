import Image from "next/image";
import { ReactEventHandler } from "react";

const PrimaryButton = ({
  text,
  onClick,
  disableLeft,
}: {
  text: string;
  onClick: ReactEventHandler;
  disableLeft?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-black p-2"
      disabled={disableLeft}
    >
      <span className="font-montserrat font-semibold text-white">{text}</span>
    </button>
  );
};

export { PrimaryButton };
