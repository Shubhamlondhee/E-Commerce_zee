import React from 'react';
import './news.css';

 const Newsletter = () => {
  return (
    <div className='newsletter'>
           <h1> Get Exclusive Offers On Your Email </h1>
           <p> Subscribe and Stay Updated </p>
           <div>
             <input type='email' placeholder='you Email'/>
             <button> Subscribe </button>
           </div>
    </div> 
      
  )
}

export default Newsletter;
