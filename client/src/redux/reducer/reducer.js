import {
    ERROR,
    GET_ALLDOGS,POST_DOG,
    TEMPERAMENTS, 
    NAME_SEARCH,
    BY_SELECT,
    ORDER_SELECT,
    TEMPERAMENTS_SELECT,
    PAGE_NUMBER,
    AMOUNT_PAGES,
    LOADING,
    SEARCH_ID,
    CLEAR_DETAIL_DOGS
} from "../actions type/actions-types.js"



const initialState ={
Renderizado:[],
DetailRend:[],
Loading:false,
name:"",
Temperament:"",
By:"ALL",
order:"",
Page:"1",
amountPages:null,
SUCCESSFULPOST:{},
Temperaments:[],
ERROR:{}
}

const rootReducer = (state = initialState, action) =>{
switch (action.type) {
    case GET_ALLDOGS:
        return{
            ...state,
            Renderizado:action.payload
        }
        case SEARCH_ID:
            return{
                ...state,
                DetailRend:action.payload
            }
    case BY_SELECT:
        return {
            ...state,
            By:action.payload
        }
    case ORDER_SELECT:
        return {
            ...state,
            order:action.payload
        }
    case TEMPERAMENTS_SELECT:
        return {
            ...state,
            Temperament:action.payload
        }
    case NAME_SEARCH:
        console.log(action.payload)
        return {
            ...state,
            name:action.payload
        }
    case PAGE_NUMBER:
        return{
            ...state,
            Page:action.payload
        }
    case AMOUNT_PAGES:
        return {
            ...state,
            amountPages:action.payload
        }
    case CLEAR_DETAIL_DOGS:
        return{
            ...state,
            DetailRend:action.payload
        }
    case LOADING:
        return {
            ...state,
            Loading:action.payload
        }
    case POST_DOG:
        return {
            ...state,
            SUCCESSFULPOST:action.payload
        }
    case TEMPERAMENTS:
        return {
            ...state,
            Temperaments:action.payload
        }
    case ERROR:
        return {
            ...state,
            ERROR:action.payload
        }
    default:
        return {
            ...state
        }
    }
}

export default rootReducer