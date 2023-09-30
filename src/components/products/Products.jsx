import React from 'react'
import './products.scss'
import { popularProducts } from "../../data";
import Product from '../product/Product'

const Products = () => {
  return (
    <div className='products'>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products