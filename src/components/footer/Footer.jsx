import React from 'react'
import './footer.scss'

// import {
//   Facebook,
//   Instagram,
//   MailOutline,
//   Phone,
//   Pinterest,
//   Room,
//   Twitter,
// } from "@material-ui/icons";

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import PinterestIcon from '@mui/icons-material/Pinterest'
import RoomIcon from '@mui/icons-material/Room'
import TwitterIcon from '@mui/icons-material/Twitter'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Left'>
        <h1 className='Logo'>Krunal.</h1>
        <p className='Desc'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className='SocialContainer'>
          <div className='SocialIcon' color="3B5999">
            <FacebookIcon />
          </div>
          <div className='SocialIcon'  color="E4405F">
            <InstagramIcon />
          </div>
          <div className='SocialIcon'  color="55ACEE">
            <TwitterIcon />
          </div>
          <div className='SocialIcon'  color="E60023">
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className='Center'>
        <h3 className='Title'>Useful Links</h3>
        <ul className='List'>
          <li className='ListItem'>Home</li>
          <li className='ListItem'>Cart</li>
          <li className='ListItem'>Man Fashion</li>
          <li className='ListItem'>Woman Fashion</li>
          <li className='ListItem'>Accessories</li>
          <li className='ListItem'>My Account</li>
          <li className='ListItem'>Order Tracking</li>
          <li className='ListItem'>Wishlist</li>
          <li className='ListItem'>Wishlist</li>
          <li className='ListItem'>Terms</li>
        </ul>
      </div>
      <div className='Right'>
        <h3 className='Title'>Contact</h3>
        <div className='ContactItem'>
          <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className='ContactItem'>
          <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </div>
        <div className='ContactItem'>
          <MailOutlineIcon style={{marginRight:"10px"}} /> contact@lama.dev
        </div>
        <img className='Payment' src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    
    </div>
  )
}

export default Footer