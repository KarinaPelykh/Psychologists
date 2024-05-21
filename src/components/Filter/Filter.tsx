import Select, { SingleValue } from "react-select";
type Prop = {
  option: string;
  handelValue: (e: SingleValue<Opportunity>) => void;
};

export type Opportunity = {
  value: string;
  label: string;
};

export const Filter = ({ option, handelValue }: Prop) => {
  const options: Opportunity[] = [
    { value: "A to Z", label: "A to Z" },
    { value: "Z to A", label: "Z to A" },
    { value: "Less than 10$", label: "Less than 10$" },
    { value: "Greater than 10$", label: "Greater than 10$" },
    { value: "Popular", label: "Popular" },
    { value: "Not popular", label: "Not popular" },
    { value: "Show all", label: "Show all" },
  ];

  const selectedOption = options.find((opt) => opt.value === option) || null;

  return (
    <>
      <p>Filters</p>
      <Select
        value={selectedOption}
        classNamePrefix={"custom-select"}
        onChange={(e) => handelValue(e)}
        options={options}
      />
    </>
  );
};
