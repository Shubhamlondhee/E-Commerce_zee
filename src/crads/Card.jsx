import React from 'react'
import '../e-com_pages/card.css';

 const Card = (props) => {
  return (
    <div className='cards'>
        <div className='card'>
            <img src={props.img} alt='pic' className='card__img'/>
            <div className='card__info'>
                <span className='card__category'> {props.name}</span>
                <h3 className='card__new'>{props.new_price}</h3>
                <h3 className='card__title'>{props.old_price}</h3>
            </div>
        </div>
      </div>  

    
  )
}


export default Card;
