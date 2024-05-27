import { ItemList } from "../List/ItemList";

export const Favorites = ({ favorite }) => {
  return (
    <ul>
      {favorite?.map((item, index) => (
        <ItemList key={index} item={item} />
      ))}
    </ul>
  );
};
