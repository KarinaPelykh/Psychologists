import psychology from "../../images/psycholog.jpg";
import icon from "../../images/sprite.svg";
import { Button } from "../Button/Button";
export const Home = () => {
  return (
    <section
      className="min-w-fit
    min-h-screen  mobil:mb-[10px] desktop:flex "
    >
      <div className="pt-[20px] tablet:w-[595px] tablet:flex tablet:mx-[auto] tablet:flex-col  desktop:mr-[125px] desktop:pt-[126px]">
        <h1 className="font-semibold leading-[1.02] text-[50px] mb-[24px] tablet:text-center   tablet:text-[80px]   tablet:tracking-[0.02rem] tablet:mb-[20px] desktop:text-start">
          The road to the <span className="text-[#FC832C] italic">depths</span>{" "}
          of the human soul
        </h1>
        <p className="mb-[10px]  text-[ #191a15] font-medium text-base leading-[1.33]  tracking-[0.02rem]  	 tablet:mb-[40px] desktop:w-[460px]">
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Button prop="Get started" className="w-fit" />
      </div>
      <div className="relative  mobil:w-[280px] tablet:w-[464px]   tablet:flex tablet:mx-[auto] tablet:flex-col  desktop:mx-[0]  desktop:pt-[78px] desktop:h-[526px]">
        <div className="rounded-[10px] w-[40px] h-[40px] bg-[#54BE96]  flex justify-center absolute top-[0px]left-[0px] tablet:top-[250px] tablet:left-[35px] rotate-[80deg]">
          <svg className="w-[9px] h-[14px] absolute top-[12px] rotate-[281deg]">
            <use xlinkHref={icon + "#question mark"}></use>
          </svg>
        </div>
        <img
          className="  desktop:w-[464px] desktop:h-[526px] rounded-[10px]"
          src={psychology}
          alt="psychologists"
        />

        <div className="rounded-[10px] w-[48px] h-[48px] bg-[#FBC75E]  flex justify-center absolute  top-[80px] right-[0px] tablet:top-[130px] tablet:right-[-35px] rotate-[26deg]">
          <svg className="w-[16px] h-[16px] absolute rotate-[337deg] top-[16px]">
            <use xlinkHref={icon + "#sing"}></use>
          </svg>
        </div>
        <div className="p-[8px] w-[280px] bottom-[60px]  left-[-10px] absolute tablet:bottom-[55px] tablet:left-[270px] bg-[#FC832C] tablet:w-[311px] tablet:h-[118px] rounded-[20px] flex justify-center  items-center desktop:left-[-110px] desktop:bottom-[5px] desktop:h-[118px]">
          <div className="w-[40px] h-[40px] bg-white tablet:w-[54px] tablet:h-[54px] rounded-[10px] flex mr-[16px]	">
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
