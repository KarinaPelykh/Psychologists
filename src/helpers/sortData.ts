import { Psychology } from "../type/Psycholog";

export const handelSorted = (psychology: Psychology[], option: string) => {
  const copyPsychology = [...psychology];
  switch (option) {
    case "A to Z":
      return copyPsychology.sort((a, b) =>
        a.name.slice(4).localeCompare(b.name.slice(4))
      );
    case "Z to A":
      return copyPsychology.sort((a, b) =>
        b.name.slice(4).localeCompare(a.name.slice(4))
      );
    case "Popular":
      return copyPsychology.filter(({ rating }) => rating >= 4.8);
    case "Less than 10$":
      return copyPsychology.filter(
        ({ price_per_hour }) => price_per_hour <= 150
      );
    case "Greater than 10$":
      return copyPsychology.filter(
        ({ price_per_hour }) => price_per_hour >= 120
      );
    case "Not popular":
      return copyPsychology.filter(({ rating }) => rating <= 4.75);
    case "Show all":
      return copyPsychology;
  }
};
