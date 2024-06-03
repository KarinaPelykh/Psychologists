import { Link } from "react-router-dom";
import { useFavorite } from "../../hooks/useContext";
import { ItemList } from "../List/ItemList";

export const Favorites = () => {
  const { favorite } = useFavorite();

  return (
    <section className="  min-h-screen flex">
      {favorite.length !== 0 ? (
        <ul>
          {favorite?.map((item, index) => (
            <ItemList key={index} item={item} index={index} />
          ))}
        </ul>
      ) : (
        <p className="text-[23px] text-[#000]  m-[auto]">
          List is empty. You &ensp;
          <Link to="/psychologists" className="underline italic">
            can add
          </Link>
          &ensp; your&ensp;
          <span className="italic text-[23px] text-[#FC832C]"> favorite </span>
          &ensp;psycholog
        </p>
      )}
    </section>
  );
};
