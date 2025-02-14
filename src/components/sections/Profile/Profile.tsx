import { FC, useEffect, useState } from "react";

import Image from "next/image";

import styles from "./Profile.module.scss";

const Profile: FC = () => {
    const [role, setRole] = useState<string>(null);
    const [name, setName] = useState<string>(null);

    useEffect(() => {
        setRole(localStorage.getItem('role'));
        setName(localStorage.getItem('name'));
    }, [])

    return (
        <section className={styles.wrapper} data-aos="fade-up">
            <div className="container">
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
                <h3 className={styles.role}>{role}</h3>
                <h2 className={styles.name}>{name}</h2>
            </div>
        </section>
    );
};

export default Profile;
