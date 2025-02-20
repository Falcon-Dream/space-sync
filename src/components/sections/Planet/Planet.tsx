import { FC, useEffect, useState } from "react";
import { IPlanet } from "@shared/interfaces/IPlanets";
import Image from "next/image";

import calculateCurrentDate from "@helpers/planets/calculateCurrentDate";

import styles from "./Planet.module.scss";
import findPlanetByName from "@helpers/findPlanetByName";
import emptyPlanetTime from "@helpers/emptyPlanetTime";
import formatTime from "@helpers/planets/formatTime";
import formatDate from "@helpers/planets/formatDate";
import { formatUTCDateTime } from "@helpers/planets/formatDateTime";
import Link from "next/link";

type Props = {
  planet: string;
};

const Planet: FC<Props> = ({ planet }) => {
  const [date, setDate] = useState<any>(emptyPlanetTime);

  const planetData: IPlanet = findPlanetByName(planet);

  let currentTime = "";
  let currentDate = "";

  if (planet == "Earth") {
    currentTime = formatUTCDateTime().time;
    currentDate = formatUTCDateTime().date;
  } else {
    currentTime = formatTime(calculateCurrentDate(planetData));
    currentDate = formatDate(calculateCurrentDate(planetData));
  }

  useEffect(() => {
    const handleUpdateDate = () => {
      if (planet != "Earth") {
        const currentDate = formatUTCDateTime();
        setDate(currentDate);
      } else {
        const currentDate = calculateCurrentDate(planetData);
        setDate(currentDate);
      }
    };

    handleUpdateDate();

    setInterval(handleUpdateDate, 1000);
  }, [planetData, planet]);

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container">
        <div className={styles.image}>
          <Image
            src={planetData.image}
            blurDataURL={planetData.image}
            layout="fill"
            alt={planet}
            placeholder="blur"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {planet} {planet == "Earth" ? <span>(UTC)</span> : ""}
          </h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <h3 className={styles.subtitle}>Date on the planet:</h3>
              <p className={styles.date}>{date && currentDate}</p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.subtitle}>Time on the planet:</h3>
              <p className={styles.time}>{date && currentTime}</p>
            </div>
          </div>
          <p className={styles.description}>{planetData.description}</p>
          <Link href="/planets" className={`${styles.button} themeButton`}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planet;
