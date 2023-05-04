import styles from "../../Styles/Home/home.module.css"
import Filter from "../../Components/Filter"
import Paginado from "../../Components/Paginado"
import Cards from "../../Components/Cards"
import LoadingPage from "../Londing"
import { useEffect,useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import {GetTemperaments , loadingPage} from "../../redux/actions/actions"
import { Link ,Outlet} from "react-router-dom"

const Home  = () => {

    const { Loading, Temperaments} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (!Temperaments.length) { // Comprueba si los temperamentos no se han cargado
          const getTemp = async () => {
            dispatch(loadingPage(true));
            await dispatch(GetTemperaments());
            dispatch(loadingPage(false));
          };
    
          getTemp();
        }
      }, [dispatch, Temperaments.length]);

    return (
    <>
    {Loading ? (
        <LoadingPage/>
    ): (

    
    
        <div className={styles.container}>

{/* <Link to={`/Home/detail`}><button>DETAIL</button></Link> */}
            <div className={styles.Filter}>
            <Filter/>
            </div>
        <div className={styles.Paginado}>
            <Paginado/>
        </div>
        <div className={styles.Cards}>
            <Cards/>
        </div>
        <Outlet/>
        </div>
        )}
      
      
    </>
       
    );
      
}


export default Home