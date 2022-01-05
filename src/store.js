import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk'

const store = createStore((state = { clients: [], view: 'Main', talents: [], loading: true}, action)=> {
    if(action.type === 'LOAD_CLIENTS'){
        state = {...state, clients: action.clients};
    }
    if(action.type === 'LOAD_TALENTS'){
        state = {...state, talents: action.talents};
    }
    if(action.type === 'LOADED'){
        state = {...state, loading: false};
    }
    if(action.type === 'SET_VIEW'){
        state = {...state, view: action.view};
    }
    if(action.type === 'REMOVE_TALENT'){
        state = {...state, talents: state.talents.filter((_, id) => idx !== action)};
    }
    return state;
}, applyMiddleware(thunk)
);



const loaded = () =>{
    return {
        type: 'LOADED'
    };
};

const _loadClients = (clients) =>{
    return {
        type: 'LOAD_CLIENTS', clients
    };
};
const _loadTalents = (talents) =>{
    return {
        type: 'LOAD_TALENTS', talents
    };
};



const loadClients = (clients) =>{
    return async(dispatch)=> {
        const clients = (await axios.get('/api/clients')).data;
        dispatch(_loadClients(clients));
    }
};
const loadTalents = (talents) =>{
    return async(dispatch)=> {
        const talents = (await axios.get('/api/talents')).data;
        dispatch(_loadTalents(talents));

    };
};




const setView = (view) =>{
    return {
        type: 'SET_VIEW', view
    };
};



export default store;
export { loaded, loadTalents, loadClients, setView };
