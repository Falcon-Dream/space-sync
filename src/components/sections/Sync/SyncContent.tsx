import { FC, useEffect, useState } from 'react'

import styles from './Sync.module.scss'
import { IPlanet } from '@shared/interfaces/IPlanets'
import emptyPlanetTime from '@helpers/emptyPlanetTime'
import { formatUTCDateTime } from '@helpers/planets/formatDateTime'
import calculateCurrentDate from '@helpers/planets/calculateCurrentDate'
import formatTime from '@helpers/planets/formatTime'
import formatDate from '@helpers/planets/formatDate'

type Props = {
    planetData: IPlanet
}

const SyncContent: FC<Props> = ({ planetData }) => {
    const [planetTime, setPlanetTime] = useState<any>(emptyPlanetTime);

    const planetName = planetData.name

    let currentTime = "";
    let currentDate = "";

    if (planetName == "Earth") {
        currentTime = formatUTCDateTime().time;
        currentDate = formatUTCDateTime().date;
    } else {
        currentTime = formatTime(calculateCurrentDate(planetData));
        currentDate = formatDate(calculateCurrentDate(planetData));
    }

    useEffect(() => {
        const handleUpdateDate = () => {
            if (planetName == "Earth") {
                setPlanetTime(formatUTCDateTime());
            } else {
                setPlanetTime(calculateCurrentDate(planetData));
            }
        };

        handleUpdateDate();

        setInterval(handleUpdateDate, 1000);
    }, [planetData]);

    return (
        <div className={styles.content}>
            <p className={styles.date}>{planetTime && currentDate}</p>
            <p className={styles.time}>{planetTime && currentTime}</p>
        </div>
    )
}

export default SyncContent