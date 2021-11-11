import React from 'react'
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs"
import team from './images/team/team.png'
import logo from './images/logo/logo.png'
import './Landing.scss'
import './ResponsiveLanding.scss'

function Landing() {
    return (
        <div>
            <body>

                {/* NAVBAR */}
                <nav class="nav-container">
                    <img src={logo} alt="logo"></img>
                    {/* <ul class="nav-ul">
                        <li class="btn-register"><a href="#">Registrarse</a></li>
                        <li class="btn-login"><a href="#">Iniciar sesion</a></li>
                    </ul> */}
                </nav>

                {/* BANNER | Participa en el holdup! */}
                <div class="banner-container">
                    <div class="flamepea-bean"></div>

                    <div class="text-banner">
                        <h2>cambiemos el mundo <span>juntxs</span></h2>
                        <p>
                            Explora la plataforma y ayuda a
                            emprendedorxs a resolver retos de su
                            proyecto a través de la inteligencia colectiva
                        </p>
                    </div>
                    <ul class="container-btn-banner">
                        <li class="btn-banner"><a href="#">comienza ahora</a></li>
                    </ul>
                </div>

                {/* SECTION | Que es el hold up? */}
                <section class="container-holdup">
                    <div class="brickred-bean"></div>
                    
                    <div class="h3-holdup">
                        <div class="broom-bean"></div>
                        <h3>¿Qué es el hold-up?</h3>
                    </div>
                    <div class="p-holdup">
                        <p>
                            Plataforma de co-creación entre emprendedores 
                            socioambientales y ciudadanos para dar solución
                            a un reto específico de un proyecto
                        </p>
                    </div>
                </section>

                <main>
                    <div class="big-bean"></div>
                    <div class="atlantis-bean"></div>
                    <div class="borderbean-cerisedark"></div>        
                    
                    {/* SECTION | Bean image */}
                    <section class="beanimg-container">
                        <div class="calypso-bean"></div>
                        <div class="borderbean-silvertree"></div>

                        <img class="img-bean" src={team} alt="team"></img>
                    </section>
                    
                    {/* SECTION | Participants */}
                    <section>
                        <div class="box-container">
                            <div class="box-participants firstbox">
                                <p>Participar como <span>_emprendedxr</span></p>
                                <div class="minibean woman1"></div>
                            </div>
                            <div class="text-box">
                                <p>
                                    Somos una comunidad de ciudadanxs innovadorxs que 
                                    queremos ser protagonistas resolviendo los retos 
                                    socioambientales en México y en el mundo. 
                                </p>
                            </div>
                        </div>

                        <div class="box-container">
                            <div class="box-participants secondbox">
                                <p>Participar como <span>_ciudadanx</span></p>
                                <div class="minibean woman2"></div>
                            </div>
                            <div class="text-box">
                                <p>
                                    Somos una comunidad de ciudadanxs innovadorxs que 
                                    queremos ser protagonistas resolviendo los retos 
                                    socioambientales en México y en el mundo. 
                                </p>
                            </div>
                        </div>
                        
                    </section>

                    {/* FOOTER */}
                    <footer>
                        <div class="footer-container">
                            <img src={logo} alt="logo"></img>
                            <div class="links">
                                <h4>Contacto</h4>
                                <a href="#">Makesense en el mundo</a>
                            </div>
                            <div class="links">
                                <h4>Equipo</h4>
                                <a href="#">Ofertas de empleo</a>
                            </div>
                
                            <ul class="social-media">
                                <li><a href=""><BsInstagram className="fab" /></a></li>
                                <li><a href=""><BsFacebook className="fab" /></a></li>
                                <li><a href=""><BsYoutube className="fab"/></a></li>
                            </ul> 
                        </div>
                    </footer>
                </main>

            </body>
        </div>
    )
}

export default Landing
