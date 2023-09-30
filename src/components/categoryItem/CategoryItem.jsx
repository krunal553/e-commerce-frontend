import React from 'react'
import './categoryItem.scss'

const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
      <image className='Image' src={item.img} />
      <div className='Info'>
        <h1 className='Title'>{item.title}</h1>
        <button className='Button'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem