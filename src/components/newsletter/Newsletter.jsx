import React from 'react'
import './newsletter.scss'
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1 className='Title'>Newsletter</h1>
      <div className='Desc'>Get timely updates from your favorite products.</div>
      <div className='InputContainer'>
        <input className='Input' placeholder="Your email" />
        <buttom className='Button'>
          <SendIcon />
        </buttom>
      </div>
    </div>
  )
}

export default Newsletter