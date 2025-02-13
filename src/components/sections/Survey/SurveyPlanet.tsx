import { FC, useState } from 'react'

import styles from './SurveyPlanet.module.scss'
import PlanetMenu from '@components/ui/PlanetMenu/PlanetMenu'

const SurveyPlanet: FC = () => {
    const [planet, setPlanet] = useState<string>(null);

    return (
        <div className={styles.wrapper}>
            <PlanetMenu state={planet} setState={setPlanet} />
        </div>
    )
}

export default SurveyPlanet