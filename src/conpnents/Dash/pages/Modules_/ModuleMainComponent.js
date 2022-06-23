import React from 'react'
import { Outlet } from 'react-router-dom'

const ModuleMainComponent = () => {
    return (
        <>
            <div >ModuleMainComponent</div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default ModuleMainComponent