import { useState } from "react";
import { Button } from "../Button/Button";
import { ReviewItem } from "./ReviewItem";
import { Psychology, Reviews } from "../../type/Psycholog";
import { useToggle } from "../../hooks/useToggle";
import { ModalWindow } from "../ModalWindow";
interface Item {
  item: Psychology;
}

export const ReviewList = ({ item }: Item) => {
  const [visible, setVisible] = useState(false);
  const { isOpen, toggle } = useToggle();
  const handelVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible ? (
        <ul className="mt-[20px]">
          {item.reviews?.map(
            ({ reviewer, comment, rating }: Reviews, index: number) => (
              <ReviewItem
                key={index}
                reviewer={reviewer}
                comment={comment}
                rating={rating}
              />
            )
          )}
          <Button
            iconShow={false}
            prop="Make an appointment"
            className="mt-[40px] mobil:flex  mobil:text-[12px]  mobil:px-[10px]  mobil:!py-[10px]  mobil:mx-[auto] desktop:text-[16px] desktop:px-[32px] desktop:py-[14px] desktop:mx-[0]"
            onClick={toggle}
          />
        </ul>
      ) : (
        <button
          onClick={handelVisible}
          className=" text-[#000] underline mt-[14px]"
        >
          Read more
        </button>
      )}
      <ModalWindow isOpen={isOpen} item={item} toggle={toggle} />
    </>
  );
};
