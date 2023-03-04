import React from 'react'
import "./Details.css"
function Details() {
  return (
    <div>
      <div className='bodyBgK'>
        <img src="https://hdqwalls.com/wallpapers/the-lion-king-2019-4k-8q.jpg" alt=""/>
      </div>
      <div className='MianDetDiv'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/The_Lion_King_2019_logo.png" alt=""/>
      <div className='buttonDiv'>
        <button className='PlayButton' type=""><i class="fa-solid fa-play"></i>play</button>      
        <button className='TrailerButton' type=""><i class="fa-solid fa-play"></i>trailer</button> 
       <div className='iconDetDiv'>
       <i class="fa-solid fa-circle-plus"></i>
        <i class="fa-solid fa-circle-user"></i> 
       </div>
        </div>
        <div className='paraDetDiv'>
<h4>2019 ‧ Family/Adventure ‧ 1h 58m</h4>
<p>Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.</p>
</div>
      </div>
    </div>
  )
}

export default Details
