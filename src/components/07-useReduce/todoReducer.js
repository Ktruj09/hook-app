
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            //regresa un nuevo arreglo
            return state.filter(todo => todo.id !== action.payload);


        //segunda opción, pero simplificado
        case 'toggle':
            return state.map(todo =>
                //return implicito
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            )

        //primera opción de como marcar tarea completada
        case 'toggle-old':
            return state.map(todo => {
                //aca haremos un cambio de estado de todo.done lo negaremos 
                //que ya nos daría un valor true
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    //sino se cumple la condición todo seguira igual
                    return todo
                }
            })

        default:
            return state
    }
}

