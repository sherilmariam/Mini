import React, { useContext } from 'react';
import './Orderdishes.css';
import { useParams, useNavigate } from 'react-router-dom';
import { storecontext } from '../../context/storecontext';
import Restdishes from '../../components/Restdishes/Restdishes';

const Orderdishes = () => {
  const { food_list, restaurant_list } = useContext(storecontext)
  const { name} = useParams();
  const navigate = useNavigate();

  const selectedRestaurant = restaurant_list.find(restaurant => restaurant.name === name);

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (!selectedRestaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
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
  );
};

export default Orderdishes;
