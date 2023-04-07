import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard key={id} product={{ id, name, imageUrl, price }} />
      ))}
    </div>
  );
};

export default Shop;
