import React, {Component} from 'react';
import SeccionPopulares from '../../components/SeccionPopulares/SeccionPopulares';
import SeccionCarteles from '../../components/SeccionCartel/SeccionCartel';
import Loader from '../../components/Loader/Loader';
/*function nowPlaying(){
    return(
    <React.Fragment>  
      <Loader /> 
       
      <main>
      <h1>nowPlaying</h1>
      <h1>PELICULAS POPULARES</h1>
      <SeccionPopulares />
      <h1>PELICULAS EN CARTELERA</h1>
      <SeccionCarteles />
      </main>

    </React.Fragment>   
    )
};*/

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
      this.setState({ nowPlaying:carteleraData.results, 
        backupnowPlaying: carteleraData.results,
        cargando: false});

     
      return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=' + api_key);
    })
    .then(response => response.json())
    .then(popularData => {
      
      this.setState({ popular: popularData.results, backupPopular: popularData.results, cargando: false });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}
/*
        .then(( data ) => this.setState({
          
          nowPlaying:data.results, 
          backupnowPlaying: data.results,
          cargando: false
          //console.log(data))
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=' + api_key)
          .then((response) => response.json())
          .then(( data ) => this.setState({
            
            nowPlaying:data.results, 
            backupnowPlaying: data.results,
            cargando: false
        })) 
        .catch((error) => console.log(error) );
    }
*/
    filtrarnowPlaying(busquedaUsuario){
        const nowPlayingFiltrados = this.state.backupnowPlaying.filter(
            (elm) => elm.name.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({nowPlaying: nowPlayingFiltrados})
    }

    filtrarPopular(busquedaUsuario){
        const popularFiltrados = this.state.backupPopular.filter(
            (elm) => elm.name.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({popular: popularFiltrados})
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
            <h1>Peliculas en cartelera</h1>

            {
                this.state.nowPlaying.length === 0 ?
                <h1>Cargando nowPlaying de Cartelera</h1>
                :
                this.state.nowPlaying.map((elm, idx) => <SeccionCarteles data={elm} key={idx + elm.name} /> 
              
                )

            }
            <h1>Peliculas populares</h1>
            {
                this.state.popular.length === 0 ?
                <h1>Cargando Peliculas populares </h1>
                :
                this.state.popular.map((elm, idx) => <SeccionPopulares data={elm} key={idx + elm.name} /> 
              
                )

            }
            </>
        )
    }
}



export default Home;