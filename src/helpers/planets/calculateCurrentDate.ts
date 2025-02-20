import { IPlanet } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";
import getSecondsSinceReference from "./getSecondsSinceReference";

const calculateCurrentDate = (planet: IPlanet) => {
  const { discovery, duration } = planet;

  const discoveryYear = discovery.year;
  const discoveryMonth = discovery.month;
  const discoveryDay = discovery.day;

  const durationYear = duration.year;
  const durationYearInSeconds = convertDaysToSeconds(durationYear);
  const durationDay = duration.day;
  const durationDayInSeconds = convertDaysToSeconds(durationDay);

  const secondsSinceReference = getSecondsSinceReference(
    discoveryYear,
    discoveryMonth,
    discoveryDay
  );

  // const secondsSinceReference = 13099730910; | SEBASTIAN JUPITER REFERENCE

  const planetYear = secondsSinceReference / durationYearInSeconds;
  const planetYearRemainder = secondsSinceReference % durationYearInSeconds;

  const planetDay = planetYearRemainder / durationDayInSeconds;
  const planetDayRemainder = planetYearRemainder % durationDayInSeconds;

  const planetHour = planetDayRemainder / 3600;
  const planetHourRemainder = planetDayRemainder % 3600;

  const planetMinute = planetHourRemainder / 60;
  const planetMinuteRemainder = planetHourRemainder % 60;

  const planetSecond = planetMinuteRemainder % 60;

  return {
    year: Math.floor(planetYear + 1),
    day: Math.floor(planetDay + 1),
    hour: Math.floor(planetHour + 1),
    minute: Math.floor(planetMinute),
    second: Math.floor(planetSecond),
  };
};

export default calculateCurrentDate;
