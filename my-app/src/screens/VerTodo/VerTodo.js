import React, {Component} from "react";
import VerTodas from "../../components/VerTodas/VerTodas";
import './styles.css';

class VerTodo extends Component{
    
  constructor(props){
    super(props)
    this.state = {
        objetos: [],
        categoria: props.match.params.categoria
      
    }
  }


  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/category/${this.state.categoria}`)
      .then((response) => response.json())
      .then((data) => { 
        this.setState({
          objetos: data
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
            categoria: nuevaCategoria
          });
        })
        .catch((error) => console.log(error));
    }
  }
  

  render(){
    return(
        <>
        <main>
        <h2 class="ult_nov">CATEGORIA {this.state.categoria.toUpperCase()}</h2> 
        <article class="productos">
        {
        this.state.objetos.map((elm, idx) => <VerTodas data={elm} key={idx + elm.title} /> )
      }
      </article>
      </main>
        </>
    )
}
};

export default VerTodo;