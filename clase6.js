// creamos un objeto con sus atributos a partir de las llaves {} 
var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    edad: 34
}

var marcelo =  {
    nombre: 'Marcelo',
    apellido: 'Acuna',
    edad: 40
}

// primera forma, pasar el objeto como parametro en la funcion:
function primerFormaImprimirMayuscula(persona){
    var nombre = persona.nombre.toUpperCase() 
    console.log(nombre)
}

// segunda forma, imprimir desde console.log:
function segundaFormaImprimirMayuscula(persona){
    console.log(persona.nombre.toUpperCase())
}

// tercera forma, desglozar el objeto en los parametros de la función:
function terceraFormaImprimirMayuscula({ nombre }){
    console.log(nombre.toUpperCase())
}

primerFormaImprimirMayuscula(william)
segundaFormaImprimirMayuscula(marcelo)
terceraFormaImprimirMayuscula({ nombre: 'pepito' }) //se puede también definir el objeto al invocar la función