import React, { useContext } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useState} from "react";

import {CartContext} from "../../context/CartContext";

export const Curso = ( {title, content, price, id, min=0} ) => {

    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState(null);


    const {agregarAlCarrito, isInCart} = useContext(CartContext);


    const handleRestar = () =>{
        cantidad>min && setCantidad(cantidad - 1)
    }

    const handleSumar = () =>{
        setCantidad(cantidad + 1)
    }

    const handleAgregar=()=>{
        if(cantidad === 0) return

        if(!isInCart(id)){
            const addCurso={
                id, title,content,price, cantidad, categoria
            }
            agregarAlCarrito(addCurso)

        }

    }

    return (
        <div className="col-12 mb-2 col-md-4 text-center">                    
                <div className="card shadow-sm border-danger" >
                    <div className="card-body">
                        <h4 className="card-header py-3 text-white bg-danger border-danger">{title}</h4> 
                        <MyPrice className="my-3 font-weight-normal text-center">${price}.00<small className="text-muted">/+iva</small></MyPrice>
                        <MyText className="list-unstyled mt-3 mb-4">
                            {content.map((el, id)=>
                                <MyText key={id}>{el}</MyText>
                            )}              
                            
                        </MyText>
                        <Link to={`/detalle/${id}`}>
                            <button className="btn btn-outline-danger btn-lg w-100" id="agregar">+ info</button>
                        </Link>
                        {
                            isInCart(id)
                            ?<Link to="/checkout" className="btn btn-danger my-2">Terminar Compra</Link>
                            :
                        
                        <>
                            <div className="mt-3">
                                <button className="btn btn-outline-danger" onClick={handleRestar}>-</button>
                                <span className="mx-3 text-black font-bold" >{cantidad}</span>
                                <button className="btn btn-danger" onClick={handleSumar}>+</button>
                            </div>            
                   
                            
                            <button className="btn btn-danger my-2" onClick={handleAgregar}>Agregar al carrito</button>
                            </>
                        }    
                    </div>
                </div>   
        </div>
    )
}

const MyPrice = styled.h1`
        color: black;
        font-size:2rem;
        text-align: left;
        
`;


const MyText = styled.li`
    color:black;
`;