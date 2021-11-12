import React from 'react'
import './MakeSense_Publication.scss'
import userimg from "./assets/userimg.png";
import points from "./assets/points.svg";
import like from "./assets/like.png";
import message from "./assets/message.png";
import save from "./assets/save.png";
import userwoman from "./assets/userwoman.png";

function MakeSense_Publication() {
    return (
        <div class="container-comment">
            <div class="comment">

                <div class="container-userinfo">
                    <div class="user-data">
                        <img src={userimg} alt="userimg"></img>
                        <div class="user-datatext">
                            <h4>Nombre Apellido</h4>
                            <p>fecha y hora de publicacion</p>
                        </div>
                    </div>

                    <img class="points" src={points} alt="points"></img>
                </div>

                <div class="container-usertext">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Adipiscing at etiam quis nunc maecenas id bibendum euismod
                        morbi. Pellentesque adipiscing non nunc eget velit tempor, 
                        eget lectus. In velit, eu dolor est ullamcorper sed leo etiam 
                        eget. Purus volutpat, bibendum faucibus lacus, cursus sed
                        in. Varius facilisi ultricies ut velit lacus faucibus. Eget
                        sit amet, ante odio elit ut odio vitae nunc. Euismod faucibus
                        diam dui malesuada id sit diam.
                    </p>
                </div>

                <div class="container-reactions"> 
                    <div class="reactions">
                        <div class="reaction">
                            <img src={like} alt="like"></img>     
                            <div class="box-text">
                                <p>me gusta</p>
                            </div>
                        </div>

                        <div class="reaction">
                            <img src={message} alt="message"></img>     
                            <div class="box-text">
                                <p>comentar</p>
                            </div>
                        </div>
                    </div>

                    <div class="save">
                        <img src={save} alt="save"></img>     
                        <div class="box-text">
                            <p>guardar</p>
                        </div>
                    </div>
                </div>

                <div class="container-answer">
                    <div class="user-answer">
                        <img src={userwoman} alt="userwoman"></img>
                    </div>
                    <div class="boxaswer">
                        <input class="input-answer" type="text" placeholder="¿cómo resolverias este reto?"></input>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MakeSense_Publication