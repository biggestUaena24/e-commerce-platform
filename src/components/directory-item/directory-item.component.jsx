import {
  DirectoryItemContainer,
  BackgroudnImage,
  Body,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

export const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroudnImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
