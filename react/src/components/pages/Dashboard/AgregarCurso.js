import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import DashboardContext from './DashboardContext';
import CursoModel from './CursoModel';
import axios from 'axios';

const AgregarCurso = ({estadoModal, setEstadoModal}) => {
    const [inputs, setInputs] = useState({titulo:'', categoria: 'Cursos', precio:'', newItem:''});
    const [items, setItems] = useState([]);
    const {setCursos, URI} = useContext(DashboardContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const isBtnDisabled = () => {
        if (inputs.titulo === '' || inputs.categoria === '' || inputs.precio ==='' || items.length === 0) {
            return true;
        } else {
            return false;
        }
    }
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const nuevoCursoObj = new CursoModel(null, inputs.titulo, items, inputs.precio, inputs.categoria);
        await createCurso(nuevoCursoObj);
        setEstadoModal(false);
    }

    const getCursos = async () => {
        const res = await axios.get(URI);
        await setCursos(res.data);
    }

    const createCurso = async (newCourse) => {
        const res = await axios.post(URI, newCourse);
        if (!res?.data) {
            alert("Ups! Ocurrió un error, intente nuevamente más tarde.");
        } else {
            alert(`Curso "${newCourse.title}" creado satisfactoriamente!`)
            getCursos();
        }
    }


  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column'>
        <MyLabel>Titulo:
        <input 
            type="text" 
            name="titulo" 
            value={inputs.titulo || ""} 
            onChange={handleChange}
            className='form-control mb-2'
            placeholder="Ej: Curso básico de sushi"
        />
        </MyLabel>

        <MyLabel>Precio:
            <MyflexContainer>
                <div className="input-group-prepend">
                    <span className="input-group-text">US$</span>
                </div>
                <input 
                    type='number'
                    name="precio"
                    value={inputs.precio|| ''}
                    onChange={handleChange}
                    onBlur={() => setInputs({...inputs, precio: (parseFloat(inputs.precio).toFixed(2))})}
                    className='form-control mb-2'
                    min={0}
                    placeholder="Ingrese el precio en dólares del curso"
                />
            </MyflexContainer>
        </MyLabel>

        <MyLabel>Categoría:
        <select name='categoria' value={inputs.categoria} onChange={handleChange} className='form-control mb-2'> 
            <MyOption value="cursos">cursos</MyOption>
            <MyOption value="promociones">promociones</MyOption>
            <MyOption value="masterclass">masterclass</MyOption>
        </select>
        </MyLabel>

        <MyLabel>Nuevo item:
        <MyflexContainer>
            <input type="text" value={inputs.newItem || ''} name='newItem' className="form-control mb-2 mr-2" placeholder="Ej: Preparación de sashimis" onChange={handleChange}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" disabled={inputs.newItem === ''} onClick={() => { setItems(items.concat(inputs.newItem.toString())); setInputs({...inputs, newItem: ''})}}>Agregar</button>
            </div>
        </MyflexContainer>
        </MyLabel>

        <MyLabel>Items agregados:
        <MyflexContainer>
            <MyTextarea
                type="text"
                name="items" 
                value={items || ""} 
                className='form-control mb-2'
                rows={3}
                readOnly={true}
                onFocus={(evt) => evt.target.blur()}
            />
            <div className="align-self-center">
                <button className="btn btn-outline-danger" type="button" disabled={items.length === 0} onClick={() => setItems([]) }>Borrar cursos</button>
            </div>
        </MyflexContainer>
        </MyLabel>
         <input type="submit" className='btn btn-primary' value={'Agregar curso'} disabled={isBtnDisabled()}/>
  </form>
  )
}

export default AgregarCurso

const MyLabel = styled.label`
    color: black;
    font-weight: 600;
`

const MyOption = styled.option`
    color: black;
`

const MyTextarea = styled.textarea`
    overflow-y: scroll;
    resize: none;
    margin-right: 10px;
`

const MyflexContainer = styled.div`
    display: flex;
    gap: 1;
`