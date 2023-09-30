import React from 'react'
import './product.scss'
// import { Add, Remove } from "@material-ui/icons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

const Product = () => {
  return (
    <div className='product'>
      <div className='navbar'/>
      <div className='announcement'/>
      <div className='wrapper'>
        <div className='imgContainer'>
          <image className='image' src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div className='infoContainer'>
          <h1 className='title'>Denim Jumpsuit</h1>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className='price'>$ 20</span>
          <div className='filterContainer'>
            <div className='filter'>
              <span className='filterTitle'>Color</span>
              <div className='filterColor' color="black" />
              <div className='filterColor' color="darkblue" />
              <div className='filterColor' color="gray" />
            </div>
            <div className='filter'>
              <div className='filterTitle'>Size</div>
              <select className='filterSize'>
                <option className='FilterSizeOption'>XS</option>
                <option className='FilterSizeOption'>S</option>
                <option className='FilterSizeOption'>M</option>
                <option className='FilterSizeOption'>L</option>
                <option className='FilterSizeOption'>XL</option>
              </select>
            </div>
          </div>
          <div className='addContainer'>
            <div className='amountContainer'>
              <RemoveIcon />
              <span className='amount'>1</span>
              <AddIcon />
            </div>
            <button className='button'>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product