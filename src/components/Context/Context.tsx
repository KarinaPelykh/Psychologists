import { createContext, useEffect, useState } from "react";
import { Psychology } from "../../type/Psycholog";
interface Prop {
  children: React.ReactElement;
}

interface FavoriteContextType {
  favorite: Psychology[];
  addFavorite: (item: Psychology, index: number) => void;
  visible: number | null;
  removeFavorite: (item: Psychology) => void;
}
export const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider = ({ children }: Prop) => {
  const getSavedFavorites = () => {
    const savedFavorite = localStorage.getItem("favorite");
    return savedFavorite ? JSON.parse(savedFavorite) : [];
  };

  const [favorite, setFavorite] = useState<Psychology[]>(() =>
    getSavedFavorites()
  );
  const [visible, setVisible] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (item: Psychology, index: number) => {
    setFavorite((prev) => {
      const res = prev.filter((fan) => fan.name !== item.name);
      return [...res, item];
    });

    setVisible(() => {
      return visible === index ? null : index;
    });
  };

  const removeFavorite = (item: Psychology) => {
    setFavorite((prev) => prev.filter((fan) => fan.name !== item.name));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorite, addFavorite, visible, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
