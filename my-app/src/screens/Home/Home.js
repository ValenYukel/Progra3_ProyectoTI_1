import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SeccionPopulares from '../../components/SeccionPopulares/SeccionPopulares';
import SeccionCarteles from '../../components/SeccionCartel/SeccionCartel';
import Loader from '../../components/Loader/Loader';
import Buscador from '../../components/Buscador/Buscador'
import './styles.css'


const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac"

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            nowPlaying: [],
            backupnowPlaying: [],
            cargando: true,
            popular: [],
            backupPopular: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=' + api_key)
        .then((response) => response.json())
        .then(carteleraData => {
      this.setState({ nowPlaying:carteleraData.results.slice(0, 5), 
        backupnowPlaying: carteleraData.results.slice(0, 5),
        cargando: false});

     
      return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=' + api_key);
    })
    .then(response => response.json())
    .then(popularData => {
      console.log("DATA POPULAR", popularData);
      this.setState({ popular: popularData.results.slice(5, 10), backupPopular: popularData.results.slice(5, 10), cargando: false });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}
    render(){

        if (this.state.cargando) {
        
            return (
            <>
              <main>
            <Loader/>;
            </main>
            </>
            )
            };
            
        return(
            <>
            <Buscador history={this.props.history} />
            <h1>Peliculas en cartelera</h1> 
            <button className= 'boton'><Link to="/vertodo-est/estrenos">Ver todas</Link></button>

            {
              this.state.nowPlaying.length === 0 ? (
                <h1>Cargando peliculas en Cartelera</h1>
              ) : (
                <section className="contenedor-peliculas">
                  {
                    this.state.nowPlaying.map((elm, idx) => (
                      <SeccionCarteles data={elm} key={idx + elm.name} />
                    ))
                  }
                </section>
              )
            }
            <h1>Peliculas populares</h1> 
            <button className= 'boton'><Link to="/vertodo-pop/populares">Ver todas</Link></button>
            {
              this.state.popular.length === 0 ? (
                <h1>Cargando peliculas populares</h1>
              ) : (
                <section className="contenedor-peliculas">
                  {
                    this.state.popular.map((elm, idx) => (
                      <SeccionPopulares data={elm} key={idx + elm.name} />
                    ))
                  }
                </section>
              )
            }
            </>
        )
    }
}



export default Home;