import clsx from "clsx";
import icon from "../../images/sprite.svg";

type Prop = {
  prop: string;
  className?: string;
  iconShow?: boolean;
};

export const Button = ({ prop, className, iconShow = true }: Prop) => {
  return (
    <button
      className={clsx(
        className,
        "bg-[#FC832C] py-[18px] px-[50px] rounded-[30px]  text-white flex  text-xl"
      )}
    >
      {prop}
      {iconShow ? (
        <svg className={clsx("w-[18px] h-[18px] fill-white ml-[18px] ")}>
          <use xlinkHref={icon + "#arrow-up"}></use>
        </svg>
      ) : (
        ""
      )}
    </button>
  );
};