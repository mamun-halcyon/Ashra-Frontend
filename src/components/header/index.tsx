import React from 'react';
import { BiSolidPhone } from 'react-icons/Bi';

const TopHeader = () => {
  return (
    <div className=" flex justify-between items-center py-4">
      <div className="flex justify-between items-center">
        <span className=" mr-2">
          <BiSolidPhone />
        </span>
        <p>+880 1766 688840</p>
      </div>
      <div>2</div>
    </div>
  );
};

export default TopHeader;
