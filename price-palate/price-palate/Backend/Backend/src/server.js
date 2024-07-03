const express = require('express');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurant.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', restaurantRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});