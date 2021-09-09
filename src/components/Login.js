import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import './Login.css'

const Login = () => {
    const emailUser = useRef(null);
    const passwordUser = useRef(null);

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailUser.current.value,
            passwordUser.current.value
        ).then(user => {
            console.log(user)
        }).catch(error => {
            console.log(error)
        })
    }
    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailUser.current.value,
            passwordUser.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="login">
            <form action="">
                <h1>Iniciar sesión</h1>
                <input ref={emailUser} type="email" />
                <br/>
                <input ref={passwordUser} type="password" />
                <br/>
                <button onClick={login}>Ingresar </button>
                <h6>¿No tiene cuenta? <span onClick={register} className="login__link">Registrarse</span></h6>
            </form>
        </div>
    )
}

export default Login