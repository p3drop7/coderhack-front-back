import React from 'react'
import './MakeSense_Questions.scss'
import palms from "./assets/palms.svg";

function MakeSense_Questions() {
    return (
        <div class="container-questions">
            <div class="questions">
                <img class="palm" src={palms} alt="palms"></img>
                <div class="title-questions">
                    <p>
                        tu respuesta va a ayudar a cambiar el 
                        mundo por eso queremos compartirte algunas 
                        preguntas para que te inspires:
                    </p>
                </div>
                <div class="questions-makesense">
                    <p>¿Cómo crees que Steve Jobs resolvería este reto?</p>
                    <p>¿Cuál es la mejor idea para resolver este reto?</p>
                    <p>¿Cuál es la peor idea para resolverlo?</p>
                    <p>Convierte esta mala idea en una buena idea.</p>
                </div>
                <div class="submit-questions">
                    <input class="submit" type="submit" value="entendido"></input>
                </div>
            </div>
        </div>
    )
}

export default MakeSense_Questions
