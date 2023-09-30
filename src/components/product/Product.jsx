import React from 'react'
import './product.scss'
// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Product = ({item}) => {
  return (
    <div className='product'>
      <div className='Circle' />
      <img className='Image' src={item.img} />
      <div className='Info'>
        <div className='Icon'>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className='Icon'>
          <SearchOutlinedIcon />
        </div>
        <div className='Icon'>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Product