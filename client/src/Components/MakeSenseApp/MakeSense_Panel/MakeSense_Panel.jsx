import React from 'react'
import './MakeSense_Panel.scss'
import home from "./assets/home.png";
import note from "./assets/note.png";
import save from "./assets/save.png";
import reward from "./assets/reward.png";
import { AiOutlineHome } from 'react-icons/ai'
import { IoDocumentOutline } from 'react-icons/io5'
import { VscBookmark } from 'react-icons/vsc'
import { RiAwardFill } from 'react-icons/ri'

function MakeSense_Panel() {

    /* function clickHandlerHome(){
        const targetDiv = document.querySelector(".homePanel")
        const boxtext = document.querySelector(".homePanel .box-text")
        const panelIcon = document.querySelector("homePanel .panelIcon")
   
        if(targetDiv.classList.contains("calypsoBackground")){
            targetDiv.classList.remove('calypsoBackground')
            boxtext.classList.remove('colorWhite')
            panelIcon.classList.remove('colorWhite')
        }else{
            targetDiv.classList.add('calypsoBackground')
            boxtext.classList.add('colorWhite')
            panelIcon.classList.add('colorWhite')
        }
    }

    function clickHandlerDocument() {
        const targetDiv = document.querySelector(".documentPanel")
        const boxtext = document.querySelector(".documentPanel .box-text")
        const panelIcon = document.querySelector("documentPanel .panelIcon")
   
        if(targetDiv.classList.contains("calypsoBackground")){
            targetDiv.classList.remove('calypsoBackground')
            boxtext.classList.remove('colorWhite')
            panelIcon.classList.remove('colorWhite')
        }else{
            targetDiv.classList.add('calypsoBackground')
            boxtext.classList.add('colorWhite')
            panelIcon.classList.add('colorWhite')
        }
    }

    function clickHandlerBookmark() {
        const targetDiv = document.querySelector(".bookmarkPanel")
        const boxtext = document.querySelector(".bookmarkPanel .box-text")
        const panelIcon = document.querySelector("bookmarkPanel .panelIcon")
   
        if(targetDiv.classList.contains("calypsoBackground")){
            targetDiv.classList.remove('calypsoBackground')
            boxtext.classList.remove('colorWhite')
            panelIcon.classList.remove('colorWhite')
        }else{
            targetDiv.classList.add('calypsoBackground')
            boxtext.classList.add('colorWhite')
            panelIcon.classList.add('colorWhite')
        }
    }

    function clickHandlerAward() {
        const targetDiv = document.querySelector(".awardPanel")
        const boxtext = document.querySelector(".awardPanel .box-text")
        const panelIcon = document.querySelector("awardPanel .panelIcon")
   
        if(targetDiv.classList.contains("calypsoBackground")){
            targetDiv.classList.remove('calypsoBackground')
            boxtext.classList.remove('colorWhite')
            panelIcon.classList.remove('colorWhite')
        }else{
            targetDiv.classList.add('calypsoBackground')
            boxtext.classList.add('colorWhite')
            panelIcon.classList.add('colorWhite')
        }
    } */

    return (
        <div className="container-panel">
            <div className="panel">

                <div className="container-panelsections homePanel" /* onClick={clickHandlerHome} */>
                    <AiOutlineHome className="panelIcon"/>
                    <div className="box-text">
                        <p>inicio</p>
                    </div>
                </div>

                <div className="container-panelsections">
                    <IoDocumentOutline className="panelIcon documentPanel" /* onClick={clickHandlerDocument} *//>    
                    <div className="box-text">
                        <p>mis publicaciones</p>
                    </div>
                </div>

                <div className="container-panelsections bookmarkPanel" /* onClick={clickHandlerBookmark} */>         
                    <VscBookmark className="panelIcon"/>        
                    <div className="box-text">
                        <p>guardados</p>
                    </div>
                </div>
                
                <div className="container-panelsections awardPanel" /* onClick={clickHandlerAward} */> 
                    <RiAwardFill className="panelIcon"/>              
                    <div className="box-text">
                        <p>reconocimientos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeSense_Panel
