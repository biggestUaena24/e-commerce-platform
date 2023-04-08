import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const toggleCart = () => {
    navigate("/checkout");
    setCart(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button onClick={toggleCart}> Go to checkout </Button>
    </div>
  );
};

export default CartDropdown;
