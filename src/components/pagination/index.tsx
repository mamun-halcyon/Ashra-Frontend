import { FC } from 'react';
import ActionButton from '../action';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import './index.scss';

interface IProps {
  showTitle: string;
  incrementPage: () => void;
  decrementPage: () => void;
  handleShow: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  page: number;
}

const Pagination: FC<IProps> = ({
  showTitle,
  incrementPage,
  decrementPage,
  handleShow,
  page,
}) => {
  return (
    <div className="flex justify-between items-center mt-5 bottom-filter pagination px-1 md:px-0">
      <div>
        <ActionButton title={showTitle}>
          <ul>
            <li
              className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
              onClick={handleShow}
            >
              16
            </li>
            <li
              className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
              onClick={handleShow}
            >
              20
            </li>
            <li
              className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
              onClick={handleShow}
            >
              24
            </li>
          </ul>
        </ActionButton>
      </div>

      <div className="flex items-center">
        <div className=" cursor-pointer p-1 mr-1" onClick={decrementPage}>
          <IoMdArrowDropleft />
        </div>
        <div className=" font-gotham font-normal text-xs flex items-center">
          <div className="active flex items-center justify-center">{page}</div>
          <p>of 2</p>
        </div>
        <div className=" cursor-pointer p-1 ml-1" onClick={incrementPage}>
          <IoMdArrowDropright />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
