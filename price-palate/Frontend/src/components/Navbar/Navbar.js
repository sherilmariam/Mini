import React, { useContext, useState } from 'react'
import CSS from './Navbar.css'
import { assets } from '../../Assets/assets'
import { Link } from 'react-router-dom'
import Aboutcontent from '../Aboutcontent/Aboutcontent'
import Aboutus from '../../pages/About us/Aboutus'
import { storecontext } from '../../context/storecontext'


const Navbar = ({setShowLogin,setShowAbout}) => {
  <CSS/>
  const [menu,setMenu] = useState("menu");
  const [searchQuery, setSearchQuery] = useState('');//new code
  const [filteredFoodList, setFilteredFoodList] = useState([]);//new code
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);//new code
  const {food_list}= useContext (storecontext)
  const {restaurant_list} = useContext(storecontext)
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter food list based on search query
    const foodResults = food_list.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    // Filter restaurant list based on search query
    const restaurantResults = restaurant_list.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodList(foodResults);
    setFilteredRestaurantList(restaurantResults);
  };//new code



  return (
    <div className='navbar'>
     
     <Link to='/'><img src={assets.logo} alt="" className="logo"/></Link>
     <ul className="navbar-menu" >
       <Link to='/' onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
       <a href='/Aboutus' onClick={()=>{setMenu("About us")}} className={menu==="About us"?"active":""}>About us</a>
       <a href='/Order'  onClick={()=> setMenu("Order now")}className={menu==="Order now"?"active":""}>Order now</a>
       <a href='/Footer'  onClick={()=> setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
     </ul>
     <div className="navbarright">
       <div className="search-container">
        <img src={assets.search_icon} alt="" className="searchicon" />
          <input type="text" placeholder="Search Dishes Restaurants" className="searchbox"  value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
          </div>
        
          
  {searchQuery && (
    <>
      <div className='search-all'>
        <div className='search-results-container'>
           <div className="search-results">
      {filteredFoodList.map(food => (
        <div key={food._id} className="search-item">{food.name}</div>
      ))}
      {filteredRestaurantList.map(restaurant => (
        <div key={restaurant._id} className="search-item">{restaurant.name}</div>
      ))}
      </div>
      </div>
      </div>
    </>
  )}



      
        <div className="count">
        <img src={assets.basket_icon} alt="" className="basketicon" />
        <div className="dot"></div>
        </div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign In</button>
        </div>
        
        
  )
  
}
export default Navbar;