const axios = require("axios")
require('dotenv').config();
const {API_KEY, ALL_DOGS} = process.env;


const GetDogs = async() => {
    try {
        const response = await axios.get(`${ALL_DOGS}api_key=${API_KEY}`)
    const data = response.data
    const alldogs = data?.map((dog) => {
        const temperamentsArray = dog.temperament?.split(", ");
        const temperamentsObject = temperamentsArray?.map((temp) => ({
            name: temp,
        }));
        // const {id, name , image , life_span, temperament, }
        return {
            
            id:dog.id,
            name:dog.name,
            image:dog.image.url,
            life_span:dog.life_span,
            temperament:temperamentsObject,
            heightMin: parseInt(dog.height.metric.split(" - ")[0]),
            heightMax: parseInt(dog.height.metric.split(" - ")[1]),
            weightMin: parseInt(dog.weight.metric.split(" - ")[0]),
            weightMax: parseInt(dog.weight.metric.split(" - ")[1]),

        }
    
    })
    return alldogs
    } catch (error) {
        console.log(error)
    }
    
    
}


module.exports = {
    GetDogs
}