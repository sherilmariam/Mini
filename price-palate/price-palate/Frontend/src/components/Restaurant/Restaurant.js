import React, { useContext } from 'react';
import './Restaurant.css';
import { storecontext } from '../../context/storecontext';
import Restaurantlist from '../RestaurantList/Restaurantlist';
import { assets } from '../../Assets/assets';
const Restaurant = ({ category }) => {
    const { restaurant_list } = useContext(storecontext)
    const firstThreeRestaurants = restaurant_list.slice(0, 5);
    return (
        <div className='restdisplay'>
            <h2>Restaurants near You</h2>
            <div className='rest-display-list'>
                {firstThreeRestaurants.map((item, index) => (
                    <Restaurantlist
                        key={index}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Restaurant;
