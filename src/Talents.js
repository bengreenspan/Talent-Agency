import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Talents = ({talents, clientTalent})=> {
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
            }          
                )  
        }  
        </ul>
        )
        }

const mapStateToProps = ({talents, clientTalent}) => ({talents, clientTalent})

export default connect(mapStateToProps)(Talents);
