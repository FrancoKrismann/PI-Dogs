import styles from "../../Styles/Card/Card.module.css"
import {Link, Outlet} from "react-router-dom"

const Card = ({image, name , temperaments,weightMax,weightMin, id }) => {
let i = 1

    return (
        <div className={styles.containerCard}>
      <div className={styles.divImageTittle}>
        <Link to={`/Detail/${id}`} className={styles.titleCard}>
          <div className={styles.divTitleCard}>
            <h3>{name}</h3>
          </div>

          <div className={styles.divImageCard}>
            <img src={image} alt={name} className={styles.imageCard} />
          </div>
        </Link>
      </div>

      <div className={styles.divWeight}>
        <h4 className={styles.titleWeight}>Weight:</h4>
        <p className={styles.pWeight}>
          {weightMin} - {weightMax} kg
        </p>
      </div>
      <div className={styles.divTemperaments}>
        <h4 className={styles.titleTemperaments}>Temperaments:</h4>
        {temperaments ? (
          <div className={styles.divItemsTemperaments}>
            {temperaments.slice(0, 4).map((temp) => (
              <p key={i++} className={styles.itemTemperament}>
                {temp.name}
              </p>
            ))}
          </div>
        ) : (
          <div className={styles.divItemsTemperaments}>
            <p className={styles.itemTemperament}>Friendly</p>
            <p className={styles.itemTemperament}>Docile</p>
            <p className={styles.itemTemperament}>Energetic</p>
            <p className={styles.itemTemperament}>Loyal</p>
          </div>
        )}
      </div>
      <Outlet/>
    </div>
  );
};


export default Card