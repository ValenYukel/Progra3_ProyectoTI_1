import React from "react";
import OpcionesHeader from "./OpcionesHeader";
import './styles.css';

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
        },
        {
            name:'Ver Todas',
            path: '/ver-todas/jewelery'
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