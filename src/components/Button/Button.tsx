import icon from "../../images/sprite.svg";

type Prop = {
  prop: string;
};

export const Button = ({ prop }: Prop) => {
  return (
    <button className="  py-[18px] px-[50px] rounded-[30px] bg-[#FC832C]  text-white flex  text-xl">
      {prop}
      <svg className="w-[18px] h-[18px] fill-white ml-[18px]">
        <use xlinkHref={icon + "#arrow-up"}></use>
      </svg>
    </button>
  );
};
