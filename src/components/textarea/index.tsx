import React, { ChangeEvent, FC } from "react";
import "./index.scss";

interface IProps {
  name?: string;
  id?: string;
  onChange?: any;
  placeholder?: string;
  required?: boolean;
  title: string;
  className?: string;
  type?: string;
  value?: string;
}
const TextAreaGroup: FC<IProps> = ({
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
        className=" font-gotham font-normal text-xs  black-text mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <textarea
        className="textarea area-input placeholder:text-xs  placeholder:font-gotham placeholder:font-normal text-xs w-full black-text"
        id=""
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextAreaGroup;
