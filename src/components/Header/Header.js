import React from 'react'
import styled from "styled-components";
import "./Header.css";
function Header() {
  return (
 <nav className='Nav navbar navbar-expand-lg'>
  <div class="container-fluid">
    <img className='Logo navbar-brand' src="images\logo.svg"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<div className='divNav collapse navbar-collapse' id="navbarNav">
<div class="navbar-nav">
<ul className='navbar-nav'>
   <li className='nav-item' >
    <a className='nav-link' aria-current="page">
<img src="/images/home-icon.svg" alt=""/>
    <span>
      HOME
    </span>
</a>

  </li>
  <li className='nav-item'>
    <a className='nav-link'>
<img src="/images/search-icon.svg" alt=""/>
   <span>
      SEARCH
    </span>
</a>
 
  </li>
  <li className='nav-item'>
    <a className='nav-link'>
<img src="/images/watchlist-icon.svg" alt=""/>
    <span>
      WATCHLIST
    </span>
</a>

  </li>
  <li className='nav-item'>
    <a className='nav-link'>
<img src="/images/original-icon.svg" alt=""/>
    <span>
      ORIGINAL
    </span>
</a>

  </li>
  <li className='nav-item'>
    <a className='nav-link'>
<img src="/images/movie-icon.svg" alt=""/>
    <span>
      MOVIES
    </span>
</a>

  </li>
  <li className='nav-item'>
    <a className='nav-link'>
<img src="/images/series-icon.svg" alt=""/>
    <span>
      SERIES
    </span>
</a>

  </li>
</ul>
  
</div>

 


</div>
<div className='UserImg'>
<img src="/images/unnamed.jpg"/>
</div>
  </div>

 </nav>
  )
}

export default Header

