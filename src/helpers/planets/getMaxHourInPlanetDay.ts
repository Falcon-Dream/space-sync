import { IPlanet } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const getMaxHourInPlanetDay = (planet: IPlanet) => {
    const durationDayInSeconds = convertDaysToSeconds(planet.duration.day);
    const maxHours = durationDayInSeconds / 3600;

    return planet.name == 'Earth' ? Math.floor(maxHours) : Math.floor(maxHours) + 1;
}

export default getMaxHourInPlanetDay