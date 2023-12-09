import { ICategoryData } from "@/types/category";
import { Dispatch, FC, SetStateAction } from "react";
import ChildCategory from "./child-category";
import "./index.scss";

interface IProps {
  categoryFilterItems: ICategoryData[];
  subCategory: ICategoryData;
  rootCategoryChanged: string;
  setRootCategoryChanged: Dispatch<SetStateAction<string>>;
  handleMultipleCategory: (title: string, removeUnselected: boolean) => void;
  showChildCategories: string;
  setShowChildCatefories: Dispatch<SetStateAction<string>>;
}

const ChildCategories: FC<IProps> = ({
  categoryFilterItems,
  subCategory,
  rootCategoryChanged,
  setRootCategoryChanged,
  handleMultipleCategory,
  showChildCategories,
  setShowChildCatefories,
}) => {
  return (
    <div
      className={`childCategories ${
        showChildCategories === subCategory.title && "childCategories-show"
      }`}
    >
      {categoryFilterItems
        .filter((category) => category.parent_category === subCategory.slug)
        .map((childCategory) => {
          return (
            <ChildCategory
              key={childCategory.title}
              subCategory={subCategory}
              childCategory={childCategory}
              rootCategoryChanged={rootCategoryChanged}
              setRootCategoryChanged={setRootCategoryChanged}
              handleMultipleCategory={handleMultipleCategory}
            />
          );
        })}
    </div>
  );
};

export default ChildCategories;
