import styled from "styled-components";
import { ReactComponent as ShopIcon } from "../../assests/shopping-bag.svg";

export const ShoppingIcon = styled(ShopIcon)`
  width: 24px;
  height: 24px;
`;

export const CartitemContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 15px;
`;
