import "./index.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ children, className, type, onClick }: IProps | any) => {
  return (
    <button type={type} className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
