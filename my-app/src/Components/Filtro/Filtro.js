import React, {Component} from 'react';

class Filtro extends Component{

    constructor(props){
        super(props)
        this.state = {
            valorInput : '',
        }
    }

    manejarSubmit(evento){
        evento.preventDefault();
    }

    controlarInput(evento){
        console.log('Esto es lo que llega por el evento', evento)
        this.setState(
            {valorInput: evento.target.value},
            () => this.props.filtro(this.state.valorInput)
        )
    }

    render(){
        return(
            <form onSubmit={(evento) => this.manejarSubmit(evento) } >
                <input onChange={(evento)=> this.controlarInput(evento)} value={this.state.valorInput} style={{fontSize: '18px', fontFamily: "Lato"}}/>
            </form>
        )
    }
};

export default Filtro;