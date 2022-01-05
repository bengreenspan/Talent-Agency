import React from "react";
import { connect } from 'react-redux';
import { deleteTalent, addTalent} from './store';


const Client = ({ clients, match: {params: {id}}, deleteTalent, addTalent}) => {
    id = id *1;
    const client = clients.find(client => client.id === id)
    if(!client){
        return null;
    }
return (
        <div>
            {/* <h1> test </h1> */}
            <div>
                {console.log(client)}
            <h1> {client.name}</h1>
            <h2>  has the following skills </h2>
            {/* { */}
                {/* client.talents.map(talent => { */}
                {/* return( */}
                    {/* <li key={ talent.name}> {talent.name} */}
                     {/* <button onClick={()=>destroy(talent)}>X</button> */}
                    {/* </li> */}
                {/* ) */}
            {/* }) */}
        {/* }     */}
        {/* add drop down form here  */}
        {/* <button onClick={()=> addTalent(talent.id)}>+</button> */}
            {/* </h2> */}
        {/* <Link to={'/'}>back to home page</Link> */}
        </div>
        </div>
)
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTalent: (name)=> {
//            const talent = axios.post

//             dispatch(addTalent(talent, orsomething))},
//         destroy: (talent)=> dispatch(deleteTalent(talent, history))
//     }
// }

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

export default connect(state => state
    //mapStateToProps, mapDispatchToProps
    )(Client);