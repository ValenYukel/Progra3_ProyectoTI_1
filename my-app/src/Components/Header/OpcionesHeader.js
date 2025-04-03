import React from "react";
import { Link } from "react-router-dom";

function OpcionesHeader(props) {
    return (
        <ul>
            {
                props.opciones.map((elm, idx) => <li key={`${idx}${elm.name}`}> <Link to = {elm.path}> {elm.name} </Link> </li> )
            }
        </ul>
    )
};

export default OpcionesHeader;