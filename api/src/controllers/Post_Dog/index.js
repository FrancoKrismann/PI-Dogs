const {Dog,Temperament} = require("../../db")



const postDog = async(req, res) => {
    const {name, image, heightMin, heightMax, weightMin, weightMax, lifespan, temperament} = req.body
    if (!name || !image || !heightMin || !heightMax || !weightMin || !weightMax || !lifespan || !temperament) throw Error("Error Data")
    try {
        const verificateName = await Dog.findOne({
            where:{name:name}
        })

        if(verificateName){
            throw new Error(`El name ${name} ya esta en la DB`)
        }
        const createDog = await Dog.create({
            name,
            image,
            heightMin,
            heightMax,
            weightMin,
            weightMax,
            lifespan,
        }) 
        
        const findTemp = await Temperament.findAll({
            where: { name: temperament },
        });
        
        const foundTemper = await Promise.all(findTemp);
        await createDog.addTemperament(foundTemper);
        res.status(201).json({message:"Created"})
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

module.exports = {
    postDog
}