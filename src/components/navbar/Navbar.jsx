import React from 'react'
import './navbar.scss'
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='Wrapper'>
        <div className='Left'>
          <span className='Language'>EN</span>
          <div className='SearchContainer'>
            <input className='Input' placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className='Center'>
          <h1 className='Logo'>Krunal.</h1>
        </div>
        <div className='Right'>
          <div className='MenuItem'>REGISTER</div>
          <div className='MenuItem'>SIGN IN</div>
          <div className='MenuItem'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar