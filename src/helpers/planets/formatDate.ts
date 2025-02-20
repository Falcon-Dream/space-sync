import { IPlanetTime } from "@shared/interfaces/IPlanets";

const formatDate = (time: IPlanetTime): string => {
  return `${time.year} year of ${time.day} day`;
};

export default formatDate;
