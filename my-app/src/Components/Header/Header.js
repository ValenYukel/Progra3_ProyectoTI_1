import React from "react";
import OpcionesHeader from "./OpcionesHeader";

function Header() {

    let opciones = [
        {
            name:'Home',
            path: '/'
        },
        {
            name:'Favoritos',
            path: '/favoritos'
        },
        {
            name:'Electronics',
            path: '/electronics'
        },
        {
            name:'Jewelery',
            path: '/jewelery'
        },
        {
            name:'Men',
            path: '/men'
        },
        {
            name:'Women',
            path: '/women'
        }
    ]
    return (
        <header>
            <h1>VAQUERITOS</h1>
            <OpcionesHeader opciones={opciones} />
        </header>
    )
}

export default Header