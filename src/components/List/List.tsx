import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { ItemList } from "./ItemList";
import { Psychology } from "../../type/Psycholog";
import { Filter, Opportunity } from "../Filter/Filter";
import { SingleValue } from "react-select";
import { getPsychology } from "../../redux/Psychology/reducer";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useSelector } from "react-redux";
import { psychologySelector } from "../../redux/Psychology/seletor";
import { handelSorted } from "../../helpers/sortData";

export const List = () => {
  const [sortedData, setSortedData] = useState<Psychology[]>([]);
  const [limit, setLimit] = useState<number>(3);
  const [option, setOptions] = useState("Popular");

  const handelValue = (e: SingleValue<Opportunity>) => {
    if (e) {
      setOptions(e.value);
    }
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPsychology());
  }, [dispatch]);
  const psychology = useSelector(psychologySelector);

  const info = sortedData?.slice(0, limit);
  useEffect(() => {
    const result = handelSorted(psychology, option) || [];
    setSortedData(result);
  }, [option, psychology]);

  return (
    <>
      <Filter option={option} handelValue={handelValue} />

      <ul className="mr-[128px] ml-[128px] ">
        {info?.map((item: Psychology, index: number) => (
          <ItemList key={index} item={item} index={index} />
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
