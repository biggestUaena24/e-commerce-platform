import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CheckoutProduct from "../../components/checkout-product/checkout-product.component";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qunatity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutProduct key={item.id} cartItem={item} />;
      })}
      <span className="total">Total: {totalPrice}</span>
    </div>
  );
};

export default Checkout;
