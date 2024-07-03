import React, {useContext} from 'react'
import './Fooddisplay.css'
import { storecontext } from '../../context/storecontext'
import Fooditem from '../Fooditem/Fooditem'
import Comparepopup from '../Comparepopup/Comparepopup'
const Fooddisplay = ({category}) => {
     
    const {food_list}= useContext (storecontext)
  return (
    

    <div className='food-display' id='food-display'>
        <h2>Best Deals of the Day</h2>
        <div className='food-display-list'>
           { food_list.map((item,index)=> 
           (<Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} /*setShowCompare={setShowCompare}*/  />
           ))}

        </div>
          
        
        </div>
  )
}

export default Fooddisplay;