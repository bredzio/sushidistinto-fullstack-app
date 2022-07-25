import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AgregarCurso from './AgregarCurso.js';
import ModalGenerico from './ModalGenerico.js';
import TableOfCourses from './TableOfCourses';
import DashboardContext from './DashboardContext.js';
import EditarCurso from './EditarCurso.js';
import {CartContext} from '../../context/CartContext.js';
import {Navigate} from 'react-router-dom';

const URI = 'http://localhost:8000/cursos/';

function DashboardContainer(){
    const [cursos, setCursos] = useState([]);
    const [editable, setEditable] = useState(null);
    const [estadoModalAgregar, setEstadoModalAgregar] = useState(false);
    const {token, setToken} = useContext(CartContext)


    const handleAgregar = () => {
        setEstadoModalAgregar(true);
    }

    if(!localStorage.getItem('loggedAppUser')){
        return <Navigate to='/'/>
    }

    const handleLogout = () => {
        setToken(null);
        window.localStorage.removeItem('loggedAppUser');
    }

    return(
        <DashboardContext.Provider value={{cursos, setCursos, editable, setEditable, URI}}>

            <ContainerAutogestion>
                <MyTableTitle>Gestión de cursos</MyTableTitle>
                <MyTableSubtitle style={{color: 'black'}}>Administre facilmente los cursos que se ofrecerán a los clientes:</MyTableSubtitle>
                <MyButtonAgregar onClick={handleAgregar}>Agregar Curso</MyButtonAgregar>
                <MyButtonAgregar onClick={handleLogout}>Cerrar Sesión</MyButtonAgregar>
                {cursos &&
                    <TableOfCourses></TableOfCourses>
                }
                <ModalGenerico title='Ingrese datos del curso' estado={estadoModalAgregar} setEstado={setEstadoModalAgregar}>
                    <AgregarCurso estadoModal={estadoModalAgregar} setEstadoModal={setEstadoModalAgregar}/>
                </ModalGenerico>
                <ModalGenerico title='Edite datos del curso' estado={editable} setEstado={setEditable}>
                    <EditarCurso estadoModal={editable} setEstadoModal={setEditable}/>
                </ModalGenerico>
            </ContainerAutogestion>
        </DashboardContext.Provider>
    );
}
export default DashboardContainer;

const ContainerAutogestion=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    margin:150px 50px;
    gap:30px;
    color: black;
`;

const MyTableTitle = styled.h1`
    color: black;
`

const MyTableSubtitle = styled.p`
    color: black;
`

const MyButtonAgregar = styled.button`
    background-color: none;
    border:2px solid black;
    color: #000;        
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-top: 1rem;   
    font-size: 1rem;
    font-weight: bold;    
    border-radius: 50px;
`;

const MyBottonReset = styled.input`
    background-color: none;
    border:2px solid black;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 1rem;
    width: 7rem;
    font-size: 1rem;
    font-weight: bold;    
    border-radius: 50px;
`;