import styles from "../../Styles/Cards/Cards.module.css"
import { useSelector, useDispatch } from "react-redux"
import {alldogs_filter, filterSelect} from "../../redux/actions/actions"
import { useEffect } from "react"
import Card from "../Card"
const Cards = () => {

const {Renderizado, name, Temperament, By, order, Page} = useSelector((state) => state)
const dispatch = useDispatch()

useEffect(async() => {
        dispatch(alldogs_filter(By, Page,Temperament, order, name));
    
}, [Page, name, By, order, Temperament]);

return (
    
        <div className={styles.container}>
            <div className={styles.containerCards}>
                
            {Renderizado && Renderizado.length > 0 ? (
            Renderizado?.map((dog) => (
                
            <Card
                key={dog.id}
                className={styles.itemCards}
                id={dog.id}
                name={dog.name}
                temperaments={dog.temperament}
                image={dog.image}
                weightMin={dog.weightMin}
                weightMax={dog.weightMax}
            />
            ))
            ) : (
                <div className={styles.divErrors}>
                <div>
                    <h3 className={styles.textError}>Error!</h3>
                    <p className={styles.pError}>Dog matches not found</p>
                </div>
    
                {/* <img src={errorCards} alt="Error" className={styles.imgErrors} /> */}
                </div>
            )}
            
            </div>
            
        </div>



    
)



}



export default Cards