const {alldogs} = require("../API_DB")



const filterByAPI = async() =>{
    const alldata = await alldogs()
    const filterAPI = alldata?.filter((dog) =>{
        return !dog.createdInDb
    })
    if(filterAPI.length){
        return filterAPI
    }else{
        return {message:"Error 404:Not found Dogs by API"}
    }
}


const filterByDB = async() =>{
    const alldata = await alldogs()
    const filterDB = alldata?.filter((dog) =>{
        return dog.createdInDb
    })
    if(filterDB.length){
        return filterDB
    }else{
        return {message:"Error 404: Not found Dogs by DB"}
    }
}


const filterTemperaments = async(Cards ,SearchTemperaments) => {
    const alldata = await alldogs()
    if(SearchTemperaments === "ALL") return alldata
    const filter = Cards?.filter((dog) => 
    dog.temperament?.some((temp) => temp.name === SearchTemperaments));
    if(!filter.length) return {message:"Error 404: Not found Dog by Temperament "} 
    return filter
}

const filterASCDES = async(Cards , order) => {
    console.log(Cards)
    if(order === "ASC"){
        const ascendent= Cards.sort((a,b) =>{
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA > nameB) return 1;
            if (nameA < nameB) return -1;
            return 0;
        })
        return ascendent
    }
    if(order === "DES"){

        const descendent= Cards.sort((a,b) =>{
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
            return 0;
        })
        return descendent
    }

    if (order === "weightMin") {
        const orderWeightMin = Cards.sort((a, b) => {
        if (a.weightMin > b.weightMin) return 1;
        if (a.weightMin < b.weightMin) return -1;
        return 0;
        });
    
        return orderWeightMin;
    }
    
    if (order === "weightMax") {
        const orderWeightMax = Cards.sort((a, b) => {
        if (a.weightMax > b.weightMax) return -1;
        if (a.weightMax < b.weightMax) return 1;
        return 0;
        });
    
    return orderWeightMax;
    }
}



module.exports = {
    filterByAPI,
    filterByDB,
    filterTemperaments,
    filterASCDES
}