import React from 'react'
import './MakeSense_Nav.scss'
import logo from './assets/logo.png'
import bell from "./assets/bell.png";
import jorge from "./assets/jorge.png";
import arrow from "./assets/arrow.png";


function MakeSense_Nav() {
    return (
        <div>

            {/* NavBar */}
            {/* <nav className="container-nav">
                <img className="logo" src={logo} alt="logo"></img>

                <div className="share">
                    <p>compartir reto</p>
                </div>

                <div className="container-user">
                    <div className="notification">
                        <img src={bell} alt="bell"></img>
                        <div className="red-point"></div>
                    </div>
                    <div className="user-section">
                        <div className="box-user">
                            <img className="user-img" src={jorge} alt="jorge"></img>
                        </div>
                        <div className="box-arrow">
                            <img className="arrow-img" src={arrow} alt="arrow"></img>
                        </div>
                    </div>
                </div>
            </nav> */}
        


        <nav class="container-nav">
                <img class="logo" src={logo} alt="logo"></img>

                <div class="share">
                    <p>compartir reto</p>
                </div>

                <div class="container-user">
                    <div class="notification">
                        <img src={bell} alt="bell"></img>
                        <div class="red-point"></div>
                    </div>
                    <div class="user-section">
                        <div class="box-user">
                            <img class="user-img" src={jorge} alt="jorge"></img>
                        </div>
                        <div class="box-arrow">
                            <img class="arrow-img" src={arrow} alt="arrow"></img>
                        </div>
                    </div>
                </div>
            </nav>

            <footer class="nav-responsive">
                <hr class="hr"></hr>
                <div class="share">
                    <p>compartir reto</p>
                </div>
            </footer>

            </div>
    )
}

export default MakeSense_Nav
