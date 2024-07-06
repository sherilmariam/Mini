import React, { useState } from 'react'; // Import useState
import './Home.css';
import Header from '../../components/Header/Header';
import Exploreorder from '../../components/Exploreorder/Exploreorder';
import Fooddisplay from '../../components/fooddisplay/Fooddisplay';
import Fooditem from '../../components/Fooditem/Fooditem';
import Comparepopup from '../../components/Comparepopup/Comparepopup';
import Restaurant from '../../components/Restaurant/Restaurant';
import Aboutcontent from '../../components/Aboutcontent/Aboutcontent';
const Home = () => {
  const [category, setCategory] = useState("All");
  const [showAbout,setShowAbout] =useState(false);
  /*const [showCompare, setShowCompare] = useState(false)*/

  return (
    <div>
       {showAbout?<Aboutcontent setShowAbout={setShowAbout} />:<></>}
      <Header setShowAbout={setShowAbout} />
      <Exploreorder category={category} setCategory={setCategory} />
      <Fooddisplay category={category} /*setShowCompare={setShowCompare}*/  />
      <Restaurant category={category} />
    
    </div>
  );
};

export default Home;
