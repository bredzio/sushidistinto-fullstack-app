import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import loginService from './../../../services/login.js';
import {CartContext} from '../../context/CartContext.js';


function AutogestionContainer(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const {setToken} = useContext(CartContext)


    useEffect(()=>{
        const loggedAppUser = window.localStorage.getItem('loggedAppUser')
        if(loggedAppUser){
            const token = JSON.parse(loggedAppUser);
            setToken(token);
        }
    },[])

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            const user = await loginService.login({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
            )

            setUser(user);
            setUsername('');
            setPassword('');
        }catch(e){
           console.error(e);
        }
    }

    return(
        <>

        <ContainerAutogestion className="div-form">
                    <form  id="form" name="form" onSubmit={handleLogin}>
                        <div className="elemento">
                            <MyInput 
                                type="email" 
                                id="username" 
                                value={username}
                                name="Username" 
                                required 
                                placeholder="Ingrese su email"
                                onChange={({target})=> setUsername(target.value)}
                            />
                        </div>
                        
                        <div className="elemento">
                            <MyInput 
                                type="password" 
                                id="password" 
                                value={password}
                                name="Password" 
                                required 
                                placeholder="Ingrese su contraseña"
                                onChange={({target})=> setPassword(target.value)}
                            />    
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
export default AutogestionContainer;

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