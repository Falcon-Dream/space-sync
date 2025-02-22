import { IPlanet } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const getMaxMinuteInPlanetHour = (planet: IPlanet) => {
  const durationDayInSeconds = convertDaysToSeconds(planet.duration.day);
  const lastHourRemainderInSeconds = durationDayInSeconds % 3600;

  const maxMinutes = lastHourRemainderInSeconds / 60;

  return Math.floor(maxMinutes);
};

export default getMaxMinuteInPlanetHour;
