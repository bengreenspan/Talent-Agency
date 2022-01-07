import {createStore, applyMiddleware, combineReducers} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk'

const LOAD_CLIENTS = 'LOAD_CLIENTS';
const LOAD_TALENTS = 'LOAD_TALENTS';
const LOAD_CLIENT_TALENT = 'LOAD_CLIENT_TALENT';
const UPDATE_TALENT = 'UPDATE_TALENT';
const CREATE_CLIENT_TALENT = 'CREATE_CLIENT_TALENT';
const DELETE_CLIENT_TALENT = 'DELETE_CLIENT_TALENT';


//reducers

const clientsReducer = ( state = [], action) =>{
    if (action.type === LOAD_CLIENTS){
        state = action.clients;
    }
    return state;
};

const talentsReducer = ( state = [], action) =>{
    if (action.type === LOAD_TALENTS){
        state = action.talents;
    }
    if (action.type === UPDATE_TALENT){
        state = action.Talents.map((talent) => talent.id === action.talent.id ? action.talent : talent
      );
    }
    return state;
};


const clientTalentReducer = ( state = [], action) =>{
    if (action.type === LOAD_CLIENT_TALENT){
        state = action.clientTalent;
    }
     if(action.type === CREATE_CLIENT_TALENT){
        state = [...state, action.clientsTalent];
    }
     if(action.type === DELETE_CLIENT_TALENT){
        state = state.clientTalent.filter((_, id) => idx !== action);
    }
    return state;
};


// combo

const reducer = combineReducers({
    clients: clientsReducer,
    talents: talentsReducer,
    clientTalent: clientTalentReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

//creators

const _loadClients = clients => ({type: LOAD_CLIENTS, clients});
const _loadTalents = talents => ({type: LOAD_TALENTS, talents});
const _loadClientTalent = clientTalent =>({type: LOAD_CLIENT_TALENT, clientTalent});
const _createClientTalent = clientTalent =>({type: CREATE, clientTalent});
const _deleteClientTalent = clientTalent => ({type: DELETE_CLIENT_TALENT, clientTalent}); 
const _updateTalent= talent => ({type: UPDATE, talent})

//thunks

 const loadClients = () =>{
    return async(dispatch)=> {
        const clients = (await axios.get('/api/clients')).data;
        dispatch(_loadClients(clients));
    }
};

 const loadTalents = () =>{
    return async(dispatch)=> {
        const talents = (await axios.get('/api/talents')).data;
        dispatch(_loadTalents(talents));
    };
 };
const loadClientTalent = () =>{
    return async(dispatch)=> {
        const ClientTalent = (await axios.get('/api/ClientTalent')).data;
        dispatch(_loadClientTalent(ClientTalent));
    };
};

const createClientTalent = (clientTalent) =>{
    return async(dispatch)=> {
       const ClientTalent = (await axios.post('/api/ClientTalent', ClientTalent)).data;
        dispatch(_createClientTalent(clientTalent));
    }
};

 const deleteClientTalent = (clientTalent) => {
    return async(dispatch)=> {
        await axios.delete(`/api/ClientTalent/${clientTalent}.id`);
        dispatch(_deleteClientTalent(clientTalent));

    }
  }; 

const updateTalent = (talent) => {
    return async (dispatch) => {
      talent = (await axios.put(`/api/talent/${talent.id}`, talent)).data;
      dispatch(_updateTalent(talent));
    };
  };



export default store;
export { loadClients, loadTalents, loadClientTalent, createClientTalent, deleteClientTalent, updateTalent }