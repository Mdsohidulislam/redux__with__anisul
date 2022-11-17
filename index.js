const axios = require('axios')
const { createStore, applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default;
// constant defining
const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_ERROR = 'GET_TODO_ERROR';
const API__URI = 'https://jsonplaceholder.typicode.com/users';

const initialTodoState = {
    todo:[],
    error: null,
    isLoading: false
};

const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST
    }
}

const getTodoSuccess = (data) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: data
    }
}

const getTodoError = (error) => {
    return {
        type: GET_TODO_ERROR,
        payload: error
    }
}

const todoReducer = (state = initialTodoState, action) => {
    switch(action.type){
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todo: action.payload,
                isLoading: false
            }
        case GET_TODO_ERROR:
            return {
                ...state,  
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const fetchTodo = () => {
    return (dispatch)=>{
        dispatch(getTodoRequest());
        axios.get(API__URI).then(res => {
            let names = res.data.map((info) => info.name)
            dispatch(getTodoSuccess(names))
        }).catch((err)=>{
            dispatch(getTodoError(err.message))
        })
        
    }
}

const todoState = createStore(todoReducer, applyMiddleware(thunk));

todoState.subscribe(()=>{
    console.log(todoState.getState());
})

todoState.dispatch(fetchTodo())