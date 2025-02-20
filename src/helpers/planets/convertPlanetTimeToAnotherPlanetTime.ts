import { IPlanet, IPlanetTime } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const convertPlanetTimeToAnotherPlanetTime = (
  sourcePlanet: IPlanet,
  targetPlanet: IPlanet,
  sourcePlanetTime: IPlanetTime
) => {
  const sourceTimeInEarthSeconds =
    (sourcePlanetTime.year - 1) *
      convertDaysToSeconds(sourcePlanet.duration.year) +
    (sourcePlanetTime.day - 1) *
      convertDaysToSeconds(sourcePlanet.duration.day) +
    (sourcePlanetTime.hour - 1) * 3600 +
    sourcePlanetTime.minute * 60 +
    sourcePlanetTime.second;

  const targetYearInSeconds = convertDaysToSeconds(targetPlanet.duration.year);
  const targetDayInSeconds = convertDaysToSeconds(targetPlanet.duration.day);

  const targetYear = sourceTimeInEarthSeconds / targetYearInSeconds;
  const targetYearRemainder = sourceTimeInEarthSeconds % targetYearInSeconds;

  const targetDay = targetYearRemainder / targetDayInSeconds;
  const targetDayRemainder = targetYearRemainder % targetDayInSeconds;

  const targetHour = targetDayRemainder / 3600;
  const targetHourRemainder = targetDayRemainder % 3600;

  const targetMinute = targetHourRemainder / 60;
  const targetSecond = targetHourRemainder % 60;

  return {
    year: targetYear + 1,
    day: targetDay + 1,
    hour: targetHour + 1,
    minute: targetMinute,
    second: targetSecond,
  };
};

export default convertPlanetTimeToAnotherPlanetTime;
