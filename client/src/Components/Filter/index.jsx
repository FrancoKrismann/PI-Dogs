import styles from "../../Styles/Filter/filter.module.css"
import {useSelector, useDispatch} from "react-redux"
import {filterSelect,orderSelect,temperamentsSelect} from "../../redux/actions/actions.js"
import { Link } from "react-router-dom"



const Filter = () => {
let i = 1
const temperaments = useSelector((state) => state.Temperaments)

const dispatch = useDispatch()



const handleBy = (e) => {

    dispatch(filterSelect(e.target.value));
    
    console.log(e.target.value);
};

const handleOrder = (e) => {
    dispatch(orderSelect(e.target.value));
    
    console.log(e.target.value);
};

const handleTemperaments = async(e) => {
if( e.target.value !== "ALL"){
    dispatch(temperamentsSelect(e.target.value));
    
}else{
    dispatch(temperamentsSelect(null));
    
    }
    
    
};

const reset = async() => {
    dispatch(filterSelect(null));
    dispatch(orderSelect(null));
    dispatch(temperamentsSelect(null));
    
    // dispatch(nameSearch(null))

    const filterSelectValue = document.getElementById("filterSelect");
    const orderSelectValue = document.getElementById("orderSelect");
    const temperamentSelectValue = document.getElementById("temperamentSelect");
    
    

    filterSelectValue.value = "ALL";
    orderSelectValue.value = "A - Z";
    temperamentSelectValue.value = "ALL";
    await dispatch(filterSelect(filterSelectValue.value));
    

};


return (
    
    <div className={styles.container}>
        <ul className={styles.filter}>
            <li>
                <select id="temperamentSelect" onChange={e => handleTemperaments(e)}>
                    {/* Agregar if sobre ALL en el Back */}
                    <option value="ALL">All</option>        
                {temperaments.map((temp) => (
                    <option key={i++} value={temp.name}>
                {temp.name}
                    </option>
                ))}
                </select>
            </li>
            <li>
                <select id="orderSelect" onChange={e => handleOrder(e)}>
                {/* Hacer cambios en el back para que devuelva todo si la option es All */}
                    <option value="ASC">A - Z</option>
                    <option value="DES">Z - A</option>
                    <option value="weightMin">weightMin</option>
                    <option value="weightMax">weightMax</option>
                </select>
            </li>
            <li>
                <select id="filterSelect" onChange={e => handleBy(e)}>
                    <option value="ALL">All</option>
                    <option value="API">API</option>
                    <option value="DB">DB</option>
                </select>
                
            </li>
            <button className={styles.button} onClick={reset}>Reset</button>
            <Link to="/Create">
                <button className={styles.buttonCreate}>Create Dog</button>
            </Link>
            
        </ul>

    </div>
    
)
}


export default Filter