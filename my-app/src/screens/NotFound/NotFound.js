import React from "react";
import {Link} from "react-router-dom";
import './styles.css'


function NotFound() {
    return (
        <div className="not-found">
            <h1>Error 404 - Not Found</h1>
            <p>Esta ruta no existe, estas perdido Vaquero</p>
            <img src='/img/tumbleweed.gif' alt='Cargando...' />
            <Link to="/" className="boton"><button> Volver ;)</button></Link>
        </div>
    );
}
export default NotFound;