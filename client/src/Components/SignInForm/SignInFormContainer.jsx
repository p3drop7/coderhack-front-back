import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import './SignInForm.scss'

function SignInFormContainer() {

    const [form, setForm] = useState(1)

    function clickHandlerAccess(){
        setForm(1)
        document.querySelector(".iniciarSesion_selector").classList.add("broomBackground")
        document.querySelector(".registrarse_selector").classList.remove("broomBackground")
    }

    function clickHandlerSignIn(){
        setForm(2)
        document.querySelector(".iniciarSesion_selector").classList.remove("broomBackground")
        document.querySelector(".registrarse_selector").classList.add("broomBackground")
    }
    return (
        <div className="SignInFormContainer">

            <div className="access_logo--form" ></div>

            <div className="SignInFormContainer_div">
                <h2>¡bienvenidx!</h2>

                <div className="signIn_selector">
                    <div className="iniciarSesion_selector broomBackground" onClick={clickHandlerAccess} >Iniciar sesión</div>
                    <div className="registrarse_selector" onClick={clickHandlerSignIn}>Registrarse</div>
                </div>

                { (form === 1) &&
                    <form action="#" className="access_form">

                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="Ingrese su email"></input>
                        </div>
                        
                        <div>
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" placeholder="Ingrese su contraseña"></input>
                        </div>
                        
                        <div className="access_submit-btn"><Link className="react-link" to="/app/main">Ingresar</Link></div>
                    
                        <div className="access_signInLink">¿Aún no estás registrado? <a href="">Registrate aquí</a></div>

                        <hr />

                        <div className="otherAcess">
                            <div className="googleAccess"><FcGoogle className="gl-icon"/><Link className="react-link--google" to="/app/main" >Iniciar con Google</Link></div>
                            <div className="facebookAcces"><BsFacebook className="fb-icon"/><Link className="react-link--facebook" to="/app/main" >Continue with Facebook</Link></div>
                        </div>

                        
                        
                    </form> 
                }

                <div className="access_bar1--form"></div>
                <div className="access_bar2--form"></div>

                { (form === 2) &&
                    <form action="#" className="signIn_form">

                        <div>
                            <label for="name">Nombre</label>
                            <input type="text" name="name" placeholder="Ingrese su nombre"></input>
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="Ingrese su email"></input>
                        </div>
                        
                        <div>
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" placeholder="Ingrese su contraseña"></input>
                        </div>
                        
                        <div className="access_signInLink">¿Ya estás registrado? <a href="">Ingresa aquí</a></div>

                       <div className="access_submit-btn"><Link className="react-link" to="/app/main">Ingresar</Link></div>
                    
                        
                    </form>
                } 

            </div>
        </div>
    )
}

export default SignInFormContainer