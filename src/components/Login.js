import React, { useRef } from 'react';
import { auth } from '../firebase';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import{BsArrowLeft} from "react-icons/bs";
import './Login.css'

//const Login = () => {
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            emailUser: null,
            passwordUser: null,
            msjErrorLogin: ""
             
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    
    handleChangeEmail(event){
        this.setState({
            emailUser: event.target.value
        });
    }
    handleChangePassword(event){
        this.setState({
            passwordUser: event.target.value
        });
    }
    
    login(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            this.state.emailUser,
            this.state.passwordUser
        ).then(user => {
            console.log(user)
        }).catch(error => {
            //console.log(error.code);
            this.setState({
                msjErrorLogin: "Usuario o contraseña inválido"
            });
        }) 
    }
    register(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            this.state.emailUser,
            this.state.passwordUser
        ).then(user => {
            console.log(user)
        }).catch(error => {
            console.log(error)
        }) 
    }
    render(){
        return (
            <div className="login">
                <Link to='/Store'>
                    <Button variant="light" className="volver_b"> 
                        <BsArrowLeft/>Volver
                    </Button>
                </Link>
                <Form className="login_form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.handleChangeEmail} type="email" placeholder="Correo electrónico" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control onChange={this.handleChangePassword} type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Text style={{color:'white'}}>
                            Asegúrese que está en el sistema como administrador.<br/>
                        </Form.Text>
                        <Form.Text style={{color:'#961313e3'}}>
                            {this.state.msjErrorLogin}
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={this.login} variant="success" type="submit" disabled={(this.state.emailUser === null || this.state.passwordUser === null)||(this.state.emailUser === "" || this.state.passwordUser === "")}>
                        Ingresar
                    </Button>
                </Form>

            </div>
        );
    }
}

export default Login