import React from 'react'
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs"
import team from './images/team/team.png'
import logo from './images/logo/logo.png'
import './Landing.scss'
import './ResponsiveLanding.scss'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div>
            <body>

                {/* NAVBAR */}
                <nav className="nav-container">
                    <img src={logo} alt="logo"></img>
                </nav>

                {/* BANNER | Participa en el holdup! */}
                <div className="banner-container">
                    <div className="flamepea-bean"></div>

                    <div className="text-banner">
                        <h2>cambiemos el mundo <span>juntxs</span></h2>
                        <p>
                            Explora la plataforma y ayuda a
                            emprendedorxs a resolver retos de su
                            proyecto a través de la inteligencia colectiva
                        </p>
                    </div>
                    <ul className="container-btn-banner">
                        <li className="btn-banner"><Link className="a_link" to="/access">Comenzar</Link></li>
                    </ul>
                </div>

                {/* SECTION | Que es el hold up? */}
                <section className="container-holdup">
                    <div className="brickred-bean"></div>
                    
                    <div className="h3-holdup">
                        <div className="broom-bean"></div>
                        <h3>¿Qué es el hold-up?</h3>
                    </div>
                    <div className="p-holdup">
                        <p>
                            Plataforma de co-creación entre emprendedores 
                            socioambientales y ciudadanos para dar solución
                            a un reto específico de un proyecto
                        </p>
                    </div>
                </section>

                <main>
                    <div className="big-bean"></div>
                    <div className="atlantis-bean"></div>
                    <div className="borderbean-cerisedark"></div>        
                    
                    {/* SECTION | Bean image */}
                    <section className="beanimg-container">
                        <div className="calypso-bean"></div>
                        <div className="borderbean-silvertree"></div>

                        <img className="img-bean" src={team} alt="team"></img>
                    </section>
                    
                    {/* SECTION | Participants */}
                    <section>
                        <div className="box-container">
                            <div className="box-participants firstbox">
                                <Link to="/access" className="participants-btn">Participar como <span>_emprendedxr</span></Link>
                                <div className="minibean woman1"></div>
                            </div>
                            <div className="text-box">
                                <p>
                                    Somos una comunidad de ciudadanxs innovadorxs que 
                                    queremos ser protagonistas resolviendo los retos 
                                    socioambientales en México y en el mundo. 
                                </p>
                            </div>
                        </div>

                        <div className="box-container">
                            <div className="box-participants secondbox">
                                <Link className="participants-btn" to="/access" >Participar como <span>_ciudadanx</span></Link>
                                <div className="minibean woman2"></div>
                            </div>
                            <div className="text-box">
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
                        <div className="footer-container">
                            <img src={logo} alt="logo"></img>
                            <div className="links">
                                <h4>Contacto</h4>
                                <a href="https://makesense.org/es/contacto/" target='_blank'>Makesense en el mundo</a>
                            </div>
                            <div className="links">
                                <h4>Equipo</h4>
                                <a href="https://www.welcometothejungle.com/es/companies/makesense/jobs" target='_blank'>Ofertas de empleo</a>
                            </div>
                
                            <ul className="social-media">
                                <li><a href="https://www.instagram.com/makesensemx/" target='_blank'><BsInstagram className="fab" /></a></li>
                                <li><a href="https://www.facebook.com/makesenseperu/?brand_redir=265752777272638" target='_blank'><BsFacebook className="fab" /></a></li>
                                <li><a href="https://www.youtube.com/channel/UC3_bOquIY7-gtnA46w9SjhA" target='_blank'><BsYoutube className="fab"/></a></li>
                            </ul> 
                        </div>
                    </footer>
                </main>

            </body>
        </div>
    )
}

export default Landing
