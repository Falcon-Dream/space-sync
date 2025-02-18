import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Swal from "sweetalert2";

import FalconIcon from "@img/icons/falcon.svg";

import styles from "./Team.module.scss";

const Team: FC = () => {
  const handleClick = (name: string) => {
    const teamInfo: any = {
      nick: {
        title: "Mykola Korzhykov",
        text: "Mykola info",
      },
      vance: {
        title: "Vance Schaefer",
        text: "Vance info",
      },
      sebas: {
        title: "Sebastian Perez Delgado",
        text: "Sebastian info",
      },
      maksym: {
        title: "Maksym Dublii",
        text: "Maksym info",
      },
    };

    Swal.fire({
      title: teamInfo[name].title,
      text: teamInfo[name].text,
      icon: "info",
    });
  };

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className="container">
        <div className={styles.row}>
          <div className={`${styles.falconIcon} ${styles.rotate}`}>
            <FalconIcon />
          </div>
          <h1 className={styles.title}>Our team</h1>
          <div className={`${styles.falconIcon}`}>
            <FalconIcon />
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => handleClick("nick")}>
            <div className={styles.image}>
              <Image
                src="/img/team/nick.jpg"
                blurDataURL="/img/team/nick.jpg"
                layout="fill"
                alt="logo"
                placeholder="blur"
              />
            </div>
            <h3 className={styles.name}>Mykola</h3>
            <div className={styles.roles}>
              <p className={styles.role}>Project Manager</p>
              <p className={styles.role}>Developer</p>
            </div>
            <p className={styles.age}>17 years old</p>
          </li>
          <li className={styles.item} onClick={() => handleClick("sebas")}>
            <div className={styles.image}>
              <Image
                src="/img/team/sebas.jpg"
                blurDataURL="/img/team/sebas.jpg"
                layout="fill"
                alt="logo"
                placeholder="blur"
              />
            </div>
            <h3 className={styles.name}>Sebastian</h3>
            <div className={styles.roles}>
              <p className={styles.role}>Data Scientist</p>
            </div>
            <p className={styles.age}>17 years old</p>
          </li>
          <li className={styles.item} onClick={() => handleClick("vance")}>
            <div className={styles.image}>
              <Image
                src="/img/team/vance.jpg"
                blurDataURL="/img/team/vance.jpg"
                layout="fill"
                alt="logo"
                placeholder="blur"
              />
            </div>
            <h3 className={styles.name}>Vance</h3>
            <div className={styles.roles}>
              <p className={styles.role}>Developer</p>
            </div>
            <p className={styles.age}>18 years old</p>
          </li>
          <li className={styles.item} onClick={() => handleClick("maksym")}>
            <div className={styles.image}>
              <Image
                src="/img/team/maksym.jpg"
                blurDataURL="/img/team/maksym.jpg"
                layout="fill"
                alt="logo"
                placeholder="blur"
              />
            </div>
            <h3 className={styles.name}>Maksym</h3>
            <div className={styles.roles}>
              <p className={styles.role}>UX/UI Designer</p>
              <p className={styles.role}>Helper</p>
            </div>
            <p className={styles.age}>14 years old</p>
          </li>
        </ul>
        <h2 className={styles.subtitle}>What is the problem?</h2>
        <p className={styles.description}>
          We have encountered a problem:{" "}
          <span>
            planning remote meetings between scientists on Earth and astronauts
            on various celestial bodies,
          </span>
          including planets, their moons, and asteroids. While working on this
          issue, we identified two additional challenges: the existence of
          <span>different time zones</span> on Earth and the use of{" "}
          <span>different calendars</span> by scientists. As a result, we now
          have three problems to solve, which we are actively working on.
        </p>
        <h2 className={styles.subtitle}>How we solve it?</h2>
        <p className={styles.description}>
          In order to solve these problems, we first needed to study each one in
          detail. We began by figuring out{" "}
          <span>how to calculate the date and time on a celestial body.</span>{" "}
          To understand this, we had to consider its{" "}
          <span>
            rotation period around its axis and its orbit around the Sun.
          </span>{" "}
          We decided to exclude the calculation of months on celestial bodies
          since not all planets have moons. Additionally, before creating{" "}
          <span>a universal formula for all celestial bodies,</span> we had to
          choose a <span>starting point</span> for our space calendar. We
          determined that the starting point would be the date the object was
          discovered. For example, Mars was discovered in 1610 on Earth, which
          means that at that time, it was considered Year 1 on Mars.{" "}
          <span>After this, we started working on two formulas:</span> one for
          calculating the date and time on a celestial body relative to Earth
          and another for calculating the date and time on one celestial body
          relative to another. We had no issues using Earth’s time zones, and
          for celestial bodies,{" "}
          <span>
            we established a single central time zone to maintain the
            universality of our formulas.
          </span>{" "}
          Once we identified the necessary input data for our calculations, we
          spent a long time refining our formulas to ensure their accuracy.
          Next, we began <span>collecting data</span> on planets, moons, and
          asteroids that we would integrate into our application. We also
          selected <span>specific calendars</span> and decided that, to ensure
          compatibility with our formulas, any date and time from a different
          calendar would first be{" "}
          <span>converted into the Gregorian calendar</span>, which is the most
          familiar to us. Once we confirmed that our formulas were functional,
          we designed the visual layout of our application and presented it at
          the <span>Preliminary Design Review (PDR).</span> After this, we
          started developing a working application, implementing both the
          formulas and calendar systems. In addition, we created a feature that
          allows two people <span>to schedule a meeting</span> based on our
          calculations. We are now preparing to present the beta version of the
          application at the <span>Critical Design Review (CDR).</span>
        </p>
        <h2 className={styles.subtitle}>Where we get to?</h2>
        <p className={styles.description}>
          As a result, planning remote meetings between scientists and
          astronauts will become{" "}
          <span>much easier, faster, and more convenient.</span> It will be
          possible to track the date and time on any celestial body in real
          time, using different calendars and time zones, as well as a{" "}
          <span>manual calculator for synchronizing dates and times.</span>{" "}
          Ultimately, we will resolve all the challenges we encountered by
          creating <span>universal solutions.</span>
        </p>
        <h2 className={styles.subtitle}>Links</h2>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <p className={styles.linkTitle}>Name</p>
            <Link href="/" className={styles.link}>
              Link
            </Link>
          </li>
          <li className={styles.linkItem}>
            <p className={styles.linkTitle}>Name</p>
            <Link href="/" className={styles.link}>
              Link
            </Link>
          </li>
        </ul>
        <div className={styles.card}>
          <Image
            src="/img/team/photo.jpg"
            blurDataURL="/img/team/photo.jpg"
            layout="fill"
            alt="logo"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
