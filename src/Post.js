import React from "react";
import love from './images/love.svg';
import send from './images/send.svg';

export default function Post({item}) {
    const d = new Date(item.date);
    return <div className="user-container">
        
        <span className='bold'>{item.name}</span>
        <span className='right bold options'>...</span>
        <p className='text'>{item.location}</p>
        <img src={item.postImage} height="180px" width="300px" />
        <img className='left' src={love} height="20px" width="20px" />
        <img className='left' src={send} height="20px" width="20px" />
        <span className='right'>{`${d.getDate()} ${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}` }</span>
        <h5 className='text'>{item.likes} likes</h5>
        <p className='bold'>{item.description}</p>
    </div>
}