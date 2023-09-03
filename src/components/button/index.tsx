import './index.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ children, className, type }: IProps) => {
  return (
    <button type={type} className={`${className} button`}>
      {children}
    </button>
  );
};

export default Button;
