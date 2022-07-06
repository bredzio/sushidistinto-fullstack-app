import React from 'react';
import styled from 'styled-components';

import {CursosList} from '../Cursos/CursosList';
import { useEffect, useState } from "react";
import {Loading} from '../Cursos/Loading';
import {useParams} from 'react-router-dom';
import Categorias from './Categorias';


import axios from 'axios';

const URI = 'http://localhost:8000/cursos';



const ContainerCursos = () => {
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(false)
    const {cursoId} = useParams();
    
    useEffect( ()=>{
        setLoading(true)
        if(!cursoId){
            getCursos()
        }else{
            getCursosFiltrados(cursoId)
        }
    },[cursoId])
    

        const getCursos = () => {
            axios.get(URI).then(response => {
                setCursos(response.data);
                setLoading(false)
            })
        }

        function getCursosFiltrados(categoriaId) {
            axios.get(`${URI}/?category=${categoriaId}`).then(response => {
                setCursos(response.data);
                setLoading(false)
            })
        }

    


    return(
        
        <MySection>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <MyTitle className="display-4 text-center">Precios</MyTitle>
                <MyText className="fs-5 text-mutted">Estás a solo un paso de aprender cómo hacer el mejor sushi sin moverte de tu casa</MyText>

            </div>
            
            <MyDiv>
                {
                    loading 
                        ? <Loading/> 
                        : 
                        <><Categorias/>
                        <CursosList cursos={cursos}/></>
                        
                }
            </MyDiv>

        </MySection> 
    );
}
export default ContainerCursos;



const MySection = styled.section`
        margin: 2rem 0.5rem ;
        text-align:center;
`;

const MyDiv = styled.div`
    text-align:center;
    margin: 0 3rem;
    flex: 1;
    justify-content: center;
    align-items: center;

`;


const MyTitle = styled.h1`
        color: #000;
        text-align: left;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom:3rem;
`;

const MyText = styled.p`
    color: grey;
    margin-bottom:0px;
`;
