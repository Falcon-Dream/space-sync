import { FC, useState, useRef } from 'react'

import styles from './SurveyCalendar.module.scss'
import Select from '@components/ui/Select/Select'

const SurveyCalendar: FC = () => {
    const [calendar, setCalendar] = useState<string | null>(null);
    const calendarList = ['Gregorian', 'Jewish']

    return (
        <div className={styles.wrapper} data-aos="fade-up">
            <div className={styles.row}>
                <h1 className={styles.title}>
                    Choose your <span className='themeColor'>calendar</span>
                </h1>
                <div className={styles.column}>
                    <h2 className={styles.subtitle}>Calendar</h2>
                    <Select list={calendarList} value={calendar} setValue={setCalendar} />
                    <button type="button" className={`${styles.button} themeButton`}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default SurveyCalendar