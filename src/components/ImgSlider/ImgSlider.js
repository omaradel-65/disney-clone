import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import "./ImgSlider.css"

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>       
        <img className="slider__textImage"  src="/images/slider-pantera.jpg" alt="" />
        <div className="slider__imgContainer">
                <img className="slider__img " src="/images/slider-pantera2.png" alt="" /> 
        </div>

  
        </a>
      </Wrap>

      <Wrap>
        <a>       
        <img className="slider__textImage"  src="/images/slider-avengers.png" alt="" />
        <div className="slider__imgContainer">
                <img className="slider__img " src="/images/slider-avengers2.png" alt="" /> 
        </div>

  
        </a>
      </Wrap>
      <Wrap>
        <a>       
        <img className="slider__textImage"  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28682B85A5D90C8639CA2438740F6DF1256540349A96761B28082E4D50EFBFFA/scale?width=1440&aspectRatio=3.91" alt="" />
        <div className="slider__imgContainer">
                <img className="slider__img " src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A48A0BD869191F88F25C46001A94B8146C43C0B8AA69220733A46444B49E80F/scale?width=1440&aspectRatio=3.91&format=jpeg" alt="" /> 
        </div>

  
        </a>
      </Wrap>
      <Wrap>
        <a>       
        <img className="slider__textImage"  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/816003FE6AD4DFC19E3CA024601A7179135744283C9571FFBE0AB05E5A3E25D7/scale?width=1440&amp;aspectRatio=3.91" alt="" />
        <div className="slider__imgContainer">
                <img className="slider__img " src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E814613F6B18A9FE66B65EB49F75310A725668027051A9F502497124CE06B4B/scale?width=1440&aspectRatio=3.91&format=jpeg" alt="" /> 
        </div>

  
        </a>
      </Wrap>
      <Wrap>
        <a>       
        <img className="slider__textImage"  src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72FF1160F04E32A65899BB07A3A6AC58A06783E9806D82D95966D3745DF4EC70/scale?width=1440&aspectRatio=3.91" alt="" />
        <div className="slider__imgContainer">
                <img className="slider__img " src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A38B478F4FFCBF16886C14872D13CB64EC615E97B380028FC51162EC61495800/scale?width=1440&aspectRatio=3.91&format=jpeg" alt="" /> 
        </div>

  
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
   


    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }


  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  position: relative;
  padding: 10px;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;
    margin-left: 50px


    .sssoo{
        position: absolute;
        top: 0px;
        z-index: 66

        
        }
        .slider__textImage{
          position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
         z-index: 1
          opacity: 0;
          transform: translateX(15px);
          transition: transform .4s cubic-bezier(.25,.46,.45,.94) .1s;
        }

        .slick-slide:not(.slick-cloned).slick-active .slider__textImage {
          opacity: 1;
          transform: translateX(0);
          transition: transform .4s cubic-bezier(.25,.46,.45,.94) .42s,opacity .95s cubic-bezier(.25,.46,.45,.94) .42s;
      }

        .slick-slide[aria-hidden=true] .slider__imgContainer:before {
          content: "";
          background: linear-gradient(#30323e,#1e1f2a) 0 0/cover;
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          opacity: .6;
          border-radius: 4px;
          z-index: 2;
      }

    img {
      width: 100%;
      height: 100%;
   
    }

  }
`;

export default ImgSlider;
