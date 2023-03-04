import styled from "styled-components";
import "./Movies.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import { BrowserRouter, Routes , Route ,Link} from 'react-router-dom'

const Movies = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "60px",
        variableWidth: "240px",
        slidesToShow: 4,
        speed: 500
  };
  return (
    <div>
    <h3 className="TopText">Continue Watching</h3>
    <Carousel {...settings}>
        <div>
        <Link to="/Details2">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">Black Widow</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">40 min left</span>
        </div>
        </div>       
            </div>
       <img src="\images\Black-Widow-Header.jpg" alt=""/> 
    </div>
    </Link>
        </div>
        <div>
        <Link to="/Details">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">The Lion King</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">60 min left</span>
        </div>
        </div>       
            </div>
             
       <img src="https://image.tmdb.org/t/p/w500//1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg" alt=""/> 

    </div>
    </Link>
        </div>
        <div>
        <Link to="/Details3">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">Avatar</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">10 min left</span>
        </div>
        </div>       
            </div>
       <img src="\images\3f235a7b.png" alt=""/> 
    </div>
    </Link>
        </div>
        <div>
        <Link to="/Details4">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">Doctor Strange</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">90 min left</span>
        </div>
        </div>       
            </div>
       <img src="\images\Doctor-Strange-2-Soundtrack-Features-Spoilery-Song-Titles.webp" alt=""/> 
    </div>
    </Link>
        </div>
        <div>
        <Link to="/Details5">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">Toy Story 4</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">80 min left</span>
        </div>
        </div>       
            </div>
       <img src="\images\Disney_MLP_GridItem_TS4_AUNZ.jpg" alt=""/> 
    </div>
    </Link>
        </div>
        <div>
        <Link to="/Details6">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">increibles</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">50 min left</span>
        </div>
        </div>       
            </div>
       <img src="https://i0.wp.com/centraldeheroes.com/wp-content/imagenes/2020/11/los-increibles-aniversario-central-de-heroes.jpg?fit=780%2C380&ssl=1" alt=""/> 
    </div>
    </Link>
        </div>
        <div>
        <Link to="/Details7">  
     <div className='DivMovies'>
     <div className="IconDiv">
             <div>
               <h3 className="Title">Raya</h3>
            </div>

        <div className="LowPart">
        <div className="icoons">
         <i class="fa-solid fa-circle-info"></i> 
         <i class="fa-solid fa-circle-play"></i>
        </div>
        <div>
        <span class="TimeLeft">40 min left</span>
        </div>
        </div>       
            </div>
       <img src="\images\original (5).jpeg" alt=""/> 
    </div>
    </Link>
        </div>
   
  </Carousel>

  <h3 className="TopText">Disney Movies</h3>
    <Carousel {...settings}>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//n3pJwYuPnkw7JX7tOMbH0GRfBPn.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
        
       <img src="https://image.tmdb.org/t/p/w500//pMmrsbp3T6X6l5Ja48C1PKede1m.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//jsgRkhPxYtzAhDFCUyNbvlX63tY.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//2ze42e0l0bPYEcJXInUukvNfZKk.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//d455zyZOL6OUIstwMBho534uUSG.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//D00lpEospyhTcwjnIYSW7VVtou.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//cWczNud8Y8i8ab0Z4bxos4myWYO.jpg" alt=""/> 
    </div>
        </div>
 
        
  </Carousel>
  <h3 className="TopText">Star Wars</h3>
    <Carousel {...settings}>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//pXnNSeyTCUebjpHTiZt7v6FZId0.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
        
       <img src="https://image.tmdb.org/t/p/w500//azRFRv6QQLlBIlmnSpLP2B76SGL.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//aDYSnJAK0BTVeE8osOy22Kz3SXY.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//epVMXf10WqFkONzKR8V76Ypj5Y3.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//soJdiy91Mcyj29GzEgZ5svFcuZg.jpg" alt=""/> 
    </div>
        </div>
 
        
  </Carousel>
  <h3 className="TopText">Pixar Movies</h3>
    <Carousel {...settings}>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
        
       <img src="https://image.tmdb.org/t/p/w500//hwwFyowfcbLRVmRBOkvnABBNIOs.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//vUTVUdfbsY4DePCYzxxDMXKp6v6.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//yzqaKAhglTrkeOfuIXYYArf0WnA.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//se5Hxz7PArQZOG3Nx2bpfOhLhtV.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//sd4xN5xi8tKRPrJOWwNiZEile7f.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg" alt=""/> 
    </div>
        </div>
 
        
  </Carousel>

  <h3 className="TopText">Action and Adventures</h3>
    <Carousel {...settings}>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//14QbnygCuTO0vl7CAFmPf1fgZfV.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
        
       <img src="https://image.tmdb.org/t/p/w500//c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//zxWAv1A34kdYslBi4ekMDtgIGUt.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//b6ZJZHUdMEFECvGiDpJjlfUWela.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//en971MEXui9diirXlogOrPKmsEn.jpg" alt=""/> 
    </div>
        </div>
 
        
  </Carousel>
  <h3 className="TopText">The Simpsons</h3>
    <Carousel {...settings}>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//hpU2cHC9tk90hswCFEpf5AtbqoL.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
        
       <img src="https://image.tmdb.org/t/p/w500//8ln5VUVk7gnNGIb2VNgw8nICDVt.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//bSteszE2HtIj7xwvE2dxkJ54FG2.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//kzzAiHmHlYXpTxO449CleYBGOGK.jpg" alt=""/> 
    </div>
        </div>
 

 
 
        
  </Carousel>
  <h3 className="TopText">Musicales</h3>
    <Carousel {...settings}>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//uWVkEo9PWHu9algZsiLPi6sRU64.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
        
       <img src="https://image.tmdb.org/t/p/w500//4LESGiXXBZjJUrQw4VEmb95eXOq.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//bXJzr8i3jiuqJAry3IRVQRd7kK0.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//mLWNrbDZwiNyjf9OB6pYZJ64fid.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//oXrjZse7QrnoVz3UF6nzPLXJLav.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//askg3SMvhqEl4OL52YuvdtY40Yb.jpg" alt=""/> 
    </div>
        </div>
        <div>
     <div className='DivMovies'>
       <img src="https://image.tmdb.org/t/p/w500//oGzToOBTRdXVOrHj8r0VgK3d2sU.jpg" alt=""/> 
    </div>
        </div>
 
  </Carousel>
  <div className="footer">
   <p>Website developed by omar adel - No commercial purporses intended, made only for showing web development techniques and to be included as a piece of portfolio. All copyrights are owned by Disney.
This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
   <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt=""/>
  </div>
  </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  margin-left: 25px;
  margin-bottom: 40px;
  overflow: initial;
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
  width: 240px;


  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;
    margin-left: 50px
    width: 320px;


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

export default Movies;
