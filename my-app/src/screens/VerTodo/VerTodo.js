import React, {Component} from "react";
import VerTodas from "../../components/VerTodas/VerTodas";
import './styles.css';
import Filtro from "../../components/Filtro/Filtro";

class VerTodo extends Component{
    
  constructor(props){
    super(props)
    this.state = {
        objetos: [],
        backupObjetos: [],
        categoria: props.match.params.categoria
      
    }
  }


  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/category/${this.state.categoria}`)
      .then((response) => response.json())
      .then((data) => { 
        this.setState({
          objetos: data,
          backupObjetos: data,
          cantidadAMostrar: 2
          
        });
      })
      .catch((error) => console.log(error));
  }


  componentDidUpdate(antesProps) {
    if (antesProps.match.params.categoria !== this.props.match.params.categoria) {
      const nuevaCategoria = this.props.match.params.categoria;
  
      fetch(`https://fakestoreapi.com/products/category/${nuevaCategoria}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            objetos: data,
            backupObjetos: data,
            categoria: nuevaCategoria,
            cantidadAMostrar: 2
          });
        })
        .catch((error) => console.log(error));
    }
  }

  filtrarContenido(buscado){
    const contenidoFiltrado = this.state.backupObjetos.filter(
        (elm) => elm.title.toLowerCase().includes(buscado.toLowerCase())
    )
    this.setState({objetos: contenidoFiltrado})
}

cargarMas = () => {
  this.setState((prevState) => ({
    cantidadAMostrar: prevState.cantidadAMostrar + 2
  }));
};
  

  render(){
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