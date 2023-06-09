import { CategoriesContainer } from "./categories.styles";
import { DirectoryItem } from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

export const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </CategoriesContainer>
  );
};
