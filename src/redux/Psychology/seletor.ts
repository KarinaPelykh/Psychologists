import { StatePsychology } from "../../type/Psycholog";

export const psychologySelector = (state: { psychology: StatePsychology }) =>
  state.psychology.psychology;
