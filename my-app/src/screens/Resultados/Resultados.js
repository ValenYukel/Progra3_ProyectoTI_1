import React, { Component } from 'react'
const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac"
export default class Resultados extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados:[]
        }  
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=` + api_key)
        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        Resultados de: {this.state.busqueda}
        <section>
            {this.state.resultados.map(elm => 
            <article>
            <h1>{elm.original_title}</h1>
            <img
              src={'https://image.tmdb.org/t/p/w300/' + elm.poster_path}
              alt={elm.original_title}
            />
          </article>)}
        </section>
        
    </div>
    )
  }
}
