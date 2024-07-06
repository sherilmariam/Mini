import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getFoodItems = async () => {
    try {
        const response = await axios.get(`${API_URL}fooditems/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        throw error;
    }
};
