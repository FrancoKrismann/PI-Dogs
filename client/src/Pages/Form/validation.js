const nameValidacion =  /^[A-Z].*/;
const lifespanValidation = /^\d+\s*-\s*\d+\s+años?\s+de\s+vida$/
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
const errorData = "no puede estar vacio"

function validation (formDog){
const error = {}
const {
heightMax,
heightMin,
weightMax,
weightMin,
image
} = formDog




if(!formDog.name){
    error.name = "El nombre del Dog no puede estar vacio"
}else if(formDog.name.length > 20){
    error.name ="El nombre del Dog no puede tener mas de 20 caracteres";
}else if(!nameValidacion.test(formDog.name)){
    error.name = "La primera letra del nombre tiene que ser en Mayuscula"
}


if(!parseInt(heightMax)){
    error.heightMax = ` heightMax ${errorData}`
}else if(formDog.heightMax > 120){
    error.heightMax = "La altura maxima no puede superar los 120"
}
if(!heightMin){
    error.heightMin = ` heightMin ${errorData}`  
}else if(parseInt(heightMin) < 10){
    error.heightMin = "La altura minima no puede ser menos de 10"
}
if(parseInt(heightMax) < parseInt(heightMin)){
    error.heightMax = "La altura maxima no puede ser menor a la de Altura minima"
}

if(!weightMax){
    error.weightMax = ` weightMax ${errorData}` 
}else if(parseInt(weightMax) > 110){
    error.weightMax = "El peso maximo no puede superar los 110"
}

if(!weightMin){
    error.weightMin = ` weightMin ${errorData}`
}else if(parseInt(weightMin) < 1){
    error.weightMin = "El peso minimo no puede ser menos de 1 "
}
if(parseInt(weightMax) < parseInt(weightMin)){
    error.heightMax = "El peso maximo no puede ser menor al peso minimo"
}
if(!formDog.lifespan){
    error.lifespan = ` lifespan ${errorData}`
}else if(!lifespanValidation.test(formDog.lifespan)){
    error.lifespan = "Error: ej; 4-6 años de vida"
}
console.log(typeof image)
if(!image){
    error.image = `imagen ${errorData}`
}else if(!urlRegex.test(image)){
error.image = "Debe ser una url"
}

if(formDog.temperament.length === 0){
    error.temperament = ` temperaments ${errorData}`
}


return error
}

export default validation