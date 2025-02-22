import { FC, useEffect, useState } from 'react'

import Image from 'next/image'

import AddPlanetIcon from '@img/icons/add-planet.svg'

import styles from './Sync.module.scss'
import PlanetMenu from '@components/ui/PlanetMenu/PlanetMenu'
import { IPlanet, IPlanetTime } from '@shared/interfaces/IPlanets'
import findPlanetByName from '@helpers/findPlanetByName'
import emptyPlanetTime from '@helpers/emptyPlanetTime'
import SyncContent from './SyncContent'

type Props = {
    exactPlanetName?: string | null
}

const SyncPlanet: FC<Props> = ({ exactPlanetName = null }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [planetName, setPlanetName] = useState<string>(exactPlanetName);
    const [planetData, setPlanetData] = useState<IPlanet>(null);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (planetName) setPlanetData(findPlanetByName(planetName))
    }, [planetName, exactPlanetName])

    return (
        <>
            {!isMenuOpen ? (
                <div className={`${styles.leftPlanet} ${exactPlanetName ? styles.block : ''}`}>
                    <div data-type="button" className={`${styles.button} ${planetName ? styles.active : ''}`} onClick={handleToggleMenu}>
                        <div className={styles.image}>
                            {planetName && planetData ? (
                                <Image
                                    src={planetData.image}
                                    blurDataURL={planetData.image}
                                    layout="fill"
                                    alt={planetName}
                                    placeholder="blur"
                                />
                            ) : (
                                <AddPlanetIcon />
                            )}
                        </div>
                    </div>
                    {planetName && planetData ? (
                        <>
                            <h3 className={styles.planetTitle}>{planetData.name}</h3>
                            <SyncContent planetData={planetData} />
                        </>
                    ) : (
                        <h3 className={styles.planetTitle}>Choose planet</h3>
                    )}
                </div>
            ) : (
                <div className={styles.menu}>
                    <PlanetMenu state={planetName} setState={setPlanetName} onSubmit={handleToggleMenu} />
                </div>
            )}
        </>
    )
}

export default SyncPlanet