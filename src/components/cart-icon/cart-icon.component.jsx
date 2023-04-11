import { CartitemContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { setCart, isCartOpen, totalItems } = useContext(CartContext);
  const toggleCart = () => {
    setCart(!isCartOpen);
  };

  return (
    <CartitemContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{totalItems}</ItemCount>
    </CartitemContainer>
  );
};

export default CartIcon;
