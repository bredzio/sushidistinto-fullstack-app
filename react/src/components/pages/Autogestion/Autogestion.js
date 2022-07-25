import React from 'react';
import Titulo  from '../Titulo';
import fondo from '../../../images/recetas.jpg';
import AutogestionContainer from '../../../components/pages/Autogestion/AutogestionContainer.js';



function Autogestion(){


    return(
        <>    
            <Titulo title="Bienvenid@" fondo={fondo}/>
            <AutogestionContainer/>
        </>
    );
}
export default Autogestion;