import { useFavorite } from "../../hooks/useContext";
import { ItemList } from "../List/ItemList";
import { Loader } from "../Loader/Loader";

export const Favorites = () => {
  const { favorite } = useFavorite();

  return (
    <section className="  min-h-screen ">
      {favorite.length !== 0 ? (
        <ul>
          {favorite?.map((item, index) => (
            <ItemList key={index} item={item} index={index} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
};
