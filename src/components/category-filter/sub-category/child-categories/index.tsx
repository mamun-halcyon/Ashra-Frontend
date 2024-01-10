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
        showChildCategories.toLocaleLowerCase() ===
          subCategory.title.toLocaleLowerCase() && "childCategories-show"
      }`}
    >
      {categoryFilterItems
        .filter((category) => category.parent_category === subCategory.slug)
        .sort((a, b) => (a.order_id || 0) - (b.order_id || 0))
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
