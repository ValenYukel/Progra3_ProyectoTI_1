import React from "react";

const Loader = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img style={{ border: '3px solid black' }} src='/img/vaquero.gif' alt='Cargando...' />
            <p>Cargando...</p>
        </div>
    );
};

export default Loader;