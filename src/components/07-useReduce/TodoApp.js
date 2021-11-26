import React, { useReducer, useEffect } from "react";
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import useForm from '../../hooks/useForm'

import './styles.css'




const init = () => {

    //comentamos el código ya que necesitamos que el localstorage lea lo que tiene almacenado
    /**
     * 
      return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]
     * 
     */

    //con el JSON.parse(localStorage.getItem('todos')), lo que hacemos es 
    //recuperar el objeto, ya que anteriormente en el localstorage estaba en string
    return JSON.parse(localStorage.getItem('todos')) || [];

}

const TodoApp = () => {

    //dispatch ayuda a disparar las acciones, al hacer cambios en el state
    //init
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //destructuramos lo que se rellena en el formulario y 
    //en el input pondremos un value y llevará el de description
    const [{ description }, handleInputChange, reset] = useForm(
        {
            description: ''
        }
    );

    //se guardara en el localstorage cuando todos cambia, es por ello que usaremos 
    //useEffect
    useEffect(() => {

        //el localstore no guarda objetos, solo guarda string
        //JSON.stringify(todos), para transformar el objeto en un string
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {


        //crear la acción
        const action = {
            type: 'delete',
            payload: todoId

        }
        //dispatch
        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }


    const handleSumit = (e) => {


        if (description.trim().length <= 1) {
            return alert('Debes escribir algo.')
        }
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset();
    }

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">

                  <TodoList
                  todos={todos}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                  />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />

                    <form onSubmit={handleSumit}>
                        <input
                            type="name"
                            name="description"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary mt-2 form-control"
                        >
                            Agregar
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default TodoApp;