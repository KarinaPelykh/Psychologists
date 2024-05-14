import icon from "../../images/sprite.svg";
import { LogIn } from "../LogIn/LogIn";
type Modal = {
  isOpen: boolean;
  close: () => void;
};
export const Modal = ({ isOpen, close }: Modal) => {
  return (
    <>
      {isOpen && (
        <div
          className="z-20 fixed  top-[0px]
  left-[0px] bg-[#191a1580] w-[100%] h-[100%] flex justify-center items-center"
        >
          <div className="bg-[#FBFBFB] p-[64px] w-[566px] h-[510px] rounded-[30px] relative">
            <button onClick={close}>
              <svg className="w-[32px] h-[32px] absolute top-[15px] right-[15px] stroke-black">
                <use xlinkHref={icon + "#close"}></use>
              </svg>
            </button>
            <LogIn />
          </div>
        </div>
      )}
    </>
  );
};
