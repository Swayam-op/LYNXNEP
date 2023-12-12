import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const ImgSlider = (props) => {
  let settings={
      dots:true,
      infinite:true,
      speed:1500,
      slidersToShow:1,
      slidersToScroll:1,
      autoplay:true,
      autoplaySpeed:3000,
  };
  return (
    <>
    <Corousel {...settings}>
       <Wrap>
           <a href="/">
               <img src="/images/slider-badging.jpg" alt="" />
           </a>
       </Wrap>
       <Wrap>
           <a href="/">
               <img src="/images/slider-scale.jpg" alt="" />
           </a>
       </Wrap>
       <Wrap>
           <a href="/">
               <img src="/images/slider-scales.jpg" alt="" />
           </a>
       </Wrap>
       <Wrap>
           <a href="/">
               <img src="/images/slider-badag.jpg" alt="" />
           </a>
       </Wrap>
     
    </Corousel>
    </>
  )
}

const Corousel=styled(Slider)`
margin-top:0px;
&>button{
    opacity:0;
    height:100%;
    width:5vw;
    z-index:1;

    &:hover{
        opacity:1;
        transition:opacity 0.2s ease 0s;
    }
}

 ul li button{
     &:before {
         font-size:10px;
         color:rgb(150,158,171);
     }
 }

  li.slick-active button:before{
      color:white;
  }
  .slick-list{
      overflow:initial;
  }
  .slick-prev{
      left:-45px;
  }
  .slick-next{
      right:-45px;
  }
`;

const Wrap=styled.div`
border-radius:4px;
cursor:pointer;
position:relative;
a{
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    display:block;
    position:ralative;
    padding:0 4px;
    height:100%;
    img{
        width:100%;
        height:100%; 
    }
    &:hover{
        padding:0;
        // border:1px solid rgba(249,249,249,0.8);
        transform:scale(1.01);
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
        ;
    }
}
`

export default ImgSlider;