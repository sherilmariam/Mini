import React,{useState} from 'react'
import './Restaurantlist.css'
import { assets } from '../../Assets/assets';
import Comparepopup from '../Comparepopup/Comparepopup';
import { storecontext } from '../../context/storecontext';
const Restaurantlist = ({ id, name, price, description, image}) => {
    const[itemCount,setItemCount] = useState(0);
    const [showCompare,setShowCompare] = useState(false);
  return (
    <div className='rest-item'>
    <div className='rest-item-img-container'>
        <img className='rest-item-image' src={image} alt="" />
        {!itemCount?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
        :<div className='rest-item-counter'>
          <img onClick={()=>{setItemCount(prev=>prev-1);setShowCompare(false);}}src={assets.remove_icon_red} alt="" />
          <p>{itemCount}</p>
          <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}  alt="" />
            
            <button onClick ={()=> setShowCompare(true)}>
            Compare               
            </button> 
            {showCompare && <Comparepopup />}
            </div>
        }

        
    </div>
    <div className='rest-item-info'>
        <div className='rest-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='rest-item-description'>{description}</p>
        <p className='resy-item-price'>{price}</p>
    </div>
</div>
  );
}

export default Restaurantlist;