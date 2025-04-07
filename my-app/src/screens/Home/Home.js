import React from 'react';
import SeccionPopulares from '../../components/SeccionPopulares/SeccionPopulares';
import SeccionCarteles from '../../components/SeccionCartel/SeccionCartel';
import Loader from '../../components/Loader/Loader';

function Home(){
    return(
    <React.Fragment>  
      <Loader /> 
       <h1>Home</h1>
      <main>
      <h1>PELICULAS POPULARES</h1>
      <SeccionPopulares />
      <h1>PELICULAS EN CARTELERA</h1>
      <SeccionCarteles />
      </main>

    </React.Fragment>   
    )
};

export default Home;