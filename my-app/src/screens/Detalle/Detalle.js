import React, { Component } from 'react';
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import './styles.css';
import NotFound from '../NotFound/NotFound';

const api_key = "14c41ab32cccfc97ee8d878a2ca4b3ac";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: null,
            cargando: true,
            favorito: false
        };
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        console.log("Tengo esto:", id);

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                console.log("LLega esto", data);

                let storage = localStorage.getItem('favorito');
                if (storage !== null) {
                    let storageParseado = JSON.parse(storage);
                    let estaMiId = storageParseado.includes(data.id);

                    if (estaMiId) {
                        this.setState({ favorito: true });
                    }
                }

                this.setState({
                    detalle: data,
                    cargando: false
                });
            })
            .catch((error) => console.log(error));
    }

    agregarAFavorito(id) {
        let storage = localStorage.getItem('favorito');
        if (storage !== null) {
            let arrParseado = JSON.parse(storage);
            arrParseado.push(id);
            let arrStringificado = JSON.stringify(arrParseado);
            localStorage.setItem('favorito', arrStringificado);
        } else {
            let primerID = [id];
            let arrStringificado = JSON.stringify(primerID);
            localStorage.setItem('favorito', arrStringificado);
        }

        this.setState({
            favorito: true
        });
    }

    sacarDeFavorito(id) {
        const storage = localStorage.getItem('favorito');
        const storageParseado = JSON.parse(storage);
        const filtrarStorage = storageParseado.filter((elm) => elm !== id);
        const storageStringificado = JSON.stringify(filtrarStorage);
        localStorage.setItem('favorito', storageStringificado);

        this.setState({
            favorito: false
        });
    }

    render() {
        let detalle = this.state.detalle;
        console.log("Esto es el detalle", detalle);
        if (this.state.cargando) {
            return (
                <main>
                    <Loader />
                </main>
            );
        } else if (detalle.success === false) {
            return(<NotFound/>);
        } 
        return (
            <main>
                <h1>{detalle.original_title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`}
                    alt={detalle.original_title}
                />
                <p><strong>Calificación:</strong> {detalle.vote_average} / 10</p>
                <p><strong>Fecha de estreno:</strong> {detalle.release_date}</p>
                <p><strong>Duración:</strong> {detalle.runtime} minutos</p>
                <p><strong>Sinopsis:</strong> {detalle.overview}</p>
                <p><strong>Géneros:</strong></p>
                <ul>
                    {detalle.genres.map((genre, i) => (
                        <li key={genre.name + i}>{genre.name}</li>
                    ))}
                </ul>
                <section className="boton">
                    {this.state.favorito ? (
                        <button onClick={() => this.sacarDeFavorito(detalle.id)}>
                            Sacar de Favoritos
                        </button>
                    ) : (
                        <button onClick={() => this.agregarAFavorito(detalle.id)}>
                            Agregar a Favoritos
                        </button>
                    )}
                </section>
                <Link to="/" className="boton"><button>Volver</button></Link>
            </main>
        );
    }
}

export default Detalle;