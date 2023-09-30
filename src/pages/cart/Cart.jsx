import React from 'react'
import './cart.scss'
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import { Add, Remove } from "@material-ui/icons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Cart = () => {
  return (
    <div className='cart'>
      <Navbar />
      <Announcement />
      <div className='wrapper'>
        <div className='title'>YOUR BAG</div>
        <div className='top'>
          <div className='topButton'>CONTINUE SHOPPING</div>
          <div className='topTexts'>
            <div className='topText'>Shopping Bag(2)</div>
            <div className='topText'>Your Wishlist (0)</div>
          </div>
          <div className='topButton' type="filled">CHECKOUT NOW</div>
        </div>
        <div className='bottom'>
          <div className='info'>
            <div className='product'>
              <div className='productDetail'>
                <image className='image' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className='details'>
                  <div className='productName'>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </div>
                  <div className='productId'>
                    <b>ID:</b> 93813718293
                  </div>
                  <div className='productColor' color="black" />
                  <div className='productSize'>
                    <b>Size:</b> 37.5
                  </div>
                </div>
              </div>
              <div className='priceDetail'>
                <div className='productAmountContainer'>
                  <div className='add' />
                  <div className='productAmount'>2</div>
                  <div className='remove' />
                </div>
                <div className='productPrice'>$ 30</div>
              </div>
            </div>
            <hr className='hr' />
            <div className='product'>
              <div className='productDetail'>
                <image className='image' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className='details'>
                  <div className='productName'>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </div>
                  <div className='productId'>
                    <b>ID:</b> 93813718293
                  </div>
                  <div className='productColor' color="black" />
                  <div className='productSize'>
                    <b>Size:</b> 37.5
                  </div>
                </div>
              </div>
              <div className='priceDetail'>
                <div className='productAmountContainer'>
                  <AddIcon />
                  <div className='productAmount'>2</div>
                  <RemoveIcon />
                </div>
                <div className='productPrice'>$ 30</div>
              </div>
            </div>
          </div>
          <div className='summary'>
            <div className='summaryTitle'>ORDER SUMMARY</div>
            <div className='summaryItem'>
              <div className='summaryItemText'>Subtotal</div>
              <div className='summaryItemPrice'>$ 80</div>
            </div>
            <div className='summaryItem'>
              <div className='summaryItemText'>Estimated Shipping</div>
              <div className='summaryItemPrice'>$ 5.89</div>
            </div>
            <div className='summaryItem'>
              <div className='summaryItemText'>Shipping Discount</div>
              <div className='summaryItemPrice'>$ -5.90</div>
            </div>
            <div className='summaryItem' type='total'>
              <div className='summaryItemText'>Total</div>
              <div className='summaryItemPrice'>$ 80</div>
            </div>
            
            <button className='button'>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart