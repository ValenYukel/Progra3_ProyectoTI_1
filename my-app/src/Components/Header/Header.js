import React from "react";
import {Link} from "react-router-dom";
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
            name:'Populares',
            path: '/vertodo-pop/populares'
        },
        {
            name:'Proximos Estrenos',
            path: '/vertodo-est/estrenos'
        }
    ]


    return (
    <>
        <header>
<div id="conteiner">

    <div className="titulo">
        
    <Link to="/"><h1>Vaqueritos</h1></Link>


<Link to="/"><img id="logo" src="/img/cowboy2.jpeg" alt="logo"/></Link>

</div>

<div id="barra_nav">
  <nav id="menu">
 <OpcionesHeader opciones={opciones}/>
  </nav>
</div>

</div> 
</header>

          
</>
    )
};

export default Header;