import React, {useState} from 'react'
import Footer from './components/Footer/Footer.js'
import Navbar from './components/Navbar/Navbar.js'
import Cssindex from './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Order from './pages/Order now/Order.js'
import About from './pages/About us/Aboutus.js'
import Comparepopup from './components/Comparepopup/Comparepopup.js'
import Fooddisplay from './components/fooddisplay/Fooddisplay.js'
import Loginpopup from './components/Loginpopup/Loginpopup.js'
import Aboutus from './pages/About us/Aboutus.js'
import Aboutcontent from './components/Aboutcontent/Aboutcontent.js'
import Restdishes from './components/Restdishes/Restdishes.js'
import Dishes from './pages/Dishes/Dishes.js'
import Orderdishes from './components/Orderdishes/Orderdishes.js'
const App = () => {
  <Cssindex />
   const [showLogin,setShowLogin] =useState(false);
   const [showAbout,setShowAbout] =useState(false);
  return(
    <>
   {showAbout?<Aboutcontent setShowAbout={setShowAbout} />:<></>}
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
     <div classname='app'>
    
    <Navbar setShowLogin={setShowLogin} setShowAbout={setShowAbout}/>
     
    <Routes>
     <Route path='/' element={<Home  />} />
     <Route path='/Order' element={<Order />} />
     <Route path='/Aboutus' element={<Aboutus setShowAbout={setShowAbout} />} />
     <Route path='/restaurant/:name' element={<Orderdishes />} /> {/* Add the new route */}
    </Routes>
   </div>
   <Footer/>
    
    </>
   
  );
}
export default App;