const pool = require('../config/db.config');

const getRestaurants = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM restaurants");
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

const getRestaurantDishes = async (restaurantName) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM restaurants WHERE restaurant_name = ?", [restaurantName]);
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

module.exports = {
  getRestaurants,
  getRestaurantDishes
};
