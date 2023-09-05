import React from 'react';
import './index.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const FilterBox: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="filter-box shadow mb-3">
      <div className="title px-5 py-2">
        <h2 className=" font-gotham font-medium text-sm ">{title}</h2>
      </div>
      <div className="px-5 py-3">{children}</div>
    </div>
  );
};

export default FilterBox;
