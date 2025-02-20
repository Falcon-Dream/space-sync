import { IPlanet } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const convertEarthDateToPlanetTime = (planet: IPlanet, earthDate: any) => {
  const { discovery, duration } = planet;

  const discoveryYear = discovery.year;
  const discoveryMonth = discovery.month;
  const discoveryDay = discovery.day;

  const durationYearInSeconds = convertDaysToSeconds(duration.year);
  const durationDayInSeconds = convertDaysToSeconds(duration.day);

  const referenceDate: any = new Date(
    Date.UTC(discoveryYear, discoveryMonth - 1, discoveryDay, 0, 0, 0)
  );

  const differenceInSeconds = Math.floor((earthDate - referenceDate) / 1000);

  const planetYear = differenceInSeconds / durationYearInSeconds;
  const planetYearRemainder = differenceInSeconds % durationYearInSeconds;

  const planetDay = planetYearRemainder / durationDayInSeconds;
  const planetDayRemainder = planetYearRemainder % durationDayInSeconds;

  const planetHour = planetDayRemainder / 3600;
  const planetHourRemainder = planetDayRemainder % 3600;

  const planetMinute = planetHourRemainder / 60;
  const planetSecond = planetHourRemainder % 60;

  return {
    year: Math.floor(planetYear) + 1,
    day: Math.floor(planetDay) + 1,
    hour: Math.floor(planetHour) + 1,
    minute: Math.floor(planetMinute),
    second: Math.floor(planetSecond),
  };
};

export default convertEarthDateToPlanetTime;
