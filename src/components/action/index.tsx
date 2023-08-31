import { FC } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import './index.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const ActionButton: FC<IProps> = ({ title, children }) => {
  return (
    <div className="relative action-area">
      <div className="flex justify-between  items-center font-gotham font-normal text-xs">
        <span className="">{title}</span>
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>
      <div className="action-wrapper absolute shadow">{children}</div>
    </div>
  );
};

export default ActionButton;
