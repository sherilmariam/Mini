const Restaurant = require('../models/restaurant.model');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.getRestaurants();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRestaurantDishes = async (req, res) => {
  try {
    const restaurantName = req.params.name;
    const dishes = await Restaurant.getRestaurantDishes(restaurantName);
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantDishes
};
