
const url = "http://localhost:8000/properties"

async function getProperties () {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.error("Hiba! Az ingatlanok letöltése hibás")
        console.err;
    }
    return "Valami";
}

async function createProperty (property){
        try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(property),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error("Hiba! Az új ingatlan felvétele hibás")
        console.err;
    }
    return "Valami";
}
async function deleteProperty (id){
    try {
        const response = await fetch(url + "/" + id,{
            method: "DELETE"
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error("Hiba! Az ingatlan törlése sikertelen!")
        console.error(err)
    }
}
export { getProperties, createProperty, deleteProperty }
