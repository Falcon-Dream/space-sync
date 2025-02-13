import { FC, useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Image from 'next/image';

import objects from '@data/planets.json'

import PreviousIcon from '@img/icons/previous.svg'
import NextIcon from '@img/icons/next.svg'

import styles from './PlanetMenu.module.scss'

type ObjectKeys = 'planet' | 'moon' | 'asteroid';

type Props = {
    state: any
    setState: any
}

const PlanetMenu: FC<Props> = ({ state, setState }) => {
    const [currentTab, setCurrentTab] = useState<string>('planet');
    const swiperRef = useRef<any>(null);

    const typedTab = currentTab as ObjectKeys;

    const handleChooseTab = (tab: string) => {
        setCurrentTab(tab);
    }

    const handleChoosePlanet = (planet: string) => {
        setState(planet)
    }

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <ul className={styles.tabButtons}>
                    <li className={`${styles.tabButton} ${currentTab == 'planet' ? styles.tabButtonActive : ''}`} onClick={() => handleChooseTab('planet')}>Planets</li>
                    <li className={`${styles.tabButton} ${currentTab == 'moon' ? styles.tabButtonActive : ''}`} onClick={() => handleChooseTab('moon')}>Moons</li>
                    <li className={`${styles.tabButton} ${currentTab == 'asteroid' ? styles.tabButtonActive : ''}`} onClick={() => handleChooseTab('asteroid')}>Asteroids</li>
                </ul>
                <h2 className={styles.title}>Choose {currentTab}</h2>
                <Swiper modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={4}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={styles.list}>
                    {objects && objects[`${typedTab}s`].map(({ name, image }, index) => (
                        <SwiperSlide className={`${styles.planet} ${state == name ? styles.planetActive : ''}`} key={index} onClick={() => handleChoosePlanet(name)}>
                            <div className={styles.planetImage}>
                                <Image
                                    src={image}
                                    blurDataURL={image}
                                    layout="fill"
                                    alt="logo"
                                    placeholder="blur"
                                />
                            </div>
                            <p className={styles.planetName}>{name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.navigationButtons}>
                    <button className={`themeButton ${styles.submitButton}`} disabled={state == null}>OK</button>
                    <button type="button" onClick={() => swiperRef.current?.slidePrev()} className={styles.previous}>
                        <PreviousIcon />
                    </button>
                    <button type="button" onClick={() => swiperRef.current?.slideNext()} className={styles.next}>
                        <NextIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlanetMenu