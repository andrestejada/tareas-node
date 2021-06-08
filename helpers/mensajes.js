require(`colors`)

const mostrarMenu = ()=>{
    return new Promise( resolve=>{

        console.clear()
        console.log(`=====================`.green)
        console.log(`Seleccione una Opcion`.green)
        console.log(`=====================\n`.green)
        console.log(`${'1.'.green}Crear Tarea`)
        console.log(`${'2.'.green}Listar Tareas`)
        console.log(`${'2.'.green}Listar Tareas Completadas`)
        console.log(`${'3.'.green}Listar tareas pendientes`)
        console.log(`${'4.'.green}Completar tareas(s)`)
        console.log(`${'6.'.green}Borrar Tarea`)
        console.log(`${'0.'.green} Salir`)
    
        const redline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        redline.question('Seleccione una opcion:',(opt)=>{
            redline.close()
            resolve(opt)
        })
    })
}

const pausa =()=>{

    return new Promise( resolve=>{

        const redline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        redline.question(`\nPresione ${'ENTER'.green} para continuar\n`,(opt)=>{
            redline.close()
            resolve()
        })
    } )
    
}

module.exports ={
    mostrarMenu,
    pausa
}