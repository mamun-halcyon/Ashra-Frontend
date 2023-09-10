import React, { FC } from 'react';
import './index.scss';

interface IProps {
  name?: string;
  id?: string;
  onChange?: () => void;
  placeholder?: string;
  required?: boolean;
  title: string;
  className?: string;
  type?: string;
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
}) => {
  return (
    <div className={`from-group ${className}`}>
      <label
        className=" font-gotham font-normal text-xs  text-black mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <textarea
        className="textarea area-input placeholder:text-xs  placeholder:font-gotham placeholder:font-normal text-xs w-full text-black"
        id=""
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaGroup;
