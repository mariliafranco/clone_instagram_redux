import { createStore } from "redux";

const initialState = {
    count: 0,
    payload: {} 
}

function Reducer(state = initialState, action){
    switch(action.type){
        case 'GET_USER':
            return{
                payload: action.payload
            };
        case 'GET_POSTS':
            return{
                payloadPosts: action.payloadPosts
            };
        case 'GET_STORIES':
            return{
                payloadStories: action.payloadStories
            };
        case 'GET_PERFIL':
            return{
                payloadPerfil: action.payloadPerfil
            };
        case 'NEW_LIKE':
            return{
                payload: state.payload.likes + 1
            }
                default:
                    return state;
    }
}

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store