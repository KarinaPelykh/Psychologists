import icon from "../../images/sprite.svg";
export const Logo = () => {
  return (
    <div className="mr-[130px]">
      <svg width="218px" height="26px">
        <use xlinkHref={icon + "#Logo"}></use>
      </svg>
    </div>
  );
};
