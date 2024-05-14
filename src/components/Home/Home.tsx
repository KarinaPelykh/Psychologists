import psychology from "../../images/psycholog.jpg";
import icon from "../../images/sprite.svg";
import { Button } from "../Button/Button";
export const Home = () => {
  return (
    <section className=" flex mx-[128px]">
      <div className="pt-[126px] w-[595px] mr-[125px] ">
        <h1 className="text-[80px] font-semibold leading-[1.02]  tracking-[0.02rem] mb-[20px]">
          The road to the <span className="text-[#FC832C]">depths</span> of the
          human soul
        </h1>
        <p className=" w-[460px] text-[ #191a15] font-medium text-base	leading-[1.33]  tracking-[0.02rem] mb-[40px]">
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Button prop="Get started" />
      </div>
      <div className=" w-[464px] pt-[78px] relative">
        <div className="rounded-[10px] w-[40px] h-[40px] bg-[#54BE96]  flex justify-center absolute top-[250px] left-[-35px] rotate-[80deg]">
          <svg className="w-[9px] h-[14px] absolute top-[12px] rotate-[281deg]">
            <use xlinkHref={icon + "#question mark"}></use>
          </svg>
        </div>
        <img className=" rounded-[10px]" src={psychology} alt="psychologists" />

        <div className="rounded-[10px] w-[48px] h-[48px] bg-[#FBC75E]  flex justify-center absolute top-[130px] right-[-35px] rotate-[26deg]">
          <svg className="w-[16px] h-[16px] absolute rotate-[337deg] top-[16px]">
            <use xlinkHref={icon + "#sing"}></use>
          </svg>
        </div>
        <div className="absolute bottom-[55px] left-[-100px] bg-[#FC832C] w-[311px] h-[118px] rounded-[20px] flex justify-center  items-center">
          <div className="bg-white w-[54px] h-[54px] rounded-[10px] flex mr-[16px]	">
            <svg className="w-[20px] h-[15px]  m-auto">
              <use xlinkHref={icon + "#feCheck"}></use>
            </svg>
          </div>
          <div>
            <p className="text-[#fbfbfb73] text-sm font-normal">
              Experienced psychologists
            </p>
            <p className="text-white text-[24px] font-bold">15,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};
