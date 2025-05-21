import React, { Component } from "react";
import VerTodas from "../../components/VerTodas/VerTodas";
import './styles.css';
import Filtro from "../../components/Filtro/Filtro";
import Loader from "../../components/Loader/Loader";

class VerTodoEstrenos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objetos: [],
      backupObjetos: [],
      categoria: this.props.match.params.vertodo,
      cargando: true,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchPeliculas(this.state.page);
  }

  fetchPeliculas = (page) => {
    const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac";

    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA ESTRENOS", data);

        this.setState({
          objetos: [...this.state.objetos, ...data.results],
          backupObjetos: [...this.state.backupObjetos, ...data.results],
          cargando: false,
          page: data.page,
          totalPages: data.total_pages
        });
      })
      .catch((error) => console.log(error));
  };

  filtrarContenido(buscado) {
    const contenidoFiltrado = this.state.backupObjetos.filter((elm) =>
      elm.title.toLowerCase().includes(buscado.toLowerCase())
    );
    this.setState({ objetos: contenidoFiltrado });
  }

  cargarMas = () => {
    const siguientePagina = this.state.page + 1;
    this.fetchPeliculas(siguientePagina);
  };

  render() {
    if (this.state.cargando) {
      return (
        <main>
          <Loader />
        </main>
      );
    }

    return (
      <main>
        <div style={{ textAlign: 'center', margin: '100px' }}>
          <h2 className="ult_nov">CATEGORIA {this.state.categoria.toUpperCase()}</h2>
          <Filtro filtro={(buscado) => this.filtrarContenido(buscado)} />
        </div>

        <article className="productos">
          {this.state.objetos.map((elm, idx) => (
            <VerTodas data={elm} key={idx + elm.title} />
          ))}
        </article>

        {this.state.page < this.state.totalPages && (
          <div style={{ textAlign: 'center', margin: '50px' }}>
            <button onClick={this.cargarMas} style={{ fontSize: '18px', fontFamily: "Lato" }}>
              Cargar más
            </button>
          </div>
        )}
      </main>
    );
  }
};

export default VerTodoEstrenos;
