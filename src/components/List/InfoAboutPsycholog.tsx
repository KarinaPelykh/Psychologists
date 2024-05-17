import { Psychology } from "../../type/Psycholog";

interface Item {
  item: Psychology;
}
export const InfoAboutPsycholog = ({ item }: Item) => {
  return (
    <ul className="flex flex-wrap mb-[24px]">
      <li className="flex">
        <p className="text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px]">
          Experience:
          <span className="text-[#191A15]">{item.experience}</span>
        </p>
        <p className=" text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px]">
          License:
          <span className="text-[#191A15]"> {item.license}</span>
        </p>
      </li>
      <li className="flex">
        <p className="text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px]">
          Specialization:
          <span className="text-[#191A15]">{item.specialization}</span>
        </p>
        <p className="text-[#8A8A89] bg-[#F3F3F3] rounded-[24px] w-fit py-[8px] px-[16px]">
          Initial_consultation:
          <span className="text-[#191A15] ">{item.initial_consultation}</span>
        </p>
      </li>
    </ul>
  );
};
