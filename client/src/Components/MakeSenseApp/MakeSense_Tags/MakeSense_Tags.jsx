/* import React, { useState } from 'react' */
import './MakeSense_Tags.scss'
import tag from"./assets/tag.png";
import arrow2 from"./assets/arrow2.png";

function MakeSense_Tags() {

    /* const [dropDown, setDropDown] = useState(false) */

    function clickHandler(){
        const tagDropdown = document.querySelector('.container-tagoptions')
        
        if(tagDropdown.classList.contains('inactiveTags')){
            tagDropdown.classList.remove('inactiveTags')
            tagDropdown.classList.add('activeTags')
        }else{
            tagDropdown.classList.remove('activeTags')
            tagDropdown.classList.add('inactiveTags')
        }
    }

    return (
        <div>
            {/* Tag section */}
            <div className="container-tagsection" onClick={clickHandler}>
                <div className="tags-container">
                    <div className="tags">
                        <img src={tag} alt="tag"></img>
                        <div className="text-tag">
                            <p>etiquetas</p>
                        </div>
                    </div>

                    <img src={arrow2} alt="arrowtag"></img>
                </div>

                <div className="tagContainer-forAbsolutePosition">
                    <div className="container-tagoptions inactiveTags">
                        <form className="tagoptions">
                            <input type="checkbox" id="opt1" value="first_checkbox"></input>
                            <label for="opt1">todas</label><br></br>
        
                            <input type="checkbox" id="opt2" value="second_checkbox"></input>
                            <label for="opt2">tejido social</label><br></br>
                            
                            <input type="checkbox" id="opt3" value="third_checkbox"></input>
                            <label for="opt3">acción climatica</label><br></br>
                            
                            <input type="checkbox" id="opt4" value="sixth_checkbox"></input> 
                            <label for="opt4">transformación social</label><br></br>
                            
                            <input type="checkbox" id="opt5" value="fourth_checkbox"></input> 
                            <label for="opt5">comunidad e innovación</label><br></br>
                            
                            <input type="checkbox" id="opt6" value="fifth_checkbox"></input> 
                            <label for="opt6">reducción de desigualdades</label><br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeSense_Tags
