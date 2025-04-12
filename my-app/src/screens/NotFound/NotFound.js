import React from "react";
import {Link} from "react-router-dom";


function NotFound() {
    return (
        <div className="not-found">
            <h1>Error 404 - Not Found</h1>
            <p>Esta ruta no exisiste, estas perdido Vaquero</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}
export default NotFound;