import React from "react";
import { Link } from "react-router-dom";

function OpcionesHeader(props) {
    return (
       props.opciones.map((elm) =>  <Link to = {elm.path}> {elm.name} </Link> )
    )
};

export default OpcionesHeader;