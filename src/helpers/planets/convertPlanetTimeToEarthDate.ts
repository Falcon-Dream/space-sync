import { IPlanet, IPlanetTime } from "@shared/interfaces/IPlanets";
import convertDaysToSeconds from "./convertDaysToSeconds";

const convertPlanetTimeToEarthDate = (
  planet: IPlanet,
  planetTime: IPlanetTime
) => {
  const { discovery, duration } = planet;

  const discoveryYear = discovery.year;
  const discoveryMonth = discovery.month;
  const discoveryDay = discovery.day;

  const durationYearInSeconds = convertDaysToSeconds(duration.year);
  const durationDayInSeconds = convertDaysToSeconds(duration.day);

  const totalSeconds =
    (planetTime.year - 1) * durationYearInSeconds +
    (planetTime.day - 1) * durationDayInSeconds +
    (planetTime.hour - 1) * 3600 +
    planetTime.minute * 60 +
    planetTime.second;

  const referenceDate = new Date(
    Date.UTC(discoveryYear, discoveryMonth - 1, discoveryDay, 0, 0, 0)
  );

  const earthDate = new Date(referenceDate.getTime() + totalSeconds * 1000);

  return earthDate;
};

export default convertPlanetTimeToEarthDate;
