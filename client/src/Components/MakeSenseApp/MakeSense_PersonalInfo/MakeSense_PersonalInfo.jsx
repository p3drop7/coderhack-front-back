import React from 'react'

import smiling from"./images/emojis/smiling.svg"
import userinfo from"./images/user/userinfo.png"

function MakeSense_PersonalInfo() {
    return (
        <div className="container-personalinfo">
            <div className="personalinfo">
                <img className="emoji" src={smiling} alt="smilling"></img>
                <h3>informacion personal</h3>
                <div className="user-info">
                    <img src={userinfo} alt="infouser"></img>
                    <p>cambiar imágen de perfil</p>
                </div>
                <div className="container-input">
                    <label for="name">nombre</label>
                    <input id="name" className="input-info" type="text"></input>
                </div>
                
                <div className="container-input">
                    <label for="lastname">apellido</label>
                    <input id="lastname" className="input-info" type="text"></input>
                </div>

                <div className="container-input">
                    <label for="password">contraseña</label>
                    <input id="password" className="input-info" type="password"></input>
                </div>

                <div className="container-input">
                    <label for="email">email</label>
                    <input id="email" className="input-info" type="email"></input>
                </div>
                
                <input className="submit" type="submit" value="guardar cambios"></input>

            </div>
        </div>
    )
}

export default MakeSense_PersonalInfo
