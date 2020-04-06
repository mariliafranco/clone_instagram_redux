import { createStore } from "redux";

const initialState = {
    count: 0,
    payloadUser: {},
    payloadPosts: [],
    payloadStories: [],
    payloadPerfil: {} 
}

function Reducer(state = initialState, action){
    switch(action.type){
        case 'GET_USER':
            return{
                ...state,
                payloadUser: action.payload
            };
        case 'GET_POSTS':
            return{
                ...state,
                payloadPosts: action.payload
            };
        case 'GET_STORIES':
            return{
                ...state,
                payloadStories: action.payload
            };
        case 'GET_PERFIL':
            return{
                ...state,
                payloadPerfil: action.payload
            };
        case 'NEW_LIKE':
            return{
                ...state,
                payloadUser: action.payload
            };
                default:
                    return state;
    }
}

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store