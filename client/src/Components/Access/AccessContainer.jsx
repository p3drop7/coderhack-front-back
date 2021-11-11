import React from 'react'
import SignInFormContainer from '../SignInForm/SignInFormContainer'
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs"
import './Access.scss'

function AccessContainer() {
    return (
        <div className="accessContainer">

            <div className="accessContainer_div">
                <div className="access_logo" ></div>

                <div className="access_main_container" >
                    <div className="access_main" >
                        <h1>¡Participa en el holdup!</h1>
                        <p>Explora la plataforma y ayuda a emprendedorxs a resolver retos de su proyecto a través de la inteligencia colectiva</p>
                    </div>

                    <div className="access_bar_container">
                        <div className="access_bar1"></div>
                        <div className="access_bar2"></div>
                    </div>   
                </div>

                <div className="access-socialmedia">
                        <p>¡Síguenos!</p>
                        <BsInstagram className="main_socialmedia-icon" />
                        <BsFacebook className="main_socialmedia-icon" />
                        <BsYoutube className="main_socialmedia-icon"/>
                </div>
            </div>

            <SignInFormContainer className="SignInFormContainer" />

            <div className="bean-flamepea--1"></div>
            <div className="bean-bluediane--1--border"></div>

            <div className="bean-silvertree--2"></div>
            <div className="bean-calypso--2--border"></div>

            <div className="bean-atlantis--3"></div>
            <div className="bean-parsley--3--border"></div>

            <div className="bean-roman--4"></div>
            <div className="bean-cerisedark--4--border"></div>

        </div>
    )
}

export default AccessContainer
