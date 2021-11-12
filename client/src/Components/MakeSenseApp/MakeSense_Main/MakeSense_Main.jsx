import React from 'react'
import MakeSense_Panel from '../MakeSense_Panel/MakeSense_Panel'
import MakeSense_Publication from '../MakeSense_Publication/MakeSense_Publication'
import MakeSense_Tags from '../MakeSense_Tags/MakeSense_Tags'
import './MakeSense_Main.scss'

function MakeSense_Main() {
    return (
        <div className="App_Main_container">
            <MakeSense_Panel />
            <MakeSense_Tags />
            <MakeSense_Publication />
        </div>
    )
}

export default MakeSense_Main