
const initialState = {
    visibulityFilter: true,
    todos: [],
}

function todoApp(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        title: action.text,
                        completed: true,
                    }
                ]
            });
        case DELETE_TODO:
            return 
        default:
            return state;
    }
}