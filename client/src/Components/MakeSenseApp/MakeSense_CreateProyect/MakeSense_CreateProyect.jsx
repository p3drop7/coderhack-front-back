import React from 'react';
import './MakeSense_CreateProyect.scss';
import attach from "./assets/attach.svg";

function MakeSense_CreateProyect() {
    return (
        <div className="container-createproject">
            <div className="createproject">
                <h3>¡cuentanos sobre tu proyecto!</h3>
                <form className="container-form">
                    <div className="col-project">
                        <label>¿cómo se llama tu emprendimiento?</label>
                        <input className="input-project" type="text"></input>
                    </div>
                    <div className="col-project">
                        <label>cuentanos, ¿de qué se trata?</label>
                        <input className="input-project textarea" type="textarea"></input>
                    </div>
                    <div className="col-project">
                        <label>¿tienes logo? puedes adjuntarlo aquí </label>
                        <label className="input-file" for="file">
                            <img src={attach} alt="file"></img>
                            Adjuntar
                        </label>
                        <input className="input-project" id="file" type="file"></input>
                    </div>
                    <div className="col-project">
                        <label>¿te gustaría participar de un taller en vivo con voluntarios?</label>
                        <select name="taller" className="input-project">
                            <option hidden selected>selecciona una opción</option>
                        </select>
                    </div>
                    <div className="col-project">
                        <input className="submit" type="submit" value="aceptar"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakeSense_CreateProyect
