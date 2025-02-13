interface IPlanet {
    type: 'planet' | 'moon' | 'asteroid',
    name: string
    image: string
    planet: string
}

interface IPlanets {
    planets: IPlanet[],
    moons: IPlanet[],
    asteroids: IPlanet[]
}

export type { IPlanet, IPlanets }