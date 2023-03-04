import React from 'react'
import "./Details.css"
function Details2() {
  return (
    <div>
      <div className='bodyBgK'>
        <img src="\images\wallpapersden.com_black-widow-hd-movie-poster-2021_1920x1080.jpg" alt=""/>
      </div>
      <div className='MianDetDiv'>
        <img src="\images\black_widow_logo_by_lyriumrogue_dee2fih-fullview.png" alt=""/>
      <div className='buttonDiv'>
        <button className='PlayButton' type=""><i class="fa-solid fa-play"></i>play</button>      
        <button className='TrailerButton' type=""><i class="fa-solid fa-play"></i>trailer</button> 
       <div className='iconDetDiv'>
       <i class="fa-solid fa-circle-plus"></i>
        <i class="fa-solid fa-circle-user"></i> 
       </div>
        </div>
        <div className='paraDetDiv'>
<h4>2021 ‧ Action/Sci-fi ‧ 2h 13m</h4>
<p>Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past.</p>
</div>
      </div>
    </div>
  )
}

export default Details2
