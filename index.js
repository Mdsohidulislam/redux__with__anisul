// state
// action
// reducer
// store 

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// defining product constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// defining cart constant
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';

const cartState = {
    products: ['scale'],
    productsOfQuantity: 1
}

const getCarts = () => {
    return {
        type: GET_CART
    }
}

const addCart = (product) => {
    return{
        type: ADD_CART,
        payload: product
    }
}

const cartReducer = (state=productState, action) => {
    switch(action.type){
        case GET_CART:
            return state;
        case ADD_CART:
            return{
                products:[...state.products, action.payload],
                productsOfQuantity: state.productsOfQuantity + 1
            }
        default: 
        return state
    }
}

const productState = {
    products: ['book'],
    productsOfQuantity: 1
}

const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

const productReducer = (state=productState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return state;
        case ADD_PRODUCT:
            return{
                products:[...state.products, action.payload],
                productsOfQuantity: state.productsOfQuantity + 1
            }
        default: 
        return state
    }
}

const rootReducer = combineReducers({productReducer, cartReducer})
const store = createStore(rootReducer, applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState());
})



store.dispatch(getProducts());
store.dispatch(addProduct('pen'));
store.dispatch(addCart('pen'));
store.dispatch(addCart('pen'));
store.dispatch(addCart('pen'));
