const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o penmdiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza un elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}