import { onValue, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { Button } from "../Button/Button";
import { ItemList } from "./ItemList";
import { Psychology } from "../../type/Psycholog";

export const List = () => {
  const [data, setData] = useState<Psychology[]>([]);
  const [limit, setLimit] = useState<number>(3);

  const info = data?.slice(0, limit);
  useEffect(() => {
    const get = query(ref(db));
    onValue(get, (snapshot) => {
      const res = snapshot.val();
      console.log(res);

      if (res) {
        setData(Object.values(res.data));
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <>
      <ul className="mr-[128px] ml-[128px] ">
        {info?.map((item: Psychology, index: number) => (
          <ItemList key={index} item={item} />
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
