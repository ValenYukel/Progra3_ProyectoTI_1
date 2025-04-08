import React, {Component} from "react";
import VerTodas from "../../components/VerTodas/VerTodas";
import './styles.css';

class VerTodo extends Component{
    
  constructor(props){
    super(props)
    this.state = {
        objetos: [],
      
       
    }
  }


  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        this.setState({
          objetos: data
        });
      })
      .catch((error) => console.log(error));
  }
  

  render(){
    return(
        <>
        <main>
        <h2 class="ult_nov">SCREEN VER TODO</h2> 
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