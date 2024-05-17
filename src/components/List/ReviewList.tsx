import { useState } from "react";
import { Button } from "../Button/Button";
import { ReviewItem } from "./ReviewItem";
import { Psychology, Reviews } from "../../type/Psycholog";
interface Item {
  item: Psychology;
}

export const ReviewList = ({ item }: Item) => {
  const [visible, setVisible] = useState(false);
  const handelVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      {visible ? (
        <ul>
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
            className="mt-[40px]"
          />
        </ul>
      ) : (
        <button onClick={handelVisible} className=" text-[#000] underline">
          Read more
        </button>
      )}
    </>
  );
};
