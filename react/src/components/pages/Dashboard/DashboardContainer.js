import React from 'react';
import styled from 'styled-components';

function DashboardContainer(){
    return(
        <>

        <ContainerAutogestion className="div-form">
                    <form  id="form" name="form">
                        <div className="elemento">
                            <MyInput type="email" id="email" name="email" required placeholder="Ingrese su email"/>
                        </div>
                        
                        <div className="elemento">
                            <MyInput type="password" name="password" placeholder="Ingrese su contraseña" required/>
                        </div>  

                        <div className="elemento">
                            <MyBottonSubmit type="submit" value="Ingresar"/>
                            <MyBottonReset type="reset" value="Limpiar"/>
                        </div>    
                    </form>  
            </ContainerAutogestion>

        </>
    );
}
export default DashboardContainer;

const ContainerAutogestion=styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    margin:150px 50px;
    gap:50px;
`;

const MyInput = styled.input`
    margin: 1rem 0;
    width:90%;
    padding: 1rem;  
    color: gray;
    border-radius: 5px;
    border-color: gainsboro;
    font-size: 20px;
`;

const MyBottonSubmit = styled.input`
    background-color: none;
    border:2px solid black;
    color: #000;        
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem;
    margin-top: 2rem;   
    width: 7rem;
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