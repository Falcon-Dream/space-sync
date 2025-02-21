import { IPlanet } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const getMaxDaysInPlanetYear = (planet: IPlanet) => {
  const durationYearInSeconds = convertDaysToSeconds(planet.duration.year);
  const durationDayInSeconds = convertDaysToSeconds(planet.duration.day);

  const maxDays = durationYearInSeconds / durationDayInSeconds;

  return Math.floor(maxDays);
}

export default getMaxDaysInPlanetYear