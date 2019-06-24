export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED"

export const add_todo = (todo) =>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const mark_completed = (index) => {
    return {
        type: MARK_COMPLETED,
        payload: index
    }
}