import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'



function Message({id,contents}) {
    return (
        <div className='message'>
            <Avatar/>
            <p>This is a message</p>
            <small>Time Stamp</small>
        </div>
    )
}

export default Message
