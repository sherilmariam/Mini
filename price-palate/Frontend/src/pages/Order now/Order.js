import React, { useState, useContext } from 'react';
import './Order.css';
import { useNavigate } from 'react-router-dom';
import { storecontext } from '../../context/storecontext';
import Restnames from '../../components/Restnames/Restnames';


const Order = () => {
  const { food_list, restaurant_list } = useContext(storecontext);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();

 {/*} const handleRestaurantClick = (restaurantId) => {
    const selected = restaurant_list.find(restaurant => restaurant._id === restaurantId);
    setSelectedRestaurant(selected);
  };

  const handleClose = () => {
    setSelectedRestaurant(null);
  }; */}

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`); // Navigate to the restaurant details page
  };

  return (
    <div className='order-display'>
      <h2>Choose your Favourite Restaurant</h2>
      <div className='order-display-list'>
        {restaurant_list.map((item, index) => (
          <Restnames
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            onClick={() => handleRestaurantClick(item.name)} // Pass the click handler function
          />
        ))}
      </div>
     {/*}  {selectedRestaurant && (
        <div className="restaurant-details">
          <h3>{selectedRestaurant.name}</h3>
          <button onClick={handleClose}>Close</button>
          <div className="food-items">
            {food_list.map((dish, index) => (
              <Restdishes
                key={index}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Order;
