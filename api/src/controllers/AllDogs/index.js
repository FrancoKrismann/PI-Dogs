const {alldogs} = require("../API_DB")
const{allfilters} = require("../AllFilters")
const{dogsPaginado} = require("../DogsPaginado")

const allDogs = async(By, Temperament, order, name, Page) => {
    
    if(By || Temperament || order || name || Page){
        const filter = await allfilters(By, Temperament, order, name)
        
        const dogsAllPaginado = dogsPaginado(Page, filter);
        // console.log(dogsAllPaginado)
        return dogsAllPaginado
    }

}



module.exports = {
    allDogs
}