const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');

router.get('/restaurants', restaurantController.getAllRestaurants);
router.get('/restaurants/:name/dishes', restaurantController.getRestaurantDishes);

module.exports = router;
