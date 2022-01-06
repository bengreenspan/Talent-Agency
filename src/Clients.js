import React, { Component }from "react";
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

    const mapStateToProps = ({clients, clientTalent}) => ({clients, clientTalent}) 
    export default connect(mapStateToProps)(Clients);
