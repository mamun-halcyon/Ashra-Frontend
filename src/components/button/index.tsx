import './index.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: IProps) => {
  return <button className={`${className} button`}>{children}</button>;
};

export default Button;
