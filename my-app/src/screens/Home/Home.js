import React from 'react';
import SeccionPopulares from '../../Components/SeccionPopulares/SeccionPopulares';
import SeccionCarteles from '../../Components/SeccionCartel/SeccionCartel';
import Loader from '../../components/Loader/Loader';
/*function Home(){
    return(
    <React.Fragment>  
      <Loader /> 
       
      <main>
      <h1>Home</h1>
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
            Home: [],
            backupHome: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=' + api_key)
        .then((response) => response.json())
        .then(( data ) => this.setState({
          
          Home:data.results, 
          backupHome: data.results
          //console.log(data))
        })) 
        .catch((error) => console.log(error) );
    }

    filtrarHome(busquedaUsuario){
        const HomeFiltrados = this.state.backupHome.filter(
            (elm) => elm.name.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({Home: HomeFiltrados})
    }

    render(){
        return(
            <>
            <h1>Peliculas en cartelera</h1>

            {
                this.state.Home.length === 0 ?
                <h1>Cargando Home de Cartelera</h1>
                :
                this.state.Home.map((elm, idx) => <SeccionCarteles data={elm} key={idx + elm.name} /> 
              
                )

            }
            </>
        )
    }
}



export default Home;