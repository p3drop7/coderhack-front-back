import React from 'react'
import { Outlet } from 'react-router-dom'
import MakeSense_Nav from './MakeSense_Nav/MakeSense_Nav'
import './MakeSenseApp.scss'

function MakeSenseAppContainer() {

    return (
        <div className="mkapp_body">
            <MakeSense_Nav />
            <Outlet />
        </div>
    )
}

export default MakeSenseAppContainer