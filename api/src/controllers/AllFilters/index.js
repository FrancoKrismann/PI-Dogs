const{filterByAPI,
    filterByDB,
    filterTemperaments,
    filterASCDES} = require("../Filtros")
const {alldogs} = require("../API_DB")
const{searchByName} = require("../SearchID_Name")

const userFilter = async(By) => {
    if(By === "API") {
        const APIfilter = await filterByAPI()
        return APIfilter
    }
    if(By === "DB"){
        const DBfilter = await filterByDB()
        return DBfilter
    }
    
    if(By === "ALL"){
        const ALLfilter = await alldogs()
        return ALLfilter
    }
}




const allfilters = async(By,Temperament, order ,name) => {

    const renderizado = await userFilter(By)
    //Si no se aplica filtro se devulve el renderizado de cards
    if(renderizado && !name && !Temperament && !order) return renderizado
    //Si se aplica filtrado de Temperamentos
    if(renderizado && Temperament && !order){
        const filterTemp = await filterTemperaments(renderizado,Temperament)
        console.log(filterTemp.length)
        return filterTemp
    }
    //Si se aplica Temperamentos y Ordenamiento al mismo tiempo
    if(renderizado && Temperament && order){
        const filterTemp = await filterTemperaments(renderizado,Temperament)
        const filterOrder = await filterASCDES(filterTemp,order)
        return filterOrder
    }
    
    if(renderizado && !Temperament && order){
        const filterASC = await filterASCDES(renderizado,order)
        return filterASC
    }
console.log(name)
    if(name){
        
        const filterName = await searchByName(name)
        console.log(filterName)
        return filterName
    }
}


module.exports = {
    allfilters
}