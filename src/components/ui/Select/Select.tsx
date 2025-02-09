import { FC, useState } from 'react'

import SelectArrow from '@img/select/arrow.svg'

import styles from './Select.module.scss'
import { toggleOverlay } from '@store/slices/overlaySlice'
import { useAppDispatch } from '@store/hook'

type Props = {
    list: string[]
    value: any
    setValue: any
    placeholder?: string
}

const Select: FC<Props> = ({ list, value, setValue, placeholder = 'Choose' }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch()

    const toggleSelect = () => {
        setIsOpen(!isOpen)
        dispatch(toggleOverlay())
    }

    const selectItem = (item: string) => {
        toggleSelect()
        setValue(item)
    }

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.button} ${isOpen ? styles.buttonActive : ''}`} onClick={toggleSelect}>
                <div className={`${styles.row} ${isOpen ? styles.rowActive : ''}`}>
                    <p className={`${styles.value} ${isOpen ? styles.valueActive : ''}`}>{!value ? placeholder : value}</p>
                    <div className={styles.arrow}>
                        <SelectArrow />
                    </div>
                </div>
            </div>
            <ul className={`${styles.list} ${isOpen ? styles.listActive : ''}`}>
                {list.filter(item => item !== value).map((item, index) => (
                    <li className={styles.item} onClick={() => selectItem(item)} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select