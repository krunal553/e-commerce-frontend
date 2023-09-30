import React from 'react'
import './slider.scss'
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className='slider'>
      <div className='Arrow' direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </div>
      <div className='Wrapper' slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div className='Slide' bg={item.bg} key={item.id}>
            <div className='ImgContainer'>
              <img className='Image' src={item.img} />
            </div>
            <div className='InfoContainer'>
              <h1 className='Title'>{item.title}</h1>
              <p className='Desc'>{item.desc}</p>
              <button className='Button'>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className='Arrow' direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  )
}

export default Slider