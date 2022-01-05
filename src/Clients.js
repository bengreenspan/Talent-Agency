import React, { Component }from "react";
import store from './store'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Clients = ({clients}) => {

        return (
        <ul>
            {
                clients.map(client => {
                return(
                    <li key={ client.id}>
                        <Link to ={`/clients/${ client.id }`}>
                        {client.name}
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
        
        export default connect(mapStateToProps)(Clients);
        
