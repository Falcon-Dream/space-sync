import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import cosmicObjects from "@data/planets.json";

import collectCosmicObjects from "@helpers/collectCosmicObjects";

import styles from "./Planets.module.scss";

const Planets: FC = () => {
  const planets = collectCosmicObjects(cosmicObjects);

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container">
        <ul className={styles.list}>
          {planets.map(({ name, image }: any, index) => (
            <li className={styles.item} key={index}>
              <Link href={`/planets/${name}`} className={styles.link}>
                <div className={styles.image}>
                  <Image
                    src={image}
                    blurDataURL={image}
                    layout="fill"
                    alt="Cosmic Object"
                    placeholder="blur"
                  />
                </div>
                <h3 className={styles.title}>{name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planets;
