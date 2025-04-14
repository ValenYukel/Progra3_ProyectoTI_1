import React, {Component} from 'react';
import Loader from '../../components/Loader/Loader';
import PCard from '../../components/PCard/PCard';



const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac"
 export default class Favoritos extends Component {
     constructor(props){
         super(props)
         this.state = {
             peliculasFavoritos: [],
             hayElementosEnElFavoritos: false
         }
     }
 
     componentDidMount(){
         const storageFavoritos = localStorage.getItem('favorito')
         if(storageFavoritos !== null){
             let FavoritosParseado = JSON.parse(storageFavoritos)
             if(FavoritosParseado.length > 0){
                 Promise.all(
                     FavoritosParseado.map((elm) => 
                         fetch(`https://api.themoviedb.org/3/movie/${elm}?language=en-US&page=1&api_key=${api_key}`)
                         .then((resp) => resp.json())
                         .catch(e => console.log(e))
                     )
                 )
                 .then((data) => this.setState({
                     peliculasFavoritos: data,
                     hayElementosEnElFavoritos: true
                 }))
                 .catch(e => console.log(e))
             }
         }
     }
 
     filtrarPeliculasFavoritos(id){
         const peliculasFiltrados = this.state.peliculasFavoritos.filter(
             elm => elm.id !== id
         )
         this.setState({peliculasFavoritos: peliculasFiltrados})
     }
 
     render() {
      if (this.state.cargando) {
        
        return (
        <>
          <main>
        <Loader/>;
        </main>
        </>
        )
        };
         return (
         <div>
             {
                 this.state.peliculasFavoritos.length > 0 ?
                 <section className="contenedor-peliculas">
                 {this.state.peliculasFavoritos.map((elm, idx)=> 
                 <div className="general-data" key={idx + elm.name}>
                     <PCard
                         data={elm} 
                         borrarDeFavoritos={(id)=> this.filtrarPeliculasFavoritos(id)} 
                     />
                  </div>
                     )}
                 </section> :
                 this.state.hayElementosEnElFavoritos === false ? 
                     <h1>No tienes peliculas favoritas</h1>
                 :
                 <h1>
                     Cargando Favoritos
                 </h1>
             }
         </div>
         )
     }
 }
