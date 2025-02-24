import { FC } from "react";
import Image from "next/image";

import Swal from "sweetalert2";

import FalconIcon from "@img/icons/falcon.svg";

import styles from "./Team.module.scss";

const Team: FC = () => {
  const handleClick = (name: string) => {
    const teamInfo: any = {
      nick: {
        title: "Mykola Korzhykov",
        text: "I am a senior student at Armstrong High School originally from Ukraine. I moved to the United States, Minnesota in 2023. In grade 12, I registered for a project in NASA Hunch and chose a couple of classmates with whom I would further develop SpaceSync. I also invited my cousin to the project who developed the UX / UI design for the application. My role in this project was the project manager, as well as one of the main developers of the Front-End part of the web application. I distributed tasks between each team member, monitored the progress of the application development, monitored the deadlines, and also developed the application.",
      },
      vance: {
        title: "Vance Schaefer",
        text: "I am in 12th grade. I wanted to gain more professional experience in development. In this project i was a developer helping a little with the front end. I have lots of experience in python and API development but this project i was able to learn new frameworks for development.",
      },
      sebas: {
        title: "Sebastian Perez Delgado",
        text: "I'm a student of AP Computer Science at Armstrong High School. I was born in Maracaibo, Venezuela; I lived in Venezuela until my late 14s. I am a senior (12th grade student) at Armstrong, and I have been living in Minnesota since 2021. I got into the project when my classmates invited me to the NASA HUNCH project of software. My role in the project is to investigate how other calendars work; research data that will be used for our calculations; add citations; find and test formulas that could be used for our calculations. This is my first experience with this kind of project, so I was give the task of researching and analysing.",
      },
      maksym: {
        title: "Maksym Dublii",
        text: "I am 14 years old, I am from Ukraine and currently studying at Sandburg Middle School. In this project, I am a Web UX/UI Designer. I joined this project thanks to my cousin Mykola, who needed someone to design a website. Next year, I will be studying at Armstrong High School, and I plan to continue working on this project throughout high school. This project has given me the opportunity to grow in the field of web design, and I intend to keep working in this field in the future.",
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
        <h2 className={styles.subtitle}>Example of formula</h2>
        <p className={styles.description}>
          <>
            Jupiter as reference: we will find the date in Jupiter. <br />
            <br />
            Seconds have passed on earth since 1610, January 1 ={" "}
            <span>13099730910 seconds</span> <br />
            <br /> 13099730910 / 374371200 ={" "}
            <span>34.9912891537 Jupiter year</span> <br /> <br />
            Using the mod operator, we find the remainder of the year, this will
            be used to find the current day. 371110110 <span>seconds</span>{" "}
            <br />
            <br />
            Use those seconds to divide them by the number of seconds we have in
            a Jupiter day. 371110110 / 35733.24 = 10385.5712496{" "}
            <span>current Jupiter day</span>
            <br />
            <br />
            We use mod operator to find the remainder of the day:
            <br />
            <span>20412.600000023842 seconds</span> <br />
            <br />
            Then, we find the hour (converting seconds to hours).
            20412.600000023842 / 3600 = <span>5.67016666667</span> <br />
            <br /> We use the mod operator to find the remainder of the hour
            (minute). <span>2412.600000023842</span>
            <br /> <br />
            Then, we divide them by 60 to find the minute. 2412.600000023842 /
            60 = <span>40.2100000004</span> <br /> <br />
            Then, we use the mod operator to find the seconds after the minutes.
            <br />
            <span>12.600000023841858</span>
          </>
        </p>
        <h2 className={styles.subtitle}>Current Jupiter Date</h2>
        <br />
        <p className={styles.description}>
          Year: <span>34</span>
          <br />
          Day: <span>10385</span>
          <br />
          Hour: <span>5</span>
          <br />
          Minute: <span>40</span>
          <br />
          Second: <span>12</span>
          <br />
        </p>
        <h2 className={styles.subtitle}>Links</h2>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <p className={styles.linkTitle}>SpaceSync Source (GitHub)</p>
            <a
              href="https://github.com/Falcon-Dream/space-sync"
              target="_blank"
              className={styles.link}
            >
              *Click*
            </a>
          </li>
          <li className={styles.linkItem}>
            <p className={styles.linkTitle}>Research Data</p>
            <a
              href="https://docs.google.com/document/d/18hBxOOAEKAy2GEDBHfSd3QcJ0tdZMj_6mdSKCT7luuc/edit?usp=sharing"
              target="_blank"
              className={styles.link}
            >
              *Click*
            </a>
          </li>
          <li className={styles.linkItem}>
            <p className={styles.linkTitle}>Virtual Presentation</p>
            <a
              href="https://docs.google.com/presentation/d/1pjbo2UzpSmh48rofyeGso2SrXlV7M43bgp5AhbXe400/edit?usp=sharing"
              target="_blank"
              className={styles.link}
            >
              *Click*
            </a>
          </li>
          <li className={styles.linkItem}>
            <p className={styles.linkTitle}>Brochure</p>
            <a
              href="https://docs.google.com/document/d/1W0ldYQUHnZMQD9MAKAcg3w_rHQzi_jmpR2mBVkigkxk/edit?usp=sharing"
              target="_blank"
              className={styles.link}
            >
              *Click*
            </a>
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
