import React, { useEffect, useState } from 'react'
import './Tasks.css'

const Tasks = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
  }, [])

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Tareas</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h4 className="text-center">Lista de Tareas</h4>
        </div>
        <div className="col-md-4 col-sm-12">
          <h4>{editMode ? 'Modificar Tarea' : 'Agregar Tarea'}</h4>

          <form onSubmit={editMode ? saveTask : addTask}>
            <textarea
              type="input"
              placeholder="Ingrese tarea..."
              className="form-control input-task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />

            <button
              type="submit"
              className={
                editMode
                  ? 'btn btn-warning w-100 mt-2'
                  : 'btn btn-dark w-100 mt-2'
              }
            >
              {editMode ? 'Guardar Tarea' : 'Agregar Tarea'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Tasks
