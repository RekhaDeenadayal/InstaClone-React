import React from 'react';
import { Link } from 'react-router-dom';
import lens from "./images/lens-1418954.png"

export default function Landing_page() {
  return <div className='main-container'>
    <div>
      <img className='img-landing' src={lens} />
    </div>
    <div className='side-container'>
      <h2 >10x Team 04</h2>
      <Link to="/PostView"><button>Enter</button></Link>
    </div>
  </div>
}
 