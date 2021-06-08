const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckbox
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

require('colors')

console.clear()
const main = async () => {
  let opt = ''
  const tareas = new Tareas()
  const tareasDB = leerDB()

  if (tareasDB) {
    //establecer tareas
    tareas.cargarTareasFromArray(tareasDB)
  }
  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1':
        const desc = await leerInput('Descripciòn:')
        tareas.crearTarea(desc)
        break
      case '2':
        tareas.listadoCompleto()
        break
      case '3':
        tareas.listadoTareasCompletadasPendientes(true)
        break
      case '4':
        tareas.listadoTareasCompletadasPendientes(false)
        break
      case '5':
        const ids = await mostrarListadoCheckbox(tareas.listadoArr)
        tareas.toggleCompletadas(ids)
        break
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr)
        if (id !== '0') {
          const ok = await confirmar(
            'Estas seguro que quiere borrar la tareas?'
          )
          if (ok) {
            tareas.borrarTarea(id)
            console.log('Tarea Borrada')
          }
        }

        break
    }

    guardarDB(tareas.listadoArr)
    await pausa()
  } while (opt !== '0')
}

main()
