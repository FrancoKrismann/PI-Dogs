
import {Link} from "react-router-dom"
import styles from "../../Styles/Landing/landing.module.css"
import dog from "../../img/Perro-recortado.png"

const Landing  = () => {
    
    return (
    <>
        <div className={styles.container}>
            <img className={styles.img} src={dog} alt="dog" />
            <div className={styles.containerh1}>
            <h1 className={styles.Title}>The world of<br/> Dogs</h1>
            </div>
            <Link to="/Home">
                <button className={styles.button}>GET IN</button>
            </Link>
            
        </div>
    
    </>
    
    );
}


export default Landing