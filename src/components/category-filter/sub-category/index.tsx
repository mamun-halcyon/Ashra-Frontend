import { ICategoryData } from "@/types/category";
import { FC, useState } from "react";
import ChildCategories from "./child-categories";
import "./index.scss";

interface IProps {
  categoryFilterItems: ICategoryData[];
  rootCategory: ICategoryData;
  handleMultipleCategory: (title: string, removeUnselected: boolean) => void;
}

const SubCategory: FC<IProps> = ({
  categoryFilterItems,
  rootCategory,
  handleMultipleCategory,
}) => {
  const [rootCategoryChanged, setRootCategoryChanged] = useState<string>("");
  const [showChildCategories, setShowChildCatefories] = useState<string>("");

  const onClickSubCategoryHandler = (event: any) => {
    setShowChildCatefories(event.target.innerText);
  };

  return (
    <div className="subCategory">
      {categoryFilterItems.filter(
        (category) => category.parent_category === rootCategory.slug
      ).length > 0 &&
        categoryFilterItems
          .filter((category) => category.parent_category === rootCategory.slug)
          .sort((a, b) => (a.order_id || 0) - (b.order_id || 0))
          .map((subCategory) => {
            return (
              <div key={subCategory.title}>
                <p
                  onClick={onClickSubCategoryHandler}
                  className="capitalize subCategory-title font-gotham font-normal text-sm hover:text-primary mb-1 transition-all duration-300"
                >
                  {subCategory.title.toLowerCase()}
                </p>
                <ChildCategories
                  showChildCategories={showChildCategories}
                  setShowChildCatefories={setShowChildCatefories}
                  rootCategoryChanged={rootCategoryChanged}
                  categoryFilterItems={categoryFilterItems}
                  subCategory={subCategory}
                  setRootCategoryChanged={setRootCategoryChanged}
                  handleMultipleCategory={handleMultipleCategory}
                />
              </div>
            );
          })}
    </div>
  );
};

export default SubCategory;
