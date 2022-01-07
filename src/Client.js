import React from "react";
import { connect } from 'react-redux';
import { deleteClientTalent, createClientTalent} from './store';
import {Link} from 'react-router-dom';

// //this needs to be a react component
// onSubmit = (ev) =>{
//     ev.preventDefault();
//     console.log(this.state) 
//     // this is how you do some state bullshit
// }

// onChange = (ev) =>{
//     this.setState({newTalent});
// }

const Client = ({ clients, match: {params: {id}}, deleteClientTalent, ClientTalent, destroy}) => {
    id = id *1;
    const client = clients.find(client => client.id === id) // you can put this in mapstateto
    if(!client){
        return null;
    }
return (
        
            <div>
                {console.log(client)} 
            <h1> {client.name}</h1>
             <button onClick={()=>deleteClientTalent(ClientTalent)}>X</button>
            <h2>  has the following skills </h2>

       
        <Link to={'/'}>back to home page</Link>
        </div>

)
}


const mapDispatchToProps = (dispatch, {history}) => {
    return {
        createClientTalent: (name)=> {
         dispatch(createClientTalent(name));
        },
        deleteClientTalent: (ClientTalent)=> {
         dispatch(alent(ClientTalent, {history}));
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