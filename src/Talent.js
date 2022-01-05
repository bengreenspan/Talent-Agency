import React from "react";
import { connect } from 'react-redux';
import { talent, updateTalent} from './store';


const Talent = ({match: {params: {id}}, talents, updateTalent}) => {
    id = id *1;
    const talent = talents.find(talent => talent.id === id)
    if(!talent){
        return null;
    }
return (
        <div> <h1>{console.log(talent)}{talent.name}</h1>
           <form></form> 
           {/* somehow put in the current talent 
           and be able to overwrite */}
        {/* <button onClick={()=>destroy(fish)}>Update</button> */}
       {/* / <Link to={'/'}>Cancel</Link> */}
        </div>
)
}

export default connect( state => state
//     (state, otherProps) => {
//   const fish = state.fishes.find(fish => fish.id === otherProps.match.params.id*1) || {};
//         return {
//             fish
//         };
//     },
//     (dispatch, {history})=> {
//     return {
//         destroy: (fish)=> dispatch(deleteFish(fish, history))
//     }
//     }
)(Talent);

