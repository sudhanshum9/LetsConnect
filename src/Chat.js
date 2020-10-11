import MicNoneIcon from '@material-ui/icons/MicNone'

import React,{useState} from 'react'
import {IconButton } from "@material-ui/core";
import Message from './Message'
import './Chat.css'
function Chat() {
    const [input,setInput]=useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        setInput('');
    };




    return (
        <div className='chat'> 
        {/* Chat header */}
        <div className='chat_header'>
            <h4>To : <span className='chat_name'>Channel Name</span></h4>
            <strong>Details</strong>
        </div>



        {/* Chat messages */}
        <div className='chat_messages'>
            <Message />
            <Message />
            <Message />
            <Message />
        </div>

        {/* Chat input */}
        <div className='chat_input'>
            <form>
                <input
                    value = {input}
                    onChange = {(e)=> setInput(e.target.value)}
                    placeholder='messages'
                    type='text' 
                />
                <button onClick={sendMessage} >Send Message</button>
            
            </form>

            <IconButton>
                <MicNoneIcon className = 'chat_mic' />
            </IconButton>
        </div>



        {/* Chat header */}
        </div>
    )
}

export default Chat
