import "./categories.styles.scss";
import { CategoryItem } from "../category-item/category-item.components";

export const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
