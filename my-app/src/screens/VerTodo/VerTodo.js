import React, {Component} from "react";
import VerTodas from "../../components/VerTodas/VerTodas";
import './styles.css';
import Filtro from "../../components/Filtro/Filtro";
import Loader from "../../components/Loader/Loader";

const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac"

class VerTodo extends Component{
    
  constructor(props){
    super(props)
    this.state = {
        objetos: [],
        backupObjetos: [],
        categoria: this.props.match.params.vertodo,
        cargando: true
      
    }
  };




  componentDidMount() {
    const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac";
  
    if (this.state.categoria == 'populares') {
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=' + api_key)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            objetos: data.results,
            backupObjetos: data.results,
            cantidadAMostrar: 4,
            cargando: false
          });
        })
        .catch((error) => console.log(error));
    } else if (this.state.categoria == 'estrenos') {
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=' + api_key)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            objetos: data.results,
            backupObjetos: data.results,
            cantidadAMostrar: 4,
            cargando: false
          });
        })
        .catch((error) => console.log(error));
    } else {
      console.log('Categoría no válida');
    }
  }


  componentDidUpdate(antesProps) {
    const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac";
  
    if (antesProps.categoria == 'populares') {
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=' + api_key)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            objetos: data.results,
            backupObjetos: data.results,
            cantidadAMostrar: 4,
            cargando: false
          });
        })
        .catch((error) => console.log(error));
    } else if (antesProps == 'estrenos') {
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}&api_key=' + api_key)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            objetos: data.results,
            backupObjetos: data.results,
            cantidadAMostrar: 4,
            cargando: false
          });
        })
        .catch((error) => console.log(error));
    } else {
      console.log('Categoría no válida');
    }
  };

  filtrarContenido(buscado){
    const contenidoFiltrado = this.state.backupObjetos.filter(
        (elm) => elm.title.toLowerCase().includes(buscado.toLowerCase())
    )
    this.setState({objetos: contenidoFiltrado})
};

cargarMas = () => {
  this.setState((prevState) => ({
    cantidadAMostrar: prevState.cantidadAMostrar + 4
  }));
};
  

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
        <main>
        <div style={{textAlign: 'center', margin: '100px'}}>
        <h2 className="ult_nov">CATEGORIA {this.state.categoria.toUpperCase()}</h2> 
        <Filtro filtro={(busqueda) => this.filtrarContenido(busqueda)} />
        </div>
        <article className="productos">
        {
       this.state.objetos.map((elm, idx) => {
        if (idx < this.state.cantidadAMostrar) {
          return <VerTodas data={elm} key={idx + elm.title} />
        }
        return null; 
      })
      }
      </article>
     
      {
          this.state.cantidadAMostrar < this.state.objetos.length && (
            <div style={{textAlign: 'center', margin: '50px'}}>
              <button onClick={this.cargarMas} style={{fontSize: '18px', fontFamily: "Lato"}}>Cargar más</button>
            </div>
          )
        }

      </main>
        </>
    )
}
};

export default VerTodo;