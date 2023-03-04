import React from 'react'
import "./Home.css"
import ImgSlider from '../ImgSlider/ImgSlider';
import Viewers from '../Viewers/Viewers';
import Movies from '../Movies/Movies';

function Home() {
  return (
    <div className='backGroundBody'>
<ImgSlider/>
<br/>
<br/>
<div className='divcontainer'>
  <Viewers/>
  <br/>
  <br/>
  <br/>
</div>
<Movies/>

    </div>
  )
}

export default Home