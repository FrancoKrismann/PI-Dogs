const {Temperament} = require("../../db")
const { conn } = require("../../db");
const axios = require("axios");
const { API_KEY , ALL_DOGS} = process.env;
const URL = `${ALL_DOGS}key=${API_KEY}`;

const alltemperament = async() => {
    try {
        const infoApi = await axios.get(URL);

        const temperamentDogs = await infoApi.data.map((dog) => dog.temperament);
    
        for (let i = 0; i < temperamentDogs.length; i++) {
            
            const element = String(temperamentDogs[i]).split(", ");
            // console.log(temperament)
    for (let j = 0; j < element.length; j++) {
                // console.log(temperament)
                const name = element[j]
                await conn.transaction(async (transaction) => {
                    // console.log(name)
                await Temperament.findOrCreate({
                    where: { name},
                    transaction,
                });
            
        });
    }
        }
    
    const alltemperamentDB = await Temperament.findAll()
    return alltemperamentDB
    
} catch(error){
    console.log(error)
}
}

module.exports = {
    alltemperament
}