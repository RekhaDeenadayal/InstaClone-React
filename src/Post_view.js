import React, { useState } from 'react';
import instaClone from './images/icon.png';
import camera from './images/camera.png'
import PostServices from './PostServices';
import { Link } from 'react-router-dom';

export default function Post_view() {


    return <>
        <div id="instaClone">
            <div className="header">
                <img className='left bg' src={instaClone} height="40px" width="40px" />
                <span className=' main-text'>Instaclone</span>
                <Link to="/PostForm"><img className="camera" src={camera} height="40px" width="40px"/></Link>
            </div>
            <PostServices/>    
        </div>
    </>
}
