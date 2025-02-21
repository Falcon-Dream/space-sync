import { IPlanet } from "@shared/interfaces/IPlanets";

const formatDiscoveryDate = (planet: IPlanet) => {
    const { year, month, day } = planet.discovery;

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${day} ${months[month - 1]} ${year}`;
}

export default formatDiscoveryDate