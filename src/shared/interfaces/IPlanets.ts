interface IPlanet {
  type: "planet" | "moon" | "asteroid";
  name: string;
  image: string;
  planet?: string;
  discovery: {
    year: number;
    month: number;
    day: number;
  };
  duration: {
    year: number;
    day: number;
  };
  description: string;
}

interface IPlanets {
  planets: IPlanet[];
  moons: IPlanet[];
  asteroids: IPlanet[];
}

interface IPlanetTime {
  year: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export type { IPlanet, IPlanets, IPlanetTime };
