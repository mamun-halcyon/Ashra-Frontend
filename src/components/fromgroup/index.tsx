import React, { ChangeEvent, FC } from "react";
import "./index.scss";

interface IProps {
  name?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  title: string;
  className?: string;
  type?: string;
  value?: string;
}
const FormGroup: FC<IProps> = ({
  className,
  name,
  id,
  onChange,
  placeholder,
  title,
  required,
  type,
  value,
}) => {
  return (
    <div className={`from-group ${className}`}>
      <label
        className=" font-gotham font-normal text-xs  text-black mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="block mt-1 form-input placeholder:text-xs  placeholder:font-gotham placeholder:font-normal text-xs w-full text-black"
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
      />
    </div>
  );
};

export default FormGroup;
