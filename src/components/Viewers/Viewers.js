import React from 'react'
import "./Viewers.css"
import ReactPlayer from 'react-player';
function Viewers() {
  return (
    <>
    
   <div className='MainDivView'>
      <div className='row'>
<div className='boooot col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2'>

    <div className='DivView'>
    <video  width="320" height="240" autoPlay="true" muted loop={true} playsInline={true}>
       <source src="\videos\1564674844-disney.mp4" type="video/mp4"/>
       </video>
       <img src="\images\viewers-disney.png" alt=""/> 
    </div>
</div> 

<div className='boooot col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
       <div className='DivView'>
       <img src="\images\viewers-pixar.png" alt=""/> 
       <video width="320" height="240" autoPlay muted loop  playsInline>
       <source src="\videos\1564676714-pixar.mp4" type="video/mp4"/>
       </video>
    </div>
</div>


<div className='boooot col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
      <div className='DivView'>
       <img src="\images\viewers-marvel.png" alt=""/> 
       <video width="320" height="240" autoPlay muted loop  playsInline>
       <source src="\videos\1564676115-marvel.mp4" type="video/mp4"/>
       </video>
    </div>
</div>

 
<div className='boooot col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
       <div className='DivView'>
       <img src="\images\viewers-starwars.png" alt=""/> 
       <video width="320" height="240" autoPlay muted loop  playsInline>
       <source src="\videos\1608229455-star-wars.mp4" type="video/mp4"/>
       </video>
    </div>
</div>


<div className='boooot col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
       <div className='DivView'>
       <img src="\images\viewers-national.png" alt=""/> 
       <video width="320" height="240" autoPlay muted loop  playsInline>
       <source src="\videos\1564676296-national-geographic.mp4" type="video/mp4"/>
       </video>
    </div>
</div>


    </div>
</div>
    </>
  )
}

export default Viewers
