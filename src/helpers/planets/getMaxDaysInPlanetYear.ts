import { IPlanet } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const getMaxDaysInPlanetYear = (planet: IPlanet) => {
  const durationYearInSeconds = convertDaysToSeconds(planet.duration.year);
  const durationDayInSeconds = convertDaysToSeconds(planet.duration.day);

  const maxDays = durationYearInSeconds / durationDayInSeconds;

  return planet.name == "Venus"
    ? Number(maxDays.toFixed(2))
    : Math.floor(maxDays);
};

export default getMaxDaysInPlanetYear;
