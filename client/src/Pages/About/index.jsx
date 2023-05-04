import React from "react";
import styles from "../../Styles/About/about.module.css"

const About = () => {



return (
    <div className={styles.containerGeneralAbout}>

    <div className={styles.divInfoAbout}>
        <div className={styles.divPresentacionAbout}>
        <h2>
            Hello, my name is <span>Franco Krismann</span>!
        </h2>
        <h3>
            I am the creator of this dog app. I hope you enjoy the experience.
        </h3>

        <h3>
            <span>Used technologies</span>
        </h3>
        <div className={styles.divTecnologies}>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>Redux</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Sequelize</p>
            <p>Postgres SQL</p>
        </div>
        </div>
    </div>
    </div>
);
};

export default About;