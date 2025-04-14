import React, { Component } from 'react'
import './styles.css';

export default class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            dataObjetos: props.data,
        }
    }

  render() {
    return (
<div className="producto_category">
<div className="remera-img">
<img src={'https://image.tmdb.org/t/p/w500/' + this.state.dataObjetos.poster_path} alt="imagen-pelicula"/>
    <div className="info">
        <p className="nombre-producto">{this.state.dataObjetos.title}</p>
        <p className="descripcion-producto">Trama: {this.state.dataObjetos.overview}</p>
        <p className="precio-producto">Estreno: {this.state.dataObjetos.release_date}</p>
        <p className="precio-producto"> Popularidad: {this.state.dataObjetos.popularity}</p>
    </div>
</div>
</div> 
    )
  }
};
