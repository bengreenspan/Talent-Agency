import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTalent} from './store';


class Talent extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          name: ''
          // clients: this.props.talent.clients
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this)
      }


// componentDidUpdate(prevProps) {

//       this.setState({
//         skillName: this.props.skill.name,
//         clients: this.props.skill.clients
//       });
//   }

  onSave(ev){
    console.log(this.state)
    // const { talent, clients } = this.state;
    // await this.props.updateTalent({id: this.props.talent.id, name: talent, clients});
}

onChange(ev){
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change)
}

render (){
  const { name } = this.state;
  const { onChange, onSave } = this;
    return(
        <div> 
          
          {/* <h1>{(this.props.talent)}</h1> */}

        <form onSubmit={ onSave}>
            <input name='name' value={name} onChange={onChange}/>
            <button>Update</button>
           {/* // type='submit' disabled={!Talent.name || Talent.name === Talent.name} */}
           
            
        </form>
       <Link to={'/'}>Cancel</Link>
        </div>
    )
}

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

export default 
connect(mapStateToProps, mapDispatchToProps)(
  Talent
  );

