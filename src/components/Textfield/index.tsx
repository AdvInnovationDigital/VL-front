import { ReactEventHandler } from "react";
import Image from "next/image";

const TextInput = ({
  placeholder,
  value,
  type,
  onChangeValue,
  onIconClick,
  iconSrc,
  disabled,
  length,
}: {
  placeholder: string;
  value: string;
  type: string;
  onChangeValue: ReactEventHandler;
  onIconClick?: ReactEventHandler;
  iconSrc?: string;
  disabled?: boolean;
  length?: number;
}) => {
  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        onChange={onChangeValue}
        value={value}
        type={type}
        required={true}
        maxLength={length || 500}
        disabled={disabled}
        className={"w-full rounded-lg border p-2 bg-transparent text-black"}
        style={{
          borderColor: disabled == true ? "#e0e0e0" : "#3e3e3e",
        }}
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
