import { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

interface IProps {
  className: string;
  step: string;
  title: string;
  children: React.ReactNode;
}

const Box: FC<IProps> = ({ children, title, step, className }) => {
  return (
    <div className={`shadow box ${className}`}>
      <div className="flex py-2 header">
        <div className="step">{step}</div>
        <p className=" font-gotham font-medium text-sm">{title}</p>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Box;
