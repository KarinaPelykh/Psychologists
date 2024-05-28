import { useFavorite } from "../Context/useContext";
import { ItemList } from "../List/ItemList";
import { Loader } from "../Loader/Loader";

export const Favorites = () => {
  const { favorite } = useFavorite();

  return (
    <>
      {favorite.length !== 0 ? (
        <ul>
          {favorite?.map((item, index) => (
            <ItemList key={index} item={item} index={index} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};
