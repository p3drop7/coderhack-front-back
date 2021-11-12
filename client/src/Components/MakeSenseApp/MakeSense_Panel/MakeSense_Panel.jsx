import React from 'react'
import './MakeSense_Panel.scss'
import home from "./assets/home.png";
import note from "./assets/note.png";
import save from "./assets/save.png";
import reward from "./assets/reward.png";

function MakeSense_Panel() {
    return (
        <div className="container-panel">
            <div className="panel">
                <div className="container-panelsections">
                    <img src={home} alt="home"></img>
                    <div className="box-text">
                        <p>inicio</p>
                    </div>
                </div>

                <div className="container-panelsections">
                    <img src={note} alt="publications"></img>    
                    <div className="box-text">
                        <p>mis publicaciones</p>
                    </div>
                </div>

                <div className="container-panelsections">       
                    <img src={save} alt="save"></img>           
                    <div className="box-text">
                        <p>guardados</p>
                    </div>
                </div>
                
                <div className="container-panelsections">      
                    <img src={reward} alt="reward"></img>             
                    <div className="box-text">
                        <p>reconocimientos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeSense_Panel
