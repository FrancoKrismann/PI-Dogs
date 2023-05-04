import styles from "../../Styles/Form/form.module.css"
import LondingPage from "../Londing"
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {loadingPage, GetTemperaments, postRecipe} from "../../redux/actions/actions"
import validation from "./validation"
import NewDog from "../../Components/newDog"


const Form = () => {
    let i = 1
    const { Renderizado,Loading, Temperaments,ERROR} = useSelector((state) => state)
    const dispatch = useDispatch()




    const[newDog,setNewDog] = useState({
        name:"",
        heightMin:0,
        heightMax:0,
        weightMin:0,
        weightMax:0,
        lifespan:"",
        image:"",
        temperament:[]
    })

    const [errors,setErrors] = useState({});

useEffect(() => {
    const getTemp = async () => {
        dispatch(loadingPage(true));
        await dispatch(GetTemperaments());
        dispatch(loadingPage(false));
    };

    getTemp();
},[dispatch])




const handleChange = (e) => {
    
const value = e.target.value;
const property = e.target.name;
    setErrors(
          validation({
            ...newDog,
            [property]: value,
          })
        );
        setNewDog({
          ...newDog,
          [property]: value,
        });
      
}

const handleSelectChange = (e) => {
const value = e.target.value;

const alreadyAdded = newDog.temperament.includes(value);

    if (alreadyAdded) {
      alert("El temperamento ya ha sido agregado");
      return;
    }

    if (newDog.temperament.length > 5) {
      alert("No se pueden agregar más temperamentos");
      return;
    }

    setErrors(
      validation({
        ...newDog,
        temperament: [...newDog.temperament, value],
      })
    );

    setNewDog({
    ...newDog,
    temperament: [...newDog.temperament, value],
    });
};

const deletedTemperament = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const updatedTemperaments = newDog.temperament.filter((temp) => {
      return temp !== value;
    });
    setNewDog({
      ...newDog,
      temperament: updatedTemperaments,
    });
  }

const handleSubmit = async(event) => {
    event.preventDefault();


        
    if (
        !errors.name &&
        !errors.lifespan &&
        !errors.weightMin &&
        !errors.weightMax &&
        !errors.heightMin &&
        !errors.heightMax &&
        !errors.temperament &&
        !errors.image
      ) {
        
        const all =  Renderizado?.filter((dog) => {
          return dog.name.toLowerCase().includes(newDog.name.toLowerCase()) 
      });
      if(all.length){
        return alert(`Ya existe un dog con ese nombre:${newDog.name}`)
      }else{
        dispatch(postRecipe(newDog));
  
        setNewDog({
          name: "",
          lifespan: "",
          weightMin: "",
          weightMax: "",
          heightMin: "",
          heightMax: "",
          temperament: [],
          image: "",
        });



      return alert("Creado con exito")
      }

       
      
      } else {
        alert("Something went wrong. Please try again");
      }
}
console.log(errors.image)
    return (
        <>
        
    {Loading ? (
        <LondingPage/>
    ):(
        <div className={styles.container}>
            <Link to="/Home">
                <button className={styles.buttonBack}>BACK</button>
            </Link>
            
  <div className={styles.FormContainer}>
    <form onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <label htmlFor="name"> Name:</label>
          <input type="text" name="name" value={newDog.name} onChange={handleChange} required />
          <p>{errors.name}</p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="altura"> Altura:</label>
          <div className={styles.inputMinMax}>
            <input type="number" name="heightMin" value={newDog.heightMin} onChange={handleChange} required min="1" max="150" step="1" />
            <span>-</span>
            <input type="number" name="heightMax" value={newDog.heightMax} onChange={handleChange} required min="1" max="150" step="1" />
          </div>
          <p>{errors.heightMin}</p>
          <p>{errors.heightMax}</p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="peso"> Peso:</label>
          <div className={styles.inputMinMax}>
            <input type="number" name="weightMin" value={newDog.weightMin} onChange={handleChange} required min="1" max="150" step="1" />
            <span>-</span>
            <input type="number" name="weightMax" value={newDog.weightMax} onChange={handleChange} required min="1" max="150" step="1" />
          </div>
          <p>{errors.weightMin}</p>
          <p>{errors.weightMax}</p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="lifespan"> Años de vida:</label>
          <input type="text" name="lifespan" value={newDog.lifespan} onChange={handleChange} required placeholder="2-3 años de vida"/>
          <p>{errors.lifespan}</p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="image"> Image:</label>
          <input type="text" name="image" value={newDog.image} onChange={handleChange} accept=".jpg, .jpeg, .png" required />
          <p>{errors.image}</p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="temperament"> Temperamentos:</label>
          <select name="temperament" onChange={handleSelectChange} required defaultValue="">
            <option value="" disabled selected>Seleccione un temperamento</option>
            {Temperaments.map(temp => (
              <option key={i++} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>
          <p>{errors.temperament}</p>
        </div>
        <div className={styles.divTemperamentsAdd}>
        {newDog.temperament.map((tempForm) => (
                  <div key={i++}className={styles.divButtonTemperamentsAdd}>
                    <button
                      className={styles.buttonTemperamentsAdd}
                      value={tempForm}
                      onClick={deletedTemperament}
                    >
                      x
                    </button>

                    <p>{tempForm}</p>
                  </div>
                ))}
        </div>
        <div className={styles.inputContainer}>
          <input type="submit" value="Create" className={styles.buttonSubmit} />
        </div>
      </div>
    </form>
  </div>
  <NewDog 
  name={newDog.name}
  lifeSpan={newDog.lifespan}
  weightMin={newDog.weightMin}
  weightMax={newDog.weightMax}
  heightMin={newDog.heightMin}
  heightMax={newDog.heightMax}
  temperaments={newDog.temperament}
  image={newDog.image}
  />
</div> //Container
    )}

        </>
    )
}


export default Form