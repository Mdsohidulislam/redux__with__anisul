const { createStore } = require("redux");

/// defining constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER'


/// state defining
const initialCounterState = {
    count: 0,
}

const initialUserState = {
    users: [{name: 'Md Sohidul Islam'}]
}


// action type=== object => payload, type

const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

// const addUser = (user) => {
//     return {
//         type: ADD_USER,
//         payload: user
//     }
// }


// reducer 

// const counterReducer = (state=initialCounterState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return{
//                 ...state,
//                 count: state.count + 1
//             }  
//         case DECREMENT:
//             return{
//                 ...state,
//                 count: state.count - 1
//             }  
//         default:
//             state;
//     }
// }

// const store = createStore(counterReducer);
// store.subscribe(()=>{ 
//     console.log(store.getState());
// })
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
    

/// summery of redux
// state 
// dispatch action
// reducer
// store update