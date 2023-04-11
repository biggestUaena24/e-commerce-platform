import { CheckoutProductContainer } from "./checkout-product.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutProduct = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CheckoutProductContainer>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </CheckoutProductContainer>
  );
};

export default CheckoutProduct;
