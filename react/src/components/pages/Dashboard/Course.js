import React, { useContext } from 'react'
import styled from 'styled-components'
import DashboardContext from './DashboardContext';
import axios from 'axios';

const Course = ({curso}) => {
  const {cursos, setCursos, setEditable, URI} = useContext(DashboardContext);

  const getCursos = async () => {
    const res = await axios.get(URI);
    await setCursos(res.data);
}

  const eliminarCurso = async (idCurso) => {
    const res = await axios.delete((URI+'/'+idCurso));
    if (!res?.data) {
      alert("Ups! Ocurrió un error, intente nuevamente más tarde.");
    } else {
        alert(`Curso "${curso.title}" eliminado satisfactoriamente!`);
        getCursos();
    }
  }

  const editarCurso = (curso) => {
    setEditable(cursos.find( (course) => { 
      if (curso.id === course.id){
        return course;
      }
    }))
  }


  return (
     <tr>
        <MyCol >{curso.id}</MyCol>
        <MyCol >{curso.title? curso.title : 'N/A'}</MyCol>
        <MyCol >{curso.category ? curso.category : 'N/A'}</MyCol>
        <MyCol >{curso.content ? curso.content.map((item) => {
            return `${item}; `
        }): 'N/A'} </MyCol>
        <MyCol >US$ {curso.price ? parseFloat(curso.price).toFixed(2) : 'N/A'}</MyCol>
        <MyCol >
          <button size='sm' className='btn btn-primary px-2 align-self-center mb-1' style={{width: '100%'}} type="button" onClick={() => editarCurso(curso)}>
              Editar
          </button>
          <button size='sm' className='btn btn-danger px-2 align-self-center' style={{width: '100%'}} type="button" onClick={() => eliminarCurso(curso.id)}>
              Eliminar
          </button>
        </MyCol>
    </tr>
  )
}

const MyCol = styled.td`
    color: black !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
`

export default Course