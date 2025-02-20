import { IPlanetTime } from "@shared/interfaces/IPlanets";

const formatTime = (time: IPlanetTime): string => {
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num.toString());

  return `${formatNumber(time.hour)}:${formatNumber(
    time.minute
  )}:${formatNumber(time.second)}`;
};

export default formatTime;
