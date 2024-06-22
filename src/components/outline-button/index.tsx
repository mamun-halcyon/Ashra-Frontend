import "./index.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}
const OutlineButton: React.FC<IProps> = ({
  children,
  className,
  handleClick,
}) => {
  return (
    <button
      className={`${className} px-2 py-[2px] border outline-button  cursor-pointer primary-text hover-text-color transition-all`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
