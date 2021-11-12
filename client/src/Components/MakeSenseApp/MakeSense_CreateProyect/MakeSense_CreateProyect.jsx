import React from 'react';
import './MakeSense_CreateProyect.scss';
import attach from "./assets/attach.svg";

function MakeSense_CreateProyect() {
    return (
        <div class="container-createproject">
            <div class="createproject">
                <h3>¡cuentanos sobre tu proyecto!</h3>
                <form class="container-form">
                    <div class="col-project">
                        <label>¿cómo se llama tu emprendimiento?</label>
                        <input class="input-project" type="text"></input>
                    </div>
                    <div class="col-project">
                        <label>cuentanos, ¿de qué se trata?</label>
                        <input class="input-project textarea" type="textarea"></input>
                    </div>
                    <div class="col-project">
                        <label>¿tienes logo? puedes adjuntarlo aquí </label>
                        <label class="input-file" for="file">
                            <img src={attach} alt="file"></img>
                            Adjuntar
                        </label>
                        <input class="input-project" id="file" type="file"></input>
                    </div>
                    <div class="col-project">
                        <label>¿te gustaría participar de un taller en vivo con voluntarios?</label>
                        <select name="taller" class="input-project">
                            <option hidden selected>selecciona una opción</option>
                        </select>
                    </div>
                    <div class="col-project">
                        <input class="submit" type="submit" value="aceptar"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakeSense_CreateProyect
