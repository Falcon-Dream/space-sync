import { IPlanet } from "@shared/interfaces/IPlanets";

import planetsData from "@data/planets.json";

const findPlanetByName = (name: string): IPlanet | null => {
  const data: any = planetsData;

  for (const category of Object.values(data) as IPlanet[][]) {
    const foundObject = category.find(
      (obj: IPlanet) => obj.name.toLowerCase() === name.toLowerCase()
    );
    if (foundObject) {
      return foundObject;
    }
  }
  return null;
};

export default findPlanetByName;
