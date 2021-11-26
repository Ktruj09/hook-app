
const initialState = [
    {
        id: 1,
        toto: 'Comprar pan',
        done: false
    }
];


//creación el primer Reducer
//se le mandan dos parametros, state y action
//la action son las que modifican el state.
const todoReducer = (state = initialState, action) => {


    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    //por defecto siempre se tiene que devolver un state

    return state
}

let todos = todoReducer();

//no usar push cuando se trabaja en react
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos)
