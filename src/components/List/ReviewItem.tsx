import icon from "../../images/sprite.svg";
import { Reviews } from "../../type/Psycholog";

export const ReviewItem = ({ reviewer, comment, rating }: Reviews) => {
  return (
    <li className=" relative  mb-[25px]">
      <div className="flex mb-[18px] mobil:justify-center mobil:items-center  desktop:justify-start">
        <div className="bg-[#fc832c96] rounded-[100%] w-[44px] h-[44px] relative mr-[12px]">
          <p className="absolute top-[10px] left-[15px] text-[#FC832C]">
            {reviewer?.slice(0, 1)}
          </p>
        </div>
        <div className="mobil:flex desktop:block">
          <p className="mb-[4px] text-[#191a15]">{reviewer}</p>
          <div className="flex  items-center">
            <svg className="w-[16px] h-[16px] mr-[8px]  mobil:ml-[5px] ">
              <use xlinkHref={icon + "#icon-star"}></use>
            </svg>
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <p className="text-[#8A8A89] mobil:text-[14px] desktop:text-[16px]">
        {comment}
      </p>
    </li>
  );
};
