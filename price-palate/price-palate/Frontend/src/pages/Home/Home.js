import React, { useEffect, useState } from 'react';
import { getFoodItems } from '../../services/api';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFoodItems();
                setFoodItems(data);
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Food Items</h1>
            <ul>
                {foodItems.map(item => (
                    <li key={item.id}>{item.name} - ₹{item.price} - {item.delivery_time} mins</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
