import React from "react";

function OpcionesHeader(props) {
    return (
        <ul>
            {
                props.opciones.map((elm, idx) => <li key={`${idx}${elm.name}` }>{elm.name}</li> )
            }
        </ul>
    )
}

export default OpcionesHeader;