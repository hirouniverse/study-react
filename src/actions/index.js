
/* actions */
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

/* action creaters */
export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id: id
    }
}

export function completeTodo() {
}