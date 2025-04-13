import React, {Component} from 'react';
import SeccionPopulares from '../../components/SeccionPopulares/SeccionPopulares';
import SeccionCartel from '../../components/SeccionCartel/SeccionCartel';
import Loader from '../../components/Loader/Loader';


const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac"

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            Favoritos: [],
            FavoritosPopulares: [],
            backupFavoritosPopulares: [],
            backupFavoritos: [],
            cargando: true
        }
    }

    componentDidMount(){
        let favoritosStorage = localStorage.getItem('favorito');
        let favoritosIds = favoritosStorage ? JSON.parse(favoritosStorage) : [];
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=' + api_key)
        .then((response) => response.json())
        .then(( data ) => {
         
            const peliculasFavoritas = data.results.filter((pelicula) =>
                favoritosIds.includes(pelicula.id)
            );
            this.setState({
                Favoritos: peliculasFavoritas,
                backupFavoritosPopulares: data.results,
                cargando: false
            });
            return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=14c41ab32cccfc97ee8d878a2ca4b3ac')
            .then((res) => res.json())
            .then((data) => {
              const favoritosPopulares = data.results.filter((pelicula) =>
                favoritosIds.includes(pelicula.id)
              );
                this.setState({
                    FavoritosPopulares: favoritosPopulares,
                    backupFavoritosPopulares: data.results,
                    cargando: false
                });

        })
    })

        .catch((error) => console.log(error) );
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
            <h1>Tus peliculas favoritas</h1>

            {
                this.state.Favoritos.length === 0 && this.state.FavoritosPopulares.length === 0?
                <h1>No tienes peliculas favoritas</h1>
                :(
                                <section className="contenedor-peliculas">
                                  {
                                    this.state.Favoritos.map((elm, idx) => (
                                    
                                      
                                      <SeccionCartel data={elm} key={idx + elm.name} />
                                    
                                    ))
                                    
                                  }                             
                                    {
                                        this.state.FavoritosPopulares.map((elm, idx) => (
                                        
                                        
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



export default Favoritos;