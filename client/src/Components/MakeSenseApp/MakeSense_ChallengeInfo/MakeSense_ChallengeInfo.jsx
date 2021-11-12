import React from 'react'
import bag from "./assets/bag.svg"
import face from "./assets/face.svg"

function MakeSense_ChallengeInfo() {
    return (
        <div className="container-personalinfo">
            <div className="personalinfo">
                <img className="emoji" src={bag} alt="bag"></img>
                <h3>informacion de tu emprendimiento</h3>
                <div className="user-info">
                    <img src={face} alt="infouser"></img>
                    <p>cambiar imágen de perfil</p>
                </div>
                <div className="container-input">
                    <label for="name">nombre</label>
                    <input id="name" className="input-info" type="text"></input>
                </div>
                
                <div className="container-input">
                    <label for="description">descripción</label>
                    <input id="description" className="input-info" type="text"></input>
                </div>
    
                <div className="container-input">
                    <label>¿te gustaría participar de un taller en vivo con voluntarios?</label>
                    <select name="taller" className="input-info select">
                        <option hidden selected>selecciona una opción</option>
                    </select>
                </div>

                <input className="submit" type="submit" value="guardar cambios"></input>
    
            </div>
        </div>
    )
}

export default MakeSense_ChallengeInfo
