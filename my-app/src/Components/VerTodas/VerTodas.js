import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
<div class="producto_category">
<div class="remera-img">
<img src={this.state.dataObjetos.image}/>
    <div class="info">
        <p class="nombre-producto">{this.state.dataObjetos.title}</p>
        <p class="descripcion-producto">{this.state.dataObjetos.description}</p>
        <p class="precio-producto">{this.state.dataObjetos.price}</p>
    </div>
</div>
</div> 
    )
  }
};
