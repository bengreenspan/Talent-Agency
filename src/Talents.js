import React, { Component }from "react";
import store from './store'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Talents = ({talents}) => {

        return (
            <ul>
            {
                talents.map(talent => {
                return(
                    <li key={ talent.id}>
                        <Link to ={`/talents/${ talent.id }`}>
                        {talent.name}
                       </Link>
                    </li>
                )
            })
        }    
        </ul>
        )
        }
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Talents);
