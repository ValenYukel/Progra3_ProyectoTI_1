import React, { Component } from 'react'
import './styles.css';

export default class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            dataObjetos: props.data
        }
    }

  render() {
    return (
<div className="producto_category">
<div className="remera-img">
<img src={this.state.dataObjetos.image} alt="imagen-producto"/>
    <div className="info">
        <p className="nombre-producto">{this.state.dataObjetos.title}</p>
        <p className="descripcion-producto">{this.state.dataObjetos.description}</p>
        <p className="precio-producto">{this.state.dataObjetos.price}</p>
    </div>
</div>
</div> 
    )
  }
};
