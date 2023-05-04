const {alldogs} = require("../API_DB")


const searchByName = async(searchName) => {
    // console.log(searchName)
    const alldata = await alldogs()
    if(!searchName) return {message:"Not pass name"}
    const all =  alldata?.filter((dog) => {
        return dog.name.toLowerCase().includes(searchName.toLowerCase()) 
    });
    
    if(all.length){
        return all
    }else{
        return {message:"Not found Race"}
    }
}


const searchById = async(searchId) => {
    const alldata = await alldogs()
    if(searchId.length > 15){
        const filterbyDB = alldata?.filter((dog) => {
        return dog.id === searchId
    })
    if(filterbyDB.length){
        return filterbyDB
    }else return []
    
    }else{
        const filterbyApi = alldata?.filter((dog) => {
            return dog.id === Number(searchId)
        })
    if(filterbyApi.length){
        return filterbyApi
    }else return []
    }
    
}










module.exports = {
    searchByName,
    searchById
}