import React,{useContext} from 'react';
import {CartContext} from '../../context/CartContext';

import styled from 'styled-components';

export const Item = ( {title, price, cantidad, id, content,category} ) => {
    
    const {eliminarItem} = useContext(CartContext)

    const handleEliminar=()=>{

            const addCurso={
                id, title,content,price, cantidad
            }

            eliminarItem(addCurso)

        }
        

    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 className="my-0 text-dark">{title}
                <MyButton onClick={handleEliminar}>
                    <MySvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </MySvg>  
                </MyButton>
            </h6>
            <small class="text-muted">{category}</small>
            </div>
            <span className="text-muted">${price*cantidad}.00</span>
      </li>
    )
}
let hoverColor="#824653";

const MySvg= styled.svg`
width:"2.5rem"; 
height:"2.5rem";

-webkit-transition:all 500ms ease;
-o-transition:all 500ms ease;
transition:all 500ms ease;

fill:${hoverColor};

`;

const MyButton = styled.button`
border: none;
position: relative;
align-items: center;
justify-content: center;
outline: none;
width: 50px;
height: 50px;
border-radius: 50%;

background-color: rgba(56, 56, 56, 0.001);
`;