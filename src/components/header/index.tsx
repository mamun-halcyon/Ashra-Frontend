import React from 'react';
import { BiSolidPhone } from 'react-icons/Bi';

const TopHeader = () => {
  return (
    <div className=" flex justify-between items-center py-4">
      <div className="flex  items-center">
        <span className=" mr-2">
          <BiSolidPhone />
        </span>
        <p>+880 1766 688840</p>
        <div className="flex  items-center ml-4">
          <span className=" mr-2">
            <BiSolidPhone />
          </span>
          <p>10:00 AM - 6:00 PM | Sat - Thus</p>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default TopHeader;
