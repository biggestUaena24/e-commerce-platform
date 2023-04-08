import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = () => {
  const { setCart, isCartOpen, totalItems } = useContext(CartContext);
  const toggleCart = () => {
    setCart(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
