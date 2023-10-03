import './index.scss';

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
      className={`${className} px-2 py-[2px] border outline-button  cursor-pointer hover:text-white hover:bg-primary transition-all`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
