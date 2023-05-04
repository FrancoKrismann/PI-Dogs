
import styles from "../../Styles/Nav/nav.module.css"
import SearchNav from "../SearchNav"
import { Link } from "react-router-dom";
const Nav  = () => {

return (
<>
{/* Agregar animacion input pendiente */}
    <nav className={styles.nav}>
        <div className={styles.container_nav}>
            <SearchNav/>
                <ul className={styles.Nav_menu}>
                    <Link to="/Home">
                    <li>Home</li>
                    </Link>
                    <Link to="/About">
                    <li>About</li>
                    </Link>
                    
                </ul>
        </div>
    </nav>
</>
);
}


export default Nav