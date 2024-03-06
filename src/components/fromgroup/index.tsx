import { ChangeEvent, FC } from "react";
import "./index.scss";

interface IProps {
  name?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  title?: string;
  className?: string;
  type?: string;
  value?: any;
  disabled?: boolean;
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
  disabled,
}) => {
  return (
    <div className={`from-group ${className}`}>
      <label
        className=" font-gotham font-normal text-xs  black-text mb-2"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="block mt-1 form-input placeholder:text-xs  placeholder:font-gotham placeholder:font-normal text-xs w-full black-text"
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default FormGroup;
