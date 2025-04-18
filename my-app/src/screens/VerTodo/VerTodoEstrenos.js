import React, {Component} from "react";
import VerTodas from "../../components/VerTodas/VerTodas";
import './styles.css';
import Filtro from "../../components/Filtro/Filtro";
import Loader from "../../components/Loader/Loader";


class VerTodoEstrenos extends Component{
    
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
  
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=' + api_key)
        .then((response) => response.json())
        .then((data) => {
          console.log("DATA",data);
          this.setState({
            objetos: data.results,
            backupObjetos: data.results,
            cantidadAMostrar: 5,
            cargando: false
          });
        })
        .catch((error) => console.log(error));

  }

  filtrarContenido(buscado){
    const contenidoFiltrado = this.state.backupObjetos.filter(
        (elm) => elm.title.toLowerCase().includes(buscado.toLowerCase())
    )
    this.setState({objetos: contenidoFiltrado})
};

cargarMas = () => {
  this.setState((prevState) => ({
    cantidadAMostrar: prevState.cantidadAMostrar + 5
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

export default VerTodoEstrenos;