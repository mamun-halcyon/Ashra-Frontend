import React from 'react';
import './index.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const FilterBox: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="filter-box">
      <div className="title pl-5 py-2">
        <h2 className=" font-gotham font-medium text-sm ">{title}</h2>
      </div>
      <div className="pl-5">{children}</div>
    </div>
  );
};

export default FilterBox;
