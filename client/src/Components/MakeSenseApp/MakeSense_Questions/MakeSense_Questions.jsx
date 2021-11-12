import React from 'react'
import './MakeSense_Questions.scss'
import palms from "./assets/palms.svg";

function MakeSense_Questions() {

    function clickHandler(){
        const questionsAlert = document.querySelector(".questionsAlert")
        if(questionsAlert.classList.contains('alertVisible')){
            questionsAlert.classList.remove("alertVisible")
            questionsAlert.classList.add("alertHidden")
        }
    }

    return (
        <div className="container-questions questionsAlert alertHidden">
            <div className="questions">
                <img className="palm" src={palms} alt="palms"></img>
                <div className="title-questions">
                    <p>
                        tu respuesta va a ayudar a cambiar el 
                        mundo por eso queremos compartirte algunas 
                        preguntas para que te inspires:
                    </p>
                </div>
                <div className="questions-makesense">
                    <p>¿Cómo crees que Steve Jobs resolvería este reto?</p>
                    <p>¿Cuál es la mejor idea para resolver este reto?</p>
                    <p>¿Cuál es la peor idea para resolverlo?</p>
                    <p>Convierte esta mala idea en una buena idea.</p>
                </div>
                <div className="submit-questions">
                    <input onClick={clickHandler} className="submit" type="submit" value="entendido"></input>
                </div>
            </div>
        </div>
    )
}

export default MakeSense_Questions
