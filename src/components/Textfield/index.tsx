import { ReactEventHandler } from "react";
import Image from "next/image";

const TextInput = ({
  placeholder,
  value,
  type,
  onChangeValue,
  onIconClick,
  iconSrc,
}: {
  placeholder: string;
  value: string;
  type: string;
  onChangeValue: ReactEventHandler;
  onIconClick?: ReactEventHandler;
  iconSrc?: string;
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
        type={type}
        className="w-full rounded-lg border border-gray-300 p-2 pr-10 bg-transparent text-gray-300 "
      />
      {iconSrc && onIconClick && (
        <div
          className="absolute right-3 top-2/4 -translate-y-2/4"
          onClick={onIconClick}
        >
          <Image src={iconSrc} alt="a" width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export { TextInput };
