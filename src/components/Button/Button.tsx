import clsx from "clsx";
import icon from "../../images/sprite.svg";

type Prop = {
  prop: string;
  className?: string;
  iconShow?: boolean;
  onClick?: () => void;
  styles?: string;
};

export const Button = ({
  iconShow = true,
  prop,
  className,
  onClick,
  styles,
}: Prop) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={clsx(
        className,
        styles,

        " outline-0 bg-[#FC832C] py-[18px] px-[50px] rounded-[30px] text-white flex  text-xl",
        "hidden desktop:flex "
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
