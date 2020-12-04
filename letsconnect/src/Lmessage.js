import React from 'react'
import './Lmessage.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
function Lmessage() {
    return (
        <div className='lmessage'>

        {/* Sidebar*/}

        <Sidebar />

         {/*Chat*/}   

         <Chat/>

        </div>
    )
}

export default Lmessage
