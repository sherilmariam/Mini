import React from 'react';
import './Exploreorder.css';
import { menu_list } from '../../Assets/assets';

const Exploreorder = (/*{category,setCategory}*/) => {
 
  return (
    <div className="exploreorder" id='exploreorder'>
      <h1>Quick Picks for You</h1>
      <p className='exploreorder-text'></p>
      <div className="exploreorder-list">
        {menu_list.map((item, index) => {
          return (
            <div /*onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}*/key={index} className="exploreorder-list-item">
              <img /*className={category===item.menu_name?"active":""}*/ src={item.menu_image} alt=""/>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploreorder;
