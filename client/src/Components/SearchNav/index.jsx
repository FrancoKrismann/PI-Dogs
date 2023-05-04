import {nameSearch,filterSelect,pageSelect} from "../../redux/actions/actions"
import styles from "../../Styles/SearchNav/search.module.css"
import {useDispatch} from "react-redux"
import { useState } from "react"
const SearchNav = () => {

    const [searchBreed, setSearchBreed] = useState("");
    const dispatch = useDispatch();

    const hanldeChangeSearch = (e) => {
        console.log(e.target.value)
    setSearchBreed(e.target.value);
    
    };

    const onSeachClick = async () => {
    if (!searchBreed) return alert("Breed is require");
    const nameDogs = searchBreed;

    await dispatch(nameSearch(nameDogs));
    handleRemoveName()
    };

    const handleRemoveName = async () => {
    setSearchBreed("");
    dispatch(filterSelect(null))
    dispatch(nameSearch(null));
    dispatch(pageSelect(null))
    };

return (

    <div className={styles.group}>
        <div className={styles.containerInputs}>
        <input 
        required="" 
        type="search" 
        value={searchBreed}
        onChange={hanldeChangeSearch}
        className={styles.input}/>
        <input
        type="submit"
        value="Search"
        onClick={onSeachClick}
        className={styles.buttonSearchBar}
        />
        </div>
    
    <span className={styles.highlight}></span>
    <span className={styles.bar}></span>
    
</div>
)

}


export default SearchNav