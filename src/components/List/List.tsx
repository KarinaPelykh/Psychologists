import { onValue, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { Button } from "../Button/Button";
import { ItemList } from "./ItemList";
import { Psychology } from "../../type/Psycholog";
import { Filter, Opportunity } from "../Filter/Filter";
import { SingleValue } from "react-select";

export const List = () => {
  const [data, setData] = useState<Psychology[]>([]);
  const [limit, setLimit] = useState<number>(3);
  const [option, setOptions] = useState("Popular");
  const [visible, setVisible] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const handeladdFavorte = (item, index) => {
    setFavorite((prev) => {
      const res = prev.filter((fan) => fan !== item);
      return [...res, item];
    });
    setVisible(visible === index ? null : index);
  };
  console.log(favorite);

  const handelValue = (e: SingleValue<Opportunity>) => {
    if (e) {
      setOptions(e.value);
    }
  };

  const info = data?.slice(0, limit);
  useEffect(() => {
    const get = query(ref(db));
    onValue(get, (snapshot) => {
      const res = snapshot.val();
      const handelSorted = (data: Psychology[]) => {
        switch (option) {
          case "A to Z":
            return data.sort((a, b) =>
              a.name.slice(4).localeCompare(b.name.slice(4))
            );
          case "Z to A":
            return data.sort((a, b) =>
              b.name.slice(4).localeCompare(a.name.slice(4))
            );
          case "Popular":
            return data.filter(({ rating }) => rating >= 4.8);
          case "Less than 10$":
            return data.filter(({ price_per_hour }) => price_per_hour <= 10);
          case "Greater than 10$":
            return data.filter(({ price_per_hour }) => price_per_hour >= 120);
          case "Not popular":
            return data.filter(({ rating }) => rating <= 4.75);
          case "Show all":
            return data;
        }
      };
      const dataList = Object.values(res.data) as Psychology[];
      const result = handelSorted(dataList) || [];
      setData(result);
    });
  }, [option]);

  return (
    <>
      <Filter option={option} handelValue={handelValue} />

      <ul className="mr-[128px] ml-[128px] ">
        {info?.map((item: Psychology, index: number) => (
          <ItemList
            key={index}
            item={item}
            handeladdFavorte={handeladdFavorte}
            index={index}
            visible={visible}
          />
        ))}
      </ul>

      <Button
        iconShow={false}
        prop="Load more"
        className="mx-[auto] mb-[100px]"
        onClick={() => {
          setLimit(limit + 3);
        }}
      />
    </>
  );
};
