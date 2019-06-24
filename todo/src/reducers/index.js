import {ADD_TODO, MARK_COMPLETED} from '../actions';

const initialState ={
        todos: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case MARK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo,index) => {
                   return  action.payload === index ? {...todo, completed: !todo.completed} : todo
                })
            }
        default:
            return state;
    }
}