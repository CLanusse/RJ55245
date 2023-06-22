

const users = [
    {
        id: 1,
        nombre: "Fede",
        rol: "Tutor Adjunto"
    },
    {
        id: 2,
        nombre: "Ivan",
        rol: "Tutor Regular"
    },
    {
        id: 3,
        nombre: "Matias",
        rol: "Tutor Regular"
    },
    {
        id: 4,
        nombre: "Conrado",
        rol: "Lider Supremo"
    },
]


// const resultado = users.find((el) => el.nombre === "Matias")
// console.log(resultado)

function encontrar(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]

        if (fn(current) === true) {
            return current
        }
    }
}

function filtrar(arr, fn) {
    var filter = []

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]

        if (fn(current) === true) {
            filter.push(current)
        }
    }

    return filter
}


// const resultado = encontrar(users, (user) => user.rol === "Tutor Regular")
// const resultado2 = filtrar(users, (user) => user.rol === "Tutor Aasdfasdfdjunto")

console.log(users.length)

Array.prototype.encontrar = function(fn) {
    for (var i = 0; i < this.length; i++) {
        var current = this[i]

        if (fn(current) === true) {
            return current
        }
    }
}

// console.log( users.encontrar((user) => user.id === 2) )

const productos = [
    {
        id: 10,
        nombre: "Coca"
    },
    {
        id: 23,
        nombre: "Pepsi"
    },
]

console.log( productos.encontrar((prod) => prod.nombre === "Pepsi") )
