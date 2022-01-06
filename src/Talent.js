import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTalent} from './store';


const Talent = ({match: {params: {id}}, talents, updateTalent}) => {
    id = id *1;
    const talent = talents.find(talent => talent.id === id)
    if(!talent){
        return null;
    }
return (
        <div> <h1>{console.log(talent)}{talent.name}</h1>
           <button onClick={()=>updateTalent(selectValue)}>Update</button>
       <Link to={'/'}>Cancel</Link>
        </div>
)
}


const mapStateToProps = (state, { match }) => {
    const talent = state.talents.find((talent) => talent.id === match.params.id * 1); //can i move this
    return {
        talent
    }
  }

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        updateTalent: (talent) => dispatch(updateTalent(talent, history))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Talent);

