import React from "react";
import TodoListItem from './TodoListItem'
const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <>
            {/**TodoList.  argumentos todos */}


            <ul className="list-group list-group-flush">
                {/**Acá nos ayuda imprimir lo que tenemos */}
                {
                    todos.map((todo, i) => (
                        //TodoListItem, todo, index
                     <TodoListItem
                     key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                     
                     />
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;