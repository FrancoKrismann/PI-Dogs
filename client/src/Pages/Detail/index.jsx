import {useSelector, useDispatch} from "react-redux"
import React, { useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import errorDetail from "../../img/error dog.jpg";
import LondingPage from "../Londing";
import {
    detailId,
  loadingPage,
  clearDetailDogs,
} from "../../redux/actions/actions";
import styles from "../../Styles/Detail/detail.module.css";

const Detail = () => {
const {idRace} = useParams()    
const dispatch = useDispatch()
const { DetailRend,Loading} = useSelector((state) => state)






useEffect(() => {
const getDetail = async () => {
    dispatch(loadingPage(true)); 
    await dispatch(detailId(idRace));
    dispatch(loadingPage(false)); 
};
getDetail();
}, [idRace]);  


const detalle = DetailRend.map((item) => (
  item.temperament
))
console.log(detalle)
const handleClearDetail = () => {
dispatch(clearDetailDogs());
};


return (
    <>
    {Loading ? (
        <LondingPage />
    ) : (
<div className={styles.container}>
      {DetailRend.length > 0 ? (
        
<div className={styles.containerDetail}>
            <Link to = "/Home">
                <button
                className={styles.buttonDetail}
                onClick={handleClearDetail}
                >
                Back
                </button>
            </Link>

            <div className={styles.containerDetailInfo}>
              <div className={styles.divInfoDetail}>
                {DetailRend.map((item,index) => {
                    return (
                    <h3 className={styles.nameDetail} key ={index}>{item.name}</h3>  
                    )})}
                <div className={styles.divInfoWHLS}>
                  <div className={styles.divWeight}>
                    <h3 className={styles.titleWeight}>Weight</h3>
                    {DetailRend.map((item) => {
                        let j = 1
                        return (
                            <p className={styles.textWeight} key={j++}>{item.weightMin} - {item.weightMax}</p>
                        )
                    })}
                    
                  </div>
                  <div className={styles.divHeight}>
                    <h3 className={styles.titleHeight}>Height</h3>
                    {DetailRend.map((item) => {
                        let i = 1
                        return (
                        <p className={styles.textHeight} key={i++}>{item.heightMin} - {item.heightMax}</p>
                        )
                    })}
                    
                  </div>
                  <div className={styles.divLifeSpan}>
                    <h3 className={styles.titleLifeSpan}>Life Span</h3>
                    {DetailRend.map((item,index) => (
                        <p className={styles.textLifeSpan} key={index}>{item.life_span}</p>
                    )
                    )}
                    
                  </div>
                </div>

                    <div className={styles.divTemperaments}>
                      <h3 className={styles.titleTemperaments}>Temperaments</h3>
                    {DetailRend.length === 0 || DetailRend.every(item => !item.hasOwnProperty('temperament') || item.temperament === undefined) ? (
      <div>
        <h2>Not found Temperaments</h2>
      </div>
    ) : (
      <div className={styles.divItemsTemperaments}>
        {DetailRend.map((item) => {
          return item.temperament.map((temp) => {
            return (
              <p className={styles.itemTemperament} key={temp.name}>{temp.name}</p>
            )
          })
        })}
      </div>
    )}


          </div>
              </div>
              <div className={styles.divImageDetail}>
                {DetailRend.map((item) => (
                <img key={item.name}src={item.image} alt={item.name} />
                ))}
              
              </div>
            </div> {/*container detail info*/}
         </div> 
        



      ) : (
        <div>
          <h1>Error: Not found id:{idRace} Dog</h1>
        </div>
      )}
        
        
      </div>  // container de la pag
        
    
    )}
    </>
)
}      

export default Detail