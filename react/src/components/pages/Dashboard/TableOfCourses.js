import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Course from './Course'
import DashboardContext from './DashboardContext';

const TableOfCourses = () => {
    const {cursos, setCursos, URI} = useContext(DashboardContext);

    const getCursos = async () => {
        const res = await axios.get(URI);
        if (!res?.data) {
            alert("Ups! Ocurrió un error, intente nuevamente más tarde.");
        } else {
            setCursos(res.data);
        }
    }

    useEffect ( () => {
        getCursos()
    },[])

  return (
    <div className="table-responsive">          
        <table className="table table-striped">
            <thead>
            <tr>
                <MyColHeader style={{color: 'black'}} scope='col' className='col-1'>Id</MyColHeader>
                <MyColHeader style={{color: 'black'}} scope='col' className='col-2'>Título</MyColHeader>
                <MyColHeader style={{color: 'black'}} scope='col' className='col-1'>Categoría</MyColHeader>
                <MyColHeader style={{color: 'black'}} scope='col' className='col-5'>Items</MyColHeader>
                <MyColHeader style={{color: 'black'}} scope='col' className='col-2'>Precio</MyColHeader>
                <MyColHeader style={{color: 'black'}} scope='col' className='col-1'>Acciones</MyColHeader>
            </tr>
            </thead>
            <tbody>
                {cursos.map((curso, i) => {
                    return <Course key={i} curso={curso}></Course>
                })

                }           
            </tbody>
        </table>
    </div>
  )
}

const MyColHeader = styled.th`
    color: black;
    font-weight: bolder;
`

export default TableOfCourses