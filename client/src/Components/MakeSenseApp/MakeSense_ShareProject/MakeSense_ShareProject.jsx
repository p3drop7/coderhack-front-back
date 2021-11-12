import React from 'react'
import biguser from ".assets/biguser.svg"
import attach from "./assets/attach.svg"
import arrow from "./assets/arrow.png"
import tag from "./assets/tag.png"


function MakeSense_ShareProject() {

    return (
        <div className="container-shareproject shareHidden">
            <div className="shareproject">
                <img className="user-img" src={biguser} alt="biguser"></img>
                
                <div className="title-shareproject">
                    <p>comparte el reto de tu emprendimiento</p>
                </div>

                <div className="questions-share">
                    <p>¿cuál es el mayor reto que vive hoy tu emprendimiento?</p>
                    <p>¿por qué crees que tienes este reto? ¿hay alguna otra
                        causante?</p>
                    <p>¿quién es el usuario que se ve más afectado?</p>
                </div>

                <input className="box-share" type="textarea"></input>

                <div className="container-buttons">
                    <div className="buttons">
                        <div className="button">
                            <img src={attach} alt="attach"></img>
                            <p>adjuntar</p>
                            <img src={arrow} alt="arrow"></img>
                        </div>  

                        <div className="button">
                            <img src={tag} alt="tag"></img>
                            <p>etiquetas</p>
                            <img src={arrow} alt="arrow"></img>
                        </div> 
                    </div>

                    <div className="button-publish">
                        <input className="submit" type="submit" value="publicar"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeSense_ShareProject
