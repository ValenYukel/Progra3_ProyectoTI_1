import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default class SeccionCartel extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPelicula: props.data,
            favorito: false,
            mostrarContenido: false
        }
    }

  componentDidMount(){
      let storage= localStorage.getItem('favorito')
      if(storage !== null){
        let storageParseado = JSON.parse(storage)
        let estaMiId = storageParseado.includes(this.state.dataPelicula.id)

        if(estaMiId){
          this.setState({favorito: true})
        }
      }
    }
    ocultar() {
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
        })
    }
    agregarAFavorito(id){
        let storage = localStorage.getItem('favorito')
        if(storage !== null){
          let arrParseado = JSON.parse(storage)
          arrParseado.push(id)
          let arrStringificado = JSON.stringify(arrParseado)
          localStorage.setItem('favorito', arrStringificado)
        } else {
          let primerID = [id]
          let arrStringificado = JSON.stringify(primerID)
          localStorage.setItem('favorito', arrStringificado)
        }
  
        this.setState({
          favorito: true
        })
      }
  
      sacarDeFavorito(id){
        const storage = localStorage.getItem('favorito')
        const storageParseado = JSON.parse(storage)
        const filtrarStorage = storageParseado.filter((elm) => elm !== id )
        const storageStringificado = JSON.stringify(filtrarStorage)
        localStorage.setItem('favorito', storageStringificado)
  
        this.setState({
          favorito: false
        })
      }
  
    render() {
      return (
        <div className='general-data'>
          <h1>{this.state.dataPelicula.original_title}</h1>
          <img src={'https://image.tmdb.org/t/p/w342/' + this.state.dataPelicula.poster_path} alt="imagen-pelicula"/>
          {
            this.state.favorito ?
            <button onClick={()=> this.sacarDeFavorito(this.state.dataPelicula.id) }>Sacar de Favoritos</button>
            :
            <button onClick={() => this.agregarAFavorito(this.state.dataPelicula.id)}>Agregar Favorito</button>
          }
          <div className={this.state.mostrarContenido ? '' : 'hide'}>
                    <p>
                        {this.state.dataPelicula.overview}
                    </p>
                   
                </div>
                <button onClick={() => this.ocultar()} >
                    Ver descripcion
                </button>
                
                  <Link to={`/detalle/${this.state.dataPelicula.id}`}>
                  <button>Ver Detalle</button>
                  </Link>
                
         </div>
      )
    }
  }

console.log(localStorage.getItem('favorito'));
