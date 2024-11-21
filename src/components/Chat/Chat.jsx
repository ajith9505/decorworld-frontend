import React from 'react'
import { IoIosSend } from "react-icons/io";
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat-container'>
        <div className='text-center'>Messages</div>
        <div className='conversation' style={{height:'80%'}}>
            <div className='text-end bg-secondary' style={{
                height: '50px',
                width: '150px',
                borderRadius: '10px'
            }}>HI</div>
            <div className='text-end bg-primary' 
            style={{
                height: '50px',
                width: '150px',
                borderRadius: '10px',
                marginLeft: 'auto'
            }}>I'm fine</div>
        </div>
        <div style={{marginBottom:'auto', textAlign:'center'}}>
            <span>
            <input type="text" style={{
                borderRadius:'10px', 
                padding: '10px',
                color: 'rgba(0,0,0,0.7)',
                fontWeight: '500'
                }} placeholder='type message...'/>
            <IoIosSend style={{
                fontSize: '2rem',
                backgroundColor:'#fff',
                padding: '10px',
                fontWeight: '500'
            }} />
            </span>
        </div>
    </div>
  )
}

// export default Chat