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
            name:'Populares',
            path: '/vertodo/populares'
        },
        {
            name:'Proximos Estrenos',
            path: '/vertodo/estrenos'
        }
    ]


    return (
    <>
        <header>
<div id="conteiner">

    <div className="titulo">
        
    <a href="/"><h1>Vaqueritos</h1></a>


<a href="/"><img id="logo" src="/img/cowboy2.jpeg" alt="logo"/></a>

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