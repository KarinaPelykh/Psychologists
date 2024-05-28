import { createContext, useContext, useState } from "react";
import { Psychology } from "../../type/Psycholog";
interface Prop {
  children: React.ReactNode;
  FavoriteContext: FavoriteContextType;
}

interface FavoriteContextType {
  favorite: Psychology[];
  addFavorite: (item: Psychology, index: number) => void;
  visible: number | null;
  removeFavorite: (item: Psychology) => void;
}
const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);
export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};

export const FavoriteProvider = ({ children }: Prop) => {
  const [favorite, setFavorite] = useState<Psychology[]>([]);
  const [visible, setVisible] = useState<number | null>(null);
  console.log(favorite);
  console.log(visible);

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
