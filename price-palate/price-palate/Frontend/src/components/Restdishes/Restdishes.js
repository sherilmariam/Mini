import React, { useContext } from 'react'
import './Restdishes.css'
import { assets } from '../../Assets/assets'
import { storecontext } from '../../context/storecontext'
const Restdishes = ({ id, name, price, description, image}) => {
  const{food_list}=useContext(storecontext)
     


  return (
    <div>
           <div className='rest-item-info'>
        <div className='rest-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='rest-item-description'>{description}</p>
        <p className='resy-item-price'>{price}</p>
    </div>






    </div>
  )
}

export default Restdishes