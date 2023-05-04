const {Dog, Temperament} = require("../../db")

const getDB = async() =>{
    const DB = await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    })
    
    const response = await DB.map(dog =>{
        
        return {
            id:dog.id,
            name:dog.name,
            image:dog.image,
            lifespan:dog.lifespan,
            temperament:dog.temperaments,
            heightMin:dog.heightMin,
            heightMax:dog.heightMax, 
            weightMin:dog.weightMin, 
            weightMax:dog.weightMax,
            createdInDb:dog.createdInDb
        }
    })
    return response
}

module.exports={
    getDB
}