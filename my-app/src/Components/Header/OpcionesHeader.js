import React from "react";
import { Link } from "react-router-dom";

function OpcionesHeader(props) {
    return (
       props.opciones.map((elm, idx) =>  <Link to = {elm.path} key={idx + "-" + elm.name }> {elm.name} </Link> )
    )
};

export default OpcionesHeader;