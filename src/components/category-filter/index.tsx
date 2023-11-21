import { ICategoryData } from '@/types/category';
import { FC } from 'react';
import './index.scss';

interface IProps {
  selectKey: number;
  categoryItem: ICategoryData;
  onToggle: () => void;
}

const CategoryFilter: FC<IProps> = ({ onToggle, categoryItem, selectKey }) => {
  return (
    <div className="filter-category" onClick={onToggle}>
      <p className="font-gotham font-normal text-sm cursor-pointer category-title">
        {categoryItem.title}
      </p>

      {/* children category */}
      <div
        className={`${
          categoryItem.isOpen ? 'open' : 'close'
        } ml-2 category-children`}
      >
        {categoryItem.subLinks.map((sublink, index) => (
          <div className="flex items-center " key={index}>
            <input type="checkbox" name="filter" id={`${selectKey}${index}`} />
            <label
              htmlFor={`${selectKey}${index}`}
              className="font-gotham font-normal text-sm ml-1 cursor-pointer sub-link"
            >
              {sublink.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
