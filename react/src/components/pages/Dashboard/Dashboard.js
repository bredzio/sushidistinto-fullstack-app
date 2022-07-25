import React from 'react';
import Titulo  from '../Titulo';
import fondo from '../../../images/recetas.jpg';
import DashboardContainer from '../../../components/pages/Dashboard/DashboardContainer.js';


function Dashboard(){
    return(
        <>        
            <Titulo title="Panel de control" fondo={fondo}/>
            <DashboardContainer/>
        </>
    );
}
export default Dashboard;