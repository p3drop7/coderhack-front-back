import userimg from "./assets/userimg.png";
import points from "./assets/points.svg";
import like from "./assets/like.png";
import message from "./assets/message.png";
import save from "./assets/save.png";
import userwoman from "./assets/userwoman.png";
import MakeSense_Questions from '../MakeSense_Questions/MakeSense_Questions';
import './MakeSense_Publication.scss'

function MakeSense_Publication() {

    function clickHandler(){
        const questionsAlert = document.querySelector(".questionsAlert")

        if(questionsAlert.classList.contains('alertHidden')){
            questionsAlert.classList.remove("alertHidden")
            questionsAlert.classList.add("alertVisible")
        }
    }

    return (
        <div className="container-comment">

            <MakeSense_Questions className="questionsAlert alertHidden" />

            <div className="comment">

                <div className="container-userinfo">
                    <div className="user-data">
                        <img src={userimg} alt="userimg"></img>
                        <div className="user-datatext">
                            <h4>Nombre Apellido</h4>
                            <p>fecha y hora de publicacion</p>
                        </div>
                    </div>

                    <img className="points" src={points} alt="points"></img>
                </div>

                <div className="container-usertext">
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

                <div className="container-reactions"> 
                    <div className="reactions">
                        <div className="reaction">
                            <img src={like} alt="like"></img>     
                            <div className="box-text">
                                <p>me gusta</p>
                            </div>
                        </div>

                        <div className="reaction">
                            <img src={message} alt="message"></img>     
                            <div className="box-text">
                                <p>comentar</p>
                            </div>
                        </div>
                    </div>

                    <div className="save">
                        <img src={save} alt="save"></img>     
                        <div className="box-text">
                            <p>guardar</p>
                        </div>
                    </div>
                </div>

                <div className="container-answer">
                    <div className="user-answer">
                        <img src={userwoman} alt="userwoman"></img>
                    </div>
                    <div className="boxaswer">
                        <input onClick={clickHandler} className="input-answer" type="text" placeholder="¿cómo resolverias este reto?"></input>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MakeSense_Publication