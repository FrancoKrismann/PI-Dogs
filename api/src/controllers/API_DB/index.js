const {getDB} = require("../Dogs_DB")
const{GetDogs} = require("../Dogs_API")

const alldogs = async() => {
    const api = await GetDogs()
    const db = await getDB()
    const allinfo = [...db, ...api]
    return allinfo
}

module.exports = {
    alldogs
}