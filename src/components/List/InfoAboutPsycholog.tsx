import { Psychology } from "../../type/Psycholog";

interface Item {
  item: Psychology;
}
export const InfoAboutPsycholog = ({ item }: Item) => {
  return (
    <ul className="flex flex-wrap mb-[24px] desktop:block">
      <li className=" tablet:flex mb-[8px]">
        <p className="mobil:text-[12px] mobil:px-[10px] mobil:py-[6px] text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px] tablet:text-[16px]">
          Experience:
          <span className="text-[#191A15]">{item.experience}</span>
        </p>
        <p className="mobil:text-[12px] mobil:px-[10px] mobil:py-[6px] text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px] tablet:text-[16px]">
          License:
          <span className="text-[#191A15]"> {item.license}</span>
        </p>
      </li>
      <li className="tablet:flex">
        <p className="mobil:text-[12px] mobil:px-[10px] mobil:py-[6px]  text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px] tablet:text-[16px]">
          Specialization:
          <span className="text-[#191A15]">{item.specialization}</span>
        </p>
        <p className=" mobil:text-[12px] mobil:px-[10px] mobil:py-[6px] text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px] tablet:text-[16px]">
          Initial_consultation:
          <span className="text-[#191A15] ">{item.initial_consultation}</span>
        </p>
      </li>
    </ul>
  );
};
