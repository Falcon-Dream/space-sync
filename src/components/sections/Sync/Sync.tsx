import { FC } from 'react'

import SyncPlanet from './SyncPlanet'

import styles from './Sync.module.scss'

const Sync: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container over">
                <div className={styles.row}>
                    <SyncPlanet />
                    <SyncPlanet exactPlanetName={localStorage.getItem('planet')} />
                    <SyncPlanet />
                </div>
            </div>
        </div>
    )
}

export default Sync