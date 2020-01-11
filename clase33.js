const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, data => {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)

    .then(personaje => {
        console.log(`el personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`el personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`el personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`el personaje 4 es ${personaje.name}`)
    })

    .catch(onError)