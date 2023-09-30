import React from 'react'
import './productList.scss'
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";


const ProductList = () => {
  return (
    <div className='productList'>
      <Navbar />
      <Announcement />
      <h1 className='title'>Dresses</h1>
      <div className='filterContainer'>
        <div className='filter'>
          <span className='filterText'>Filter Products:</span>
          <select className='select'>
            <option className='option' disabled selected>
              Color
            </option>
            <option className='option'>White</option>
            <option className='option'>Black</option>
            <option className='option'>Red</option>
            <option className='option'>Blue</option>
            <option className='option'>Yellow</option>
            <option className='option'>Green</option>
          </select>
          <select className='select'>
            <option className='option' disabled selected>
              Size
            </option>
            <option className='option'>XS</option>
            <option className='option'>S</option>
            <option className='option'>M</option>
            <option className='option'>L</option>
            <option className='option'>XL</option>
          </select>
        </div>
        <div className='filter'>
          <span className='filterText'>Sort Products:</span>
          <select className='select'>
            <option className='option' selected>Newest</option>
            <option className='option'>Price (asc)</option>
            <option className='option'>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList