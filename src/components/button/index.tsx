import "./index.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disable?: boolean;
}

const Button = ({
  children,
  className,
  type,
  onClick,
  disable,
}: IProps | any) => {
  return (
    <button
      type={type}
      className={`${className} button rounded-xl md:rounded-full hover-effect `} // added "hover-effect" class
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
