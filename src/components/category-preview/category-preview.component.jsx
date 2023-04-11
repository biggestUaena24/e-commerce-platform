import { CategoryPreviewContainer } from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
      </Link>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
