import { FC, useEffect, useState } from "react";

import Image from "next/image";

import PencilIcon from '@img/icons/pencil.svg'

import styles from "./Profile.module.scss";
import Swal from "sweetalert2";
import { useAppDispatch } from "@store/hook";
import { setStep, showSurvey } from "@store/slices/surveySlice";
import Select from "@components/ui/Select/Select";
import calendarList from '@data/calendars.json'

const Profile: FC = () => {
    const [role, setRole] = useState<string>(null);
    const [name, setName] = useState<string>(null);
    const [calendar, setCalendar] = useState<string | null>(null);
    const [planet, setPlanet] = useState<string>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setRole(localStorage.getItem('role'));
        setName(localStorage.getItem('name'));
        setCalendar(localStorage.getItem('calendar'));
        setPlanet(localStorage.getItem('planet'));
    }, [])

    const handleChangeName = async () => {
        const { value } = await Swal.fire({
            title: "Choose new name",
            input: 'text',
            inputPlaceholder: "Name",
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            },
            allowOutsideClick: false
        });

        setName(value)
        localStorage.setItem('name', value)
    }

    const handleChangeRole = () => {
        dispatch(setStep('role'))
        dispatch(showSurvey())
    }

    const handleChangeCalendar = (value: string) => {
        localStorage.setItem('calendar', value)
    }

    const handleChangePlanet = () => {
        dispatch(setStep('planet'))
        dispatch(showSurvey())
        window.scrollTo(0, 0)
    }

    return (
        <section className={styles.wrapper} data-aos="fade-up">
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.column}>
                        <div className={styles.avatar}>
                            {role == 'astronaut' && (
                                <div className={styles.image}>
                                    <Image
                                        src="/img/survey/astronaut.png"
                                        blurDataURL="/img/survey/astronaut.png"
                                        layout="fill"
                                        alt="logo"
                                        placeholder="blur"
                                    />
                                </div>
                            )}

                            {role == 'scientist' && (
                                <div className={styles.image}>
                                    <Image
                                        src="/img/survey/scientist.png"
                                        blurDataURL="/img/survey/scientist.png"
                                        layout="fill"
                                        alt="logo"
                                        placeholder="blur"
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.row}>
                            <h3 className={styles.role}>{role}</h3>
                            <div className={styles.pencilIcon} onClick={handleChangeRole}>
                                <PencilIcon />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <h2 className={styles.name}>{name}</h2>
                            <div className={styles.pencilIcon} onClick={handleChangeName}>
                                <PencilIcon />
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h2 className={styles.planetTitle}>Your planet</h2>
                        <div className={styles.planetImage}>
                            <Image
                                src={`/img/objects/${planet && planet.toLowerCase()}.png`}
                                blurDataURL={`/img/objects/${planet && planet.toLowerCase()}.png`}
                                layout="fill"
                                alt="logo"
                                placeholder="blur"
                            />
                        </div>
                        <div className={`${styles.row} ${styles.centerRow}`}>
                            <h3 className={styles.planetLabel}>{planet}</h3>
                            <div className={styles.pencilIcon} onClick={handleChangePlanet}>
                                <PencilIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <h2 className={styles.calendarTitle}>Calendar</h2>
                    <Select
                        list={calendarList}
                        value={calendar}
                        setValue={setCalendar}
                        className={styles.select}
                        callback={handleChangeCalendar}
                    />
                </div>
            </div>
        </section>
    );
};

export default Profile;
