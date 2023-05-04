import axios from "axios"
import {ERROR,
    GET_ALLDOGS,
    POST_DOG,
    TEMPERAMENTS,
    BY_SELECT,
    ORDER_SELECT,
    TEMPERAMENTS_SELECT, 
    NAME_SEARCH,
    PAGE_NUMBER,
    AMOUNT_PAGES,
    LOADING,
    SEARCH_ID,
    CLEAR_DETAIL_DOGS
} from "../actions type/actions-types"



export const alldogs_filter = (By, Page, Temperament, order, name) => {
    console.log(By)
    return async (dispatch) => {
        
        // const{By, Temperament, order, name} = payload
        
        try {
            const response = await axios.get(`http://localhost:3001/dogs/all`,{
                params: {By,Page,Temperament, order, name },
            })
            console.log(response.data)
            const {info, amountPages} = response.data
            
            return dispatch({type:GET_ALLDOGS,payload:info}),
            dispatch({type:AMOUNT_PAGES,payload:amountPages})
        } catch (error) {
            return dispatch({type:ERROR,payload:error})
        }
        }
    }
    

export const filterSelect = (filter) => {
    return { type: BY_SELECT, payload: filter };
    };


export const orderSelect = (order) => {
    return { type: ORDER_SELECT, payload: order };
};

export const temperamentsSelect = (temperament) => {
    console.log(temperament)
    return { type: TEMPERAMENTS_SELECT, payload: temperament };
    };

export const pageSelect = (pageNumber) => {
    return {type:PAGE_NUMBER, payload:pageNumber}
};

export const nameSearch = (payload) => {
    console.log(payload)
        return {
        type: NAME_SEARCH,
        payload
        };
};

export const amountPage = (amountpage) => {
        return {
            type:AMOUNT_PAGES,
            payload:amountpage
        }
}

export const loadingPage = (boolean) => {
return {
    type:LOADING,
    payload:boolean
}
}

export function postRecipe(newDog){
    console.log(newDog)
    return async function(dispatch){
        
        try {
            const post = await axios.post("http://localhost:3001/dog/create", newDog)
            console.log(post)
            return dispatch({type:POST_DOG,payload:post})
        } catch (error) {
            return dispatch({type:ERROR,payload:error})
        }
    }
}

export const detailId = (idSearch) => {
    return async (dispatch) => {
        try {
            const dogId = await axios.get(`http://localhost:3001/dog/${idSearch}`)
            return dispatch({type:SEARCH_ID,payload:dogId.data})
        } catch (error) {
            return dispatch({type:ERROR,payload:error})
        }
    }
}

export const clearDetailDogs = () => {
    return {
    type: CLEAR_DETAIL_DOGS,
    payload: [],
    };
}

export  function GetTemperaments (){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/temperament/all")
            return dispatch({type:TEMPERAMENTS,payload:response.data})
        } catch (error) {
            return dispatch({type:ERROR,payload:error})
        }
    }
}

