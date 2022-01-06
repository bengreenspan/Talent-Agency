import React from "react";
import { connect } from 'react-redux';
import { deleteTalent, createClientTalent} from './store';
import {Link} from 'react-router-dom';


const Client = ({ clients, match: {params: {id}}, deleteTalent, ClientTalent, destroy}) => {
    id = id *1;
    const client = clients.find(client => client.id === id) // you can put this in mapstateto
    if(!client){
        return null;
    }
return (
        
            <div>
                {console.log(client)} 
            <h1> {client.name}</h1>
            <h1> {client.ClientTalent.length}</h1>
             <button onClick={()=>deleteTalent(ClientTalent)}>X</button>
            <h2>  has the following skills </h2>

            <button onClick={()=>createClientTalent(Math.random())}>X</button>
        
        <Link to={'/'}>back to home page</Link>
        </div>

)
}


const mapDispatchToProps = (dispatch, {history}) => {
    return {
        createClientTalent: (name)=> {
         dispatch(createClientTalent(name));
        },
        deleteTalent: (ClientTalent)=> {
         dispatch(deleteTalent(ClientTalent, {history}));
        },
    }
}
        //     dispatch(addTalent(talent, orsomething))},
        // destroy: (talent)=> dispatch(deleteTalent(talent, history))

// const mapStateToProps =(state, otherProps) => {
//   const fish = state.fishes.find(fish => fish.id === otherProps.match.params.id*1) || {};
//         return {
//             fish
//         };
//     },
//     (dispatch, {history})=> {
//     return {
       
//     }
//     }

export default connect(state => state, mapDispatchToProps
    )(Client);